<?php
/**
 * Plugin Name: NEXTGEN CinetPay Integration
 * Description: Mobile Money (Orange Money, MTN MoMo, Wave, etc.) pour l'Afrique francophone
 * Version: 1.0.0
 * Author: NEXTGEN Team
 *
 * Constantes à définir dans wp-config.php :
 *   NEXGEN_CINETPAY_API_KEY
 *   NEXGEN_CINETPAY_SITE_ID
 *   NEXGEN_CINETPAY_SECRET_KEY
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Vérifier que CinetPay est configuré
 */
function nexgen_cinetpay_is_configured() {
    return defined('NEXGEN_CINETPAY_API_KEY')
        && defined('NEXGEN_CINETPAY_SITE_ID')
        && !empty(NEXGEN_CINETPAY_API_KEY);
}

/**
 * Taux de conversion EUR -> XOF (approximatif, à mettre à jour)
 */
function nexgen_convert_eur_to_xof($amount_eur) {
    $rate = 655.957; // Taux fixe EUR/XOF (parité CFA)
    return (int) ceil($amount_eur * $rate);
}


// ============================================================
// CRÉER UN PAIEMENT CINETPAY
// ============================================================

/**
 * Créer une session de paiement CinetPay
 */
function nexgen_create_cinetpay_payment($user_id, $plan_slug, $notify_url, $return_url) {
    if (!nexgen_cinetpay_is_configured()) {
        return new WP_Error('cinetpay_not_available', 'CinetPay non configuré', ['status' => 500]);
    }

    $plan = nexgen_get_plan_config($plan_slug);
    if (!$plan) {
        return new WP_Error('invalid_plan', 'Plan invalide', ['status' => 400]);
    }

    $user = get_userdata($user_id);
    $transaction_id = 'NEXGEN_' . $user_id . '_' . time();
    $amount_xof = nexgen_convert_eur_to_xof($plan['price_eur']);

    $payload = [
        'apikey'          => NEXGEN_CINETPAY_API_KEY,
        'site_id'         => NEXGEN_CINETPAY_SITE_ID,
        'transaction_id'  => $transaction_id,
        'amount'          => $amount_xof,
        'currency'        => 'XOF',
        'description'     => 'NEXGEN Sport - ' . $plan['label'],
        'notify_url'      => $notify_url,
        'return_url'      => $return_url,
        'channels'        => 'ALL',
        'customer_name'   => $user->display_name,
        'customer_email'  => $user->user_email,
        'metadata'        => wp_json_encode([
            'wp_user_id' => $user_id,
            'plan_slug'  => $plan_slug,
        ]),
    ];

    $response = wp_remote_post('https://api-checkout.cinetpay.com/v2/payment', [
        'body'    => wp_json_encode($payload),
        'headers' => ['Content-Type' => 'application/json'],
        'timeout' => 30,
    ]);

    if (is_wp_error($response)) {
        return new WP_Error('cinetpay_error', $response->get_error_message(), ['status' => 500]);
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);

    if (!isset($body['data']['payment_url'])) {
        $error_msg = isset($body['message']) ? $body['message'] : 'Erreur CinetPay inconnue';
        return new WP_Error('cinetpay_error', $error_msg, ['status' => 500]);
    }

    // Stocker la transaction en attente
    update_user_meta($user_id, '_nexgen_pending_transaction', $transaction_id);
    update_user_meta($user_id, '_nexgen_pending_plan', $plan_slug);

    return new WP_REST_Response([
        'checkout_url'   => $body['data']['payment_url'],
        'transaction_id' => $transaction_id,
    ], 200);
}


// ============================================================
// WEBHOOK HANDLER (IPN)
// ============================================================

/**
 * Gérer la notification de paiement CinetPay
 */
function nexgen_handle_cinetpay_webhook(WP_REST_Request $request) {
    if (!nexgen_cinetpay_is_configured()) {
        return new WP_Error('not_configured', 'CinetPay non configuré', ['status' => 500]);
    }

    $params = $request->get_json_params();
    if (empty($params)) {
        $params = $request->get_body_params();
    }

    $transaction_id = isset($params['cpm_trans_id']) ? sanitize_text_field($params['cpm_trans_id']) : '';

    if (empty($transaction_id)) {
        return new WP_Error('missing_transaction', 'Transaction ID manquant', ['status' => 400]);
    }

    // Vérifier le statut du paiement auprès de CinetPay
    $check_payload = [
        'apikey'         => NEXGEN_CINETPAY_API_KEY,
        'site_id'        => NEXGEN_CINETPAY_SITE_ID,
        'transaction_id' => $transaction_id,
    ];

    $check_response = wp_remote_post('https://api-checkout.cinetpay.com/v2/payment/check', [
        'body'    => wp_json_encode($check_payload),
        'headers' => ['Content-Type' => 'application/json'],
        'timeout' => 30,
    ]);

    if (is_wp_error($check_response)) {
        error_log('NEXGEN CinetPay check error: ' . $check_response->get_error_message());
        return new WP_Error('check_error', 'Erreur de vérification', ['status' => 500]);
    }

    $check_body = json_decode(wp_remote_retrieve_body($check_response), true);
    $status = isset($check_body['data']['status']) ? $check_body['data']['status'] : '';

    if ($status !== 'ACCEPTED') {
        error_log('NEXGEN CinetPay payment not accepted: ' . $transaction_id . ' - Status: ' . $status);
        return new WP_REST_Response(['received' => true, 'status' => $status], 200);
    }

    // Trouver l'utilisateur par transaction ID
    $users = get_users([
        'meta_key'   => '_nexgen_pending_transaction',
        'meta_value' => $transaction_id,
        'number'     => 1,
    ]);

    if (empty($users)) {
        error_log('NEXGEN CinetPay: user not found for transaction ' . $transaction_id);
        return new WP_Error('user_not_found', 'Utilisateur non trouvé', ['status' => 404]);
    }

    $user_id   = $users[0]->ID;
    $plan_slug = get_user_meta($user_id, '_nexgen_pending_plan', true);

    if (!$plan_slug) {
        error_log('NEXGEN CinetPay: plan not found for user ' . $user_id);
        return new WP_Error('plan_not_found', 'Plan non trouvé', ['status' => 404]);
    }

    // Activer l'abonnement
    update_user_meta($user_id, '_nexgen_plan', $plan_slug);
    update_user_meta($user_id, '_nexgen_subscription_status', 'active');
    update_user_meta($user_id, '_nexgen_payment_provider', 'cinetpay');
    update_user_meta($user_id, '_nexgen_current_period_end',
        date('Y-m-d H:i:s', strtotime('+30 days')));

    // Reset usage
    update_user_meta($user_id, '_nexgen_profile_views_count', 0);
    update_user_meta($user_id, '_nexgen_profile_views_reset', current_time('mysql'));

    // Nettoyer la transaction en attente
    delete_user_meta($user_id, '_nexgen_pending_transaction');
    delete_user_meta($user_id, '_nexgen_pending_plan');

    // Marquer l'essai comme utilisé si c'était un premier paiement
    update_user_meta($user_id, '_nexgen_trial_used', true);

    error_log('NEXGEN CinetPay: subscription activated for user ' . $user_id . ' - Plan: ' . $plan_slug);

    return new WP_REST_Response(['received' => true, 'activated' => true], 200);
}


// ============================================================
// WP-CRON : Rappel de renouvellement (CinetPay ne gère pas le récurrent)
// ============================================================

add_action('wp', function () {
    if (!wp_next_scheduled('nexgen_cinetpay_renewal_check')) {
        wp_schedule_event(time(), 'daily', 'nexgen_cinetpay_renewal_check');
    }
});

add_action('nexgen_cinetpay_renewal_check', function () {
    // Trouver les utilisateurs CinetPay dont l'abonnement expire dans 3 jours
    $users = get_users([
        'meta_key'   => '_nexgen_payment_provider',
        'meta_value' => 'cinetpay',
    ]);

    foreach ($users as $user) {
        $period_end = get_user_meta($user->ID, '_nexgen_current_period_end', true);
        if (!$period_end) continue;

        $days_left = (strtotime($period_end) - time()) / DAY_IN_SECONDS;

        // Rappel 3 jours avant
        if ($days_left > 0 && $days_left <= 3) {
            $reminded = get_user_meta($user->ID, '_nexgen_renewal_reminded', true);
            if (!$reminded) {
                // Envoyer un email de rappel
                $plan_slug = nexgen_get_user_plan($user->ID);
                $plan = nexgen_get_plan_config($plan_slug);
                $plan_label = $plan ? $plan['label'] : 'votre abonnement';

                wp_mail(
                    $user->user_email,
                    'NEXGEN Sport - Votre abonnement expire bientôt',
                    sprintf(
                        "Bonjour %s,\n\nVotre abonnement %s expire dans %d jour(s).\n\nPour continuer à profiter de toutes les fonctionnalités, renouvelez votre abonnement depuis votre espace personnel.\n\nL'équipe NEXGEN Sport",
                        $user->display_name,
                        $plan_label,
                        (int) ceil($days_left)
                    )
                );

                update_user_meta($user->ID, '_nexgen_renewal_reminded', true);
            }
        }

        // Expirer si la période est dépassée
        if ($days_left <= 0) {
            $status = nexgen_get_subscription_status($user->ID);
            if ($status === 'active') {
                update_user_meta($user->ID, '_nexgen_subscription_status', 'expired');
                update_user_meta($user->ID, '_nexgen_plan', 'free');
                delete_user_meta($user->ID, '_nexgen_renewal_reminded');
            }
        }
    }
});

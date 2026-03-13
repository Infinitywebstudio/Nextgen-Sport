<?php
/**
 * Plugin Name: NEXTGEN Stripe Integration
 * Description: Checkout, Customer Portal et Webhooks Stripe pour les abonnements
 * Version: 1.0.0
 * Author: NEXTGEN Team
 *
 * Requiert : stripe/stripe-php via Composer
 * Constantes à définir dans wp-config.php :
 *   NEXGEN_STRIPE_SECRET_KEY
 *   NEXGEN_STRIPE_PUBLISHABLE_KEY
 *   NEXGEN_STRIPE_WEBHOOK_SECRET
 */

if (!defined('ABSPATH')) {
    exit;
}

// Charger l'autoloader Composer si disponible
$composer_autoload = ABSPATH . 'vendor/autoload.php';
if (file_exists($composer_autoload)) {
    require_once $composer_autoload;
}

/**
 * Vérifier que Stripe est configuré
 */
function nexgen_stripe_is_configured() {
    return defined('NEXGEN_STRIPE_SECRET_KEY')
        && !empty(NEXGEN_STRIPE_SECRET_KEY)
        && class_exists('\Stripe\StripeClient');
}

/**
 * Obtenir une instance du client Stripe
 */
function nexgen_get_stripe_client() {
    if (!nexgen_stripe_is_configured()) {
        return null;
    }
    return new \Stripe\StripeClient(NEXGEN_STRIPE_SECRET_KEY);
}


// ============================================================
// CHECKOUT SESSION
// ============================================================

/**
 * Créer une session Stripe Checkout pour un abonnement
 */
function nexgen_create_stripe_checkout($user_id, $plan_slug, $success_url, $cancel_url) {
    $stripe = nexgen_get_stripe_client();
    if (!$stripe) {
        return new WP_Error('stripe_not_available', 'Stripe SDK non disponible', ['status' => 500]);
    }

    $plan = nexgen_get_plan_config($plan_slug);
    if (!$plan || empty($plan['stripe_price_id'])) {
        return new WP_Error('no_price', 'Aucun prix Stripe configuré pour ce plan', ['status' => 500]);
    }

    // Récupérer ou créer le Stripe Customer
    $customer_id = get_user_meta($user_id, '_nexgen_stripe_customer_id', true);
    if (!$customer_id) {
        $user = get_userdata($user_id);
        try {
            $customer = $stripe->customers->create([
                'email'    => $user->user_email,
                'name'     => $user->display_name,
                'metadata' => ['wp_user_id' => $user_id],
            ]);
            $customer_id = $customer->id;
            update_user_meta($user_id, '_nexgen_stripe_customer_id', $customer_id);
        } catch (\Exception $e) {
            return new WP_Error('stripe_error', $e->getMessage(), ['status' => 500]);
        }
    }

    // Préparer les paramètres de la session
    $session_params = [
        'customer'   => $customer_id,
        'mode'       => 'subscription',
        'line_items' => [[
            'price'    => $plan['stripe_price_id'],
            'quantity' => 1,
        ]],
        'success_url' => add_query_arg('session_id', '{CHECKOUT_SESSION_ID}', $success_url),
        'cancel_url'  => $cancel_url,
        'metadata'    => [
            'wp_user_id' => $user_id,
            'plan_slug'  => $plan_slug,
        ],
    ];

    // Ajouter l'essai gratuit si l'utilisateur n'en a pas déjà eu
    $trial_used = get_user_meta($user_id, '_nexgen_trial_used', true);
    if (!$trial_used) {
        $session_params['subscription_data'] = [
            'trial_period_days' => NEXGEN_TRIAL_DAYS,
            'metadata' => [
                'wp_user_id' => $user_id,
                'plan_slug'  => $plan_slug,
            ],
        ];
    }

    try {
        $session = $stripe->checkout->sessions->create($session_params);

        return new WP_REST_Response([
            'checkout_url' => $session->url,
            'session_id'   => $session->id,
        ], 200);

    } catch (\Exception $e) {
        return new WP_Error('stripe_checkout_error', $e->getMessage(), ['status' => 500]);
    }
}


// ============================================================
// CUSTOMER PORTAL
// ============================================================

/**
 * Créer une session du portail client Stripe
 */
function nexgen_create_stripe_portal($user_id, $return_url) {
    $stripe = nexgen_get_stripe_client();
    if (!$stripe) {
        return new WP_Error('stripe_not_available', 'Stripe SDK non disponible', ['status' => 500]);
    }

    $customer_id = get_user_meta($user_id, '_nexgen_stripe_customer_id', true);
    if (!$customer_id) {
        return new WP_Error('no_customer', 'Aucun compte Stripe associé', ['status' => 404]);
    }

    try {
        $session = $stripe->billingPortal->sessions->create([
            'customer'   => $customer_id,
            'return_url' => $return_url,
        ]);

        return new WP_REST_Response([
            'portal_url' => $session->url,
        ], 200);

    } catch (\Exception $e) {
        return new WP_Error('stripe_portal_error', $e->getMessage(), ['status' => 500]);
    }
}


// ============================================================
// CANCEL SUBSCRIPTION
// ============================================================

/**
 * Annuler un abonnement Stripe (à la fin de la période)
 */
function nexgen_cancel_stripe_subscription($user_id, $subscription_id) {
    $stripe = nexgen_get_stripe_client();
    if (!$stripe) {
        return new WP_Error('stripe_not_available', 'Stripe SDK non disponible', ['status' => 500]);
    }

    try {
        $subscription = $stripe->subscriptions->update($subscription_id, [
            'cancel_at_period_end' => true,
        ]);

        update_user_meta($user_id, '_nexgen_subscription_status', 'cancelled');

        return new WP_REST_Response([
            'success'            => true,
            'message'            => 'Abonnement annulé à la fin de la période',
            'current_period_end' => date('Y-m-d H:i:s', $subscription->current_period_end),
        ], 200);

    } catch (\Exception $e) {
        return new WP_Error('stripe_cancel_error', $e->getMessage(), ['status' => 500]);
    }
}


// ============================================================
// WEBHOOK HANDLER
// ============================================================

/**
 * Gérer les webhooks Stripe
 */
function nexgen_handle_stripe_webhook(WP_REST_Request $request) {
    if (!defined('NEXGEN_STRIPE_WEBHOOK_SECRET')) {
        return new WP_Error('not_configured', 'Webhook secret non configuré', ['status' => 500]);
    }

    $payload    = $request->get_body();
    $sig_header = isset($_SERVER['HTTP_STRIPE_SIGNATURE']) ? $_SERVER['HTTP_STRIPE_SIGNATURE'] : '';

    try {
        $event = \Stripe\Webhook::constructEvent(
            $payload,
            $sig_header,
            NEXGEN_STRIPE_WEBHOOK_SECRET
        );
    } catch (\Stripe\Exception\SignatureVerificationException $e) {
        return new WP_Error('invalid_signature', 'Signature invalide', ['status' => 400]);
    } catch (\Exception $e) {
        return new WP_Error('webhook_error', $e->getMessage(), ['status' => 400]);
    }

    switch ($event->type) {

        // ---- Checkout terminé ----
        case 'checkout.session.completed':
            $session = $event->data->object;
            $user_id   = isset($session->metadata->wp_user_id) ? (int) $session->metadata->wp_user_id : 0;
            $plan_slug = isset($session->metadata->plan_slug) ? $session->metadata->plan_slug : '';

            if (!$user_id || !$plan_slug) break;

            update_user_meta($user_id, '_nexgen_plan', $plan_slug);
            update_user_meta($user_id, '_nexgen_stripe_subscription_id', $session->subscription);
            update_user_meta($user_id, '_nexgen_payment_provider', 'stripe');

            // Récupérer les détails de l'abonnement
            $stripe = nexgen_get_stripe_client();
            if ($stripe && $session->subscription) {
                try {
                    $sub = $stripe->subscriptions->retrieve($session->subscription);

                    if ($sub->status === 'trialing') {
                        update_user_meta($user_id, '_nexgen_subscription_status', 'trialing');
                        update_user_meta($user_id, '_nexgen_trial_start', date('Y-m-d H:i:s', $sub->trial_start));
                        update_user_meta($user_id, '_nexgen_trial_end', date('Y-m-d H:i:s', $sub->trial_end));
                        update_user_meta($user_id, '_nexgen_trial_used', true);
                    } else {
                        update_user_meta($user_id, '_nexgen_subscription_status', 'active');
                    }

                    update_user_meta($user_id, '_nexgen_current_period_end',
                        date('Y-m-d H:i:s', $sub->current_period_end));

                } catch (\Exception $e) {
                    error_log('NEXGEN Stripe webhook error: ' . $e->getMessage());
                }
            }

            // Reset usage counters
            update_user_meta($user_id, '_nexgen_profile_views_count', 0);
            update_user_meta($user_id, '_nexgen_profile_views_reset', current_time('mysql'));

            // Declencher l'email d'activation de plan
            $activated_status = get_user_meta($user_id, '_nexgen_subscription_status', true);
            do_action('nextgen_plan_activated', $user_id, $plan_slug, $activated_status ?: 'active');
            break;

        // ---- Abonnement mis à jour (changement de plan) ----
        case 'customer.subscription.updated':
            $sub = $event->data->object;
            $user_id = nexgen_find_user_by_stripe_subscription($sub->id);

            if ($user_id) {
                update_user_meta($user_id, '_nexgen_current_period_end',
                    date('Y-m-d H:i:s', $sub->current_period_end));

                // Mettre à jour le statut
                $status_map = [
                    'active'   => 'active',
                    'trialing' => 'trialing',
                    'past_due' => 'past_due',
                    'canceled' => 'cancelled',
                    'unpaid'   => 'past_due',
                ];
                $new_status = isset($status_map[$sub->status]) ? $status_map[$sub->status] : 'active';
                update_user_meta($user_id, '_nexgen_subscription_status', $new_status);

                // Mettre à jour le plan si changé
                if (isset($sub->metadata->plan_slug)) {
                    update_user_meta($user_id, '_nexgen_plan', $sub->metadata->plan_slug);
                }
            }
            break;

        // ---- Abonnement supprimé ----
        case 'customer.subscription.deleted':
            $sub = $event->data->object;
            $user_id = nexgen_find_user_by_stripe_subscription($sub->id);

            if ($user_id) {
                update_user_meta($user_id, '_nexgen_subscription_status', 'expired');
                update_user_meta($user_id, '_nexgen_plan', 'free');
            }
            break;

        // ---- Paiement réussi ----
        case 'invoice.payment_succeeded':
            $invoice = $event->data->object;
            $user_id = nexgen_find_user_by_stripe_customer($invoice->customer);

            if ($user_id) {
                update_user_meta($user_id, '_nexgen_subscription_status', 'active');

                // Reset compteurs mensuels après renouvellement
                update_user_meta($user_id, '_nexgen_profile_views_count', 0);
                update_user_meta($user_id, '_nexgen_profile_views_reset', current_time('mysql'));
            }
            break;

        // ---- Paiement échoué ----
        case 'invoice.payment_failed':
            $invoice = $event->data->object;
            $user_id = nexgen_find_user_by_stripe_customer($invoice->customer);

            if ($user_id) {
                update_user_meta($user_id, '_nexgen_subscription_status', 'past_due');

                // Declencher l'email de paiement echoue
                do_action('nextgen_payment_failed', $user_id);
            }
            break;
    }

    return new WP_REST_Response(['received' => true], 200);
}


// ============================================================
// HELPER : Trouver un utilisateur par Stripe Subscription ID
// ============================================================

function nexgen_find_user_by_stripe_subscription($subscription_id) {
    $users = get_users([
        'meta_key'   => '_nexgen_stripe_subscription_id',
        'meta_value' => $subscription_id,
        'number'     => 1,
    ]);
    return !empty($users) ? $users[0]->ID : null;
}

function nexgen_find_user_by_stripe_customer($customer_id) {
    $users = get_users([
        'meta_key'   => '_nexgen_stripe_customer_id',
        'meta_value' => $customer_id,
        'number'     => 1,
    ]);
    return !empty($users) ? $users[0]->ID : null;
}

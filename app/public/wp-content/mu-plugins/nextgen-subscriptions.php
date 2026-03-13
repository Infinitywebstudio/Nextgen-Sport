<?php
/**
 * Plugin Name: NEXTGEN Subscriptions
 * Description: Gestion des abonnements, plans, essai gratuit et feature gating
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if (!defined('ABSPATH')) {
    exit;
}

// ============================================================
// 1. PLAN CONSTANTS
// ============================================================

define('NEXGEN_TRIAL_DAYS', 7);

define('NEXGEN_PLANS', [
    // ---------- Talent Plans ----------
    'talent_starter' => [
        'label'           => 'Starter',
        'role'            => 'nextgen_talent',
        'price_eur'       => 4.99,
        'stripe_price_id' => defined('NEXGEN_STRIPE_PRICE_TALENT_STARTER') ? NEXGEN_STRIPE_PRICE_TALENT_STARTER : '',
        'video_limit'     => 1,
        'photo_limit'     => -1, // illimité (basique)
        'badge'           => null,
        'visibility'      => 'standard',
        'search_priority' => false,
        'stats_access'    => false,
    ],
    'talent_ambition' => [
        'label'           => 'Ambition',
        'role'            => 'nextgen_talent',
        'price_eur'       => 9.99,
        'stripe_price_id' => defined('NEXGEN_STRIPE_PRICE_TALENT_AMBITION') ? NEXGEN_STRIPE_PRICE_TALENT_AMBITION : '',
        'video_limit'     => 5,
        'photo_limit'     => -1,
        'badge'           => 'ambition',
        'visibility'      => 'regional',
        'search_priority' => true,
        'stats_access'    => true,
    ],
    'talent_elite' => [
        'label'           => 'Élite',
        'role'            => 'nextgen_talent',
        'price_eur'       => 19.99,
        'stripe_price_id' => defined('NEXGEN_STRIPE_PRICE_TALENT_ELITE') ? NEXGEN_STRIPE_PRICE_TALENT_ELITE : '',
        'video_limit'     => -1, // illimité
        'photo_limit'     => -1,
        'badge'           => 'elite',
        'visibility'      => 'national',
        'search_priority' => true,
        'stats_access'    => true,
    ],
    // ---------- Recruteur Plans ----------
    'recruteur_selectif' => [
        'label'               => 'Accès Sélectif',
        'role'                => 'nextgen_client',
        'price_eur'           => 14.99,
        'stripe_price_id'     => defined('NEXGEN_STRIPE_PRICE_RECRUTEUR_SELECTIF') ? NEXGEN_STRIPE_PRICE_RECRUTEUR_SELECTIF : '',
        'profile_views_limit' => 20,
        'talent_tier_access'  => ['talent_starter', 'talent_ambition'],
        'advanced_search'     => false,
        'notifications'       => false,
        'pro_dashboard'       => false,
        'pre_access_24h'      => false,
    ],
    'recruteur_premium' => [
        'label'               => 'Accès Premium',
        'role'                => 'nextgen_client',
        'price_eur'           => 29.99,
        'stripe_price_id'     => defined('NEXGEN_STRIPE_PRICE_RECRUTEUR_PREMIUM') ? NEXGEN_STRIPE_PRICE_RECRUTEUR_PREMIUM : '',
        'profile_views_limit' => -1, // illimité
        'talent_tier_access'  => ['talent_starter', 'talent_ambition', 'talent_elite'],
        'advanced_search'     => true,
        'notifications'       => true,
        'pro_dashboard'       => false,
        'pre_access_24h'      => false,
    ],
    'recruteur_illimite' => [
        'label'               => 'Accès Illimité',
        'role'                => 'nextgen_client',
        'price_eur'           => 59.99,
        'stripe_price_id'     => defined('NEXGEN_STRIPE_PRICE_RECRUTEUR_ILLIMITE') ? NEXGEN_STRIPE_PRICE_RECRUTEUR_ILLIMITE : '',
        'profile_views_limit' => -1,
        'talent_tier_access'  => ['talent_starter', 'talent_ambition', 'talent_elite'],
        'advanced_search'     => true,
        'notifications'       => true,
        'pro_dashboard'       => true,
        'pre_access_24h'      => true,
    ],
]);


// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================

/**
 * Récupérer le plan d'un utilisateur
 */
function nexgen_get_user_plan($user_id) {
    return get_user_meta($user_id, '_nexgen_plan', true) ?: 'free';
}

/**
 * Récupérer la config d'un plan
 */
function nexgen_get_plan_config($plan_slug) {
    $plans = NEXGEN_PLANS;
    return isset($plans[$plan_slug]) ? $plans[$plan_slug] : null;
}

/**
 * Récupérer le statut d'abonnement
 */
function nexgen_get_subscription_status($user_id) {
    return get_user_meta($user_id, '_nexgen_subscription_status', true) ?: 'none';
}

/**
 * Vérifier si l'abonnement est actif (actif ou en essai)
 */
function nexgen_is_subscription_active($user_id) {
    $status = nexgen_get_subscription_status($user_id);
    return in_array($status, ['active', 'trialing']);
}

/**
 * Vérifier et expirer les essais
 */
function nexgen_check_trial_expiration($user_id) {
    $status = nexgen_get_subscription_status($user_id);
    if ($status !== 'trialing') return false;

    $trial_end = get_user_meta($user_id, '_nexgen_trial_end', true);
    if (!$trial_end) return false;

    if (strtotime($trial_end) < time()) {
        update_user_meta($user_id, '_nexgen_subscription_status', 'expired');
        update_user_meta($user_id, '_nexgen_plan', 'free');

        // Declencher l'email d'expiration d'essai
        do_action('nextgen_trial_expired', $user_id);

        return true; // trial expired
    }
    return false;
}

/**
 * Activer un essai gratuit
 */
function nexgen_activate_trial($user_id, $plan_slug) {
    // Vérifier que le plan existe
    $plan = nexgen_get_plan_config($plan_slug);
    if (!$plan) {
        return new WP_Error('invalid_plan', 'Plan invalide', ['status' => 400]);
    }

    // Vérifier que l'utilisateur a le bon rôle pour ce plan
    $user = get_userdata($user_id);
    if (!$user || !in_array($plan['role'], (array) $user->roles)) {
        return new WP_Error('role_mismatch', 'Ce plan ne correspond pas à votre type de compte', ['status' => 400]);
    }

    // Vérifier qu'il n'a pas déjà utilisé un essai
    $previous_trial = get_user_meta($user_id, '_nexgen_trial_used', true);
    if ($previous_trial) {
        return new WP_Error('trial_used', 'Vous avez déjà utilisé votre essai gratuit', ['status' => 400]);
    }

    $now = current_time('mysql');
    $trial_end = date('Y-m-d H:i:s', strtotime('+' . NEXGEN_TRIAL_DAYS . ' days'));

    update_user_meta($user_id, '_nexgen_plan', $plan_slug);
    update_user_meta($user_id, '_nexgen_subscription_status', 'trialing');
    update_user_meta($user_id, '_nexgen_trial_start', $now);
    update_user_meta($user_id, '_nexgen_trial_end', $trial_end);
    update_user_meta($user_id, '_nexgen_trial_used', true);
    update_user_meta($user_id, '_nexgen_trial_plan', $plan_slug);

    // Reset usage counters
    update_user_meta($user_id, '_nexgen_profile_views_count', 0);
    update_user_meta($user_id, '_nexgen_profile_views_reset', $now);

    // Declencher l'email d'activation de plan (essai)
    do_action('nextgen_plan_activated', $user_id, $plan_slug, 'trialing');

    return [
        'success'   => true,
        'plan'      => $plan_slug,
        'status'    => 'trialing',
        'trial_end' => $trial_end,
    ];
}

/**
 * Vérifier l'accès à une fonctionnalité
 */
function nexgen_check_feature_access($user_id, $feature, $context = []) {
    // Vérifier l'expiration du trial
    nexgen_check_trial_expiration($user_id);

    $plan_slug = nexgen_get_user_plan($user_id);
    $status = nexgen_get_subscription_status($user_id);

    // Vérifier que l'abonnement est actif
    if (!in_array($status, ['active', 'trialing'])) {
        return [
            'allowed' => false,
            'reason'  => 'no_active_subscription',
        ];
    }

    if ($plan_slug === 'free') {
        return [
            'allowed' => false,
            'reason'  => 'no_plan',
        ];
    }

    $plan = nexgen_get_plan_config($plan_slug);
    if (!$plan) {
        return [
            'allowed' => false,
            'reason'  => 'invalid_plan',
        ];
    }

    switch ($feature) {
        case 'view_talent_profile':
            $limit = isset($plan['profile_views_limit']) ? $plan['profile_views_limit'] : 0;
            if ($limit === -1) return ['allowed' => true, 'remaining' => null];

            // Reset mensuel
            nexgen_maybe_reset_monthly_usage($user_id);

            $used = (int) get_user_meta($user_id, '_nexgen_profile_views_count', true);
            $remaining = max(0, $limit - $used);
            return [
                'allowed'   => $used < $limit,
                'remaining' => $remaining,
                'reason'    => $used >= $limit ? 'profile_view_limit_reached' : null,
            ];

        case 'upload_video':
            $limit = isset($plan['video_limit']) ? $plan['video_limit'] : 0;
            if ($limit === -1) return ['allowed' => true, 'remaining' => null];

            $used = (int) get_user_meta($user_id, '_nexgen_video_count', true);
            $remaining = max(0, $limit - $used);
            return [
                'allowed'   => $used < $limit,
                'remaining' => $remaining,
                'reason'    => $used >= $limit ? 'video_limit_reached' : null,
            ];

        case 'advanced_search':
            return ['allowed' => !empty($plan['advanced_search'])];

        case 'view_elite_talent':
            $access = isset($plan['talent_tier_access']) ? $plan['talent_tier_access'] : [];
            return ['allowed' => in_array('talent_elite', $access)];

        case 'stats_access':
            return ['allowed' => !empty($plan['stats_access'])];

        case 'notifications':
            return ['allowed' => !empty($plan['notifications'])];

        case 'pro_dashboard':
            return ['allowed' => !empty($plan['pro_dashboard'])];

        case 'pre_access_24h':
            return ['allowed' => !empty($plan['pre_access_24h'])];

        default:
            return ['allowed' => false, 'reason' => 'unknown_feature'];
    }
}

/**
 * Reset mensuel du compteur de vues profils
 */
function nexgen_maybe_reset_monthly_usage($user_id) {
    $last_reset = get_user_meta($user_id, '_nexgen_profile_views_reset', true);
    if (!$last_reset) {
        update_user_meta($user_id, '_nexgen_profile_views_reset', current_time('mysql'));
        update_user_meta($user_id, '_nexgen_profile_views_count', 0);
        return;
    }

    $reset_time = strtotime($last_reset);
    $now = current_time('timestamp');

    // Reset si plus de 30 jours
    if (($now - $reset_time) > (30 * DAY_IN_SECONDS)) {
        update_user_meta($user_id, '_nexgen_profile_views_count', 0);
        update_user_meta($user_id, '_nexgen_profile_views_reset', current_time('mysql'));
    }
}

/**
 * Incrémenter le compteur de vues profils
 */
function nexgen_increment_profile_views($user_id) {
    $count = (int) get_user_meta($user_id, '_nexgen_profile_views_count', true);
    update_user_meta($user_id, '_nexgen_profile_views_count', $count + 1);
}

/**
 * Construire les features pour la réponse API
 */
function nexgen_build_features_response($plan_slug) {
    $plan = nexgen_get_plan_config($plan_slug);

    if (!$plan) {
        return [
            'video_limit'        => null,
            'profile_views_limit'=> null,
            'advanced_search'    => false,
            'badge'              => null,
            'talent_tier_access' => [],
            'search_priority'    => false,
            'stats_access'       => false,
            'notifications'      => false,
            'pro_dashboard'      => false,
            'pre_access_24h'     => false,
        ];
    }

    return [
        'video_limit'        => isset($plan['video_limit']) ? $plan['video_limit'] : null,
        'profile_views_limit'=> isset($plan['profile_views_limit']) ? $plan['profile_views_limit'] : null,
        'advanced_search'    => !empty($plan['advanced_search']),
        'badge'              => isset($plan['badge']) ? $plan['badge'] : null,
        'talent_tier_access' => isset($plan['talent_tier_access']) ? $plan['talent_tier_access'] : [],
        'search_priority'    => !empty($plan['search_priority']),
        'stats_access'       => !empty($plan['stats_access']),
        'notifications'      => !empty($plan['notifications']),
        'pro_dashboard'      => !empty($plan['pro_dashboard']),
        'pre_access_24h'     => !empty($plan['pre_access_24h']),
    ];
}


// ============================================================
// 3. REST API ENDPOINTS
// ============================================================

add_action('rest_api_init', function () {
    $namespace = 'nextgen/v1';

    // GET /subscription - Récupérer l'abonnement courant
    register_rest_route($namespace, '/subscription', [
        'methods'             => 'GET',
        'callback'            => 'nexgen_api_subscription_get',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /subscription/activate-trial - Activer l'essai gratuit
    register_rest_route($namespace, '/subscription/activate-trial', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_activate_trial',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /subscription/checkout - Créer une session de paiement
    register_rest_route($namespace, '/subscription/checkout', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_subscription_checkout',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /subscription/portal - Obtenir l'URL du portail Stripe
    register_rest_route($namespace, '/subscription/portal', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_subscription_portal',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /subscription/cancel - Annuler l'abonnement
    register_rest_route($namespace, '/subscription/cancel', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_subscription_cancel',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /subscription/check-access - Vérifier l'accès à une fonctionnalité
    register_rest_route($namespace, '/subscription/check-access', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_check_access',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // POST /webhooks/stripe - Webhook Stripe (public, vérifié par signature)
    register_rest_route($namespace, '/webhooks/stripe', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_stripe_webhook',
        'permission_callback' => '__return_true',
    ]);

    // POST /webhooks/cinetpay - Webhook CinetPay (public, vérifié par clé)
    register_rest_route($namespace, '/webhooks/cinetpay', [
        'methods'             => 'POST',
        'callback'            => 'nexgen_api_cinetpay_webhook',
        'permission_callback' => '__return_true',
    ]);
});


// ----------------------------------------------------------
// GET /subscription
// ----------------------------------------------------------
function nexgen_api_subscription_get(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    // Vérifier expiration trial
    nexgen_check_trial_expiration($user_id);

    $plan_slug = nexgen_get_user_plan($user_id);
    $status    = nexgen_get_subscription_status($user_id);
    $plan      = nexgen_get_plan_config($plan_slug);

    // Usage
    nexgen_maybe_reset_monthly_usage($user_id);
    $profile_views_used = (int) get_user_meta($user_id, '_nexgen_profile_views_count', true);
    $videos_used        = (int) get_user_meta($user_id, '_nexgen_video_count', true);

    $features = nexgen_build_features_response($plan_slug);

    return new WP_REST_Response([
        'plan'               => $plan_slug,
        'plan_label'         => $plan ? $plan['label'] : 'Gratuit',
        'status'             => $status,
        'price'              => $plan ? number_format($plan['price_eur'], 2, '.', '') : null,
        'currency'           => 'EUR',
        'payment_provider'   => get_user_meta($user_id, '_nexgen_payment_provider', true) ?: null,
        'trial_end'          => get_user_meta($user_id, '_nexgen_trial_end', true) ?: null,
        'current_period_end' => get_user_meta($user_id, '_nexgen_current_period_end', true) ?: null,
        'usage' => [
            'profile_views_used'  => $profile_views_used,
            'profile_views_limit' => $features['profile_views_limit'],
            'videos_used'         => $videos_used,
            'videos_limit'        => $features['video_limit'],
        ],
        'trial_used' => (bool) get_user_meta($user_id, '_nexgen_trial_used', true),
        'features' => $features,
    ], 200);
}


// ----------------------------------------------------------
// POST /subscription/activate-trial
// ----------------------------------------------------------
function nexgen_api_activate_trial(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();
    $plan    = isset($params['plan']) ? sanitize_text_field($params['plan']) : '';

    if (empty($plan)) {
        return new WP_Error('missing_plan', 'Le plan est requis', ['status' => 400]);
    }

    $result = nexgen_activate_trial($user_id, $plan);

    if (is_wp_error($result)) {
        return $result;
    }

    return new WP_REST_Response($result, 200);
}


// ----------------------------------------------------------
// POST /subscription/checkout (delegated to Stripe/CinetPay plugins)
// ----------------------------------------------------------
function nexgen_api_subscription_checkout(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();

    $plan_slug        = isset($params['plan']) ? sanitize_text_field($params['plan']) : '';
    $payment_provider = isset($params['payment_provider']) ? sanitize_text_field($params['payment_provider']) : 'stripe';
    $success_url      = isset($params['success_url']) ? esc_url_raw($params['success_url']) : '';
    $cancel_url       = isset($params['cancel_url']) ? esc_url_raw($params['cancel_url']) : '';

    if (empty($plan_slug) || empty($success_url) || empty($cancel_url)) {
        return new WP_Error('missing_params', 'Plan, success_url et cancel_url sont requis', ['status' => 400]);
    }

    $plan = nexgen_get_plan_config($plan_slug);
    if (!$plan) {
        return new WP_Error('invalid_plan', 'Plan invalide', ['status' => 400]);
    }

    if ($payment_provider === 'stripe') {
        if (function_exists('nexgen_create_stripe_checkout')) {
            return nexgen_create_stripe_checkout($user_id, $plan_slug, $success_url, $cancel_url);
        }
        return new WP_Error('stripe_not_configured', 'Stripe n\'est pas configuré', ['status' => 500]);
    }

    if ($payment_provider === 'cinetpay') {
        if (function_exists('nexgen_create_cinetpay_payment')) {
            $notify_url = rest_url('nextgen/v1/webhooks/cinetpay');
            return nexgen_create_cinetpay_payment($user_id, $plan_slug, $notify_url, $success_url);
        }
        return new WP_Error('cinetpay_not_configured', 'CinetPay n\'est pas configuré', ['status' => 500]);
    }

    return new WP_Error('invalid_provider', 'Fournisseur de paiement invalide', ['status' => 400]);
}


// ----------------------------------------------------------
// POST /subscription/portal
// ----------------------------------------------------------
function nexgen_api_subscription_portal(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();
    $return_url = isset($params['return_url']) ? esc_url_raw($params['return_url']) : '';

    if (function_exists('nexgen_create_stripe_portal')) {
        return nexgen_create_stripe_portal($user_id, $return_url);
    }

    return new WP_Error('stripe_not_configured', 'Stripe n\'est pas configuré', ['status' => 500]);
}


// ----------------------------------------------------------
// POST /subscription/cancel
// ----------------------------------------------------------
function nexgen_api_subscription_cancel(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    $stripe_sub_id = get_user_meta($user_id, '_nexgen_stripe_subscription_id', true);

    if ($stripe_sub_id && function_exists('nexgen_cancel_stripe_subscription')) {
        return nexgen_cancel_stripe_subscription($user_id, $stripe_sub_id);
    }

    // Annulation locale (pour CinetPay ou essai)
    $current_period_end = get_user_meta($user_id, '_nexgen_current_period_end', true);
    update_user_meta($user_id, '_nexgen_subscription_status', 'cancelled');

    return new WP_REST_Response([
        'success'            => true,
        'message'            => 'Abonnement annulé',
        'current_period_end' => $current_period_end ?: null,
    ], 200);
}


// ----------------------------------------------------------
// POST /subscription/check-access
// ----------------------------------------------------------
function nexgen_api_check_access(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();
    $feature = isset($params['feature']) ? sanitize_text_field($params['feature']) : '';

    if (empty($feature)) {
        return new WP_Error('missing_feature', 'Le paramètre feature est requis', ['status' => 400]);
    }

    $result = nexgen_check_feature_access($user_id, $feature, $params);

    $status_code = $result['allowed'] ? 200 : 403;
    return new WP_REST_Response($result, $status_code);
}


// ----------------------------------------------------------
// Webhook placeholders (implémentés dans nexgen-stripe.php et nexgen-cinetpay.php)
// ----------------------------------------------------------
function nexgen_api_stripe_webhook(WP_REST_Request $request) {
    if (function_exists('nexgen_handle_stripe_webhook')) {
        return nexgen_handle_stripe_webhook($request);
    }
    return new WP_Error('not_configured', 'Stripe webhooks non configurés', ['status' => 500]);
}

function nexgen_api_cinetpay_webhook(WP_REST_Request $request) {
    if (function_exists('nexgen_handle_cinetpay_webhook')) {
        return nexgen_handle_cinetpay_webhook($request);
    }
    return new WP_Error('not_configured', 'CinetPay webhooks non configurés', ['status' => 500]);
}


// ============================================================
// 4. WP-CRON : Vérification quotidienne des essais expirés
// ============================================================

add_action('wp', function () {
    if (!wp_next_scheduled('nexgen_check_trials_daily')) {
        wp_schedule_event(time(), 'daily', 'nexgen_check_trials_daily');
    }
});

add_action('nexgen_check_trials_daily', function () {
    $users = get_users([
        'meta_key'   => '_nexgen_subscription_status',
        'meta_value' => 'trialing',
    ]);

    foreach ($users as $user) {
        nexgen_check_trial_expiration($user->ID);
    }
});


// ============================================================
// 5. HOOK : Ajouter la vérification d'accès sur la visite de profil
// ============================================================

/**
 * Modifier le handler de visite pour vérifier les limites du plan recruteur.
 * On utilise un filtre prioritaire avant l'enregistrement de la visite.
 */
add_filter('nexgen_before_record_visit', function ($allow, $user_id, $talent_id) {
    $access = nexgen_check_feature_access($user_id, 'view_talent_profile', ['talent_id' => $talent_id]);

    if (!$access['allowed']) {
        return new WP_Error(
            'access_denied',
            $access['reason'] ?? 'Accès refusé',
            ['status' => 403, 'upgrade_to' => ['recruteur_premium', 'recruteur_illimite']]
        );
    }

    // Incrémenter le compteur
    nexgen_increment_profile_views($user_id);

    return $allow;
}, 10, 3);

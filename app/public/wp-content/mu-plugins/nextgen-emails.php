<?php
/**
 * Plugin Name: NEXTGEN Emails Transactionnels
 * Description: Systeme d'emails transactionnels avec templates HTML et hooks sur les evenements
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if (!defined('ABSPATH')) {
    exit;
}

// ============================================================
// 1. CONFIGURATION
// ============================================================

define('NEXGEN_EMAIL_FROM_NAME', 'NexGen Sport');
define('NEXGEN_EMAIL_FROM_ADDRESS', 'noreply@nexgensport.com');
define('NEXGEN_FRONTEND_URL', defined('NEXGEN_FRONT_URL') ? NEXGEN_FRONT_URL : 'http://localhost:5173');

// Configurer wp_mail pour envoyer en HTML
add_filter('wp_mail_content_type', function () {
    return 'text/html';
});

add_filter('wp_mail_from', function () {
    return NEXGEN_EMAIL_FROM_ADDRESS;
});

add_filter('wp_mail_from_name', function () {
    return NEXGEN_EMAIL_FROM_NAME;
});


// ============================================================
// 2. TEMPLATE HTML DE BASE
// ============================================================

/**
 * Generer le template HTML de base pour un email
 *
 * @param string $title     Titre de l'email (affiché dans le header)
 * @param string $content   Contenu HTML du body
 * @param string $cta_text  Texte du bouton CTA (optionnel)
 * @param string $cta_url   URL du bouton CTA (optionnel)
 * @return string HTML complet de l'email
 */
function nexgen_email_template($title, $content, $cta_text = '', $cta_url = '') {
    $year = date('Y');
    $frontend_url = NEXGEN_FRONTEND_URL;

    $cta_html = '';
    if (!empty($cta_text) && !empty($cta_url)) {
        $cta_url = esc_url($cta_url);
        $cta_text = esc_html($cta_text);
        $cta_html = <<<HTML
        <tr>
            <td style="padding: 24px 0 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                    <tr>
                        <td style="border-radius: 8px; background-color: #4bc3b9;">
                            <a href="{$cta_url}" target="_blank" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                                {$cta_text}
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
HTML;
    }

    return <<<HTML
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f5f7; padding: 32px 16px;">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%;">

                    <!-- HEADER -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #4bc3b9 0%, #3aa89f 100%); padding: 32px 40px; border-radius: 12px 12px 0 0; text-align: center;">
                            <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                                NexGen Sport
                            </h1>
                            <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.85);">
                                {$title}
                            </p>
                        </td>
                    </tr>

                    <!-- BODY -->
                    <tr>
                        <td style="background-color: #ffffff; padding: 40px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                    <td style="font-size: 15px; line-height: 1.6; color: #141414;">
                                        {$content}
                                    </td>
                                </tr>
                                {$cta_html}
                            </table>
                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 24px 40px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
                            <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280;">
                                &copy; {$year} NexGen Sport &mdash; La plateforme de decouverte de talents sportifs
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                                <a href="{$frontend_url}" style="color: #4bc3b9; text-decoration: none;">nexgensport.com</a>
                                &nbsp;&bull;&nbsp;
                                <a href="{$frontend_url}/privacy-policy" style="color: #4bc3b9; text-decoration: none;">Politique de confidentialite</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
HTML;
}


/**
 * Helper : bloc info avec icone et couleur
 */
function nexgen_email_info_block($text, $color = '#4bc3b9') {
    $text = esc_html($text);
    return <<<HTML
<div style="background-color: {$color}10; border-left: 4px solid {$color}; padding: 16px; border-radius: 0 8px 8px 0; margin: 16px 0;">
    <p style="margin: 0; font-size: 14px; color: #141414;">{$text}</p>
</div>
HTML;
}

/**
 * Helper : liste de features avec checkmarks
 */
function nexgen_email_features_list($features) {
    $html = '<table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 16px 0;">';
    foreach ($features as $feature) {
        $feature = esc_html($feature);
        $html .= <<<HTML
        <tr>
            <td style="padding: 6px 0; font-size: 14px; color: #141414;">
                <span style="color: #8fc92f; font-weight: bold; margin-right: 8px;">&#10003;</span>
                {$feature}
            </td>
        </tr>
HTML;
    }
    $html .= '</table>';
    return $html;
}


// ============================================================
// 3. FONCTIONS D'ENVOI PAR EVENEMENT
// ============================================================

// ----------------------------------------------------------
// EMAIL 1 : Bienvenue (inscription)
// ----------------------------------------------------------
add_action('nextgen_user_registered', function ($user_id, $role) {
    $user = get_userdata($user_id);
    if (!$user) return;

    $name = $user->display_name ?: $user->user_login;
    $is_talent = ($role === 'nextgen_talent');

    $role_label = $is_talent ? 'talent' : 'recruteur';
    $dashboard_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/talent-dashboard'
        : NEXGEN_FRONTEND_URL . '/recruteur/talents';

    $features = $is_talent
        ? [
            'Creez votre profil sportif complet',
            'Ajoutez vos videos et performances',
            'Soyez visible aupres des recruteurs',
            'Recevez des opportunites directement',
        ]
        : [
            'Recherchez parmi des centaines de talents',
            'Filtrez par sport, position et niveau',
            'Contactez les athletes directement',
            'Gerez vos demandes depuis votre espace',
        ];

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">
    Bienvenue sur NexGen Sport, {$name} !
</p>
<p>Votre compte {$role_label} a ete cree avec succes. Vous faites maintenant partie de la communaute NexGen Sport !</p>
HTML;

    $content .= nexgen_email_info_block(
        $is_talent
            ? 'Completez votre profil pour maximiser votre visibilite aupres des recruteurs.'
            : 'Decouvrez les talents disponibles et commencez vos recherches des maintenant.'
    );

    $content .= '<p style="font-weight: 600; margin: 16px 0 8px;">Ce que vous pouvez faire :</p>';
    $content .= nexgen_email_features_list($features);

    $html = nexgen_email_template(
        'Bienvenue sur NexGen Sport',
        $content,
        $is_talent ? 'Completer mon profil' : 'Decouvrir les talents',
        $dashboard_url
    );

    wp_mail($user->user_email, 'Bienvenue sur NexGen Sport !', $html);

    error_log('NEXGEN Email: Welcome sent to ' . $user->user_email);
}, 10, 2);


// ----------------------------------------------------------
// EMAIL 2 : Activation de plan (trial ou paiement)
// ----------------------------------------------------------
add_action('nextgen_plan_activated', function ($user_id, $plan_slug, $status) {
    $user = get_userdata($user_id);
    if (!$user) return;

    $name = $user->display_name ?: $user->user_login;
    $plans = NEXGEN_PLANS;

    if (!isset($plans[$plan_slug])) return;

    $plan = $plans[$plan_slug];
    $plan_label = $plan['label'];
    $is_trial = ($status === 'trialing');
    $is_talent = (strpos($plan_slug, 'talent_') === 0);

    // Titre
    $title = $is_trial
        ? "Essai gratuit active : {$plan_label}"
        : "Abonnement active : {$plan_label}";

    // Features selon le plan
    $features = [];
    if ($is_talent) {
        $video_limit = $plan['video_limit'] === -1 ? 'illimitees' : $plan['video_limit'];
        $features[] = "Videos : {$video_limit}";
        if (!empty($plan['badge'])) {
            $features[] = 'Badge ' . ucfirst($plan['badge']) . ' sur votre profil';
        }
        if ($plan['search_priority']) {
            $features[] = 'Priorite dans les resultats de recherche';
        }
        if ($plan['stats_access']) {
            $features[] = 'Acces aux statistiques avancees';
        }
        $features[] = 'Visibilite : ' . $plan['visibility'];
    } else {
        $views_limit = $plan['profile_views_limit'] === -1 ? 'illimitees' : $plan['profile_views_limit'] . '/mois';
        $features[] = "Consultations de profils : {$views_limit}";
        if ($plan['advanced_search']) {
            $features[] = 'Recherche avancee';
        }
        if ($plan['notifications']) {
            $features[] = 'Notifications de nouveaux talents';
        }
        if (!empty($plan['pro_dashboard'])) {
            $features[] = 'Dashboard professionnel';
        }
        if (!empty($plan['pre_access_24h'])) {
            $features[] = 'Acces anticipe 24h aux nouveaux profils';
        }
        $tiers = implode(', ', array_map(function ($t) {
            return ucfirst(str_replace('talent_', '', $t));
        }, $plan['talent_tier_access']));
        $features[] = "Acces aux talents : {$tiers}";
    }

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">
    Felicitations, {$name} !
</p>
HTML;

    if ($is_trial) {
        $trial_end = get_user_meta($user_id, '_nexgen_trial_end', true);
        $trial_end_formatted = $trial_end ? date_i18n('j F Y', strtotime($trial_end)) : '';
        $content .= <<<HTML
<p>Votre essai gratuit du plan <strong>{$plan_label}</strong> est maintenant actif.</p>
HTML;
        $content .= nexgen_email_info_block(
            "Votre essai prend fin le {$trial_end_formatted}. Aucun prelevement ne sera effectue avant cette date.",
            '#f87028'
        );
    } else {
        $price = number_format($plan['price_eur'], 2, ',', '') . ' EUR/mois';
        $content .= <<<HTML
<p>Votre abonnement <strong>{$plan_label}</strong> ({$price}) est maintenant actif. Merci pour votre confiance !</p>
HTML;
    }

    $content .= '<p style="font-weight: 600; margin: 16px 0 8px;">Votre plan inclut :</p>';
    $content .= nexgen_email_features_list($features);

    $dashboard_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/talent-dashboard'
        : NEXGEN_FRONTEND_URL . '/recruteur/talents';

    $html = nexgen_email_template(
        $title,
        $content,
        'Acceder a mon espace',
        $dashboard_url
    );

    wp_mail($user->user_email, $title, $html);

    error_log("NEXGEN Email: Plan activation ({$plan_slug}/{$status}) sent to {$user->user_email}");
}, 10, 3);


// ----------------------------------------------------------
// EMAIL 3 : Nouvelle demande recue (pour le talent)
// ----------------------------------------------------------
add_action('nextgen_request_created', function ($request_id, $recruiter_id, $talent_id) {
    $talent = get_userdata($talent_id);
    $recruiter = get_userdata($recruiter_id);
    if (!$talent || !$recruiter) return;

    $talent_name = $talent->display_name ?: $talent->user_login;
    $recruiter_name = $recruiter->display_name ?: $recruiter->user_login;

    $request_post = get_post($request_id);
    $message_preview = $request_post
        ? wp_trim_words(wp_strip_all_tags($request_post->post_content), 30, '...')
        : '';

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">
    Nouvelle demande de contact !
</p>
<p>Bonjour {$talent_name},</p>
<p><strong>{$recruiter_name}</strong> souhaite entrer en contact avec vous et vous a envoye une demande.</p>
HTML;

    if (!empty($message_preview)) {
        $message_preview = esc_html($message_preview);
        $content .= <<<HTML
<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin: 16px 0;">
    <p style="margin: 0 0 4px; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message :</p>
    <p style="margin: 0; font-size: 14px; color: #141414; font-style: italic;">"{$message_preview}"</p>
</div>
HTML;
    }

    $content .= nexgen_email_info_block('Connectez-vous pour accepter ou decliner cette demande.');

    $html = nexgen_email_template(
        'Nouvelle demande de contact',
        $content,
        'Voir mes demandes',
        NEXGEN_FRONTEND_URL . '/talent-requests'
    );

    wp_mail($talent->user_email, 'Nouvelle demande de ' . $recruiter_name, $html);

    error_log("NEXGEN Email: Request notification sent to {$talent->user_email} from recruiter {$recruiter_id}");
}, 10, 3);


// ----------------------------------------------------------
// EMAIL 4 : Nouveau message recu
// ----------------------------------------------------------
add_action('nextgen_message_sent', function ($message_id, $sender_id, $recipient_id, $conversation_id) {
    $recipient = get_userdata($recipient_id);
    $sender = get_userdata($sender_id);
    if (!$recipient || !$sender) return;

    $recipient_name = $recipient->display_name ?: $recipient->user_login;
    $sender_name = $sender->display_name ?: $sender->user_login;

    $message_post = get_post($message_id);
    $message_preview = $message_post
        ? wp_trim_words(wp_strip_all_tags($message_post->post_content), 30, '...')
        : '';

    $content = <<<HTML
<p>Bonjour {$recipient_name},</p>
<p>Vous avez recu un nouveau message de <strong>{$sender_name}</strong>.</p>
HTML;

    if (!empty($message_preview)) {
        $message_preview = esc_html($message_preview);
        $content .= <<<HTML
<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin: 16px 0;">
    <p style="margin: 0 0 4px; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message :</p>
    <p style="margin: 0; font-size: 14px; color: #141414; font-style: italic;">"{$message_preview}"</p>
</div>
HTML;
    }

    // Determine dashboard URL based on recipient role
    $is_talent = in_array('nextgen_talent', (array) $recipient->roles, true);
    $messages_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/talent-dashboard'
        : NEXGEN_FRONTEND_URL . '/recruteur/messages';

    $html = nexgen_email_template(
        'Nouveau message',
        $content,
        'Lire le message',
        $messages_url
    );

    wp_mail($recipient->user_email, 'Nouveau message de ' . $sender_name, $html);

    error_log("NEXGEN Email: Message notification sent to {$recipient->user_email}");
}, 10, 4);


// ----------------------------------------------------------
// EMAIL 5 : Paiement echoue
// ----------------------------------------------------------
add_action('nextgen_payment_failed', function ($user_id) {
    $user = get_userdata($user_id);
    if (!$user) return;

    $name = $user->display_name ?: $user->user_login;
    $plan_slug = get_user_meta($user_id, '_nexgen_plan', true);
    $plans = NEXGEN_PLANS;
    $plan_label = isset($plans[$plan_slug]) ? $plans[$plan_slug]['label'] : $plan_slug;

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px; color: #ff3131;">
    Probleme de paiement
</p>
<p>Bonjour {$name},</p>
<p>Le renouvellement de votre abonnement <strong>{$plan_label}</strong> n'a pas pu etre effectue.</p>
HTML;

    $content .= nexgen_email_info_block(
        'Votre compte restera actif pendant 48h. Passé ce délai, vos fonctionnalites premium seront suspendues.',
        '#ff3131'
    );

    $content .= <<<HTML
<p>Causes possibles :</p>
<ul style="margin: 8px 0; padding-left: 20px; font-size: 14px; color: #141414;">
    <li>Carte expiree ou fonds insuffisants</li>
    <li>Blocage de votre banque</li>
    <li>Moyen de paiement invalide</li>
</ul>
<p>Mettez a jour vos informations de paiement pour eviter toute interruption de service.</p>
HTML;

    $is_talent = in_array('nextgen_talent', (array) $user->roles, true);
    $payment_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/pricing/talent'
        : NEXGEN_FRONTEND_URL . '/pricing/recruteur';

    $html = nexgen_email_template(
        'Echec du paiement',
        $content,
        'Mettre a jour mon paiement',
        $payment_url
    );

    wp_mail($user->user_email, 'Echec du paiement - NexGen Sport', $html);

    error_log("NEXGEN Email: Payment failed notification sent to {$user->user_email}");
});


// ----------------------------------------------------------
// EMAIL 6 : Essai expire
// ----------------------------------------------------------
add_action('nextgen_trial_expired', function ($user_id) {
    $user = get_userdata($user_id);
    if (!$user) return;

    $name = $user->display_name ?: $user->user_login;
    $trial_plan = get_user_meta($user_id, '_nexgen_trial_plan', true);
    $plans = NEXGEN_PLANS;
    $plan_label = isset($plans[$trial_plan]) ? $plans[$trial_plan]['label'] : 'votre plan';

    $is_talent = in_array('nextgen_talent', (array) $user->roles, true);

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">
    Votre essai gratuit est termine
</p>
<p>Bonjour {$name},</p>
<p>Votre essai gratuit du plan <strong>{$plan_label}</strong> a pris fin.</p>
HTML;

    $content .= nexgen_email_info_block(
        $is_talent
            ? 'Votre profil n\'apparait plus dans les resultats de recherche prioritaires. Abonnez-vous pour rester visible !'
            : 'Vous n\'avez plus acces aux profils premium. Abonnez-vous pour continuer vos recherches !',
        '#f87028'
    );

    $pricing_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/pricing/talent'
        : NEXGEN_FRONTEND_URL . '/pricing/recruteur';

    $html = nexgen_email_template(
        'Essai gratuit expire',
        $content,
        'Voir les offres',
        $pricing_url
    );

    wp_mail($user->user_email, 'Votre essai gratuit est termine - NexGen Sport', $html);

    error_log("NEXGEN Email: Trial expired notification sent to {$user->user_email}");
});


// ----------------------------------------------------------
// EMAIL 7 : Demande acceptee (notification au recruteur)
// ----------------------------------------------------------
add_action('nextgen_request_responded', function ($request_id, $talent_id, $new_status) {
    if ($new_status !== 'accepted') return;

    $recruiter_id = (int) get_post_meta($request_id, '_recruiter_id', true);
    $recruiter = get_userdata($recruiter_id);
    $talent = get_userdata($talent_id);
    if (!$recruiter || !$talent) return;

    $recruiter_name = $recruiter->display_name ?: $recruiter->user_login;
    $talent_name = $talent->display_name ?: $talent->user_login;

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px; color: #8fc92f;">
    Bonne nouvelle !
</p>
<p>Bonjour {$recruiter_name},</p>
<p><strong>{$talent_name}</strong> a accepte votre demande de contact ! Vous pouvez maintenant echanger directement.</p>
HTML;

    $content .= nexgen_email_info_block('Envoyez un message pour lancer la conversation.', '#8fc92f');

    $html = nexgen_email_template(
        'Demande acceptee',
        $content,
        'Envoyer un message',
        NEXGEN_FRONTEND_URL . '/recruteur/messages'
    );

    wp_mail($recruiter->user_email, $talent_name . ' a accepte votre demande !', $html);

    error_log("NEXGEN Email: Request accepted notification sent to {$recruiter->user_email}");
}, 10, 3);


// ----------------------------------------------------------
// EMAIL 8 : Rappel avant expiration essai (3 jours avant)
// ----------------------------------------------------------
add_action('nextgen_trial_reminder', function ($user_id, $days_left) {
    $user = get_userdata($user_id);
    if (!$user) return;

    $name = $user->display_name ?: $user->user_login;
    $trial_plan = get_user_meta($user_id, '_nexgen_trial_plan', true);
    $plans = NEXGEN_PLANS;
    $plan_label = isset($plans[$trial_plan]) ? $plans[$trial_plan]['label'] : 'votre plan';

    $is_talent = in_array('nextgen_talent', (array) $user->roles, true);

    $content = <<<HTML
<p style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">
    Plus que {$days_left} jour(s) d'essai !
</p>
<p>Bonjour {$name},</p>
<p>Votre essai gratuit du plan <strong>{$plan_label}</strong> se termine dans {$days_left} jour(s).</p>
<p>Abonnez-vous maintenant pour continuer a profiter de toutes les fonctionnalites sans interruption.</p>
HTML;

    $pricing_url = $is_talent
        ? NEXGEN_FRONTEND_URL . '/pricing/talent'
        : NEXGEN_FRONTEND_URL . '/pricing/recruteur';

    $html = nexgen_email_template(
        "Plus que {$days_left} jour(s) d'essai",
        $content,
        'S\'abonner maintenant',
        $pricing_url
    );

    wp_mail($user->user_email, "Plus que {$days_left} jour(s) d'essai - NexGen Sport", $html);

    error_log("NEXGEN Email: Trial reminder ({$days_left}j) sent to {$user->user_email}");
}, 10, 2);


// ============================================================
// 4. CRON : Rappels avant expiration d'essai
// ============================================================

add_action('wp', function () {
    if (!wp_next_scheduled('nexgen_check_trial_reminders')) {
        wp_schedule_event(time(), 'daily', 'nexgen_check_trial_reminders');
    }
});

add_action('nexgen_check_trial_reminders', function () {
    $users = get_users([
        'meta_key'   => '_nexgen_subscription_status',
        'meta_value' => 'trialing',
    ]);

    foreach ($users as $user) {
        $trial_end = get_user_meta($user->ID, '_nexgen_trial_end', true);
        if (!$trial_end) continue;

        $days_left = (int) ceil((strtotime($trial_end) - time()) / DAY_IN_SECONDS);

        // Envoyer un rappel a 3 jours et 1 jour avant expiration
        if ($days_left === 3 || $days_left === 1) {
            // Eviter les doublons : verifier si deja envoye
            $reminder_key = '_nexgen_trial_reminder_' . $days_left . 'j';
            $already_sent = get_user_meta($user->ID, $reminder_key, true);

            if (!$already_sent) {
                do_action('nextgen_trial_reminder', $user->ID, $days_left);
                update_user_meta($user->ID, $reminder_key, current_time('mysql'));
            }
        }
    }
});


// ============================================================
// 5. ENDPOINT DE TEST (dev uniquement)
// ============================================================

if (defined('WP_DEBUG') && WP_DEBUG) {
    add_action('rest_api_init', function () {
        register_rest_route('nextgen/v1', '/email-preview/(?P<template>[a-z_-]+)', [
            'methods'             => 'GET',
            'callback'            => 'nexgen_email_preview',
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);
    });

    function nexgen_email_preview(WP_REST_Request $request) {
        $template = $request['template'];
        $user_id = get_current_user_id();
        $user = get_userdata($user_id);
        $name = $user->display_name;

        switch ($template) {
            case 'welcome':
                $content = '<p style="font-size: 18px; font-weight: 600;">Bienvenue sur NexGen Sport, ' . $name . ' !</p>';
                $content .= '<p>Votre compte talent a ete cree avec succes.</p>';
                $content .= nexgen_email_info_block('Completez votre profil pour maximiser votre visibilite.');
                $content .= nexgen_email_features_list([
                    'Creez votre profil sportif complet',
                    'Ajoutez vos videos et performances',
                    'Soyez visible aupres des recruteurs',
                ]);
                return new WP_REST_Response([
                    'html' => nexgen_email_template('Bienvenue sur NexGen Sport', $content, 'Completer mon profil', '#'),
                ]);

            case 'plan-activation':
                $content = '<p style="font-size: 18px; font-weight: 600;">Felicitations, ' . $name . ' !</p>';
                $content .= '<p>Votre essai gratuit du plan <strong>Ambition</strong> est maintenant actif.</p>';
                $content .= nexgen_email_info_block('Votre essai prend fin le 13 mars 2026.', '#f87028');
                $content .= nexgen_email_features_list([
                    'Videos : 5',
                    'Badge Ambition sur votre profil',
                    'Priorite dans les resultats',
                ]);
                return new WP_REST_Response([
                    'html' => nexgen_email_template('Essai gratuit active : Ambition', $content, 'Acceder a mon espace', '#'),
                ]);

            case 'request':
                $content = '<p style="font-size: 18px; font-weight: 600;">Nouvelle demande de contact !</p>';
                $content .= '<p>Bonjour ' . $name . ',</p>';
                $content .= '<p><strong>FC Paris Academy</strong> souhaite entrer en contact avec vous.</p>';
                $content .= '<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin: 16px 0;"><p style="margin: 0; font-size: 14px; font-style: italic;">"Nous avons remarque votre profil et aimerions vous proposer un essai..."</p></div>';
                $content .= nexgen_email_info_block('Connectez-vous pour accepter ou decliner cette demande.');
                return new WP_REST_Response([
                    'html' => nexgen_email_template('Nouvelle demande de contact', $content, 'Voir mes demandes', '#'),
                ]);

            case 'payment-failed':
                $content = '<p style="font-size: 18px; font-weight: 600; color: #ff3131;">Probleme de paiement</p>';
                $content .= '<p>Le renouvellement de votre abonnement <strong>Ambition</strong> n\'a pas pu etre effectue.</p>';
                $content .= nexgen_email_info_block('Votre compte restera actif pendant 48h.', '#ff3131');
                return new WP_REST_Response([
                    'html' => nexgen_email_template('Echec du paiement', $content, 'Mettre a jour mon paiement', '#'),
                ]);

            default:
                return new WP_Error('unknown_template', 'Template inconnu', ['status' => 404]);
        }
    }
}

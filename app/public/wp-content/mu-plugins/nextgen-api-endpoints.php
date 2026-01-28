<?php
/**
 * Plugin Name: NEXTGEN - API Endpoints personnalisés
 * Description: Endpoints REST API pour l'inscription, la connexion et les services
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Enregistrer les endpoints personnalisés
 */
add_action('rest_api_init', function () {
    // Endpoint d'inscription
    register_rest_route('nextgen/v1', '/register', array(
        'methods' => 'POST',
        'callback' => 'nextgen_register_user',
        'permission_callback' => '__return_true', // Accessible publiquement
    ));

    // Endpoint de statut
    register_rest_route('nextgen/v1', '/status', array(
        'methods' => 'GET',
        'callback' => 'nextgen_api_status',
        'permission_callback' => '__return_true',
    ));

    // Endpoint de statistiques
    register_rest_route('nextgen/v1', '/stats', array(
        'methods' => 'GET',
        'callback' => 'nextgen_api_stats',
        'permission_callback' => '__return_true',
    ));

    // Endpoint pour récupérer les catégories de services hiérarchiquement
    register_rest_route('nextgen/v1', '/service-categories', array(
        'methods'  => 'GET',
        'callback' => 'nextgen_get_service_categories',
        'permission_callback' => '__return_true', // Accessible publiquement
    ));

    // Endpoint de profil utilisateur
    register_rest_route('nextgen/v1', '/profile/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'nextgen_get_user_profile',
        'permission_callback' => 'is_user_logged_in',
        'args' => array(
            'id' => array(
                'validate_callback' => function($param) {
                    return is_numeric($param);
                }
            ),
        ),
    ));
});

/**
 * Fonction pour inscrire un nouvel utilisateur
 */
function nextgen_register_user($request) {
    // Récupérer les paramètres de la requête
    $username = sanitize_user($request->get_param('username'));
    $email = sanitize_email($request->get_param('email'));
    $password = $request->get_param('password');
    $role = sanitize_text_field($request->get_param('role'));

    // Récupérer prénom et nom séparément
    $first_name = sanitize_text_field($request->get_param('first_name')) ?: '';
    $last_name = sanitize_text_field($request->get_param('last_name')) ?: '';

    // Construire le nom complet
    $full_name = trim($first_name . ' ' . $last_name);
    if (empty($full_name)) {
        $full_name = $username; // Fallback sur le username si nom/prénom vides
    }

    // Log pour debug
    error_log('NEXTGEN Register attempt - Username: ' . $username . ', Name: ' . $full_name . ', Role: ' . $role);

    // Validation des champs
    if (empty($username) || empty($email) || empty($password)) {
        error_log('NEXTGEN Register error: Missing fields');
        return new WP_Error(
            'missing_fields',
            'Tous les champs sont requis (username, email, password)',
            array('status' => 400)
        );
    }

    // Valider l'email
    if (!is_email($email)) {
        error_log('NEXTGEN Register error: Invalid email');
        return new WP_Error(
            'invalid_email',
            'Adresse email invalide',
            array('status' => 400)
        );
    }

    // Vérifier si l'utilisateur existe déjà
    if (username_exists($username)) {
        error_log('NEXTGEN Register error: Username exists');
        return new WP_Error(
            'username_exists',
            'Ce nom d\'utilisateur est déjà utilisé',
            array('status' => 400)
        );
    }

    if (email_exists($email)) {
        error_log('NEXTGEN Register error: Email exists');
        return new WP_Error(
            'email_exists',
            'Cette adresse email est déjà utilisée',
            array('status' => 400)
        );
    }

    // Valider le rôle
    $allowed_roles = array('nextgen_client', 'nextgen_talent');
    if (empty($role) || !in_array($role, $allowed_roles)) {
        $role = 'nextgen_client'; // Rôle par défaut
    }

    // Créer l'utilisateur
    $user_id = wp_create_user($username, $password, $email);

    if (is_wp_error($user_id)) {
        error_log('NEXTGEN Register error: ' . $user_id->get_error_message());
        return new WP_Error(
            'registration_failed',
            $user_id->get_error_message(),
            array('status' => 500)
        );
    }

    // Assigner le rôle
    $user = new WP_User($user_id);
    $user->set_role($role);

    // Mettre à jour les métadonnées utilisateur
    update_user_meta($user_id, 'first_name', $first_name);
    update_user_meta($user_id, 'last_name', $last_name);
    update_user_meta($user_id, 'display_name', $full_name);
    update_user_meta($user_id, 'nickname', $full_name);

    error_log('NEXTGEN Register success: User ID ' . $user_id);

    // ========================================
    // NEXTGEN - Auto-création du profil prestataire
    // ========================================
    $profile_id = null; // Initialiser la variable
    if ($role === 'nextgen_talent') {
        // Créer le profil prestataire
        $profile_id = wp_insert_post(array(
            'post_type'   => 'nextgen_profile',
            'post_title'  => $full_name,
            'post_status' => 'publish',
            'post_author' => $user_id,
            'post_content' => 'Profil de ' . $full_name . ' sur NEXTGEN.'
        ));

        if ($profile_id && !is_wp_error($profile_id)) {
            // Ajouter les métadonnées de base du profil
            update_post_meta($profile_id, 'user_id', $user_id);
            update_post_meta($profile_id, 'bio', '');
            update_post_meta($profile_id, 'hourly_rate', 0);
            update_post_meta($profile_id, 'experience_years', 0);
            update_post_meta($profile_id, 'service_categories', '');
            update_post_meta($profile_id, 'skills', '');
            update_post_meta($profile_id, 'certifications', '');
            update_post_meta($profile_id, 'availability', '');
            update_post_meta($profile_id, 'location', '');
            update_post_meta($profile_id, 'phone', '');
            update_post_meta($profile_id, 'website', '');
            update_post_meta($profile_id, 'portfolio_urls', '');
            update_post_meta($profile_id, 'rating', 0);
            update_post_meta($profile_id, 'total_reviews', 0);
            update_post_meta($profile_id, 'completed_jobs', 0);
            update_post_meta($profile_id, 'is_verified', false);
            update_post_meta($profile_id, 'is_top_provider', false);
            update_post_meta($profile_id, 'languages', '');

            error_log('NEXTGEN Register: Provider profile created with ID ' . $profile_id . ' for user ' . $user_id);
        } else {
            error_log('NEXTGEN Register: Failed to create provider profile for user ' . $user_id);
        }
    }

    // Générer un token JWT pour connecter automatiquement l'utilisateur
    $token = null;
    $token_expiration = null;

    if (defined('JWT_AUTH_SECRET_KEY')) {
        $secret_key = JWT_AUTH_SECRET_KEY;
        $issued_at = time();
        $not_before = $issued_at;
        $expire = $issued_at + (DAY_IN_SECONDS * 7); // 7 jours

        $token_data = array(
            'iss' => get_bloginfo('url'),
            'iat' => $issued_at,
            'nbf' => $not_before,
            'exp' => $expire,
            'data' => array(
                'user' => array(
                    'id' => $user_id,
                )
            )
        );

        // Utiliser la librairie JWT si disponible (plugin JWT Authentication for WP-REST API)
        if (class_exists('Firebase\JWT\JWT')) {
            try {
                $token = \Firebase\JWT\JWT::encode($token_data, $secret_key, 'HS256');
                $token_expiration = $expire;
                error_log('NEXTGEN Register: JWT token generated for user ' . $user_id);
            } catch (Exception $e) {
                error_log('NEXTGEN Register: JWT generation failed - ' . $e->getMessage());
            }
        }
    } else {
        error_log('NEXTGEN Register: JWT_AUTH_SECRET_KEY not defined');
    }

    // Réponse de succès avec token JWT
    $response_data = array(
        'success' => true,
        'message' => 'Inscription réussie ! Bienvenue sur NEXTGEN.',
        'user_id' => $user_id,
        'username' => $username,
        'email' => $email,
        'role' => $role,
        'token' => $token, // Token JWT pour connexion automatique
        'token_expires' => $token_expiration,
    );

    // Ajouter l'ID du profil si créé
    if ($profile_id) {
        $response_data['profile_id'] = $profile_id;
    }

    return new WP_REST_Response($response_data, 201);
}

/**
 * Endpoint de statut de l'API
 */
function nextgen_api_status($request) {
    return new WP_REST_Response(array(
        'status' => 'ok',
        'message' => 'NEXTGEN API is running',
        'version' => '1.0.0',
        'timestamp' => current_time('mysql'),
    ), 200);
}

/**
 * Endpoint de statistiques du site
 */
function nextgen_api_stats($request) {
    // Compter les services
    $services_count = wp_count_posts('service');

    // Compter les catégories
    $categories_count = wp_count_terms(array(
        'taxonomy' => 'service-category',
        'hide_empty' => false,
    ));

    // Compter les utilisateurs par rôle
    $clients = count_users();
    $clients_count = isset($clients['avail_roles']['nextgen_client']) ? $clients['avail_roles']['nextgen_client'] : 0;
    $prestataires_count = isset($clients['avail_roles']['nextgen_talent']) ? $clients['avail_roles']['nextgen_talent'] : 0;

    return new WP_REST_Response(array(
        'services' => array(
            'total' => $services_count->publish,
            'draft' => $services_count->draft,
            'pending' => $services_count->pending,
        ),
        'categories' => $categories_count,
        'users' => array(
            'clients' => $clients_count,
            'prestataires' => $prestataires_count,
            'total' => $clients['total_users'],
        ),
    ), 200);
}

/**
 * Récupérer le profil d'un utilisateur
 */
function nextgen_get_user_profile($request) {
    $user_id = $request->get_param('id');
    $current_user_id = get_current_user_id();

    // Vérifier que l'utilisateur peut accéder à ce profil
    if ($user_id != $current_user_id && !current_user_can('administrator')) {
        return new WP_Error(
            'unauthorized',
            'Vous n\'avez pas la permission d\'accéder à ce profil',
            array('status' => 403)
        );
    }

    $user = get_userdata($user_id);

    if (!$user) {
        return new WP_Error(
            'user_not_found',
            'Utilisateur non trouvé',
            array('status' => 404)
        );
    }

    return new WP_REST_Response(array(
        'id' => $user->ID,
        'username' => $user->user_login,
        'email' => $user->user_email,
        'display_name' => $user->display_name,
        'first_name' => $user->first_name,
        'last_name' => $user->last_name,
        'roles' => $user->roles,
        'registered' => $user->user_registered,
    ), 200);
}

/**
 * Récupérer et formater les catégories de services de manière hiérarchique
 */
function nextgen_get_service_categories($request) {
    $taxonomy = 'nextgen_service_category';
    $hierarchical_categories = [];

    // 1. Récupérer les catégories parentes (Rubriques)
    $parent_terms = get_terms([
        'taxonomy' => $taxonomy,
        'parent'   => 0,
        'hide_empty' => false,
    ]);

    if (is_wp_error($parent_terms)) {
        return new WP_Error('category_error', 'Impossible de récupérer les catégories.', ['status' => 500]);
    }

    // 2. Pour chaque parent, récupérer ses enfants (Sous-rubriques)
    foreach ($parent_terms as $parent) {
        $children_terms = get_terms([
            'taxonomy' => $taxonomy,
            'parent'   => $parent->term_id,
            'hide_empty' => false,
        ]);

        $children_data = [];
        if (!is_wp_error($children_terms)) {
            foreach ($children_terms as $child) {
                $children_data[] = [
                    'id'   => $child->term_id,
                    'name' => html_entity_decode($child->name),
                    'slug' => $child->slug,
                    'count'=> $child->count,
                ];
            }
        }

        $hierarchical_categories[] = [
            'id'       => $parent->term_id,
            'name'     => html_entity_decode($parent->name),
            'slug'     => $parent->slug,
            'count'    => $parent->count,
            'children' => $children_data,
        ];
    }

    return new WP_REST_Response($hierarchical_categories, 200);
}

// Les headers CORS sont gérés dans eloo-headless-config.php

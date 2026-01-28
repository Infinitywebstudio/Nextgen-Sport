<?php
/**
 * Plugin Name: NEXTGEN Headless Configuration
 * Description: Configuration WordPress Headless pour NEXTGEN marketplace
 * Version: 1.0.1
 * Author: NEXTGEN Team
 */

// Sécurité : empêcher l'accès direct
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Configuration CORS pour React Frontend
 */
add_action( 'rest_api_init', function() {
    // Supprimer les headers par défaut
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

    // Ajouter nos propres headers CORS
    add_filter( 'rest_pre_serve_request', function( $value ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
        header( 'Access-Control-Allow-Credentials: true' );
        header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce' );

        return $value;
    });
}, 15 );

/**
 * Gérer les requêtes OPTIONS (preflight)
 */
add_action( 'rest_api_init', function() {
    if ( $_SERVER['REQUEST_METHOD'] === 'OPTIONS' ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
        header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce' );
        exit;
    }
});

/**
 * Désactiver l'éditeur Gutenberg (mode headless)
 */
add_filter( 'use_block_editor_for_post', '__return_false' );

/**
 * Callback pour récupérer les prestataires publics
 * Défini AVANT l'enregistrement de la route
 */
if ( ! function_exists( 'nextgen_get_public_providers' ) ) {
    function nextgen_get_public_providers( $request ) {
        $per_page = $request->get_param( 'per_page' ) ?? 100;
        $page = $request->get_param( 'page' ) ?? 1;

        // Récupérer les utilisateurs avec le rôle nextgen_talent
        $args = array(
            'role' => 'nextgen_talent',
            'number' => $per_page,
            'paged' => $page,
            'fields' => 'all',
            'orderby' => 'registered',
            'order' => 'DESC',
        );

        $user_query = new WP_User_Query( $args );
        $users = $user_query->get_results();

        // Formater les données comme l'API WordPress standard
        $formatted_users = array();
        foreach ( $users as $user ) {
            // Construire le nom complet
            $full_name = trim( $user->first_name . ' ' . $user->last_name );
            if ( empty( $full_name ) ) {
                $full_name = $user->display_name ?: $user->user_login;
            }

            $user_data = array(
                'id' => $user->ID,
                'name' => $full_name,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->user_email,
                'roles' => $user->roles,
                'registered_date' => $user->user_registered,
                'avatar_urls' => array(
                    '24' => get_avatar_url( $user->ID, array( 'size' => 24 ) ),
                    '48' => get_avatar_url( $user->ID, array( 'size' => 48 ) ),
                    '96' => get_avatar_url( $user->ID, array( 'size' => 96 ) ),
                ),
            );

            // Récupérer les champs ACF ET les user_meta
            $acf_fields = array();

            // Essayer d'abord get_fields() si ACF est disponible
            if ( function_exists( 'get_fields' ) ) {
                $acf_data = get_fields( 'user_' . $user->ID );
                if ( $acf_data && is_array( $acf_data ) ) {
                    $acf_fields = $acf_data;
                }
            }

            // Si ACF est vide, récupérer directement depuis user_meta
            if ( empty( $acf_fields ) ) {
                $meta_keys = array(
                    'category_id', 'category_name', 'category_slug',
                    'location', 'bio', 'hourly_rate',
                    'specialties', 'languages', 'rating',
                    'total_reviews', 'completed_orders', 'response_time',
                    'is_verified', 'is_active', 'phone',
                    'years_of_experience', 'professional_title',
                    'services_offered', 'equipments', 'certifications',
                    'portfolio_gallery', 'is_top_provider', 'member_since'
                );

                foreach ( $meta_keys as $key ) {
                    $value = get_user_meta( $user->ID, $key, true );
                    if ( $value !== '' && $value !== false ) {
                        $acf_fields[ $key ] = $value;
                    }
                }
            }

            $user_data['acf'] = $acf_fields ?: new stdClass();

            $formatted_users[] = $user_data;
        }

        // Calculer les headers de pagination
        $total_users = $user_query->get_total();
        $total_pages = ceil( $total_users / $per_page );

        // Retourner la réponse avec headers de pagination
        $response = new WP_REST_Response( $formatted_users, 200 );
        $response->header( 'X-WP-Total', $total_users );
        $response->header( 'X-WP-TotalPages', $total_pages );

        return $response;
    }
}

/**
 * Ajouter des endpoints personnalisés à l'API REST
 */
add_action( 'rest_api_init', function() {

    // Endpoint pour vérifier le statut de l'API
    register_rest_route( 'nextgen/v1', '/status', array(
        'methods'  => 'GET',
        'callback' => function() {
            return array(
                'success' => true,
                'message' => 'NEXTGEN API is working!',
                'version' => '1.0.0',
                'timestamp' => current_time( 'mysql' )
            );
        },
        'permission_callback' => '__return_true'
    ));

    // Endpoint pour les statistiques du site
    register_rest_route( 'nextgen/v1', '/stats', array(
        'methods'  => 'GET',
        'callback' => function() {
            return array(
                'total_users' => count_users()['total_users'],
                'total_posts' => wp_count_posts()->publish,
                'site_name' => get_bloginfo( 'name' ),
                'site_url' => get_bloginfo( 'url' )
            );
        },
        'permission_callback' => '__return_true'
    ));

    // Endpoint public pour récupérer les profils prestataires
    register_rest_route( 'nextgen/v1', '/providers', array(
        'methods'  => 'GET',
        'callback' => 'nextgen_get_public_providers',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array(
                'default' => 100,
                'sanitize_callback' => 'absint',
            ),
            'page' => array(
                'default' => 1,
                'sanitize_callback' => 'absint',
            ),
        ),
    ));
});

/**
 * Ajouter des champs supplémentaires à l'API REST pour les utilisateurs
 */
add_action( 'rest_api_init', function() {
    register_rest_field( 'user', 'avatar_url', array(
        'get_callback' => function( $user ) {
            return get_avatar_url( $user['id'] );
        },
        'schema' => array(
            'description' => 'Avatar URL',
            'type'        => 'string',
        ),
    ));

    register_rest_field( 'user', 'display_name', array(
        'get_callback' => function( $user ) {
            return get_userdata( $user['id'] )->display_name;
        },
        'schema' => array(
            'description' => 'Display Name',
            'type'        => 'string',
        ),
    ));
});

/**
 * Désactiver XML-RPC pour la sécurité
 */
add_filter( 'xmlrpc_enabled', '__return_false' );

/**
 * Supprimer les meta tags inutiles en mode headless
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );

/**
 * Activer les tailles d'images supplémentaires pour React
 */
add_image_size( 'nextgen-thumbnail', 150, 150, true );
add_image_size( 'nextgen-medium', 600, 400, true );
add_image_size( 'nextgen-large', 1200, 800, true );

/**
 * Log des erreurs pour le développement
 */
if ( WP_DEBUG ) {
    add_action( 'rest_api_init', function() {
        error_log( '=== NEXTGEN Headless API Initialized ===' );
    });
}

<?php
/**
 * Plugin Name: NEXTGEN User Roles
 * Description: Gestion des rôles utilisateurs pour NEXTGEN (Clients et Prestataires)
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Créer les rôles personnalisés pour NEXTGEN
 */
add_action( 'init', 'nextgen_create_user_roles' );

function nextgen_create_user_roles() {
    // Vérifier si les rôles ont déjà été créés
    if ( get_option( 'nextgen_user_roles_created' ) ) {
        return;
    }

    /**
     * RÔLE : CLIENT (Buyer)
     * Peut créer des missions, contacter des prestataires, laisser des avis
     */
    add_role( 'nextgen_client', 'Client NEXTGEN', array(
        'read'                   => true,  // Lecture du contenu
        'edit_posts'             => false, // Ne peut pas éditer les posts normaux
        'delete_posts'           => false,
        'publish_posts'          => false,
        'upload_files'           => true,  // Peut uploader des fichiers/images

        // Missions
        'edit_nextgen_missions'     => true,
        'publish_nextgen_missions'  => true,
        'delete_nextgen_missions'   => true,
        'read_private_missions'  => true,

        // Reviews
        'edit_nextgen_reviews'      => true,
        'publish_nextgen_reviews'   => true,
        'delete_nextgen_reviews'    => true
    ));

    /**
     * RÔLE : PRESTATAIRE (Seller)
     * Peut créer des services, accepter des missions, gérer son profil
     */
    add_role( 'nextgen_talent', 'Prestataire NEXTGEN', array(
        'read'                   => true,
        'edit_posts'             => false,
        'delete_posts'           => false,
        'publish_posts'          => false,
        'upload_files'           => true,

        // Services
        'edit_nextgen_services'     => true,
        'publish_nextgen_services'  => true,
        'delete_nextgen_services'   => true,
        'read_private_services'  => true,
        'edit_published_nextgen_services' => true,

        // Missions (lecture seulement pour accepter)
        'read_nextgen_missions'     => true,

        // Reviews (lecture pour voir ses avis)
        'read_nextgen_reviews'      => true
    ));

    // Donner tous les droits aux administrateurs
    $admin_role = get_role( 'administrator' );
    if ( $admin_role ) {
        $admin_role->add_cap( 'edit_nextgen_services' );
        $admin_role->add_cap( 'publish_nextgen_services' );
        $admin_role->add_cap( 'delete_nextgen_services' );
        $admin_role->add_cap( 'edit_nextgen_missions' );
        $admin_role->add_cap( 'publish_nextgen_missions' );
        $admin_role->add_cap( 'delete_nextgen_missions' );
        $admin_role->add_cap( 'edit_nextgen_reviews' );
        $admin_role->add_cap( 'publish_nextgen_reviews' );
        $admin_role->add_cap( 'delete_nextgen_reviews' );
    }

    // Marquer que les rôles ont été créés
    update_option( 'nextgen_user_roles_created', true );
}

/**
 * Ajouter des meta fields personnalisés pour les utilisateurs
 */
add_action( 'rest_api_init', function() {

    // Rôle utilisateur
    register_rest_field( 'user', 'user_role', array(
        'get_callback' => function( $user ) {
            $user_data = get_userdata( $user['id'] );
            return ! empty( $user_data->roles ) ? $user_data->roles[0] : '';
        },
        'schema' => array(
            'description' => 'User Role',
            'type'        => 'string',
        ),
    ));

    // Type de compte (pour filtrage)
    register_rest_field( 'user', 'account_type', array(
        'get_callback' => function( $user ) {
            $role = get_userdata( $user['id'] )->roles[0];
            if ( $role === 'nextgen_client' ) return 'client';
            if ( $role === 'nextgen_talent' ) return 'prestataire';
            return 'other';
        },
        'schema' => array(
            'description' => 'Account Type',
            'type'        => 'string',
        ),
    ));

    // Profil vérifié (KYC)
    register_rest_field( 'user', 'is_verified', array(
        'get_callback' => function( $user ) {
            return (bool) get_user_meta( $user['id'], 'nextgen_is_verified', true );
        },
        'update_callback' => function( $value, $user ) {
            return update_user_meta( $user->ID, 'nextgen_is_verified', $value );
        },
        'schema' => array(
            'description' => 'Profile Verification Status',
            'type'        => 'boolean',
        ),
    ));

    // Note moyenne
    register_rest_field( 'user', 'average_rating', array(
        'get_callback' => function( $user ) {
            return (float) get_user_meta( $user['id'], 'nextgen_average_rating', true ) ?: 0;
        },
        'schema' => array(
            'description' => 'Average Rating',
            'type'        => 'number',
        ),
    ));

    // Nombre d'avis
    register_rest_field( 'user', 'review_count', array(
        'get_callback' => function( $user ) {
            return (int) get_user_meta( $user['id'], 'nextgen_review_count', true ) ?: 0;
        },
        'schema' => array(
            'description' => 'Review Count',
            'type'        => 'integer',
        ),
    ));

    // Téléphone
    register_rest_field( 'user', 'phone', array(
        'get_callback' => function( $user ) {
            return get_user_meta( $user['id'], 'nextgen_phone', true );
        },
        'update_callback' => function( $value, $user ) {
            return update_user_meta( $user->ID, 'nextgen_phone', sanitize_text_field( $value ) );
        },
        'schema' => array(
            'description' => 'Phone Number',
            'type'        => 'string',
        ),
    ));

    // Adresse
    register_rest_field( 'user', 'address', array(
        'get_callback' => function( $user ) {
            return get_user_meta( $user['id'], 'nextgen_address', true );
        },
        'update_callback' => function( $value, $user ) {
            return update_user_meta( $user->ID, 'nextgen_address', sanitize_text_field( $value ) );
        },
        'schema' => array(
            'description' => 'Address',
            'type'        => 'string',
        ),
    ));

    // Code postal
    register_rest_field( 'user', 'postal_code', array(
        'get_callback' => function( $user ) {
            return get_user_meta( $user['id'], 'nextgen_postal_code', true );
        },
        'update_callback' => function( $value, $user ) {
            return update_user_meta( $user->ID, 'nextgen_postal_code', sanitize_text_field( $value ) );
        },
        'schema' => array(
            'description' => 'Postal Code',
            'type'        => 'string',
        ),
    ));

    // IBAN (pour prestataires)
    register_rest_field( 'user', 'iban', array(
        'get_callback' => function( $user ) {
            $user_data = get_userdata( $user['id'] );
            if ( in_array( 'nextgen_talent', $user_data->roles ) ) {
                return get_user_meta( $user['id'], 'nextgen_iban', true );
            }
            return null;
        },
        'update_callback' => function( $value, $user ) {
            return update_user_meta( $user->ID, 'nextgen_iban', sanitize_text_field( $value ) );
        },
        'schema' => array(
            'description' => 'IBAN for Payouts',
            'type'        => 'string',
        ),
    ));
});

/**
 * Endpoint personnalisé pour l'inscription
 * Note: L'endpoint /nextgen/v1/register est maintenant géré par eloo-api-endpoints.php
 * Ce code a été déplacé pour éviter les conflits
 */

/**
 * Endpoint pour mettre à jour le profil
 */
add_action( 'rest_api_init', function() {
    register_rest_route( 'nextgen/v1', '/profile/(?P<id>\d+)', array(
        'methods'  => 'PUT',
        'callback' => 'nextgen_update_profile',
        'permission_callback' => function( $request ) {
            return is_user_logged_in() && get_current_user_id() == $request['id'];
        }
    ));
});

function nextgen_update_profile( $request ) {
    $user_id = $request['id'];
    $params = $request->get_json_params();

    // Mettre à jour les champs autorisés
    $allowed_fields = array( 'first_name', 'last_name', 'phone', 'address', 'postal_code', 'iban' );

    foreach ( $allowed_fields as $field ) {
        if ( isset( $params[$field] ) ) {
            $meta_key = ( in_array( $field, array( 'first_name', 'last_name' ) ) )
                ? $field
                : 'nextgen_' . $field;

            update_user_meta( $user_id, $meta_key, sanitize_text_field( $params[$field] ) );
        }
    }

    return array(
        'success' => true,
        'message' => 'Profil mis à jour avec succès'
    );
}

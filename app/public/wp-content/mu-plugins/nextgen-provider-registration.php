<?php
/**
 * Plugin Name: NEXTGEN Provider Registration
 * Description: Endpoints d'inscription personnalisés pour les prestataires NEXTGEN
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

// Sécurité : empêcher l'accès direct
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// DEBUG: Vérifier que ce fichier est chargé
error_log( '=== NEXTGEN PROVIDER REGISTRATION PLUGIN LOADED AT ' . date('Y-m-d H:i:s') . ' ===' );

/**
 * Endpoint d'inscription prestataire multi-étapes
 */
add_action( 'rest_api_init', function() {

    // Endpoint : Inscription prestataire complète
    register_rest_route( 'nextgen/v1', '/register-provider', array(
        'methods'  => 'POST',
        'callback' => 'nextgen_register_provider',
        'permission_callback' => '__return_true',
        'args' => array(
            'name' => array(
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'email' => array(
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_email',
                'validate_callback' => 'is_email',
            ),
            'password' => array(
                'required' => true,
                'type' => 'string',
            ),
            'category_id' => array(
                'required' => true,
                'type' => 'integer',
            ),
            'city' => array(
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'hourly_rate' => array(
                'required' => true,
                'type' => 'string',
            ),
            'bio' => array(
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_textarea_field',
            ),
        ),
    ));

    // Endpoint : Upload documents KYC
    register_rest_route( 'nextgen/v1', '/upload-kyc', array(
        'methods'  => 'POST',
        'callback' => 'nextgen_upload_kyc_documents',
        'permission_callback' => 'is_user_logged_in',
    ));

    // Endpoint : Récupérer les champs personnalisés d'une catégorie
    register_rest_route( 'nextgen/v1', '/category-fields/(?P<id>\d+)', array(
        'methods'  => 'GET',
        'callback' => 'nextgen_get_category_custom_fields',
        'permission_callback' => '__return_true',
        'args' => array(
            'id' => array(
                'validate_callback' => function($param) {
                    return is_numeric($param);
                }
            ),
        ),
    ));

    // Endpoint public : Récupérer tous les profils prestataires
    error_log( '=== REGISTERING /nextgen/v1/providers ENDPOINT ===' );
    register_rest_route( 'nextgen/v1', '/providers', array(
        'methods'  => 'GET',
        'callback' => 'nextgen_get_all_providers',
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
 * Fonction d'inscription prestataire
 */
function nextgen_register_provider( $request ) {
    $params = $request->get_params();

    // Validation
    if ( email_exists( $params['email'] ) ) {
        return new WP_Error(
            'email_exists',
            'Un compte existe déjà avec cette adresse email.',
            array( 'status' => 400 )
        );
    }

    if ( username_exists( $params['email'] ) ) {
        return new WP_Error(
            'username_exists',
            'Ce nom d\'utilisateur est déjà pris.',
            array( 'status' => 400 )
        );
    }

    // Création de l'utilisateur
    $user_id = wp_create_user(
        $params['email'], // username = email
        $params['password'],
        $params['email']
    );

    if ( is_wp_error( $user_id ) ) {
        return new WP_Error(
            'user_creation_failed',
            'Impossible de créer le compte utilisateur.',
            array( 'status' => 500 )
        );
    }

    // Mettre à jour le display name
    wp_update_user( array(
        'ID' => $user_id,
        'display_name' => $params['name'],
        'first_name' => $params['name'],
    ));

    // Assigner le rôle "provider" (prestataire)
    $user = new WP_User( $user_id );
    $user->set_role( 'nextgen_talent' );

    // Créer un profil prestataire (custom post type nextgen_service)
    $service_id = wp_insert_post( array(
        'post_type' => 'nextgen_service',
        'post_title' => $params['name'] . ' - ' . get_term( $params['category_id'] )->name,
        'post_status' => 'draft', // En brouillon jusqu'à validation KYC
        'post_author' => $user_id,
        'post_content' => $params['bio'],
    ));

    if ( is_wp_error( $service_id ) ) {
        // Rollback : supprimer l'utilisateur si échec
        wp_delete_user( $user_id );
        return new WP_Error(
            'service_creation_failed',
            'Impossible de créer le profil prestataire.',
            array( 'status' => 500 )
        );
    }

    // Ajouter les métadonnées (compatible avec ou sans ACF)
    if ( function_exists( 'update_field' ) ) {
        // Si ACF est installé, utiliser update_field
        update_field( 'hourly_rate', floatval($params['hourly_rate']), $service_id );
        update_field( 'location', $params['city'], $service_id );
        update_field( 'member_since', date('Y'), $service_id );
        update_field( 'is_verified', false, $service_id );
        update_field( 'is_top_provider', false, $service_id );
        update_field( 'completed_orders', 0, $service_id );
        update_field( 'rating', 0, $service_id );
        update_field( 'response_time', '~24 heures', $service_id );
    } else {
        // Sinon, utiliser update_post_meta directement
        update_post_meta( $service_id, 'hourly_rate', floatval($params['hourly_rate']) );
        update_post_meta( $service_id, 'location', $params['city'] );
        update_post_meta( $service_id, 'city', $params['city'] ); // Aussi sauvegarder comme 'city'
        update_post_meta( $service_id, 'member_since', date('Y') );
        update_post_meta( $service_id, 'is_verified', false );
        update_post_meta( $service_id, 'is_top_provider', false );
        update_post_meta( $service_id, 'completed_orders', 0 );
        update_post_meta( $service_id, 'rating', 0 );
        update_post_meta( $service_id, 'response_time', '~24 heures' );
    }

    // Assigner la catégorie
    wp_set_object_terms( $service_id, intval($params['category_id']), 'nextgen_service_category' );

    // Stocker les champs personnalisés (étape 3)
    if ( isset( $params['custom_fields'] ) && is_array( $params['custom_fields'] ) ) {
        foreach ( $params['custom_fields'] as $field_key => $field_value ) {
            if ( function_exists( 'update_field' ) ) {
                update_field( $field_key, $field_value, $service_id );
            } else {
                update_post_meta( $service_id, $field_key, $field_value );
            }
        }
    }

    // Stocker l'ID du service dans les user meta
    update_user_meta( $user_id, 'nextgen_service_id', $service_id );

    // Générer un token JWT pour connexion automatique
    $token = '';
    // Désactivé temporairement car génère une erreur
    // Le frontend peut utiliser le login standard à la place
    /*
    if ( class_exists( 'Jwt_Auth_Public' ) ) {
        $jwt = new Jwt_Auth_Public( 'jwt-auth', '1.0.0' );
        $token = $jwt->generate_token( $request ); // Doit passer $request, pas $user
    }
    */

    return array(
        'success' => true,
        'message' => 'Inscription réussie ! Votre profil sera activé après validation de vos documents.',
        'user_id' => $user_id,
        'service_id' => $service_id,
        'token' => $token, // Pour connexion automatique
        'user' => array(
            'id' => $user_id,
            'email' => $params['email'],
            'name' => $params['name'],
            'role' => 'nextgen_provider',
        ),
    );
}

/**
 * Upload des documents KYC (pièce d'identité, KBIS)
 */
function nextgen_upload_kyc_documents( $request ) {
    $user_id = get_current_user_id();

    if ( ! $user_id ) {
        return new WP_Error(
            'not_logged_in',
            'Vous devez être connecté pour uploader des documents.',
            array( 'status' => 401 )
        );
    }

    $uploaded_files = array();

    // Upload pièce d'identité
    if ( isset( $_FILES['identity_document'] ) ) {
        require_once( ABSPATH . 'wp-admin/includes/file.php' );
        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        require_once( ABSPATH . 'wp-admin/includes/media.php' );

        $identity_id = media_handle_upload( 'identity_document', 0 );

        if ( is_wp_error( $identity_id ) ) {
            return new WP_Error(
                'upload_failed',
                'Échec de l\'upload de la pièce d\'identité.',
                array( 'status' => 500 )
            );
        }

        update_user_meta( $user_id, 'nextgen_identity_document', $identity_id );
        $uploaded_files['identity_document'] = wp_get_attachment_url( $identity_id );
    }

    // Upload KBIS (optionnel)
    if ( isset( $_FILES['kbis_document'] ) ) {
        $kbis_id = media_handle_upload( 'kbis_document', 0 );

        if ( ! is_wp_error( $kbis_id ) ) {
            update_user_meta( $user_id, 'nextgen_kbis_document', $kbis_id );
            $uploaded_files['kbis_document'] = wp_get_attachment_url( $kbis_id );
        }
    }

    // Stocker le SIRET et nom d'entreprise
    $params = $request->get_params();
    if ( isset( $params['siret_number'] ) ) {
        update_user_meta( $user_id, 'nextgen_siret', sanitize_text_field( $params['siret_number'] ) );
    }
    if ( isset( $params['company_name'] ) ) {
        update_user_meta( $user_id, 'nextgen_company_name', sanitize_text_field( $params['company_name'] ) );
    }

    // Marquer le profil comme "en attente de vérification"
    $service_id = get_user_meta( $user_id, 'nextgen_service_id', true );
    if ( $service_id ) {
        update_field( 'kyc_status', 'pending', $service_id );
    }

    return array(
        'success' => true,
        'message' => 'Documents uploadés avec succès. Votre profil sera vérifié sous 48h.',
        'uploaded_files' => $uploaded_files,
    );
}

/**
 * Récupérer les champs personnalisés d'une catégorie
 */
function nextgen_get_category_custom_fields( $request ) {
    $category_id = $request['id'];

    // Définir les champs personnalisés par catégorie
    $custom_fields_by_category = array(
        // Catégorie Plomberie (exemple)
        'plomberie' => array(
            array(
                'key' => 'years_experience',
                'label' => 'Années d\'expérience',
                'type' => 'number',
                'required' => true,
            ),
            array(
                'key' => 'specialties',
                'label' => 'Spécialités',
                'type' => 'checkbox',
                'choices' => array(
                    'leak_repair' => 'Réparation de fuites',
                    'installation' => 'Installation sanitaire',
                    'emergency' => 'Dépannage d\'urgence',
                    'heating' => 'Chauffage',
                ),
            ),
            array(
                'key' => 'certifications',
                'label' => 'Certifications',
                'type' => 'text',
                'required' => false,
            ),
        ),

        // Catégorie Baby-sitting
        'baby-sitting' => array(
            array(
                'key' => 'age_groups',
                'label' => 'Âge des enfants pris en charge',
                'type' => 'checkbox',
                'choices' => array(
                    '0-2' => '0-2 ans (bébés)',
                    '3-6' => '3-6 ans',
                    '7-12' => '7-12 ans',
                    '13+' => '13+ ans (adolescents)',
                ),
            ),
            array(
                'key' => 'diplomas',
                'label' => 'Diplômes / Certifications',
                'type' => 'text',
                'required' => false,
                'placeholder' => 'Ex: CAP Petite Enfance, BAFA',
            ),
            array(
                'key' => 'first_aid',
                'label' => 'Formation premiers secours',
                'type' => 'radio',
                'choices' => array(
                    'yes' => 'Oui',
                    'no' => 'Non',
                ),
            ),
        ),

        // Catégorie Ménage
        'menage' => array(
            array(
                'key' => 'service_types',
                'label' => 'Types de services proposés',
                'type' => 'checkbox',
                'choices' => array(
                    'regular_cleaning' => 'Ménage régulier',
                    'deep_cleaning' => 'Grand nettoyage',
                    'ironing' => 'Repassage',
                    'windows' => 'Vitres',
                ),
            ),
            array(
                'key' => 'has_equipment',
                'label' => 'Possédez-vous votre propre matériel ?',
                'type' => 'radio',
                'choices' => array(
                    'yes' => 'Oui',
                    'no' => 'Non',
                ),
            ),
        ),

        // Catégorie Électricité
        'electricite' => array(
            array(
                'key' => 'electrical_license',
                'label' => 'Numéro de licence électricien',
                'type' => 'text',
                'required' => true,
            ),
            array(
                'key' => 'electrical_specialties',
                'label' => 'Spécialités',
                'type' => 'checkbox',
                'choices' => array(
                    'residential' => 'Résidentiel',
                    'commercial' => 'Commercial',
                    'industrial' => 'Industriel',
                    'solar' => 'Panneaux solaires',
                ),
            ),
        ),

        // Catégorie Jardinage
        'jardinage' => array(
            array(
                'key' => 'garden_services',
                'label' => 'Services de jardinage',
                'type' => 'checkbox',
                'choices' => array(
                    'lawn_mowing' => 'Tonte de pelouse',
                    'hedge_trimming' => 'Taille de haies',
                    'tree_pruning' => 'Élagage d\'arbres',
                    'planting' => 'Plantation',
                    'landscaping' => 'Aménagement paysager',
                ),
            ),
            array(
                'key' => 'has_tools',
                'label' => 'Possédez-vous vos outils de jardinage ?',
                'type' => 'radio',
                'choices' => array(
                    'yes' => 'Oui, tout le matériel',
                    'partial' => 'Partiellement',
                    'no' => 'Non',
                ),
            ),
        ),

        // Catégorie Cours particuliers
        'cours-particuliers' => array(
            array(
                'key' => 'subjects',
                'label' => 'Matières enseignées',
                'type' => 'checkbox',
                'choices' => array(
                    'maths' => 'Mathématiques',
                    'french' => 'Français',
                    'english' => 'Anglais',
                    'sciences' => 'Sciences',
                    'history' => 'Histoire',
                    'music' => 'Musique',
                    'other' => 'Autre',
                ),
            ),
            array(
                'key' => 'education_level',
                'label' => 'Niveau d\'enseignement',
                'type' => 'select',
                'choices' => array(
                    'primary' => 'Primaire',
                    'middle_school' => 'Collège',
                    'high_school' => 'Lycée',
                    'university' => 'Université',
                ),
            ),
            array(
                'key' => 'teaching_diploma',
                'label' => 'Diplôme d\'enseignement',
                'type' => 'text',
                'required' => false,
            ),
        ),
    );

    // Récupérer le slug de la catégorie
    $category = get_term( $category_id, 'nextgen_service_category' );

    if ( is_wp_error( $category ) || ! $category ) {
        return array(
            'fields' => array(),
            'message' => 'Aucun champ personnalisé défini pour cette catégorie.',
        );
    }

    $category_slug = $category->slug;

    return array(
        'category' => array(
            'id' => $category->term_id,
            'name' => $category->name,
            'slug' => $category_slug,
        ),
        'fields' => isset( $custom_fields_by_category[$category_slug] )
            ? $custom_fields_by_category[$category_slug]
            : array(),
    );
}

/**
 * Récupérer tous les profils prestataires (endpoint public)
 */
function nextgen_get_all_providers( $request ) {
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
        $user_data = array(
            'id' => $user->ID,
            'name' => $user->display_name,
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

        // Récupérer TOUS les champs ACF du prestataire
        if ( function_exists( 'get_fields' ) ) {
            $acf_fields = get_fields( 'user_' . $user->ID );
            $user_data['acf'] = $acf_fields ?: new stdClass(); // Objet vide si pas de champs
        } else {
            $user_data['acf'] = new stdClass();
        }

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

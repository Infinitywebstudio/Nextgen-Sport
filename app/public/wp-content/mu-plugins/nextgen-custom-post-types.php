<?php
/**
 * Plugin Name: ELOO Custom Post Types
 * Description: Types de posts personnalisés pour la marketplace ELOO
 * Version: 1.0.0
 * Author: ELOO Team
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enregistrer les Custom Post Types pour ELOO
 */
add_action( 'init', 'nextgen_register_post_types' );

function nextgen_register_post_types() {

    /*
    /**
     * POST TYPE : SERVICES / GIGS
     * Équivalent des "gigs" de DreamGigs
     *
    register_post_type( 'nextgen_service', array(
        'labels' => array(
            'name'               => 'Services',
            'singular_name'      => 'Service',
            'add_new'            => 'Ajouter un service',
            'add_new_item'       => 'Ajouter un nouveau service',
            'edit_item'          => 'Modifier le service',
            'new_item'           => 'Nouveau service',
            'view_item'          => 'Voir le service',
            'search_items'       => 'Rechercher des services',
            'not_found'          => 'Aucun service trouvé',
            'not_found_in_trash' => 'Aucun service dans la corbeille',
            'all_items'          => 'Tous les services'
        ),
        'public'              => true,
        'has_archive'         => true,
        'show_in_rest'        => true, // Important pour API REST
        'rest_base'           => 'services',
        'menu_icon'           => 'dashicons-hammer',
        'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'author', 'comments' ),
        'rewrite'             => array( 'slug' => 'services' ),
        'capability_type'     => array( 'nextgen_service', 'nextgen_services' ),
        'map_meta_cap'        => true,
        'hierarchical'        => false,
        'menu_position'       => 5,
        'taxonomies'          => array( 'nextgen_service_category' )
    ));

    /**
     * POST TYPE : MISSIONS
     * Commandes/demandes des clients
     *
    register_post_type( 'nextgen_mission', array(
        'labels' => array(
            'name'               => 'Missions',
            'singular_name'      => 'Mission',
            'add_new'            => 'Créer une mission',
            'add_new_item'       => 'Créer une nouvelle mission',
            'edit_item'          => 'Modifier la mission',
            'new_item'           => 'Nouvelle mission',
            'view_item'          => 'Voir la mission',
            'search_items'       => 'Rechercher des missions',
            'not_found'          => 'Aucune mission trouvée',
            'not_found_in_trash' => 'Aucune mission dans la corbeille',
            'all_items'          => 'Toutes les missions'
        ),
        'public'              => true,
        'has_archive'         => true,
        'show_in_rest'        => true,
        'rest_base'           => 'missions',
        'menu_icon'           => 'dashicons-clipboard',
        'supports'            => array( 'title', 'editor', 'thumbnail', 'author', 'comments' ),
        'rewrite'             => array( 'slug' => 'missions' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 6
    ));

    /**
     * POST TYPE : REVIEWS / AVIS
     * Système de notation et avis
     *
    register_post_type( 'nextgen_review', array(
        'labels' => array(
            'name'               => 'Avis',
            'singular_name'      => 'Avis',
            'add_new'            => 'Ajouter un avis',
            'add_new_item'       => 'Ajouter un nouvel avis',
            'edit_item'          => 'Modifier l\'avis',
            'new_item'           => 'Nouvel avis',
            'view_item'          => 'Voir l\'avis',
            'search_items'       => 'Rechercher des avis',
            'not_found'          => 'Aucun avis trouvé',
            'not_found_in_trash' => 'Aucun avis dans la corbeille',
            'all_items'          => 'Tous les avis'
        ),
        'public'              => true,
        'has_archive'         => false,
        'show_in_rest'        => true,
        'rest_base'           => 'reviews',
        'menu_icon'           => 'dashicons-star-filled',
        'supports'            => array( 'title', 'editor', 'author' ),
        'rewrite'             => array( 'slug' => 'reviews' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 7
    ));

    /**
     * POST TYPE : TRANSACTIONS
     * Historique des paiements
     *
    register_post_type( 'nextgen_transaction', array(
        'labels' => array(
            'name'               => 'Transactions',
            'singular_name'      => 'Transaction',
            'all_items'          => 'Toutes les transactions'
        ),
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'rest_base'           => 'transactions',
        'menu_icon'           => 'dashicons-money-alt',
        'supports'            => array( 'title', 'author' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 8
    ));
    */

    /**
     * POST TYPE : PROFILS TALENTS
     * Profils détaillés des talents (bio, stats, vidéos, etc.)
     */
    register_post_type( 'talent_profile', array(
        'labels' => array(
            'name'               => 'Profils Talents',
            'singular_name'      => 'Profil Talent',
            'add_new'            => 'Ajouter un profil',
            'add_new_item'       => 'Ajouter un nouveau profil',
            'edit_item'          => 'Modifier le profil',
            'new_item'           => 'Nouveau profil',
            'view_item'          => 'Voir le profil',
            'search_items'       => 'Rechercher des profils',
            'not_found'          => 'Aucun profil trouvé',
            'not_found_in_trash' => 'Aucun profil dans la corbeille',
            'all_items'          => 'Tous les profils'
        ),
        'public'              => true,
        'has_archive'         => true,
        'show_in_rest'        => true,
        'rest_base'           => 'talent-profiles',
        'menu_icon'           => 'dashicons-groups',
        'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
        'rewrite'             => array( 'slug' => 'talent' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 9
    ));
}

/**
 * Enregistrer les taxonomies (catégories)
 */
add_action( 'init', 'nextgen_register_taxonomies' );

function nextgen_register_taxonomies() {

    /**
     * TAXONOMY : Catégories de sports
     * Football, Basketball, etc.
     */
    register_taxonomy( 'sport_category', array( 'talent_profile' ), array(
        'labels' => array(
            'name'              => 'Sports',
            'singular_name'     => 'Sport',
            'search_items'      => 'Rechercher des sports',
            'all_items'         => 'Tous les sports',
            'parent_item'       => 'Sport parent',
            'parent_item_colon' => 'Sport parent :',
            'edit_item'         => 'Modifier le sport',
            'update_item'       => 'Mettre à jour le sport',
            'add_new_item'      => 'Ajouter un nouveau sport',
            'new_item_name'     => 'Nom du nouveau sport',
            'menu_name'         => 'Sports'
        ),
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'rest_base'         => 'sports',
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'sport' )
    ));

    /**
     * TAXONOMY : Compétences / Skills
     * Tags pour les talents
     */
    register_taxonomy( 'talent_skill', array( 'talent_profile' ), array(
        'labels' => array(
            'name'          => 'Compétences de talent',
            'singular_name' => 'Compétence',
            'search_items'  => 'Rechercher des compétences',
            'all_items'     => 'Toutes les compétences',
            'edit_item'     => 'Modifier la compétence',
            'update_item'   => 'Mettre à jour la compétence',
            'add_new_item'  => 'Ajouter une nouvelle compétence',
            'menu_name'     => 'Compétences'
        ),
        'hierarchical'      => false, // Comme les tags WordPress
        'show_ui'           => true,
        'show_in_rest'      => true,
        'rest_base'         => 'talent-skills',
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'competence-talent' )
    ));

    /*
    /**
     * TAXONOMY : Statuts de mission
     * En attente, En cours, Terminée, Annulée
     *
    register_taxonomy( 'nextgen_mission_status', array( 'nextgen_mission' ), array(
        'labels' => array(
            'name'          => 'Statuts de mission',
            'singular_name' => 'Statut',
            'menu_name'     => 'Statuts'
        ),
        'hierarchical'      => false,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'rest_base'         => 'mission-statuses',
        'show_admin_column' => true,
        'public'            => false
    ));
    */
}



/*
/**
 * Enregistrer les métadonnées pour qu'elles soient éditables via REST API
 *
add_action( 'init', 'nextgen_register_service_post_meta' );

function nextgen_register_service_post_meta() {
    register_post_meta( 'nextgen_service', 'prix', array(
        'type'              => 'string',
        'single'            => true,
        'show_in_rest'      => true,
        'sanitize_callback' => 'sanitize_text_field',
    ));

    register_post_meta( 'nextgen_service', 'duree', array(
        'type'              => 'string',
        'single'            => true,
        'show_in_rest'      => true,
        'sanitize_callback' => 'sanitize_text_field',
    ));

    register_post_meta( 'nextgen_service', 'localisation', array(
        'type'              => 'string',
        'single'            => true,
        'show_in_rest'      => true,
        'sanitize_callback' => 'sanitize_text_field',
    ));

    register_post_meta( 'nextgen_service', 'disponibilite', array(
        'type'              => 'string',
        'single'            => true,
        'show_in_rest'      => true,
        'sanitize_callback' => 'sanitize_text_field',
    ));
}
*/

/**
 * Enregistrer les métadonnées pour les profils prestataires
 */
add_action( 'init', 'nextgen_register_provider_profile_post_meta' );

function nextgen_register_provider_profile_post_meta() {
    $meta_fields = [
        'user_id'            => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'bio'                => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_textarea_field'],
        'subscription_level' => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
        'height'             => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'weight'             => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'preferred_foot'     => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
        'position'           => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
        'location'           => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
        'phone'              => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
        'website'            => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'esc_url_raw'],
        'portfolio_urls'     => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_textarea_field'],
        'rating'             => ['type' => 'number', 'single' => true, 'show_in_rest' => true],
        'follower_count'     => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'matches_played'     => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'goals'              => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'assists'            => ['type' => 'integer', 'single' => true, 'show_in_rest' => true],
        'is_verified'        => ['type' => 'boolean', 'single' => true, 'show_in_rest' => true],
        'is_top_talent'      => ['type' => 'boolean', 'single' => true, 'show_in_rest' => true],
        'languages'          => ['type' => 'string', 'single' => true, 'show_in_rest' => true, 'sanitize_callback' => 'sanitize_text_field'],
    ];

    foreach ($meta_fields as $key => $args) {
        register_post_meta('talent_profile', $key, $args);
    }
}

/*
/**
 * Exposer les métadonnées personnalisées via REST API
 * Grouper les meta dans un objet "meta" pour faciliter l'accès
 *
add_action( 'rest_api_init', 'nextgen_register_service_meta_fields' );

function nextgen_register_service_meta_fields() {
    // Créer un champ "meta" qui contient tous les custom fields
    register_rest_field( 'nextgen_service', 'meta', array(
        'get_callback' => function( $post ) {
            return array(
                'prix'          => get_post_meta( $post['id'], 'prix', true ),
                'duree'         => get_post_meta( $post['id'], 'duree', true ),
                'localisation'  => get_post_meta( $post['id'], 'localisation', true ),
                'disponibilite' => get_post_meta( $post['id'], 'disponibilite', true ),
            );
        },
        'update_callback' => function( $meta_values, $post ) {
            if ( isset( $meta_values['prix'] ) ) {
                update_post_meta( $post->ID, 'prix', sanitize_text_field( $meta_values['prix'] ) );
            }
            if ( isset( $meta_values['duree'] ) ) {
                update_post_meta( $post->ID, 'duree', sanitize_text_field( $meta_values['duree'] ) );
            }
            if ( isset( $meta_values['localisation'] ) ) {
                update_post_meta( $post->ID, 'localisation', sanitize_text_field( $meta_values['localisation'] ) );
            }
            if ( isset( $meta_values['disponibilite'] ) ) {
                update_post_meta( $post->ID, 'disponibilite', sanitize_text_field( $meta_values['disponibilite'] ) );
            }
            return true;
        },
        'schema' => array(
            'description' => 'Métadonnées du service',
            'type'        => 'object',
        ),
    ));
}
*/

/**
 * Exposer les métadonnées des profils prestataires via REST API
 */
add_action( 'rest_api_init', 'nextgen_register_talent_profile_meta_fields' );

function nextgen_register_talent_profile_meta_fields() {
    register_rest_field( 'talent_profile', 'profile_meta', array(
        'get_callback' => function( $post ) {
            $meta_keys = array_keys(nextgen_get_talent_profile_fields_with_callbacks());
            $meta = [];
            foreach ($meta_keys as $key) {
                $meta[$key] = get_post_meta($post['id'], $key, true);
            }
            return $meta;
        },
        'update_callback' => function( $meta_values, $post ) {
            $fields = nextgen_get_talent_profile_fields_with_callbacks();
            foreach ( $fields as $field => $sanitize_fn ) {
                if ( isset( $meta_values[$field] ) ) {
                    update_post_meta( $post->ID, $field, call_user_func($sanitize_fn, $meta_values[$field]) );
                }
            }
            return true;
        },
        'schema' => array(
            'description' => 'Métadonnées du profil talent',
            'type'        => 'object',
        ),
    ));
}

function nextgen_get_talent_profile_fields_with_callbacks() {
     return array(
        'user_id'            => 'intval',
        'bio'                => 'sanitize_textarea_field',
        'subscription_level' => 'sanitize_text_field',
        'height'             => 'intval',
        'weight'             => 'intval',
        'preferred_foot'     => 'sanitize_text_field',
        'position'           => 'sanitize_text_field',
        'location'           => 'sanitize_text_field',
        'phone'              => 'sanitize_text_field',
        'website'            => 'esc_url_raw',
        'portfolio_urls'     => 'sanitize_textarea_field',
        'rating'             => 'floatval',
        'follower_count'     => 'intval',
        'matches_played'     => 'intval',
        'goals'              => 'intval',
        'assists'            => 'intval',
        'is_verified'        => 'rest_sanitize_boolean',
        'is_top_talent'      => 'rest_sanitize_boolean',
        'languages'          => 'sanitize_text_field',
    );
}

/*
/**
 * Ajouter des colonnes personnalisées dans l'admin
 *
add_filter( 'manage_nextgen_service_posts_columns', 'nextgen_service_columns' );
function nextgen_service_columns( $columns ) {
    $columns['author']   = 'Prestataire';
    $columns['category'] = 'Catégorie';
    return $columns;
}

add_filter( 'manage_nextgen_mission_posts_columns', 'nextgen_mission_columns' );
function nextgen_mission_columns( $columns ) {
    $columns['author'] = 'Client';
    $columns['status'] = 'Statut';
    return $columns;
}
*/

add_filter( 'manage_talent_profile_posts_columns', 'nextgen_talent_profile_columns' );
function nextgen_talent_profile_columns( $columns ) {
    $columns['author'] = 'Utilisateur';
    $columns['subscription_level'] = 'Abonnement';
    $columns['is_verified'] = 'Vérifié';
    $columns['is_top_talent'] = 'Top Talent';
    return $columns;
}

add_action( 'manage_talent_profile_posts_custom_column', 'nextgen_talent_profile_column_content', 10, 2 );
function nextgen_talent_profile_column_content( $column, $post_id ) {
    switch ( $column ) {
        case 'subscription_level':
            $level = get_post_meta( $post_id, 'subscription_level', true );
            echo esc_html( $level ) ? esc_html( $level ) : 'Aucun';
            break;
        case 'is_verified':
            $verified = get_post_meta( $post_id, 'is_verified', true );
            echo $verified ? '✅ Oui' : '❌ Non';
            break;
        case 'is_top_talent':
            $top_talent = get_post_meta( $post_id, 'is_top_talent', true );
            echo $top_talent ? '🏆 Oui' : '― Non';
            break;
    }
}

/**
 * Ajouter les metaboxes pour éditer les métadonnées des profils talents
 */
add_action( 'add_meta_boxes', 'nextgen_talent_profile_add_meta_boxes' );

function nextgen_talent_profile_add_meta_boxes() {
    add_meta_box( 'nextgen_talent_profile_info', 'Informations du Profil', 'nextgen_talent_profile_info_metabox_callback', 'talent_profile', 'normal', 'high' );
    add_meta_box( 'nextgen_talent_profile_professional', 'Carrière Sportive', 'nextgen_talent_profile_professional_metabox_callback', 'talent_profile', 'normal', 'high' );
    add_meta_box( 'nextgen_talent_profile_stats', 'Statistiques et Badges', 'nextgen_talent_profile_stats_metabox_callback', 'talent_profile', 'side', 'default' );
}

/**
 * Metabox : Informations du profil
 */
function nextgen_talent_profile_info_metabox_callback( $post ) {
    wp_nonce_field( 'nextgen_talent_profile_save_meta', 'nextgen_talent_profile_nonce' );
    $meta = get_post_meta( $post->ID );
    ?>
    <table class="form-table">
        <tr><th><label for="bio">Biographie</label></th><td><textarea id="bio" name="bio" rows="5" class="large-text"><?php echo esc_textarea( $meta['bio'][0] ?? '' ); ?></textarea><p class="description">Description du talent</p></td></tr>
        <tr><th><label for="height">Taille (cm)</label></th><td><input type="number" id="height" name="height" value="<?php echo esc_attr( $meta['height'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="weight">Poids (kg)</label></th><td><input type="number" id="weight" name="weight" value="<?php echo esc_attr( $meta['weight'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="preferred_foot">Pied préféré</label></th><td><input type="text" id="preferred_foot" name="preferred_foot" value="<?php echo esc_attr( $meta['preferred_foot'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="position">Poste</label></th><td><input type="text" id="position" name="position" value="<?php echo esc_attr( $meta['position'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="location">Localisation</label></th><td><input type="text" id="location" name="location" value="<?php echo esc_attr( $meta['location'][0] ?? '' ); ?>" class="regular-text" /><p class="description">Ville, Pays</p></td></tr>
        <tr><th><label for="phone">Téléphone</label></th><td><input type="text" id="phone" name="phone" value="<?php echo esc_attr( $meta['phone'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="website">Site web</label></th><td><input type="url" id="website" name="website" value="<?php echo esc_url( $meta['website'][0] ?? '' ); ?>" class="regular-text" /></td></tr>
        <tr><th><label for="languages">Langues parlées</label></th><td><input type="text" id="languages" name="languages" value="<?php echo esc_attr( $meta['languages'][0] ?? '' ); ?>" class="regular-text" /><p class="description">Séparées par des virgules</p></td></tr>
        <tr><th><label for="portfolio_urls">URLs du portfolio vidéo</label></th><td><textarea id="portfolio_urls" name="portfolio_urls" rows="4" class="large-text"><?php echo esc_textarea( $meta['portfolio_urls'][0] ?? '' ); ?></textarea><p class="description">Une URL par ligne</p></td></tr>
    </table>
    <?php
}

/**
 * Metabox : Carrière Sportive
 */
function nextgen_talent_profile_professional_metabox_callback( $post ) {
    $meta = get_post_meta( $post->ID );
    // Taxonomy for sports
    $selected_sports = wp_get_post_terms($post->ID, 'sport_category', array('fields' => 'names'));
    $selected_skills = wp_get_post_terms($post->ID, 'talent_skill', array('fields' => 'names'));
    ?>
    <table class="form-table">
        <tr><th><label for="sports">Sports</label></th><td><input type="text" id="sports" name="sports" value="<?php echo esc_attr( implode(', ', $selected_sports) ); ?>" class="large-text" /><p class="description">Séparés par des virgules (ex: Football, Basketball)</p></td></tr>
        <tr><th><label for="skills">Compétences</label></th><td><input type="text" id="skills" name="skills" value="<?php echo esc_attr( implode(', ', $selected_skills) ); ?>" class="large-text" /><p class="description">Séparés par des virgules (ex: Finition, Dribble)</p></td></tr>
        <tr><th><label for="certifications">Certifications et diplômes</label></th><td><textarea id="certifications" name="certifications" rows="4" class="large-text"><?php echo esc_textarea( $meta['certifications'][0] ?? '' ); ?></textarea><p class="description">Une certification par ligne</p></td></tr>
    </table>
    <?php
}

/**
 * Metabox : Statistiques et Badges
 */
function nextgen_talent_profile_stats_metabox_callback( $post ) {
    $meta = get_post_meta( $post->ID );
    ?>
    <p><label for="subscription_level"><strong>Niveau d'abonnement</strong></label><br><input type="text" id="subscription_level" name="subscription_level" value="<?php echo esc_attr( $meta['subscription_level'][0] ?? '' ); ?>" style="width: 100%;" /></p>
    <p><label for="rating"><strong>Note moyenne</strong></label><br><input type="number" id="rating" name="rating" value="<?php echo esc_attr( $meta['rating'][0] ?? '' ); ?>" step="0.1" min="0" max="5" style="width: 100%;" /></p>
    <p><label for="follower_count"><strong>Nombre d'abonnés</strong></label><br><input type="number" id="follower_count" name="follower_count" value="<?php echo esc_attr( $meta['follower_count'][0] ?? '' ); ?>" min="0" style="width: 100%;" /></p>
    <p><label for="matches_played"><strong>Matchs joués</strong></label><br><input type="number" id="matches_played" name="matches_played" value="<?php echo esc_attr( $meta['matches_played'][0] ?? '' ); ?>" min="0" style="width: 100%;" /></p>
    <p><label for="goals"><strong>Buts</strong></label><br><input type="number" id="goals" name="goals" value="<?php echo esc_attr( $meta['goals'][0] ?? '' ); ?>" min="0" style="width: 100%;" /></p>
    <p><label for="assists"><strong>Passes décisives</strong></label><br><input type="number" id="assists" name="assists" value="<?php echo esc_attr( $meta['assists'][0] ?? '' ); ?>" min="0" style="width: 100%;" /></p>
    <p><label><input type="checkbox" name="is_verified" value="1" <?php checked( $meta['is_verified'][0] ?? 0, 1 ); ?> /> <strong>Compte vérifié ✅</strong></label></p>
    <p><label><input type="checkbox" name="is_top_talent" value="1" <?php checked( $meta['is_top_talent'][0] ?? 0, 1 ); ?> /> <strong>Top Talent 🏆</strong></label></p>
    <?php
}

/**
 * Sauvegarder les métadonnées du profil talent
 */
add_action( 'save_post_talent_profile', 'nextgen_talent_profile_save_meta', 10, 2 );

function nextgen_talent_profile_save_meta( $post_id, $post ) {
    if ( ! isset( $_POST['nextgen_talent_profile_nonce'] ) || ! wp_verify_nonce( $_POST['nextgen_talent_profile_nonce'], 'nextgen_talent_profile_save_meta' ) ) return;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( ! current_user_can( 'edit_post', $post_id ) ) return;

    $fields_with_callbacks = nextgen_get_talent_profile_fields_with_callbacks();
    foreach ($fields_with_callbacks as $key => $sanitize_fn) {
        if (isset($_POST[$key])) {
            $value = $_POST[$key];
            if (is_callable($sanitize_fn)) {
                 update_post_meta( $post_id, $key, call_user_func($sanitize_fn, $value) );
            } else {
                 update_post_meta( $post_id, $key, sanitize_text_field($value) );
            }
        } elseif ($sanitize_fn === 'rest_sanitize_boolean') {
            update_post_meta( $post_id, $key, 0 );
        }
    }
    // Save sports and skills taxonomies
    $sports_input = isset($_POST['sports']) ? sanitize_text_field($_POST['sports']) : '';
    $sports_array = array_map('trim', explode(',', $sports_input));
    wp_set_post_terms($post_id, $sports_array, 'sport_category', false);

    $skills_input = isset($_POST['skills']) ? sanitize_text_field($_POST['skills']) : '';
    $skills_array = array_map('trim', explode(',', $skills_input));
    wp_set_post_terms($post_id, $skills_array, 'talent_skill', false);
}

/**
 * Ajouter un menu de premier niveau pour les catégories de sports
 */
add_action( 'admin_menu', 'nextgen_add_sport_categories_admin_menu' );

function nextgen_add_sport_categories_admin_menu() {
    add_menu_page(
        'Sports',                      // Titre de la page
        'Sports',                      // Titre du menu
        'manage_categories',           // Capacité requise
        'edit-tags.php?taxonomy=sport_category', // Slug du menu (URL directe)
        '',                            // Pas de fonction de callback
        'dashicons-performance',       // Icône
        10                             // Position (juste après 'Profils Talents')
    );
}

/**
 * Créer les catégories de sports par défaut au premier chargement
 */
add_action( 'init', 'nextgen_create_default_sport_categories', 20 );

function nextgen_create_default_sport_categories() {
    // Vérifier si les catégories de sports ont déjà été créées
    if ( get_option( 'nextgen_default_sport_categories_created' ) ) {
        return;
    }

    $default_sports = array(
        'Football',
        'Basketball',
        'Tennis',
        'Athlétisme',
        'Natation',
        'Cyclisme',
        'Rugby',
        'Volleyball',
        'Handball',
        'Judo',
        'Karaté',
        'Boxe',
        'Gymnastique',
        'Escalade',
        'Badminton',
        'Golf',
        'Hockey sur glace',
        'Ski Alpin',
        'Snowboard',
        'Surf'
    );

    foreach ( $default_sports as $sport ) {
        if ( ! term_exists( $sport, 'sport_category' ) ) {
            wp_insert_term( $sport, 'sport_category' );
        }
    }

    // Marquer que les catégories de sports ont été créées
    update_option( 'nextgen_default_sport_categories_created', true );
}


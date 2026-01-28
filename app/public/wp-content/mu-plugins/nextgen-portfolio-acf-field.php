<?php
/**
 * Plugin Name: NEXTGEN Portfolio ACF Field
 * Description: Ajoute les champs ACF pour le profil complet des prestataires
 * Version: 2.1.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// DEBUG: Log pour vérifier que le fichier est chargé
error_log('=== NEXTGEN Portfolio ACF Field LOADED ===');

/**
 * Créer le groupe de champs ACF pour le profil prestataire
 */
add_action('acf/include_fields', function() {
    error_log('=== ACF include_fields hook TRIGGERED ===');

    if (!function_exists('acf_add_local_field_group')) {
        error_log('=== ACF function NOT AVAILABLE ===');
        return;
    }

    error_log('=== ACF Adding field group... ===');

    acf_add_local_field_group(array(
        'key' => 'group_portfolio_gallery',
        'title' => 'Profil Prestataire NEXTGEN',
        'fields' => array(
            // ===== SECTION: PRÉSENTATION =====
            array(
                'key' => 'field_tab_presentation',
                'label' => 'Présentation',
                'name' => '',
                'type' => 'tab',
                'placement' => 'top',
            ),
            array(
                'key' => 'field_bio',
                'label' => 'Présentation / Bio',
                'name' => 'bio',
                'type' => 'wysiwyg',
                'instructions' => 'Décrivez votre expérience, vos compétences et ce qui vous distingue.',
                'required' => 0,
                'tabs' => 'basic',
                'toolbar' => 'basic',
                'media_upload' => 0,
                'default_value' => '',
                'delay' => 0,
            ),
            array(
                'key' => 'field_specialties',
                'label' => 'Services proposés',
                'name' => 'specialties',
                'type' => 'textarea',
                'instructions' => 'Listez vos services proposés, un par ligne.',
                'required' => 0,
                'default_value' => '',
                'placeholder' => "Exemple:\nNettoyage de bureaux\nEntretien de locaux\nVitrerie",
                'rows' => 6,
                'new_lines' => '',
            ),

            // ===== SECTION: LOCALISATION ET TARIF =====
            array(
                'key' => 'field_tab_location',
                'label' => 'Localisation & Tarif',
                'name' => '',
                'type' => 'tab',
                'placement' => 'top',
            ),
            array(
                'key' => 'field_category_name',
                'label' => 'Catégorie de Service',
                'name' => 'category_name',
                'type' => 'select',
                'instructions' => 'Sélectionnez votre catégorie de service principale.',
                'required' => 0,
                'choices' => array(
                    '' => '-- Sélectionner --',
                    'Plomberie' => 'Plomberie',
                    'Électricité' => 'Électricité',
                    'Ménage' => 'Ménage',
                    'Baby-sitting' => 'Baby-sitting',
                    'Jardinage' => 'Jardinage',
                    'Coiffure à domicile' => 'Coiffure à domicile',
                    'Dépannage informatique' => 'Dépannage informatique',
                    'Cours de soutien' => 'Cours de soutien',
                    'Réparation' => 'Réparation',
                    'Déménagement' => 'Déménagement',
                ),
                'default_value' => '',
                'allow_null' => 1,
                'multiple' => 0,
                'ui' => 1,
                'return_format' => 'value',
                'wrapper' => array('width' => '50'),
            ),
            array(
                'key' => 'field_city',
                'label' => 'Ville / Localisation',
                'name' => 'city',
                'type' => 'text',
                'instructions' => 'Ville où vous proposez vos services.',
                'required' => 0,
                'default_value' => '',
                'placeholder' => 'Ex: Luxembourg-Ville, Esch-sur-Alzette...',
                'wrapper' => array('width' => '50'),
            ),
            array(
                'key' => 'field_hourly_rate',
                'label' => 'Tarif Horaire (€)',
                'name' => 'hourly_rate',
                'type' => 'number',
                'instructions' => 'Votre tarif horaire en euros.',
                'required' => 0,
                'default_value' => '',
                'placeholder' => '25',
                'min' => 0,
                'max' => 500,
                'step' => 1,
                'prepend' => '€',
                'append' => '/ heure',
                'wrapper' => array('width' => '33'),
            ),

            // ===== SECTION: STATISTIQUES =====
            array(
                'key' => 'field_tab_stats',
                'label' => 'Statistiques',
                'name' => '',
                'type' => 'tab',
                'placement' => 'top',
            ),
            array(
                'key' => 'field_average_rating',
                'label' => 'Note Moyenne',
                'name' => 'average_rating',
                'type' => 'number',
                'instructions' => 'Note moyenne sur 5 étoiles.',
                'required' => 0,
                'default_value' => 0,
                'min' => 0,
                'max' => 5,
                'step' => 0.1,
                'append' => '/ 5 ⭐',
                'wrapper' => array('width' => '33'),
            ),
            array(
                'key' => 'field_review_count',
                'label' => 'Nombre d\'Avis',
                'name' => 'review_count',
                'type' => 'number',
                'instructions' => 'Nombre total d\'avis reçus.',
                'required' => 0,
                'default_value' => 0,
                'min' => 0,
                'append' => 'avis',
                'wrapper' => array('width' => '33'),
            ),
            array(
                'key' => 'field_completed_orders',
                'label' => 'Missions Réalisées',
                'name' => 'completed_orders',
                'type' => 'number',
                'instructions' => 'Nombre de missions complétées.',
                'required' => 0,
                'default_value' => 0,
                'min' => 0,
                'append' => 'missions',
                'wrapper' => array('width' => '33'),
            ),
            array(
                'key' => 'field_response_time',
                'label' => 'Temps de Réponse',
                'name' => 'response_time',
                'type' => 'text',
                'instructions' => 'Temps de réponse moyen.',
                'required' => 0,
                'default_value' => '~24h',
                'placeholder' => 'Ex: ~2h, ~24h, ~48h',
                'wrapper' => array('width' => '33'),
            ),

            // ===== SECTION: BADGES =====
            array(
                'key' => 'field_tab_badges',
                'label' => 'Badges',
                'name' => '',
                'type' => 'tab',
                'placement' => 'top',
            ),
            array(
                'key' => 'field_is_top_provider',
                'label' => 'Top Prestataire',
                'name' => 'is_top_provider',
                'type' => 'true_false',
                'instructions' => 'Activer le badge "Top Prestataire".',
                'required' => 0,
                'default_value' => 0,
                'ui' => 1,
                'ui_on_text' => 'Oui',
                'ui_off_text' => 'Non',
                'wrapper' => array('width' => '33'),
            ),
            array(
                'key' => 'field_is_verified',
                'label' => 'Compte Vérifié',
                'name' => 'is_verified',
                'type' => 'true_false',
                'instructions' => 'Le compte a été vérifié.',
                'required' => 0,
                'default_value' => 0,
                'ui' => 1,
                'ui_on_text' => 'Oui',
                'ui_off_text' => 'Non',
                'wrapper' => array('width' => '33'),
            ),

            // ===== SECTION: PORTFOLIO =====
            array(
                'key' => 'field_tab_portfolio',
                'label' => 'Portfolio',
                'name' => '',
                'type' => 'tab',
                'placement' => 'top',
            ),
            array(
                'key' => 'field_portfolio_gallery',
                'label' => 'Galerie de réalisations',
                'name' => 'portfolio_gallery',
                'type' => 'gallery',
                'instructions' => 'Ajoutez des photos de vos réalisations (max 20 images).',
                'required' => 0,
                'return_format' => 'array',
                'library' => 'all',
                'min' => 0,
                'max' => 20,
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_size' => '5',
                'mime_types' => 'jpg,jpeg,png,gif,webp',
                'insert' => 'append',
                'preview_size' => 'medium',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'user_role',
                    'operator' => '==',
                    'value' => 'nextgen_talent',
                ),
            ),
            array(
                array(
                    'param' => 'user_role',
                    'operator' => '==',
                    'value' => 'administrator',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => 'Champs du profil prestataire NEXTGEN',
        'show_in_rest' => 1,
    ));
});

/**
 * Convertir automatiquement les tableaux en texte pour le champ specialties
 */
add_filter('acf/load_value/name=specialties', function($value, $post_id, $field) {
    if (is_array($value)) {
        $value = implode("\n", array_filter($value));
    }
    return is_string($value) ? $value : '';
}, 10, 3);

add_filter('acf/update_value/name=specialties', function($value, $post_id, $field) {
    if (is_array($value)) {
        $value = implode("\n", array_filter($value));
    }
    return is_string($value) ? $value : '';
}, 10, 3);

<?php
/**
 * NEXTGEN - Initialisation des catégories de services
 * Crée les catégories par défaut pour la marketplace NEXTGEN
 *
 * @package NEXTGEN
 * @version 1.0.0
 */

// Sécurité : empêcher l'accès direct
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Initialiser les catégories de services NEXTGEN
 * Cette fonction crée les catégories standards de la marketplace
 */
function nextgen_init_service_categories() {
    // Vérifier si les catégories existent déjà
    $existing_cats = get_terms(array(
        'taxonomy' => 'service-category',
        'hide_empty' => false,
    ));

    // Si des catégories existent déjà (plus que les démos), ne rien faire
    if (!is_wp_error($existing_cats) && count($existing_cats) > 3) {
        return;
    }

    // Catégories principales de services pour NEXTGEN
    $categories = array(
        // 1. Services digitaux & technologie
        array(
            'name' => 'Développement Web & Mobile',
            'slug' => 'dev-web-mobile',
            'description' => 'Création de sites web, applications mobiles, et développement logiciel',
            'children' => array(
                'Sites Web WordPress',
                'Applications React/Vue',
                'Applications Mobiles iOS/Android',
                'E-commerce & Boutiques en ligne',
                'API & Backend',
            ),
        ),

        // 2. Design graphique
        array(
            'name' => 'Design Graphique & Créatif',
            'slug' => 'design-graphique',
            'description' => 'Création graphique, logos, illustrations et design visuel',
            'children' => array(
                'Logo & Identité Visuelle',
                'Design UI/UX',
                'Illustrations & Graphisme',
                'Infographies',
                'Design Print (Affiches, Flyers)',
            ),
        ),

        // 3. Marketing digital
        array(
            'name' => 'Marketing Digital & SEO',
            'slug' => 'marketing-digital',
            'description' => 'Référencement, publicité en ligne et stratégie digitale',
            'children' => array(
                'SEO & Référencement naturel',
                'Google Ads & Facebook Ads',
                'Gestion Réseaux Sociaux',
                'Email Marketing',
                'Stratégie Digitale',
            ),
        ),

        // 4. Rédaction & traduction
        array(
            'name' => 'Rédaction & Traduction',
            'slug' => 'redaction-traduction',
            'description' => 'Services de rédaction de contenu et traduction multilingue',
            'children' => array(
                'Rédaction Web & SEO',
                'Traduction FR/EN/DE',
                'Correction & Relecture',
                'Rédaction Technique',
                'Copywriting & Communication',
            ),
        ),

        // 5. Vidéo & animation
        array(
            'name' => 'Vidéo & Animation',
            'slug' => 'video-animation',
            'description' => 'Montage vidéo, motion design et création d\'animations',
            'children' => array(
                'Montage Vidéo',
                'Motion Design',
                'Animation 2D/3D',
                'Vidéos Promotionnelles',
                'Post-production',
            ),
        ),

        // 6. Services professionnels
        array(
            'name' => 'Services Professionnels',
            'slug' => 'services-professionnels',
            'description' => 'Conseil, juridique, comptabilité et services aux entreprises',
            'children' => array(
                'Conseil en Stratégie',
                'Juridique & Droit',
                'Comptabilité & Finance',
                'Formation & Coaching',
                'Recrutement RH',
            ),
        ),

        // 7. Données & intelligence artificielle
        array(
            'name' => 'Data & Intelligence Artificielle',
            'slug' => 'data-ia',
            'description' => 'Analyse de données, machine learning et automatisation',
            'children' => array(
                'Analyse de Données',
                'Machine Learning & IA',
                'Automatisation de Processus',
                'Business Intelligence',
                'Data Scraping',
            ),
        ),

        // 8. Services à la personne (pour le côté local Luxembourg)
        array(
            'name' => 'Services à la Personne',
            'slug' => 'services-personne',
            'description' => 'Services locaux et assistance personnelle',
            'children' => array(
                'Aide Administrative',
                'Cours Particuliers',
                'Aide Informatique',
                'Services de Livraison',
                'Dépannage & Assistance',
            ),
        ),
    );

    // Créer les catégories
    foreach ($categories as $category) {
        // Créer la catégorie parente
        $parent_term = wp_insert_term(
            $category['name'],
            'service-category',
            array(
                'slug' => $category['slug'],
                'description' => $category['description'],
            )
        );

        if (!is_wp_error($parent_term)) {
            $parent_id = $parent_term['term_id'];

            // Créer les sous-catégories
            if (!empty($category['children'])) {
                foreach ($category['children'] as $child_name) {
                    wp_insert_term(
                        $child_name,
                        'service-category',
                        array(
                            'parent' => $parent_id,
                            'slug' => sanitize_title($child_name),
                        )
                    );
                }
            }
        }
    }

    error_log('NEXTGEN: Catégories de services initialisées avec succès');
}

/**
 * Supprimer les catégories de démonstration
 * Ne garde que les catégories NEXTGEN réelles
 */
function nextgen_delete_demo_categories() {
    // Catégories démo à supprimer
    $demo_slugs = array(
        'ai-services',
        'graphic-designing',
        'analytics-strategy',
        'video-animation',
        'ecommerce-seo',
        'select', // La catégorie "Select" des démos
    );

    foreach ($demo_slugs as $slug) {
        $term = get_term_by('slug', $slug, 'service-category');
        if ($term && !is_wp_error($term)) {
            wp_delete_term($term->term_id, 'service-category');
        }
    }
}

/**
 * Hook pour initialiser les catégories
 * S'exécute une seule fois lors de l'activation
 */
add_action('init', function() {
    // Vérifier si on doit initialiser (utiliser une option WordPress)
    if (!get_option('nextgen_categories_initialized')) {
        // Supprimer les catégories démo
        nextgen_delete_demo_categories();

        // Créer les vraies catégories NEXTGEN
        nextgen_init_service_categories();

        // Marquer comme initialisé
        update_option('nextgen_categories_initialized', true);
    }
}, 20); // Priorité 20 pour s'exécuter après l'enregistrement du CPT

/**
 * Fonction manuelle pour réinitialiser les catégories
 * Utile en développement
 */
function nextgen_reset_categories() {
    // Supprimer toutes les catégories existantes
    $all_terms = get_terms(array(
        'taxonomy' => 'service-category',
        'hide_empty' => false,
    ));

    if (!is_wp_error($all_terms)) {
        foreach ($all_terms as $term) {
            wp_delete_term($term->term_id, 'service-category');
        }
    }

    // Supprimer l'option d'initialisation
    delete_option('nextgen_categories_initialized');

    // Réinitialiser
    nextgen_delete_demo_categories();
    nextgen_init_service_categories();
    update_option('nextgen_categories_initialized', true);

    return 'Catégories réinitialisées avec succès';
}

// Pour déclencher manuellement la réinitialisation :
// - Décommenter la ligne ci-dessous
// - Visiter n'importe quelle page du site
// - Recommenter la ligne
// add_action('init', 'nextgen_reset_categories', 999);

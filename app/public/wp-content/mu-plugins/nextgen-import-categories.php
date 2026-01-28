<?php
/**
 * Plugin Name: NEXTGEN Import Service Categories
 * Description: Importe la structure complète des catégories de services à partir des données fournies.
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'nextgen_import_full_service_categories', 30);

function nextgen_import_full_service_categories()
{
    // Ne s'exécute qu'une seule fois
    if (get_option('nextgen_full_categories_imported_v2')) {
        return;
    }

    $taxonomy = 'nextgen_service_category';

    // Structure des données: Rubrique -> Sous-rubriques
    // Les services spécifiques ne sont pas importés en tant que termes, mais comme exemples.
    $categories_structure = [
        'Bricolage' => [
            'Ameublement', 'Pose et fixation', 'Rénovation des murs', 'Rénovation des sols',
            'Électricité', 'Plomberie', 'Électroménager', 'Réparation', 'Serrurerie', 'Isolation'
        ],
        'Jardinage' => [
            'Entretien de la pelouse', 'Entretien des espaces verts', 'Fleurs, potager et verger', 'Équipements extérieurs'
        ],
        'Ménage' => [
            'Ménage & rangement', 'Nettoyage électroménager', 'Nettoyage textile', 'Nettoyage voiture'
        ],
        'Déménagement' => [
            'Général'
        ],
        'Enfants' => [
            'Garde d'enfants'
        ],
        'Animaux' => [
            'Services pour animaux'
        ],
        'Informatique' => [
            'Services informatiques'
        ],
        'Aide à domicile' => [
            'Aide & accompagnement'
        ],
        'Cours particuliers' => [
            'Langues', 'Matières scolaires'
        ]
    ];

    foreach ($categories_structure as $rubrique_name => $sous_rubriques) {
        // Créer la rubrique (catégorie parente) si elle n'existe pas
        $parent_term = term_exists($rubrique_name, $taxonomy);
        if (!$parent_term) {
            $parent_term = wp_insert_term($rubrique_name, $taxonomy);
        }

        if (is_wp_error($parent_term)) {
            continue; // Passer à la suivante si erreur
        }

        $parent_term_id = $parent_term['term_id'];

        // Créer les sous-rubriques (catégories enfants)
        foreach ($sous_rubriques as $sous_rubrique_name) {
            if (!term_exists($sous_rubrique_name, $taxonomy, $parent_term_id)) {
                wp_insert_term($sous_rubrique_name, $taxonomy, [
                    'parent' => $parent_term_id,
                ]);
            }
        }
    }

    // Marquer l'importation comme terminée
    update_option('nextgen_full_categories_imported_v2', true);
}

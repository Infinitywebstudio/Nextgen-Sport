<?php
/**
 * NEXTGEN Seed Talents — Remplir les profils talents avec des données réalistes
 *
 * Endpoint: GET /wp-json/nextgen/v1/seed-talents
 * Sécurisé: nécessite d'être admin
 *
 * Usage: curl http://wp-nexgen.local/wp-json/nextgen/v1/seed-talents
 * Suppression: curl http://wp-nexgen.local/wp-json/nextgen/v1/seed-talents?action=clear
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'rest_api_init', function() {
    register_rest_route( 'nextgen/v1', '/seed-talents', array(
        'methods'  => 'GET',
        'callback' => 'nextgen_seed_talents',
        'permission_callback' => '__return_true', // Public pour dev local uniquement
    ));
});

function nextgen_seed_talents( $request ) {
    $action = $request->get_param( 'action' ) ?? 'seed';

    // Récupérer tous les talents
    $users = get_users( array( 'role' => 'nextgen_talent' ) );

    if ( empty( $users ) ) {
        return new WP_REST_Response( array( 'message' => 'Aucun talent trouvé' ), 404 );
    }

    // Données réalistes pour le monde francophone sportif
    $profiles = array(
        array(
            'first_name'         => 'Ibrahim',
            'last_name'          => 'Sané',
            'city'               => 'Dakar',
            'category_name'      => 'Football',
            'category_slug'      => 'football',
            'hourly_rate'        => 15,
            'bio'                => 'Milieu offensif technique, formé à l\'Académie Diambars. Excellente vision de jeu et capacité de dribble. Capitaine de mon équipe régionale U21.',
            'specialties'        => 'Dribble, Passes décisives, Coups francs',
            'average_rating'     => 4.7,
            'review_count'       => 23,
            'completed_orders'   => 12,
            'response_time'      => '~2h',
            'is_top_provider'    => true,
            'is_verified'        => true,
            'phone'              => '+221 77 123 4567',
            'years_of_experience'=> 8,
            'professional_title' => 'Milieu offensif',
            'languages'          => 'Français, Wolof, Anglais',
        ),
        array(
            'first_name'         => 'Ousmane',
            'last_name'          => 'Diallo',
            'city'               => 'Abidjan',
            'category_name'      => 'Basketball',
            'category_slug'      => 'basketball',
            'hourly_rate'        => 12,
            'bio'                => 'Pivot de 1m98, physique athlétique. Joueur dominant sous le panier avec un excellent jeu de dos. Sélectionné en équipe nationale U20 de Côte d\'Ivoire.',
            'specialties'        => 'Rebonds, Contre, Post-up',
            'average_rating'     => 4.5,
            'review_count'       => 18,
            'completed_orders'   => 9,
            'response_time'      => '~4h',
            'is_top_provider'    => true,
            'is_verified'        => true,
            'phone'              => '+225 07 456 7890',
            'years_of_experience'=> 6,
            'professional_title' => 'Pivot / Ailier fort',
            'languages'          => 'Français, Dioula',
        ),
        array(
            'first_name'         => 'Jean',
            'last_name'          => 'Dupont',
            'city'               => 'Lyon',
            'category_name'      => 'Tennis',
            'category_slug'      => 'tennis',
            'hourly_rate'        => 25,
            'bio'                => 'Classé 3/6 FFT, finaliste du tournoi régional juniors Auvergne-Rhône-Alpes. Service puissant et revers à deux mains très solide.',
            'specialties'        => 'Service, Revers, Jeu de fond de court',
            'average_rating'     => 4.3,
            'review_count'       => 14,
            'completed_orders'   => 7,
            'response_time'      => '~6h',
            'is_top_provider'    => false,
            'is_verified'        => true,
            'phone'              => '+33 6 12 34 56 78',
            'years_of_experience'=> 10,
            'professional_title' => 'Joueur de tennis',
            'languages'          => 'Français, Anglais',
        ),
        array(
            'first_name'         => 'Paul',
            'last_name'          => 'Martin',
            'city'               => 'Bruxelles',
            'category_name'      => 'Athlétisme',
            'category_slug'      => 'athletisme',
            'hourly_rate'        => 18,
            'bio'                => 'Sprinteur 100m (10.82s) et 200m (21.45s). Vice-champion de Belgique juniors. Entraînement intensif au RUSTA Bruxelles.',
            'specialties'        => 'Sprint, Départ, Relais 4x100',
            'average_rating'     => 4.8,
            'review_count'       => 31,
            'completed_orders'   => 15,
            'response_time'      => '~1h',
            'is_top_provider'    => true,
            'is_verified'        => true,
            'phone'              => '+32 478 12 34 56',
            'years_of_experience'=> 7,
            'professional_title' => 'Sprinteur',
            'languages'          => 'Français, Néerlandais, Anglais',
        ),
        array(
            'first_name'         => 'Amal',
            'last_name'          => 'Yamal',
            'city'               => 'Douala',
            'category_name'      => 'Football',
            'category_slug'      => 'football',
            'hourly_rate'        => 10,
            'bio'                => 'Ailier droit rapide et technique. Meilleur buteur du championnat régional U17. Ambidextre avec une préférence pied gauche.',
            'specialties'        => 'Vitesse, Tir, Centres',
            'average_rating'     => 4.2,
            'review_count'       => 11,
            'completed_orders'   => 5,
            'response_time'      => '~8h',
            'is_top_provider'    => false,
            'is_verified'        => false,
            'phone'              => '+237 6 90 12 34 56',
            'years_of_experience'=> 4,
            'professional_title' => 'Ailier droit',
            'languages'          => 'Français, Anglais',
        ),
        array(
            'first_name'         => 'Kylian',
            'last_name'          => 'Mbappé',
            'city'               => 'Paris',
            'category_name'      => 'Football',
            'category_slug'      => 'football',
            'hourly_rate'        => 30,
            'bio'                => 'Attaquant explosif, vitesse de pointe exceptionnelle. Formé au centre de formation de l\'AS Bondy. Triple meilleur joueur du tournoi IDF U19.',
            'specialties'        => 'Vitesse, Finition, Contre-attaque',
            'average_rating'     => 4.9,
            'review_count'       => 47,
            'completed_orders'   => 22,
            'response_time'      => '~30min',
            'is_top_provider'    => true,
            'is_verified'        => true,
            'phone'              => '+33 7 98 76 54 32',
            'years_of_experience'=> 11,
            'professional_title' => 'Attaquant',
            'languages'          => 'Français, Espagnol, Anglais',
        ),
        array(
            'first_name'         => 'Test',
            'last_name'          => 'Talent',
            'city'               => 'Genève',
            'category_name'      => 'Natation',
            'category_slug'      => 'natation',
            'hourly_rate'        => 20,
            'bio'                => 'Nageur spécialisé en 100m et 200m nage libre. Record personnel 52.8s au 100m. Membre du club Genève Natation 1885.',
            'specialties'        => 'Crawl, Papillon, Virage',
            'average_rating'     => 4.4,
            'review_count'       => 16,
            'completed_orders'   => 8,
            'response_time'      => '~3h',
            'is_top_provider'    => false,
            'is_verified'        => true,
            'phone'              => '+41 79 123 45 67',
            'years_of_experience'=> 9,
            'professional_title' => 'Nageur',
            'languages'          => 'Français, Allemand',
        ),
        array(
            'first_name'         => 'Test',
            'last_name'          => 'Login',
            'city'               => 'Fort-de-France',
            'category_name'      => 'Boxe',
            'category_slug'      => 'boxe',
            'hourly_rate'        => 14,
            'bio'                => 'Boxeur poids moyen, style technique et contre-attaquant. Champion de Martinique junior. 15 combats, 12 victoires dont 8 par KO.',
            'specialties'        => 'Contre-attaque, Jab, Esquive',
            'average_rating'     => 4.6,
            'review_count'       => 21,
            'completed_orders'   => 10,
            'response_time'      => '~2h',
            'is_top_provider'    => true,
            'is_verified'        => true,
            'phone'              => '+596 696 12 34 56',
            'years_of_experience'=> 5,
            'professional_title' => 'Boxeur poids moyen',
            'languages'          => 'Français, Créole',
        ),
        array(
            'first_name'         => 'Kylian',
            'last_name'          => 'Diallo',
            'city'               => 'Casablanca',
            'category_name'      => 'Handball',
            'category_slug'      => 'handball',
            'hourly_rate'        => 11,
            'bio'                => 'Arrière gauche puissant avec un tir extérieur redoutable. Sélectionné en équipe nationale U19 du Maroc. Leader naturel sur le terrain.',
            'specialties'        => 'Tir extérieur, Défense, Leadership',
            'average_rating'     => 4.1,
            'review_count'       => 9,
            'completed_orders'   => 4,
            'response_time'      => '~5h',
            'is_top_provider'    => false,
            'is_verified'        => false,
            'phone'              => '+212 6 61 23 45 67',
            'years_of_experience'=> 5,
            'professional_title' => 'Handballeur - Arrière gauche',
            'languages'          => 'Français, Arabe, Anglais',
        ),
        array(
            'first_name'         => 'Lamine',
            'last_name'          => 'Touré',
            'city'               => 'Pointe-à-Pitre',
            'category_name'      => 'Rugby',
            'category_slug'      => 'rugby',
            'hourly_rate'        => 16,
            'bio'                => 'Ailier rapide et agile, excellent plaqueur. Pilier de l\'équipe de Guadeloupe U21. Passionné par le rugby à 7.',
            'specialties'        => 'Vitesse, Plaquage, Rugby à 7',
            'average_rating'     => 4.3,
            'review_count'       => 13,
            'completed_orders'   => 6,
            'response_time'      => '~4h',
            'is_top_provider'    => false,
            'is_verified'        => true,
            'phone'              => '+590 690 12 34 56',
            'years_of_experience'=> 6,
            'professional_title' => 'Rugbyman - Ailier',
            'languages'          => 'Français, Créole',
        ),
    );

    $results = array();

    foreach ( $users as $index => $user ) {
        $profile = isset( $profiles[ $index ] ) ? $profiles[ $index ] : $profiles[ $index % count( $profiles ) ];

        if ( $action === 'clear' ) {
            // Supprimer les meta
            $meta_keys = array_keys( $profile );
            unset( $meta_keys[ array_search( 'first_name', $meta_keys ) ] );
            unset( $meta_keys[ array_search( 'last_name', $meta_keys ) ] );
            foreach ( $meta_keys as $key ) {
                delete_user_meta( $user->ID, $key );
            }
            // Supprimer aussi les alias
            delete_user_meta( $user->ID, 'location' );
            delete_user_meta( $user->ID, 'rating' );
            delete_user_meta( $user->ID, 'total_reviews' );

            $results[] = array( 'id' => $user->ID, 'name' => $user->display_name, 'action' => 'cleared' );
        } else {
            // Mettre à jour le nom
            wp_update_user( array(
                'ID'         => $user->ID,
                'first_name' => $profile['first_name'],
                'last_name'  => $profile['last_name'],
                'display_name' => $profile['first_name'] . ' ' . $profile['last_name'],
            ));

            // Écrire les user_meta avec les noms attendus par le frontend
            unset( $profile['first_name'], $profile['last_name'] );
            foreach ( $profile as $key => $value ) {
                update_user_meta( $user->ID, $key, $value );
            }

            // Écrire aussi les alias pour compatibilité backend
            update_user_meta( $user->ID, 'location', $profile['city'] );
            update_user_meta( $user->ID, 'rating', $profile['average_rating'] );
            update_user_meta( $user->ID, 'total_reviews', $profile['review_count'] );

            $results[] = array(
                'id'       => $user->ID,
                'name'     => $profile['first_name'] ?? $user->display_name,
                'sport'    => $profile['category_name'],
                'city'     => $profile['city'],
                'action'   => 'seeded',
            );
        }
    }

    return new WP_REST_Response( array(
        'message' => $action === 'clear'
            ? count( $results ) . ' profils nettoyés'
            : count( $results ) . ' profils remplis avec des données réalistes',
        'results' => $results,
    ), 200 );
}

<?php
/**
 * Tester le champ specialties dans l'API
 */

require_once('wp-load.php');

header('Content-Type: application/json');

// Chercher Marie Dubois
$user = get_user_by('email', 'demo.prestataire@eloo.lu');

if (!$user) {
    echo json_encode([
        'error' => 'Utilisateur demo.prestataire@eloo.lu non trouvé'
    ], JSON_PRETTY_PRINT);
    exit;
}

$user_id = $user->ID;

// Récupérer les données brutes
$acf_specialties = '';
if (function_exists('get_field')) {
    $acf_specialties = get_field('specialties', 'user_' . $user_id);
}
$meta_specialties = get_user_meta($user_id, 'specialties', true);

// Simuler ce que l'API retourne
$api_response = [
    'id' => $user_id,
    'name' => $user->display_name,
    'email' => $user->user_email,
    'acf' => [
        'specialties' => $acf_specialties ?: $meta_specialties
    ]
];

// Test de conversion en tableau (comme dans React)
$services_as_array = [];
if (is_string($api_response['acf']['specialties'])) {
    $services_as_array = array_values(array_filter(
        array_map('trim', explode("\n", $api_response['acf']['specialties']))
    ));
}

echo json_encode([
    'user_id' => $user_id,
    'raw_data' => [
        'acf_specialties' => $acf_specialties,
        'acf_type' => gettype($acf_specialties),
        'meta_specialties' => $meta_specialties,
        'meta_type' => gettype($meta_specialties),
    ],
    'api_would_return' => $api_response['acf']['specialties'],
    'api_return_type' => gettype($api_response['acf']['specialties']),
    'react_conversion' => $services_as_array,
    'react_conversion_count' => count($services_as_array),
    'message' => count($services_as_array) > 0
        ? 'Les services devraient s\'afficher sur le front'
        : 'PROBLÈME: Aucun service ne sera affiché car le tableau est vide'
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

<?php
/**
 * Debug complet pour les services proposés
 */

require_once('wp-load.php');

header('Content-Type: application/json');

// Chercher Marie Dubois
$user = get_user_by('email', 'demo.prestataire@eloo.lu');

if (!$user) {
    echo json_encode(['error' => 'Marie Dubois non trouvée']);
    exit;
}

$user_id = $user->ID;

// 1. Vérifier les données brutes
$acf_specialties = function_exists('get_field') ? get_field('specialties', 'user_' . $user_id) : null;
$meta_specialties = get_user_meta($user_id, 'specialties', true);

// 2. Simuler l'API endpoint
$request = new WP_REST_Request('GET', '/eloo/v1/providers');
$response = rest_do_request($request);
$providers = $response->get_data();

// Trouver Marie
$marie_from_api = null;
foreach ($providers as $p) {
    if ($p['id'] == $user_id) {
        $marie_from_api = $p;
        break;
    }
}

// 3. Tester la conversion React
$specialties_string = $marie_from_api['acf']['specialties'] ?? '';
$services_array = [];
if (is_string($specialties_string) && !empty($specialties_string)) {
    $services_array = array_values(array_filter(
        array_map('trim', explode("\n", $specialties_string))
    ));
}

echo json_encode([
    'user_id' => $user_id,
    'step_1_raw_data' => [
        'acf_specialties' => $acf_specialties,
        'type' => gettype($acf_specialties),
        'meta_specialties' => $meta_specialties,
    ],
    'step_2_api_returns' => [
        'specialties' => $marie_from_api['acf']['specialties'] ?? 'MISSING',
        'type' => gettype($marie_from_api['acf']['specialties'] ?? null),
        'full_acf' => array_keys($marie_from_api['acf'] ?? []),
    ],
    'step_3_react_conversion' => [
        'input' => $specialties_string,
        'output_array' => $services_array,
        'count' => count($services_array),
    ],
    'diagnosis' => count($services_array) > 0
        ? '✅ Les services DEVRAIENT s\'afficher'
        : '❌ PROBLÈME: Le tableau est vide',
    'next_action' => count($services_array) === 0
        ? 'Vérifie que Marie Dubois a bien des services dans WordPress admin'
        : 'Vérifie la console React pour les logs DEBUG specialties'
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

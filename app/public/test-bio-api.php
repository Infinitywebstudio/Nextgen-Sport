<?php
/**
 * Test API - Vérifier la bio de Marie Dubois
 */

// Charger WordPress
require_once('wp-load.php');

header('Content-Type: application/json');

// Chercher Marie Dubois
$user = get_user_by('email', 'demo.prestataire@eloo.lu');

if (!$user) {
    echo json_encode(['error' => 'Utilisateur demo.prestataire@eloo.lu non trouvé']);
    exit;
}

// Récupérer les données
$user_id = $user->ID;

// Vérifier ACF
$acf_bio = '';
if (function_exists('get_field')) {
    $acf_bio = get_field('bio', 'user_' . $user_id);
}

// Vérifier user_meta
$meta_bio = get_user_meta($user_id, 'bio', true);

// Description WordPress native
$description = get_user_meta($user_id, 'description', true);

// Retourner toutes les sources possibles
echo json_encode([
    'user_id' => $user_id,
    'user_email' => $user->user_email,
    'user_display_name' => $user->display_name,
    'acf_bio' => $acf_bio,
    'user_meta_bio' => $meta_bio,
    'wp_description' => $description,
    'message' => 'Si toutes les valeurs sont vides, la bio n\'a pas été sauvegardée correctement dans WordPress'
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

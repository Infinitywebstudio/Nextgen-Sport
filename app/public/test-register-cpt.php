<?php
/**
 * Test direct de register_post_type
 * Accès: http://eloo.local/test-register-cpt.php
 */

// Activer l'affichage des erreurs
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once(__DIR__ . '/wp-load.php');

echo "<!DOCTYPE html>
<html>
<head>
    <title>Test Register CPT Direct</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; background: #f5f5f5; }
        .container { max-width: 1000px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; }
        h1 { color: #333; border-bottom: 3px solid #ff6961; padding-bottom: 10px; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .error { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 15px 0; }
        pre { background: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>🔧 Test Direct de register_post_type</h1>";

echo "<h2>État AVANT tentative d'enregistrement</h2>";
$exists_before = post_type_exists('eloo_provider_profile');
echo "<p><strong>eloo_provider_profile existe AVANT :</strong> " . ($exists_before ? '✅ OUI' : '❌ NON') . "</p>";

echo "<h2>Tentative d'enregistrement avec capture d'erreur</h2>";

// Capturer les erreurs et warnings
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    echo "<div class='error'>❌ ERREUR PHP ($errno) : $errstr dans $errfile ligne $errline</div>";
});

try {
    $result = register_post_type( 'eloo_provider_profile', array(
        'labels' => array(
            'name'               => 'Profils Prestataires',
            'singular_name'      => 'Profil Prestataire',
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
        'rest_base'           => 'provider-profiles',
        'menu_icon'           => 'dashicons-id-alt',
        'supports'            => array( 'title', 'editor', 'thumbnail', 'author' ),
        'rewrite'             => array( 'slug' => 'profil-prestataire' ),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'menu_position'       => 9
    ));

    echo "<h3>Résultat de register_post_type():</h3>";
    if (is_wp_error($result)) {
        echo "<div class='error'>❌ WP_Error détecté !</div>";
        echo "<pre>";
        print_r($result);
        echo "</pre>";
    } else {
        echo "<div class='success'>✅ Pas d'erreur WP_Error</div>";
        echo "<p><strong>Type de retour :</strong> " . gettype($result) . "</p>";
        echo "<pre>";
        var_dump($result);
        echo "</pre>";
    }
} catch (Exception $e) {
    echo "<div class='error'>❌ Exception : " . $e->getMessage() . "</div>";
}

restore_error_handler();

echo "<h2>État APRÈS tentative d'enregistrement</h2>";
$exists_after = post_type_exists('eloo_provider_profile');
echo "<p><strong>eloo_provider_profile existe APRÈS :</strong> " . ($exists_after ? '✅ OUI' : '❌ NON') . "</p>";

if ($exists_after) {
    echo "<div class='success'>✅✅✅ SUCCÈS ! Le CPT est maintenant enregistré !</div>";
    $cpt_obj = get_post_type_object('eloo_provider_profile');
    echo "<h3>Détails du CPT :</h3>";
    echo "<pre>";
    print_r($cpt_obj);
    echo "</pre>";
} else {
    echo "<div class='error'>❌ Échec : le CPT n'est toujours pas enregistré</div>";

    // Diagnostic approfondi
    echo "<h2>🔍 Diagnostic approfondi</h2>";

    global $wp_post_types;
    echo "<h3>Tous les post types enregistrés :</h3>";
    echo "<pre>";
    print_r(array_keys($wp_post_types));
    echo "</pre>";

    // Vérifier si le hook 'init' a déjà été exécuté
    echo "<h3>État du hook 'init' :</h3>";
    echo "<p><strong>did_action('init') :</strong> " . did_action('init') . " fois</p>";
    if (did_action('init') > 0) {
        echo "<div class='error'>⚠️ Le hook 'init' a déjà été exécuté ! Cela peut poser problème pour l'enregistrement des CPT.</div>";
    }
}

echo "
        <p style='text-align: center; color: #666; margin-top: 40px;'>
            <small>Test exécuté le " . date('d/m/Y H:i:s') . "</small>
        </p>
    </div>
</body>
</html>";
?>

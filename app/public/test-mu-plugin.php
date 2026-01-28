<?php
/**
 * Test MU-Plugin Loading
 * Accès: http://eloo.local/test-mu-plugin.php
 */

// Activer l'affichage des erreurs
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<!DOCTYPE html>
<html>
<head>
    <title>Test MU-Plugin ELOO</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; background: #f5f5f5; }
        .container { max-width: 1000px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; }
        h1 { color: #333; border-bottom: 3px solid #ff6961; padding-bottom: 10px; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .error { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 15px 0; }
        pre { background: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f5f5f5; font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>🔍 Test MU-Plugin ELOO</h1>";

// Test 1: Vérifier que le fichier existe
$mu_plugin_file = __DIR__ . '/wp-content/mu-plugins/eloo-custom-post-types.php';
echo "<h2>Test 1: Fichier MU-Plugin</h2>";
if (file_exists($mu_plugin_file)) {
    echo "<div class='success'>✅ Le fichier existe: wp-content/mu-plugins/eloo-custom-post-types.php</div>";
    echo "<p><strong>Taille du fichier:</strong> " . filesize($mu_plugin_file) . " octets</p>";
    echo "<p><strong>Dernière modification:</strong> " . date('Y-m-d H:i:s', filemtime($mu_plugin_file)) . "</p>";
} else {
    echo "<div class='error'>❌ Le fichier n'existe pas!</div>";
}

// Test 2: Vérifier le contenu
echo "<h2>Test 2: Contenu du fichier</h2>";
$content = file_get_contents($mu_plugin_file);
$has_provider_profile = strpos($content, 'eloo_provider_profile') !== false;
$has_register_post_type = strpos($content, "register_post_type( 'eloo_provider_profile'") !== false;

if ($has_provider_profile && $has_register_post_type) {
    echo "<div class='success'>✅ Le code eloo_provider_profile est présent dans le fichier</div>";

    // Compter les occurrences
    preg_match_all("/eloo_provider_profile/", $content, $matches);
    echo "<p><strong>Nombre d'occurrences 'eloo_provider_profile':</strong> " . count($matches[0]) . "</p>";

    // Trouver la ligne de register_post_type
    $lines = explode("\n", $content);
    foreach ($lines as $num => $line) {
        if (strpos($line, "register_post_type( 'eloo_provider_profile'") !== false) {
            echo "<p><strong>Ligne de register_post_type:</strong> " . ($num + 1) . "</p>";
            echo "<pre>" . htmlspecialchars(trim($line)) . "</pre>";
            break;
        }
    }
} else {
    echo "<div class='error'>❌ Le code eloo_provider_profile n'est PAS présent!</div>";
}

// Test 3: Vérifier la syntaxe PHP
echo "<h2>Test 3: Syntaxe PHP</h2>";
$output = [];
$return_var = 0;
exec('php -l "' . $mu_plugin_file . '" 2>&1', $output, $return_var);
if ($return_var === 0) {
    echo "<div class='success'>✅ Syntaxe PHP valide</div>";
    echo "<pre>" . implode("\n", $output) . "</pre>";
} else {
    echo "<div class='error'>❌ Erreur de syntaxe PHP!</div>";
    echo "<pre>" . implode("\n", $output) . "</pre>";
}

// Test 4: Charger WordPress et vérifier
echo "<h2>Test 4: Chargement WordPress</h2>";
try {
    require_once(__DIR__ . '/wp-load.php');
    echo "<div class='success'>✅ WordPress chargé avec succès</div>";
} catch (Exception $e) {
    echo "<div class='error'>❌ Erreur lors du chargement de WordPress: " . $e->getMessage() . "</div>";
}

// Test 5: Vérifier les CPT après chargement WordPress
echo "<h2>Test 5: Custom Post Types Enregistrés</h2>";
$eloo_cpts = array(
    'eloo_service' => 'Services',
    'eloo_mission' => 'Missions',
    'eloo_review' => 'Avis',
    'eloo_transaction' => 'Transactions',
    'eloo_provider_profile' => 'Profils Prestataires'
);

echo "<table>
    <thead>
        <tr>
            <th>CPT Name</th>
            <th>Label attendu</th>
            <th>Enregistré?</th>
            <th>Label actuel</th>
        </tr>
    </thead>
    <tbody>";

foreach ($eloo_cpts as $cpt_name => $expected_label) {
    $exists = post_type_exists($cpt_name);
    $bg_color = $exists ? '#d4edda' : '#f8d7da';
    $status = $exists ? '✅ OUI' : '❌ NON';
    $actual_label = $exists ? get_post_type_object($cpt_name)->labels->name : '—';

    echo "<tr style='background: $bg_color;'>
        <td><strong>$cpt_name</strong></td>
        <td>$expected_label</td>
        <td>$status</td>
        <td>$actual_label</td>
    </tr>";
}

echo "</tbody></table>";

// Test 6: Vérifier les hooks
echo "<h2>Test 6: Hooks WordPress</h2>";
global $wp_filter;

$init_hooks = isset($wp_filter['init']) ? $wp_filter['init'] : null;
if ($init_hooks) {
    echo "<p><strong>Nombre de fonctions sur le hook 'init':</strong> " . count($init_hooks->callbacks) . "</p>";

    // Chercher eloo_register_post_types
    $found_eloo = false;
    foreach ($init_hooks->callbacks as $priority => $functions) {
        foreach ($functions as $function_name => $function_data) {
            if (strpos($function_name, 'eloo_register_post_types') !== false) {
                $found_eloo = true;
                echo "<div class='success'>✅ Fonction 'eloo_register_post_types' trouvée dans le hook 'init' (priorité: $priority)</div>";
            }
        }
    }

    if (!$found_eloo) {
        echo "<div class='error'>❌ Fonction 'eloo_register_post_types' NON trouvée dans le hook 'init'!</div>";
    }
} else {
    echo "<div class='error'>❌ Hook 'init' non disponible</div>";
}

// Test 7: Vérifier la fonction directement
echo "<h2>Test 7: Fonction eloo_register_post_types</h2>";
if (function_exists('eloo_register_post_types')) {
    echo "<div class='success'>✅ La fonction eloo_register_post_types() existe</div>";

    // Essayer de l'appeler directement
    echo "<h3>Test d'appel direct de la fonction</h3>";
    ob_start();
    eloo_register_post_types();
    $output = ob_get_clean();

    if (post_type_exists('eloo_provider_profile')) {
        echo "<div class='success'>✅ Après appel direct, eloo_provider_profile est enregistré!</div>";
    } else {
        echo "<div class='error'>❌ Même après appel direct, eloo_provider_profile n'est PAS enregistré</div>";
    }
} else {
    echo "<div class='error'>❌ La fonction eloo_register_post_types() n'existe pas!</div>";
}

// Test 8: Vérifier les erreurs PHP
echo "<h2>Test 8: Erreurs PHP</h2>";
$error_log = __DIR__ . '/wp-content/debug.log';
if (file_exists($error_log)) {
    $errors = file_get_contents($error_log);
    $recent_errors = array_slice(explode("\n", $errors), -20);
    echo "<p><strong>20 dernières lignes du debug.log:</strong></p>";
    echo "<pre>" . htmlspecialchars(implode("\n", $recent_errors)) . "</pre>";
} else {
    echo "<p>Aucun fichier debug.log trouvé (normal si WP_DEBUG = false)</p>";
}

echo "
        <p style='text-align: center; color: #666; margin-top: 40px;'>
            <small>Test exécuté le " . date('d/m/Y H:i:s') . "</small>
        </p>
    </div>
</body>
</html>";
?>

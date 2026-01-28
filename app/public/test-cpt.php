<?php
/**
 * Test CPT Registration - ELOO
 * Accès: http://eloo.local/test-cpt.php
 */

// Load WordPress
require_once('wp-load.php');

?>
<!DOCTYPE html>
<html>
<head>
    <title>Test CPT ELOO</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; border-bottom: 3px solid #ff6961; padding-bottom: 10px; }
        .status { padding: 15px; margin: 20px 0; border-radius: 5px; font-weight: bold; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        pre { background: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto; border-left: 4px solid #ff6961; }
        .section { margin: 30px 0; }
        .check { display: inline-block; width: 30px; height: 30px; line-height: 30px; text-align: center; border-radius: 50%; margin-right: 10px; }
        .check.ok { background: #28a745; color: white; }
        .check.fail { background: #dc3545; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 Test CPT ELOO Provider Profile</h1>

        <?php
        // Test 1: CPT existe?
        $cpt_exists = post_type_exists('eloo_provider_profile');
        ?>

        <div class="section">
            <h2>
                <span class="check <?php echo $cpt_exists ? 'ok' : 'fail'; ?>">
                    <?php echo $cpt_exists ? '✓' : '✗'; ?>
                </span>
                Test 1: Custom Post Type enregistré
            </h2>
            <div class="status <?php echo $cpt_exists ? 'success' : 'error'; ?>">
                eloo_provider_profile exists: <?php echo $cpt_exists ? '✅ YES' : '❌ NO'; ?>
            </div>
        </div>

        <?php if ($cpt_exists): ?>
            <div class="section">
                <h2>📋 Informations du CPT</h2>
                <div class="info">
                    <?php
                    $post_type_object = get_post_type_object('eloo_provider_profile');
                    ?>
                    <p><strong>Label:</strong> <?php echo $post_type_object->labels->name; ?></p>
                    <p><strong>Public:</strong> <?php echo $post_type_object->public ? 'Oui' : 'Non'; ?></p>
                    <p><strong>Show in menu:</strong> <?php echo $post_type_object->show_in_menu ? 'Oui' : 'Non'; ?></p>
                    <p><strong>Menu position:</strong> <?php echo $post_type_object->menu_position; ?></p>
                    <p><strong>Menu icon:</strong> <?php echo $post_type_object->menu_icon; ?></p>
                    <p><strong>REST enabled:</strong> <?php echo $post_type_object->show_in_rest ? 'Oui' : 'Non'; ?></p>
                </div>

                <h3>Détails complets:</h3>
                <pre><?php print_r($post_type_object); ?></pre>
            </div>

            <div class="section">
                <h2>📊 Profils existants</h2>
                <?php
                $profiles = get_posts(array(
                    'post_type' => 'eloo_provider_profile',
                    'posts_per_page' => -1,
                    'post_status' => 'any'
                ));
                ?>
                <div class="info">
                    <p><strong>Nombre de profils:</strong> <?php echo count($profiles); ?></p>
                </div>
                <?php if ($profiles): ?>
                    <pre><?php print_r($profiles); ?></pre>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="section">
            <h2>🎨 Thème actif</h2>
            <div class="info">
                <p><strong>Thème:</strong> <?php echo wp_get_theme()->get('Name'); ?></p>
                <p><strong>Version:</strong> <?php echo wp_get_theme()->get('Version'); ?></p>
            </div>
        </div>

        <div class="section">
            <h2>🔌 Tous les CPT enregistrés</h2>
            <pre><?php print_r(get_post_types(array('public' => true), 'names')); ?></pre>
        </div>

        <div class="section">
            <h2>✅ Actions à effectuer</h2>
            <?php if ($cpt_exists): ?>
                <div class="status success">
                    <strong>✓ Le CPT est bien enregistré!</strong><br>
                    Vérifiez maintenant dans WordPress Admin:<br>
                    1. Rafraîchissez la page admin (CTRL+F5 ou CMD+SHIFT+R)<br>
                    2. Vérifiez le menu latéral pour "Profils Prestataires"<br>
                    3. L'icône devrait être 🆔 (dashicons-id-alt)
                </div>
            <?php else: ?>
                <div class="status error">
                    <strong>✗ Le CPT n'est PAS enregistré</strong><br>
                    Vérifications nécessaires:<br>
                    1. Le code est-il bien dans functions.php?<br>
                    2. Y a-t-il des erreurs PHP? (vérifier les logs)<br>
                    3. Le thème Twenty Twenty-Five est-il actif?
                </div>
            <?php endif; ?>
        </div>

        <div class="section">
            <p style="text-align: center; color: #666; margin-top: 40px;">
                <small>Test généré le <?php echo date('d/m/Y H:i:s'); ?></small>
            </p>
        </div>
    </div>
</body>
</html>

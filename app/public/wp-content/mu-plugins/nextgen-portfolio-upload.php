<?php
/**
 * Plugin Name: NEXTGEN Portfolio Upload
 * Description: Gestion de l'upload des photos de portfolio pour les prestataires
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Endpoint pour uploader des photos de portfolio
 */
add_action('rest_api_init', function() {
    register_rest_route('nextgen/v1', '/provider/(?P<id>\d+)/portfolio', array(
        'methods' => 'POST',
        'callback' => 'nextgen_upload_portfolio_images',
        'permission_callback' => 'nextgen_check_portfolio_upload_permission',
        'args' => array(
            'id' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return is_numeric($param);
                }
            ),
        ),
    ));

    // Endpoint pour supprimer une photo du portfolio
    register_rest_route('nextgen/v1', '/provider/(?P<id>\d+)/portfolio/(?P<image_id>\d+)', array(
        'methods' => 'DELETE',
        'callback' => 'nextgen_delete_portfolio_image',
        'permission_callback' => 'nextgen_check_portfolio_upload_permission',
    ));
});

/**
 * Vérifier les permissions d'upload
 */
function nextgen_check_portfolio_upload_permission($request) {
    $user_id = $request->get_param('id');
    $current_user = wp_get_current_user();

    // L'utilisateur doit être connecté et modifier son propre profil
    // OU être administrateur
    if (!is_user_logged_in()) {
        return new WP_Error('not_logged_in', 'Vous devez être connecté', array('status' => 401));
    }

    if ($current_user->ID != $user_id && !current_user_can('manage_options')) {
        return new WP_Error('forbidden', 'Vous ne pouvez pas modifier ce profil', array('status' => 403));
    }

    return true;
}

/**
 * Upload des images de portfolio
 */
function nextgen_upload_portfolio_images($request) {
    $user_id = $request->get_param('id');

    // Vérifier si des fichiers ont été uploadés
    if (empty($_FILES)) {
        return new WP_Error('no_files', 'Aucun fichier à uploader', array('status' => 400));
    }

    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    require_once(ABSPATH . 'wp-admin/includes/media.php');

    $uploaded_images = array();
    $errors = array();

    // Parcourir tous les fichiers uploadés
    foreach ($_FILES as $file_key => $file) {
        // Si c'est un tableau de fichiers multiples
        if (is_array($file['name'])) {
            foreach ($file['name'] as $index => $name) {
                $single_file = array(
                    'name' => $file['name'][$index],
                    'type' => $file['type'][$index],
                    'tmp_name' => $file['tmp_name'][$index],
                    'error' => $file['error'][$index],
                    'size' => $file['size'][$index]
                );

                $result = nextgen_process_single_portfolio_upload($single_file, $user_id);
                if (is_wp_error($result)) {
                    $errors[] = $result->get_error_message();
                } else {
                    $uploaded_images[] = $result;
                }
            }
        } else {
            // Fichier unique
            $result = nextgen_process_single_portfolio_upload($file, $user_id);
            if (is_wp_error($result)) {
                $errors[] = $result->get_error_message();
            } else {
                $uploaded_images[] = $result;
            }
        }
    }

    // Récupérer le portfolio actuel
    $current_portfolio = get_user_meta($user_id, 'portfolio_gallery', true);
    if (!is_array($current_portfolio)) {
        $current_portfolio = array();
    }

    // Ajouter les nouvelles images
    $updated_portfolio = array_merge($current_portfolio, $uploaded_images);
    update_user_meta($user_id, 'portfolio_gallery', $updated_portfolio);

    return new WP_REST_Response(array(
        'success' => true,
        'uploaded' => count($uploaded_images),
        'errors' => $errors,
        'portfolio' => $updated_portfolio
    ), 200);
}

/**
 * Traiter un seul fichier uploadé
 */
function nextgen_process_single_portfolio_upload($file, $user_id) {
    // Vérifier la taille (max 1GB = 1073741824 bytes)
    if ($file['size'] > 1073741824) {
        return new WP_Error('file_too_large', "Le fichier {$file['name']} dépasse 1GB");
    }

    // Vérifier le type MIME
    $allowed_types = array('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp');
    if (!in_array($file['type'], $allowed_types)) {
        return new WP_Error('invalid_type', "Type de fichier non autorisé pour {$file['name']}");
    }

    // Upload le fichier dans la médiathèque WordPress
    $upload_overrides = array('test_form' => false);
    $movefile = wp_handle_upload($file, $upload_overrides);

    if (isset($movefile['error'])) {
        return new WP_Error('upload_error', $movefile['error']);
    }

    // Créer l'attachement dans la médiathèque
    $attachment_data = array(
        'post_mime_type' => $movefile['type'],
        'post_title' => sanitize_file_name(pathinfo($movefile['file'], PATHINFO_FILENAME)),
        'post_content' => '',
        'post_status' => 'inherit'
    );

    $attachment_id = wp_insert_attachment($attachment_data, $movefile['file']);

    if (is_wp_error($attachment_id)) {
        return $attachment_id;
    }

    // Générer les métadonnées et les miniatures
    $attachment_metadata = wp_generate_attachment_metadata($attachment_id, $movefile['file']);
    wp_update_attachment_metadata($attachment_id, $attachment_metadata);

    // Retourner les informations de l'image
    return array(
        'id' => $attachment_id,
        'url' => wp_get_attachment_url($attachment_id),
        'title' => get_the_title($attachment_id),
        'alt' => get_post_meta($attachment_id, '_wp_attachment_image_alt', true),
        'sizes' => array(
            'thumbnail' => wp_get_attachment_image_url($attachment_id, 'thumbnail'),
            'medium' => wp_get_attachment_image_url($attachment_id, 'medium'),
            'large' => wp_get_attachment_image_url($attachment_id, 'large'),
        )
    );
}

/**
 * Supprimer une image du portfolio
 */
function nextgen_delete_portfolio_image($request) {
    $user_id = $request->get_param('id');
    $image_id = $request->get_param('image_id');

    // Récupérer le portfolio actuel
    $current_portfolio = get_user_meta($user_id, 'portfolio_gallery', true);
    if (!is_array($current_portfolio)) {
        return new WP_Error('no_portfolio', 'Aucun portfolio trouvé', array('status' => 404));
    }

    // Filtrer pour supprimer l'image
    $updated_portfolio = array_filter($current_portfolio, function($item) use ($image_id) {
        return $item['id'] != $image_id;
    });

    // Réindexer le tableau
    $updated_portfolio = array_values($updated_portfolio);

    // Mettre à jour
    update_user_meta($user_id, 'portfolio_gallery', $updated_portfolio);

    // Optionnel: supprimer l'attachement de la médiathèque
    // wp_delete_attachment($image_id, true);

    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Image supprimée',
        'portfolio' => $updated_portfolio
    ), 200);
}

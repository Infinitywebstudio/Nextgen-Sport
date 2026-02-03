<?php
/**
 * NEXTGEN Dashboard API
 *
 * Endpoints REST pour les espaces Talent et Recruteur.
 * - Statistiques talent (vues profil, completude)
 * - Profil talent (lecture / mise a jour)
 * - Talents visites par le recruteur
 * - Messagerie (conversations + messages)
 * - Compte (infos perso, mot de passe, desactivation)
 * - Abonnement recruteur
 */

if (!defined('ABSPATH')) {
    exit;
}

// ============================================================
// 1. CPTs : Conversations & Messages
// ============================================================

add_action('init', function () {
    // Conversation between two users
    register_post_type('nextgen_conversation', [
        'labels' => [
            'name'          => 'Conversations',
            'singular_name' => 'Conversation',
        ],
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'menu_icon'    => 'dashicons-format-chat',
        'supports'     => ['title'],
        'show_in_rest' => false,
    ]);

    // Message inside a conversation
    register_post_type('nextgen_message', [
        'labels' => [
            'name'          => 'Messages',
            'singular_name' => 'Message',
        ],
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'menu_icon'    => 'dashicons-email-alt',
        'supports'     => ['editor', 'author'],
        'show_in_rest' => false,
    ]);
});


// ============================================================
// 2. REST Endpoints
// ============================================================

add_action('rest_api_init', function () {

    $namespace = 'nextgen/v1';

    // ----------------------------------------------------------
    // TALENT : Stats
    // ----------------------------------------------------------
    register_rest_route($namespace, '/talent/stats', [
        'methods'             => 'GET',
        'callback'            => 'nextgen_talent_stats',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // ----------------------------------------------------------
    // TALENT : Profile (GET / PUT)
    // ----------------------------------------------------------
    register_rest_route($namespace, '/talent/profile', [
        [
            'methods'             => 'GET',
            'callback'            => 'nextgen_talent_profile_get',
            'permission_callback' => 'is_user_logged_in',
        ],
        [
            'methods'             => 'PUT',
            'callback'            => 'nextgen_talent_profile_update',
            'permission_callback' => 'is_user_logged_in',
        ],
    ]);

    // ----------------------------------------------------------
    // RECRUTEUR : Visited talents
    // ----------------------------------------------------------
    register_rest_route($namespace, '/recruteur/visited', [
        'methods'             => 'GET',
        'callback'            => 'nextgen_recruteur_visited_get',
        'permission_callback' => 'is_user_logged_in',
    ]);

    register_rest_route($namespace, '/recruteur/visit', [
        'methods'             => 'POST',
        'callback'            => 'nextgen_recruteur_visit_record',
        'permission_callback' => 'is_user_logged_in',
    ]);

    // ----------------------------------------------------------
    // RECRUTEUR : Conversations
    // ----------------------------------------------------------
    register_rest_route($namespace, '/recruteur/conversations', [
        [
            'methods'             => 'GET',
            'callback'            => 'nextgen_conversations_list',
            'permission_callback' => 'is_user_logged_in',
        ],
        [
            'methods'             => 'POST',
            'callback'            => 'nextgen_conversation_create',
            'permission_callback' => 'is_user_logged_in',
        ],
    ]);

    register_rest_route($namespace, '/recruteur/conversations/(?P<id>\d+)', [
        [
            'methods'             => 'GET',
            'callback'            => 'nextgen_conversation_messages',
            'permission_callback' => 'is_user_logged_in',
            'args'                => [
                'id' => [
                    'validate_callback' => function ($param) {
                        return is_numeric($param);
                    },
                ],
            ],
        ],
        [
            'methods'             => 'POST',
            'callback'            => 'nextgen_message_send',
            'permission_callback' => 'is_user_logged_in',
            'args'                => [
                'id' => [
                    'validate_callback' => function ($param) {
                        return is_numeric($param);
                    },
                ],
            ],
        ],
    ]);

    // ----------------------------------------------------------
    // ACCOUNT : Profile update, password, deactivate, subscription
    // ----------------------------------------------------------
    register_rest_route($namespace, '/account/profile', [
        'methods'             => 'PUT',
        'callback'            => 'nextgen_account_profile_update',
        'permission_callback' => 'is_user_logged_in',
    ]);

    register_rest_route($namespace, '/account/password', [
        'methods'             => 'PUT',
        'callback'            => 'nextgen_account_password_change',
        'permission_callback' => 'is_user_logged_in',
    ]);

    register_rest_route($namespace, '/account', [
        'methods'             => 'DELETE',
        'callback'            => 'nextgen_account_deactivate',
        'permission_callback' => 'is_user_logged_in',
    ]);

    register_rest_route($namespace, '/account/subscription', [
        'methods'             => 'GET',
        'callback'            => 'nextgen_account_subscription',
        'permission_callback' => 'is_user_logged_in',
    ]);
});


// ============================================================
// 3. Handlers
// ============================================================

// ----------------------------------------------------------
// TALENT STATS
// ----------------------------------------------------------
function nextgen_talent_stats(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    // Profile views counter
    $views = (int) get_user_meta($user_id, 'nextgen_profile_views', true);

    // Profile completion percentage
    $completion = nextgen_calculate_profile_completion($user_id);

    return new WP_REST_Response([
        'profile_views'      => $views,
        'profile_completion' => $completion,
    ], 200);
}

/**
 * Calculate profile completion percentage for a talent.
 */
function nextgen_calculate_profile_completion($user_id) {
    $user = get_userdata($user_id);
    if (!$user) return 0;

    $fields_filled = 0;
    $total_fields  = 8;

    // User-level fields
    if (!empty($user->first_name)) $fields_filled++;
    if (!empty($user->last_name)) $fields_filled++;
    if (!empty(get_user_meta($user_id, 'nextgen_phone', true))) $fields_filled++;

    // Find the talent_profile post for this user
    $profile_post = get_posts([
        'post_type'  => 'talent_profile',
        'meta_key'   => 'user_id',
        'meta_value' => $user_id,
        'numberposts' => 1,
    ]);

    if (!empty($profile_post)) {
        $post_id = $profile_post[0]->ID;
        if (!empty(get_post_meta($post_id, 'bio', true))) $fields_filled++;
        if (!empty(get_post_meta($post_id, 'position', true))) $fields_filled++;
        if (!empty(get_post_meta($post_id, 'location', true))) $fields_filled++;

        // Sport category
        $sports = wp_get_post_terms($post_id, 'sport_category');
        if (!empty($sports) && !is_wp_error($sports)) $fields_filled++;

        // Skills
        $skills = wp_get_post_terms($post_id, 'talent_skill');
        if (!empty($skills) && !is_wp_error($skills)) $fields_filled++;
    }

    return round(($fields_filled / $total_fields) * 100);
}


// ----------------------------------------------------------
// TALENT PROFILE GET
// ----------------------------------------------------------
function nextgen_talent_profile_get(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $user    = get_userdata($user_id);

    if (!$user) {
        return new WP_Error('user_not_found', 'Utilisateur non trouve', ['status' => 404]);
    }

    // Base user data
    $data = [
        'first_name' => $user->first_name,
        'last_name'  => $user->last_name,
        'email'      => $user->user_email,
        'phone'      => get_user_meta($user_id, 'nextgen_phone', true) ?: '',
        'avatar_url' => get_avatar_url($user_id, ['size' => 200]),
    ];

    // Talent profile post data
    $profile_post = get_posts([
        'post_type'   => 'talent_profile',
        'meta_key'    => 'user_id',
        'meta_value'  => $user_id,
        'numberposts' => 1,
    ]);

    if (!empty($profile_post)) {
        $post_id = $profile_post[0]->ID;

        $data['bio']        = get_post_meta($post_id, 'bio', true) ?: '';
        $data['position']   = get_post_meta($post_id, 'position', true) ?: '';
        $data['location']   = get_post_meta($post_id, 'location', true) ?: '';
        $data['height']     = get_post_meta($post_id, 'height', true) ?: '';
        $data['weight']     = get_post_meta($post_id, 'weight', true) ?: '';

        // Sport category
        $sports = wp_get_post_terms($post_id, 'sport_category', ['fields' => 'all']);
        $data['sport'] = '';
        if (!empty($sports) && !is_wp_error($sports)) {
            $data['sport'] = $sports[0]->slug;
        }

        // Skills
        $skills = wp_get_post_terms($post_id, 'talent_skill', ['fields' => 'names']);
        $data['skills'] = (!empty($skills) && !is_wp_error($skills)) ? $skills : [];

        $data['profile_post_id'] = $post_id;
    } else {
        $data['bio']      = '';
        $data['position'] = '';
        $data['location'] = '';
        $data['height']   = '';
        $data['weight']   = '';
        $data['sport']    = '';
        $data['skills']   = [];
        $data['profile_post_id'] = null;
    }

    return new WP_REST_Response($data, 200);
}


// ----------------------------------------------------------
// TALENT PROFILE UPDATE
// ----------------------------------------------------------
function nextgen_talent_profile_update(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();

    // Update user-level fields
    $user_fields = [];
    if (isset($params['first_name'])) $user_fields['first_name'] = sanitize_text_field($params['first_name']);
    if (isset($params['last_name']))  $user_fields['last_name']  = sanitize_text_field($params['last_name']);

    if (!empty($user_fields)) {
        $user_fields['ID'] = $user_id;
        wp_update_user($user_fields);
    }

    if (isset($params['phone'])) {
        update_user_meta($user_id, 'nextgen_phone', sanitize_text_field($params['phone']));
    }

    // Find or create talent_profile post
    $profile_post = get_posts([
        'post_type'   => 'talent_profile',
        'meta_key'    => 'user_id',
        'meta_value'  => $user_id,
        'numberposts' => 1,
    ]);

    $post_id = null;
    if (!empty($profile_post)) {
        $post_id = $profile_post[0]->ID;
    } else {
        // Create profile post if it doesn't exist
        $user = get_userdata($user_id);
        $post_id = wp_insert_post([
            'post_type'   => 'talent_profile',
            'post_title'  => $user->display_name,
            'post_status' => 'publish',
            'post_author' => $user_id,
        ]);
        if ($post_id) {
            update_post_meta($post_id, 'user_id', $user_id);
        }
    }

    if (!$post_id) {
        return new WP_Error('profile_error', 'Impossible de mettre a jour le profil', ['status' => 500]);
    }

    // Update post meta fields
    $meta_map = [
        'bio'      => 'sanitize_textarea_field',
        'position' => 'sanitize_text_field',
        'location' => 'sanitize_text_field',
        'height'   => 'sanitize_text_field',
        'weight'   => 'sanitize_text_field',
    ];

    foreach ($meta_map as $field => $sanitizer) {
        if (isset($params[$field])) {
            update_post_meta($post_id, $field, $sanitizer($params[$field]));
        }
    }

    // Update sport category
    if (isset($params['sport'])) {
        $sport_slug = sanitize_text_field($params['sport']);
        if (!empty($sport_slug)) {
            $term = get_term_by('slug', $sport_slug, 'sport_category');
            if ($term) {
                wp_set_post_terms($post_id, [$term->term_id], 'sport_category');
            }
        } else {
            wp_set_post_terms($post_id, [], 'sport_category');
        }
    }

    // Update skills
    if (isset($params['skills']) && is_array($params['skills'])) {
        $skill_names = array_map('sanitize_text_field', $params['skills']);
        wp_set_post_terms($post_id, $skill_names, 'talent_skill');
    }

    return new WP_REST_Response([
        'success' => true,
        'message' => 'Profil mis a jour avec succes',
    ], 200);
}


// ----------------------------------------------------------
// RECRUTEUR : Visited talents
// ----------------------------------------------------------
function nextgen_recruteur_visited_get(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    $visited_json = get_user_meta($user_id, 'nextgen_visited_talents', true);
    $visited      = !empty($visited_json) ? json_decode($visited_json, true) : [];

    if (!is_array($visited)) {
        $visited = [];
    }

    // Sort by visited_at descending
    usort($visited, function ($a, $b) {
        return strtotime($b['visited_at']) - strtotime($a['visited_at']);
    });

    // Enrich with talent data
    $result = [];
    foreach ($visited as $entry) {
        $talent_id = (int) $entry['talent_id'];
        $talent_user = get_userdata($talent_id);
        if (!$talent_user) continue;

        // Get sport from talent_profile
        $sport = '';
        $profile_post = get_posts([
            'post_type'   => 'talent_profile',
            'meta_key'    => 'user_id',
            'meta_value'  => $talent_id,
            'numberposts' => 1,
        ]);
        if (!empty($profile_post)) {
            $sports = wp_get_post_terms($profile_post[0]->ID, 'sport_category', ['fields' => 'names']);
            if (!empty($sports) && !is_wp_error($sports)) {
                $sport = $sports[0];
            }
        }

        $result[] = [
            'id'         => $talent_id,
            'name'       => $talent_user->display_name,
            'sport'      => $sport,
            'avatar'     => get_avatar_url($talent_id, ['size' => 100]),
            'visited_at' => $entry['visited_at'],
        ];
    }

    return new WP_REST_Response($result, 200);
}

function nextgen_recruteur_visit_record(WP_REST_Request $request) {
    $user_id   = get_current_user_id();
    $params    = $request->get_json_params();
    $talent_id = isset($params['talent_id']) ? (int) $params['talent_id'] : 0;

    if (!$talent_id || !get_userdata($talent_id)) {
        return new WP_Error('invalid_talent', 'Talent non trouve', ['status' => 404]);
    }

    // Get existing visited list
    $visited_json = get_user_meta($user_id, 'nextgen_visited_talents', true);
    $visited      = !empty($visited_json) ? json_decode($visited_json, true) : [];
    if (!is_array($visited)) $visited = [];

    // Remove existing entry for this talent (to re-add with fresh date)
    $visited = array_filter($visited, function ($v) use ($talent_id) {
        return (int) $v['talent_id'] !== $talent_id;
    });
    $visited = array_values($visited);

    // Add new visit
    $visited[] = [
        'talent_id'  => $talent_id,
        'visited_at' => current_time('c'),
    ];

    // Keep last 100 visits max
    if (count($visited) > 100) {
        $visited = array_slice($visited, -100);
    }

    update_user_meta($user_id, 'nextgen_visited_talents', wp_json_encode($visited));

    // Increment talent's profile views
    $current_views = (int) get_user_meta($talent_id, 'nextgen_profile_views', true);
    update_user_meta($talent_id, 'nextgen_profile_views', $current_views + 1);

    return new WP_REST_Response(['success' => true], 200);
}


// ----------------------------------------------------------
// CONVERSATIONS
// ----------------------------------------------------------
function nextgen_conversations_list(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    $conversations = get_posts([
        'post_type'   => 'nextgen_conversation',
        'numberposts' => 50,
        'meta_query'  => [
            'relation' => 'OR',
            [
                'key'   => '_participant_1',
                'value' => $user_id,
            ],
            [
                'key'   => '_participant_2',
                'value' => $user_id,
            ],
        ],
        'orderby' => 'modified',
        'order'   => 'DESC',
    ]);

    $result = [];
    foreach ($conversations as $conv) {
        $p1 = (int) get_post_meta($conv->ID, '_participant_1', true);
        $p2 = (int) get_post_meta($conv->ID, '_participant_2', true);
        $other_id = ($p1 === $user_id) ? $p2 : $p1;
        $other_user = get_userdata($other_id);

        // Get last message
        $last_message = get_posts([
            'post_type'   => 'nextgen_message',
            'post_parent' => $conv->ID,
            'numberposts' => 1,
            'orderby'     => 'date',
            'order'       => 'DESC',
        ]);

        // Count unread (messages from other user that are unread)
        $unread = get_posts([
            'post_type'   => 'nextgen_message',
            'post_parent' => $conv->ID,
            'author'      => $other_id,
            'numberposts' => -1,
            'meta_query'  => [
                [
                    'key'   => '_read',
                    'value' => '0',
                ],
            ],
        ]);

        $result[] = [
            'id'                 => $conv->ID,
            'participant_name'   => $other_user ? $other_user->display_name : 'Utilisateur supprime',
            'participant_avatar' => $other_user ? get_avatar_url($other_id, ['size' => 50]) : '',
            'last_message'       => !empty($last_message) ? wp_strip_all_tags($last_message[0]->post_content) : '',
            'last_message_at'    => !empty($last_message) ? get_the_date('c', $last_message[0]) : $conv->post_date,
            'unread_count'       => count($unread),
        ];
    }

    return new WP_REST_Response($result, 200);
}

function nextgen_conversation_messages(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $conv_id = (int) $request['id'];

    // Verify user is participant
    $p1 = (int) get_post_meta($conv_id, '_participant_1', true);
    $p2 = (int) get_post_meta($conv_id, '_participant_2', true);

    if ($user_id !== $p1 && $user_id !== $p2) {
        return new WP_Error('forbidden', 'Acces refuse', ['status' => 403]);
    }

    $messages = get_posts([
        'post_type'   => 'nextgen_message',
        'post_parent' => $conv_id,
        'numberposts' => 100,
        'orderby'     => 'date',
        'order'       => 'ASC',
    ]);

    // Mark messages from other user as read
    $other_id = ($p1 === $user_id) ? $p2 : $p1;
    foreach ($messages as $msg) {
        if ((int) $msg->post_author === $other_id) {
            update_post_meta($msg->ID, '_read', '1');
        }
    }

    $result = [];
    foreach ($messages as $msg) {
        $result[] = [
            'id'         => $msg->ID,
            'sender_id'  => (int) $msg->post_author,
            'content'    => wp_strip_all_tags($msg->post_content),
            'created_at' => get_the_date('c', $msg),
        ];
    }

    return new WP_REST_Response($result, 200);
}

function nextgen_conversation_create(WP_REST_Request $request) {
    $user_id   = get_current_user_id();
    $params    = $request->get_json_params();
    $talent_id = isset($params['talent_id']) ? (int) $params['talent_id'] : 0;
    $message   = isset($params['message']) ? sanitize_textarea_field($params['message']) : '';

    if (!$talent_id || !get_userdata($talent_id)) {
        return new WP_Error('invalid_talent', 'Talent non trouve', ['status' => 404]);
    }

    if (empty($message)) {
        return new WP_Error('empty_message', 'Le message ne peut pas etre vide', ['status' => 400]);
    }

    // Check if conversation already exists
    $existing = get_posts([
        'post_type'   => 'nextgen_conversation',
        'numberposts' => 1,
        'meta_query'  => [
            'relation' => 'OR',
            [
                'relation' => 'AND',
                ['key' => '_participant_1', 'value' => $user_id],
                ['key' => '_participant_2', 'value' => $talent_id],
            ],
            [
                'relation' => 'AND',
                ['key' => '_participant_1', 'value' => $talent_id],
                ['key' => '_participant_2', 'value' => $user_id],
            ],
        ],
    ]);

    if (!empty($existing)) {
        $conv_id = $existing[0]->ID;
    } else {
        $talent_user = get_userdata($talent_id);
        $conv_id = wp_insert_post([
            'post_type'   => 'nextgen_conversation',
            'post_title'  => sprintf('Conversation: %s - %s', wp_get_current_user()->display_name, $talent_user->display_name),
            'post_status' => 'publish',
        ]);

        if (is_wp_error($conv_id)) {
            return new WP_Error('create_error', 'Impossible de creer la conversation', ['status' => 500]);
        }

        update_post_meta($conv_id, '_participant_1', $user_id);
        update_post_meta($conv_id, '_participant_2', $talent_id);
    }

    // Create the message
    $msg_id = wp_insert_post([
        'post_type'    => 'nextgen_message',
        'post_content' => $message,
        'post_parent'  => $conv_id,
        'post_status'  => 'publish',
        'post_author'  => $user_id,
    ]);

    if ($msg_id) {
        update_post_meta($msg_id, '_read', '0');
        // Touch the conversation to update modified date
        wp_update_post(['ID' => $conv_id]);
    }

    return new WP_REST_Response([
        'success'         => true,
        'conversation_id' => $conv_id,
        'message_id'      => $msg_id,
    ], 201);
}

function nextgen_message_send(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $conv_id = (int) $request['id'];
    $params  = $request->get_json_params();
    $content = isset($params['message']) ? sanitize_textarea_field($params['message']) : '';

    if (empty($content)) {
        return new WP_Error('empty_message', 'Le message ne peut pas etre vide', ['status' => 400]);
    }

    // Verify user is participant
    $p1 = (int) get_post_meta($conv_id, '_participant_1', true);
    $p2 = (int) get_post_meta($conv_id, '_participant_2', true);

    if ($user_id !== $p1 && $user_id !== $p2) {
        return new WP_Error('forbidden', 'Acces refuse', ['status' => 403]);
    }

    $msg_id = wp_insert_post([
        'post_type'    => 'nextgen_message',
        'post_content' => $content,
        'post_parent'  => $conv_id,
        'post_status'  => 'publish',
        'post_author'  => $user_id,
    ]);

    if (is_wp_error($msg_id)) {
        return new WP_Error('send_error', 'Impossible d\'envoyer le message', ['status' => 500]);
    }

    update_post_meta($msg_id, '_read', '0');
    // Touch conversation
    wp_update_post(['ID' => $conv_id]);

    return new WP_REST_Response([
        'success'    => true,
        'message_id' => $msg_id,
    ], 201);
}


// ----------------------------------------------------------
// ACCOUNT : Profile update (common for both roles)
// ----------------------------------------------------------
function nextgen_account_profile_update(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();

    $user_fields = [];
    if (isset($params['first_name'])) $user_fields['first_name'] = sanitize_text_field($params['first_name']);
    if (isset($params['last_name']))  $user_fields['last_name']  = sanitize_text_field($params['last_name']);

    if (!empty($user_fields)) {
        $user_fields['ID'] = $user_id;

        // Also update display_name
        if (isset($params['first_name']) || isset($params['last_name'])) {
            $user = get_userdata($user_id);
            $first = isset($params['first_name']) ? sanitize_text_field($params['first_name']) : $user->first_name;
            $last  = isset($params['last_name']) ? sanitize_text_field($params['last_name']) : $user->last_name;
            $user_fields['display_name'] = trim("$first $last");
        }

        $result = wp_update_user($user_fields);
        if (is_wp_error($result)) {
            return new WP_Error('update_error', 'Erreur lors de la mise a jour', ['status' => 500]);
        }
    }

    if (isset($params['phone'])) {
        update_user_meta($user_id, 'nextgen_phone', sanitize_text_field($params['phone']));
    }

    return new WP_REST_Response([
        'success' => true,
        'message' => 'Informations mises a jour avec succes',
    ], 200);
}


// ----------------------------------------------------------
// ACCOUNT : Password change
// ----------------------------------------------------------
function nextgen_account_password_change(WP_REST_Request $request) {
    $user_id = get_current_user_id();
    $params  = $request->get_json_params();

    $current      = isset($params['current']) ? $params['current'] : '';
    $new_password = isset($params['new_password']) ? $params['new_password'] : '';

    if (empty($current) || empty($new_password)) {
        return new WP_Error('missing_fields', 'Tous les champs sont requis', ['status' => 400]);
    }

    if (strlen($new_password) < 6) {
        return new WP_Error('weak_password', 'Le mot de passe doit contenir au moins 6 caracteres', ['status' => 400]);
    }

    $user = get_userdata($user_id);
    if (!wp_check_password($current, $user->user_pass, $user_id)) {
        return new WP_Error('wrong_password', 'Le mot de passe actuel est incorrect', ['status' => 403]);
    }

    wp_set_password($new_password, $user_id);

    // Generate a new JWT token since the old one will be invalidated
    if (defined('JWT_AUTH_SECRET_KEY')) {
        $issuedAt = time();
        $token_data = [
            'iss'  => get_bloginfo('url'),
            'iat'  => $issuedAt,
            'nbf'  => $issuedAt,
            'exp'  => $issuedAt + (DAY_IN_SECONDS * 7),
            'data' => [
                'user' => ['id' => $user_id],
            ],
        ];

        $token = \Firebase\JWT\JWT::encode($token_data, JWT_AUTH_SECRET_KEY, 'HS256');

        return new WP_REST_Response([
            'success' => true,
            'message' => 'Mot de passe modifie avec succes',
            'token'   => $token,
        ], 200);
    }

    return new WP_REST_Response([
        'success' => true,
        'message' => 'Mot de passe modifie avec succes',
    ], 200);
}


// ----------------------------------------------------------
// ACCOUNT : Deactivate
// ----------------------------------------------------------
function nextgen_account_deactivate(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    // Don't allow admin to deactivate via API
    if (current_user_can('manage_options')) {
        return new WP_Error('admin_protected', 'Les comptes administrateur ne peuvent pas etre desactives via l\'API', ['status' => 403]);
    }

    // Mark user as deactivated (soft delete)
    update_user_meta($user_id, 'nextgen_deactivated', true);
    update_user_meta($user_id, 'nextgen_deactivated_at', current_time('c'));

    // Set role to empty (effectively disabling the account)
    $user = get_userdata($user_id);
    $user->set_role('');

    return new WP_REST_Response([
        'success' => true,
        'message' => 'Compte desactive avec succes',
    ], 200);
}


// ----------------------------------------------------------
// ACCOUNT : Subscription
// ----------------------------------------------------------
function nextgen_account_subscription(WP_REST_Request $request) {
    $user_id = get_current_user_id();

    $plan   = get_user_meta($user_id, 'nextgen_subscription_plan', true) ?: 'free';
    $status = get_user_meta($user_id, 'nextgen_subscription_status', true) ?: 'active';

    $plans = [
        'free'    => ['label' => 'Gratuit',  'price' => null],
        'starter' => ['label' => 'Starter',  'price' => '29'],
        'pro'     => ['label' => 'Pro',      'price' => '59'],
        'premium' => ['label' => 'Premium',  'price' => '99'],
    ];

    $plan_info = isset($plans[$plan]) ? $plans[$plan] : $plans['free'];

    return new WP_REST_Response([
        'plan'         => $plan,
        'plan_label'   => $plan_info['label'],
        'status'       => $status,
        'price'        => $plan_info['price'],
        'next_billing' => get_user_meta($user_id, 'nextgen_next_billing', true) ?: null,
    ], 200);
}


// ============================================================
// 4. Track profile views (hook into talent profile page visits)
// ============================================================

/**
 * Increment profile views when a talent_profile is viewed via REST.
 * This hooks into the rest_prepare response for talent-profiles.
 */
add_filter('rest_prepare_talent_profile', function ($response, $post, $request) {
    // Only increment on single profile view, not lists
    if ($request->get_method() === 'GET' && isset($request['id'])) {
        $user_id = get_post_meta($post->ID, 'user_id', true);
        if ($user_id) {
            $views = (int) get_user_meta($user_id, 'nextgen_profile_views', true);
            update_user_meta($user_id, 'nextgen_profile_views', $views + 1);
        }
    }
    return $response;
}, 10, 3);

<?php
/**
 * Plugin Name: NEXTGEN - JWT Authentication
 * Description: Authentication JWT pour l'API REST NEXTGEN (remplacement du plugin JWT incomplet)
 * Version: 1.0.0
 * Author: NEXTGEN Team
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Classe JWT simplifiee (sans dependance externe)
 * Encode/decode des tokens JWT avec HMAC SHA256
 */
class NextGen_JWT {

    /**
     * Encode un payload en token JWT
     */
    public static function encode(array $payload, string $secret): string {
        $header = self::base64url_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
        $payload_encoded = self::base64url_encode(json_encode($payload));
        $signature = self::base64url_encode(
            hash_hmac('sha256', "$header.$payload_encoded", $secret, true)
        );
        return "$header.$payload_encoded.$signature";
    }

    /**
     * Decode un token JWT et retourne le payload
     */
    public static function decode(string $token, string $secret): ?array {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return null;
        }

        list($header_b64, $payload_b64, $signature_b64) = $parts;

        // Verifier la signature
        $expected_signature = self::base64url_encode(
            hash_hmac('sha256', "$header_b64.$payload_b64", $secret, true)
        );

        if (!hash_equals($expected_signature, $signature_b64)) {
            return null;
        }

        $payload = json_decode(self::base64url_decode($payload_b64), true);
        if (!$payload) {
            return null;
        }

        // Verifier l'expiration
        if (isset($payload['exp']) && $payload['exp'] < time()) {
            return null;
        }

        return $payload;
    }

    private static function base64url_encode(string $data): string {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64url_decode(string $data): string {
        return base64_decode(strtr($data, '-_', '+/'));
    }
}

/**
 * Enregistrer les endpoints JWT
 */
add_action('rest_api_init', function () {
    // POST /jwt-auth/v1/token - Obtenir un token
    register_rest_route('jwt-auth/v1', '/token', [
        'methods'  => 'POST',
        'callback' => 'nextgen_jwt_generate_token',
        'permission_callback' => '__return_true',
    ]);

    // POST /jwt-auth/v1/token/validate - Valider un token
    register_rest_route('jwt-auth/v1', '/token/validate', [
        'methods'  => 'POST',
        'callback' => 'nextgen_jwt_validate_token',
        'permission_callback' => '__return_true',
    ]);
});

/**
 * Generer un token JWT
 */
function nextgen_jwt_generate_token(WP_REST_Request $request) {
    $username = $request->get_param('username');
    $password = $request->get_param('password');

    if (empty($username) || empty($password)) {
        return new WP_Error(
            'jwt_auth_bad_credentials',
            'Identifiants requis.',
            ['status' => 400]
        );
    }

    // Authentifier l'utilisateur
    $user = wp_authenticate($username, $password);

    if (is_wp_error($user)) {
        error_log('NEXTGEN JWT: Auth failed for ' . $username . ' - ' . $user->get_error_message());
        return new WP_Error(
            'jwt_auth_invalid_credentials',
            'Identifiants incorrects.',
            ['status' => 403]
        );
    }

    $secret = nextgen_jwt_get_secret();
    if (!$secret) {
        return new WP_Error(
            'jwt_auth_bad_config',
            'JWT_AUTH_SECRET_KEY non definie dans wp-config.php.',
            ['status' => 500]
        );
    }

    $issued_at = time();
    $expire = $issued_at + (DAY_IN_SECONDS * 7); // 7 jours

    $payload = [
        'iss'  => get_bloginfo('url'),
        'iat'  => $issued_at,
        'nbf'  => $issued_at,
        'exp'  => $expire,
        'data' => [
            'user' => [
                'id' => $user->ID,
            ],
        ],
    ];

    $token = NextGen_JWT::encode($payload, $secret);

    error_log('NEXTGEN JWT: Token generated for user ' . $user->ID . ' (' . $user->user_login . ')');

    return new WP_REST_Response([
        'token'             => $token,
        'user_email'        => $user->user_email,
        'user_nicename'     => $user->user_nicename,
        'user_display_name' => $user->display_name,
    ], 200);
}

/**
 * Valider un token JWT
 */
function nextgen_jwt_validate_token(WP_REST_Request $request) {
    $auth_header = $request->get_header('Authorization');
    if (!$auth_header) {
        return new WP_Error('jwt_auth_no_auth_header', 'Authorization header manquant.', ['status' => 403]);
    }

    $token = str_replace('Bearer ', '', $auth_header);
    $secret = nextgen_jwt_get_secret();

    if (!$secret) {
        return new WP_Error('jwt_auth_bad_config', 'JWT secret non defini.', ['status' => 500]);
    }

    $payload = NextGen_JWT::decode($token, $secret);

    if (!$payload) {
        return new WP_Error('jwt_auth_invalid_token', 'Token invalide ou expire.', ['status' => 403]);
    }

    return new WP_REST_Response([
        'code' => 'jwt_auth_valid_token',
        'data' => ['status' => 200],
    ], 200);
}

/**
 * Intercepter toutes les requetes REST pour authentifier via JWT
 */
add_filter('determine_current_user', 'nextgen_jwt_determine_current_user', 20);

function nextgen_jwt_determine_current_user($user_id) {
    // Ne pas ecraser si deja authentifie
    if ($user_id) {
        return $user_id;
    }

    // Verifier seulement les requetes REST API
    $rest_prefix = trailingslashit(rest_get_url_prefix());
    $request_uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';

    if (strpos($request_uri, $rest_prefix) === false && strpos($request_uri, '/wp-json/') === false) {
        return $user_id;
    }

    // Recuperer le token depuis le header Authorization
    $auth_header = '';
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            $auth_header = $headers['Authorization'];
        }
    }

    if (empty($auth_header) || strpos($auth_header, 'Bearer ') !== 0) {
        return $user_id;
    }

    $token = str_replace('Bearer ', '', $auth_header);
    $secret = nextgen_jwt_get_secret();

    if (!$secret) {
        return $user_id;
    }

    $payload = NextGen_JWT::decode($token, $secret);

    if (!$payload || !isset($payload['data']['user']['id'])) {
        return $user_id;
    }

    return $payload['data']['user']['id'];
}

/**
 * Recuperer la cle secrete JWT
 */
function nextgen_jwt_get_secret(): ?string {
    if (defined('JWT_AUTH_SECRET_KEY') && JWT_AUTH_SECRET_KEY) {
        return JWT_AUTH_SECRET_KEY;
    }
    return null;
}

/**
 * Aussi mettre a jour la generation de token dans nextgen-api-endpoints.php
 * en rendant NextGen_JWT disponible globalement
 */
add_action('init', function () {
    // Rendre la classe disponible pour les autres plugins
    if (!class_exists('Firebase\JWT\JWT')) {
        // Creer un alias pour que nextgen-api-endpoints.php puisse utiliser NextGen_JWT
        // via la meme verification class_exists
    }
});

error_log('=== NEXTGEN JWT Auth mu-plugin loaded ===');

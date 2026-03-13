<?php
/**
 * NEXGEN Sport - Template de configuration production
 *
 * Copier ce fichier et renseigner les valeurs dans wp-config.php
 * sur le serveur de production.
 */

// ============================================================
// 1. JWT Authentication (OBLIGATOIRE)
// ============================================================
// Générer une clé forte : https://api.wordpress.org/secret-key/1.1/salt/
define('JWT_AUTH_SECRET_KEY', 'REMPLACER_PAR_UNE_CLE_FORTE_ALEATOIRE');

// ============================================================
// 2. Stripe (paiements EUR)
// ============================================================
define('NEXGEN_STRIPE_SECRET_KEY',      'sk_live_...');
define('NEXGEN_STRIPE_PUBLISHABLE_KEY', 'pk_live_...');
define('NEXGEN_STRIPE_WEBHOOK_SECRET',  'whsec_...');

// Price IDs Stripe (créer dans le dashboard Stripe > Produits)
define('NEXGEN_STRIPE_PRICE_TALENT_STARTER',     'price_...');
define('NEXGEN_STRIPE_PRICE_TALENT_AMBITION',    'price_...');
define('NEXGEN_STRIPE_PRICE_TALENT_ELITE',       'price_...');
define('NEXGEN_STRIPE_PRICE_RECRUTEUR_SELECTIF', 'price_...');
define('NEXGEN_STRIPE_PRICE_RECRUTEUR_PREMIUM',  'price_...');
define('NEXGEN_STRIPE_PRICE_RECRUTEUR_ILLIMITE', 'price_...');

// ============================================================
// 3. CinetPay (paiements Mobile Money XOF/CFA)
// ============================================================
define('NEXGEN_CINETPAY_API_KEY',    'VOTRE_API_KEY');
define('NEXGEN_CINETPAY_SITE_ID',   'VOTRE_SITE_ID');
define('NEXGEN_CINETPAY_SECRET_KEY', 'VOTRE_SECRET_KEY');

// ============================================================
// 4. CORS - URL du frontend
// ============================================================
define('NEXGEN_FRONTEND_URL', 'https://votre-domaine.com');

// ============================================================
// 5. WordPress Production Settings
// ============================================================
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);
define('WP_ENVIRONMENT_TYPE', 'production');
define('DISALLOW_FILE_EDIT', true);

// ============================================================
// 6. Google OAuth (optionnel)
// ============================================================
// define('NEXGEN_GOOGLE_CLIENT_ID', 'VOTRE_GOOGLE_CLIENT_ID');
// define('NEXGEN_GOOGLE_CLIENT_SECRET', 'VOTRE_GOOGLE_CLIENT_SECRET');

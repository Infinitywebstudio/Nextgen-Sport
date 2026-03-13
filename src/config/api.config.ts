/**
 * NEXTGEN API Configuration
 * Configuration centralisée pour les appels API WordPress
 */

// Base URLs
export const API_CONFIG = {
  // WordPress API Base URL
  WP_API_URL: import.meta.env.VITE_WP_API_URL || 'http://wp-nexgen.local/wp-json',
  WP_SITE_URL: import.meta.env.VITE_WP_SITE_URL || 'http://wp-nexgen.local',

  // Frontend URL
  APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:5173',

  // Namespaces
  NEXTGEN_NAMESPACE: import.meta.env.VITE_API_NAMESPACE || 'nextgen/v1',
  WP_NAMESPACE: import.meta.env.VITE_WP_NAMESPACE || 'wp/v2',
  JWT_NAMESPACE: 'jwt-auth/v1',

  // Mode
  MODE: import.meta.env.VITE_APP_MODE || 'development',
  DEBUG: import.meta.env.VITE_DEBUG === 'true',

  // Stripe
  STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
};

// API Endpoints
export const API_ENDPOINTS = {
  // NEXTGEN Custom Endpoints
  NEXTGEN: {
    STATUS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/status`,
    STATS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/stats`,
    REGISTER: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/register`,
    REGISTER_GOOGLE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/register-google`,
    PROFILE: (userId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/profile/${userId}`,
  },

  // JWT Authentication
  AUTH: {
    TOKEN: `${API_CONFIG.WP_API_URL}/${API_CONFIG.JWT_NAMESPACE}/token`,
    VALIDATE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.JWT_NAMESPACE}/token/validate`,
  },

  // WordPress Standard Endpoints
  WP: {
    USERS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/users`,
    USER: (userId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/users/${userId}`,
    ME: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/users/me`,
    CATEGORIES: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/categories`,
    SPORTS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/sports`,
  },

  // Talent Profiles (Custom Post Type)
  SERVICES: {
    LIST: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/talent-profiles`,
    DETAIL: (serviceId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/talent-profiles/${serviceId}`,
    CATEGORIES: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/sports`,
    CATEGORY: (categoryId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/sports/${categoryId}`,
  },

  // Missions (Custom Post Type)
  MISSIONS: {
    LIST: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/missions`,
    DETAIL: (missionId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/missions/${missionId}`,
  },

  // Reviews (Custom Post Type)
  REVIEWS: {
    LIST: `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/reviews`,
    DETAIL: (reviewId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}/reviews/${reviewId}`,
  },

  // Dashboard Endpoints (Talent & Recruteur)
  DASHBOARD: {
    // Talent
    TALENT_STATS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/stats`,
    TALENT_PROFILE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/profile`,
    TALENT_PORTFOLIO: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/portfolio`,
    TALENT_PORTFOLIO_DELETE: (imageId: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/portfolio/${imageId}`,

    // Talent - Activity, Experience, Opportunities
    TALENT_ACTIVITY: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/activity`,
    TALENT_EXPERIENCE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/experience`,
    TALENT_EXPERIENCE_DELETE: (expId: string) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/experience/${expId}`,
    TALENT_OPPORTUNITIES: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/opportunities`,
    TALENT_OPPORTUNITY: (id: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/opportunities/${id}`,

    // Recruteur - Visited
    RECRUTEUR_VISITED: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/recruteur/visited`,
    RECRUTEUR_VISIT: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/recruteur/visit`,

    // Recruteur - Conversations
    CONVERSATIONS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/recruteur/conversations`,
    CONVERSATION: (id: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/recruteur/conversations/${id}`,

    // Talent - Conversations
    TALENT_CONVERSATIONS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/conversations`,
    TALENT_CONVERSATION: (id: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/conversations/${id}`,

    // Talent - Requests
    TALENT_REQUESTS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/requests`,
    TALENT_REQUEST: (id: number) => `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/talent/requests/${id}`,

    // Recruteur - Requests
    RECRUTEUR_REQUEST: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/recruteur/requests`,

    // Account (common)
    ACCOUNT_PROFILE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/account/profile`,
    ACCOUNT_PASSWORD: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/account/password`,
    ACCOUNT_DEACTIVATE: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/account`,
    ACCOUNT_SUBSCRIPTION: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/account/subscription`,
  },

  // Subscription Management
  SUBSCRIPTION: {
    STATUS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription`,
    CHECKOUT: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription/checkout`,
    PORTAL: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription/portal`,
    CANCEL: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription/cancel`,
    ACTIVATE_TRIAL: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription/activate-trial`,
    CHECK_ACCESS: `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/subscription/check-access`,
  },
};

// Request Headers
export const getHeaders = (includeAuth = false): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  if (includeAuth) {
    const token = localStorage.getItem('nextgen_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

// Log configuration in development
if (API_CONFIG.DEBUG) {
  console.log('🔧 NEXTGEN API Configuration:', API_CONFIG);
  console.log('📡 API Endpoints:', API_ENDPOINTS);
}

export default API_CONFIG;

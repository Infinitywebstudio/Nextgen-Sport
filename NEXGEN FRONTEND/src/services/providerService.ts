// Service pour gérer les appels API WordPress pour les talents NEXTGEN
// Utilise la configuration centralisée de api.config.ts

import { API_CONFIG } from '../config/api.config';

const NEXTGEN_API_URL = `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}`;
const WP_API_URL = `${API_CONFIG.WP_API_URL}/${API_CONFIG.WP_NAMESPACE}`;

// Interface pour les données retournées par l'API WordPress NEXTGEN
export interface WordPressProvider {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  roles: string[];
  registered_date: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
  acf: {
    // Présentation
    bio?: string;
    specialties?: string;
    // Localisation et Tarif
    city?: string;
    category_name?: string;
    hourly_rate?: string | number;
    // Statistiques
    average_rating?: number;
    review_count?: number;
    completed_orders?: number;
    response_time?: string;
    // Badges
    is_top_provider?: boolean;
    is_verified?: boolean;
    // Portfolio
    portfolio_gallery?: Array<{
      ID: number;
      url: string;
      sizes: {
        'nextgen-medium': string;
        'nextgen-large': string;
      };
    }>;
  };
  // Informations pour les ServiceCards (peuvent être au niveau racine ou dans acf)
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  city?: string;
  hourly_rate?: string | number;
  average_rating?: number;
  review_count?: number;
  is_top_provider?: boolean;
  missions_count?: number;
  response_time?: string;
}

// Interface pour les données utilisées dans l'application
export interface Provider {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  isTopPrestataire: boolean;
  bio?: string;
  specialties?: string;
  portfolio?: string[];
  // Nouveaux champs pour le profil complet
  registeredDate: string;
  missionsCount: number;
  responseTime: string;
}

/**
 * Récupère les catégories de service
 */
export async function fetchCategories() {
  try {
    const response = await fetch(`${NEXTGEN_API_URL}/service-categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    throw error;
  }
}

/**
 * Transforme les données WordPress NEXTGEN en format utilisable par l'application
 *
 * Structure des données retournées par l'API WordPress (nextgen-provider-registration.php):
 * - Champs racine: id, name, first_name, last_name, email, roles, registered_date, avatar_urls
 * - Champs ACF (définis dans nextgen-portfolio-acf-field.php):
 *   - Présentation: bio, specialties
 *   - Localisation & Tarif: city, category_name, hourly_rate
 *   - Statistiques: average_rating, review_count, completed_orders, response_time
 *   - Badges: is_top_provider, is_verified
 *   - Portfolio: portfolio_gallery
 */
function transformWordPressProvider(wpProvider: any): Provider {
  // Debug: afficher les données brutes pour identifier les problèmes
  if (API_CONFIG.DEBUG) {
    console.log('🔍 Données brutes du prestataire:', {
      id: wpProvider.id,
      name: wpProvider.name,
      // Localisation - le champ ACF s'appelle "city"
      city_acf: wpProvider.acf?.city,
      // Tarif - le champ ACF s'appelle "hourly_rate"
      hourly_rate_acf: wpProvider.acf?.hourly_rate,
      // Catégorie - le champ ACF s'appelle "category_name"
      category_name_acf: wpProvider.acf?.category_name,
      // Note - le champ ACF s'appelle "average_rating"
      average_rating_acf: wpProvider.acf?.average_rating,
      // Avis - le champ ACF s'appelle "review_count"
      review_count_acf: wpProvider.acf?.review_count,
      // Missions - le champ ACF s'appelle "completed_orders"
      completed_orders_acf: wpProvider.acf?.completed_orders,
      // Temps de réponse - le champ ACF s'appelle "response_time"
      response_time_acf: wpProvider.acf?.response_time,
      // Top prestataire - le champ ACF s'appelle "is_top_provider"
      is_top_provider_acf: wpProvider.acf?.is_top_provider,
      registered_date: wpProvider.registered_date,
      // Dump complet de acf pour debug
      acf_full: wpProvider.acf,
    });
  }

  // Extraire les URLs du portfolio
  const portfolio = wpProvider.acf?.portfolio_gallery?.map((img: any) =>
    img.sizes?.['nextgen-large'] || img.url
  ) || [];

  // Le taux horaire - dans acf.hourly_rate selon nextgen-public-api.php
  let hourlyRate = 0;
  const rateValue = wpProvider.acf?.hourly_rate;

  if (rateValue) {
    if (typeof rateValue === 'number') {
      hourlyRate = rateValue;
    } else {
      // Nettoyer et parser le prix (ex: "25€/h" -> 25, "25" -> 25)
      const match = String(rateValue).match(/\d+/);
      hourlyRate = match ? parseInt(match[0]) : 0;
    }
  }

  // Catégorie - le champ ACF s'appelle "category_name"
  const categoryName = wpProvider.acf?.category_name || '';

  // Ville/Localisation - le champ ACF s'appelle "city" (pas "location")
  const city = wpProvider.acf?.city || '';

  // Note - le champ ACF s'appelle "average_rating" (pas "rating")
  const rating = wpProvider.acf?.average_rating || 0;

  // Nombre d'avis - le champ ACF s'appelle "review_count" (pas "total_reviews")
  const reviewCount = wpProvider.acf?.review_count || 0;

  // Badge top prestataire - le champ ACF s'appelle "is_top_provider"
  const isTop = wpProvider.acf?.is_top_provider || false;

  // Date d'inscription
  const registeredDate = wpProvider.registered_date || '';

  // Missions réalisées - le champ ACF s'appelle "completed_orders"
  const missionsCount = wpProvider.acf?.completed_orders || 0;

  // Temps de réponse - le champ ACF s'appelle "response_time"
  const responseTime = wpProvider.acf?.response_time || '~24h';

  return {
    id: wpProvider.id,
    name: wpProvider.name || `${wpProvider.first_name} ${wpProvider.last_name}`,
    firstName: wpProvider.first_name || '',
    lastName: wpProvider.last_name || '',
    email: wpProvider.email || '',
    avatar: wpProvider.avatar_urls?.['96'] || 'https://via.placeholder.com/400x400?text=Avatar',
    location: city,
    category: categoryName,
    price: hourlyRate,
    rating: parseFloat(rating) || 0,
    reviewCount: parseInt(reviewCount) || 0,
    isTopPrestataire: Boolean(isTop),
    bio: wpProvider.acf?.bio || '',
    specialties: wpProvider.acf?.specialties || '',
    portfolio,
    registeredDate,
    missionsCount: parseInt(String(missionsCount)) || 0,
    responseTime,
  };
}

/**
 * Récupère tous les prestataires depuis WordPress
 */
export async function fetchProviders(): Promise<Provider[]> {
  try {
    console.log('Fetching providers from:', `${NEXTGEN_API_URL}/providers`);

    const response = await fetch(`${NEXTGEN_API_URL}/providers?per_page=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`${data.length} prestataires récupérés depuis WordPress`);

    return data.map(transformWordPressProvider);
  } catch (error) {
    console.error('Erreur lors de la récupération des prestataires:', error);
    throw error;
  }
}

/**
 * Récupère un prestataire par son ID
 */
export async function fetchProviderById(id: number): Promise<Provider> {
  try {
    console.log('Fetching provider by ID:', id);

    // Récupérer tous les prestataires et filtrer par ID
    const allProviders = await fetchProviders();
    const provider = allProviders.find(p => p.id === id);

    if (!provider) {
      throw new Error(`Provider with ID ${id} not found`);
    }

    console.log('Provider found:', provider);
    return provider;
  } catch (error) {
    console.error(`Erreur lors de la récupération du prestataire ${id}:`, error);
    throw error;
  }
}

/**
 * Filtre les prestataires selon des critères
 */
export async function fetchFilteredProviders(filters: {
  categories?: string[];
  locations?: string[];
  minRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isTopPrestataire?: boolean;
}): Promise<Provider[]> {
  try {
    // Récupérer tous les prestataires
    const allProviders = await fetchProviders();

    // Appliquer les filtres côté client
    let filtered = allProviders;

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories!.includes(p.category));
    }

    if (filters.locations && filters.locations.length > 0) {
      filtered = filtered.filter(p => filters.locations!.includes(p.location));
    }

    if (filters.minRating && filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= filters.minRating!);
    }

    if (filters.minPrice !== undefined && filters.minPrice > 0) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined && filters.maxPrice < 100) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.isTopPrestataire !== undefined) {
      filtered = filtered.filter(p => p.isTopPrestataire === filters.isTopPrestataire);
    }

    return filtered;
  } catch (error) {
    console.error('Erreur lors du filtrage des prestataires:', error);
    throw error;
  }
}

/**
 * Récupère les avis d'un prestataire (depuis les commentaires WordPress)
 */
export async function fetchProviderReviews(providerId: number) {
  try {
    const response = await fetch(`${WP_API_URL}/comments?post=${providerId}&per_page=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reviews = await response.json();
    return reviews;
  } catch (error) {
    console.error(`Erreur lors de la récupération des avis du prestataire ${providerId}:`, error);
    throw error;
  }
}

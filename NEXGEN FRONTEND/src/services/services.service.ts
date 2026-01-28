/**
 * NEXTGEN Services Management Service
 * Gestion des services/gigs (offres des prestataires)
 */

import { API_ENDPOINTS, getHeaders } from '../config/api.config';
import type { ApiResponse } from './wordpress.service';

// Types
export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count: number;
  parent?: number;
}

// WordPress rendered content type
export interface RenderedContent {
  rendered: string;
  protected?: boolean;
}

export interface Service {
  id: number;
  title: RenderedContent;
  content: RenderedContent;
  excerpt?: RenderedContent;
  author: number;
  status: 'publish' | 'draft' | 'pending';
  date: string;
  modified: string;
  featured_media?: number;
  categories?: number[];
  acf?: {
    price?: number;
    delivery_time?: string;
    service_location?: string;
    skills?: string[];
    portfolio_images?: string[];
  };
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      avatar_urls?: Record<string, string>;
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    'wp:term'?: Array<ServiceCategory[]>;
  };
}

export interface CreateServiceData {
  title: string;
  content: string;
  excerpt?: string;
  status?: 'publish' | 'draft' | 'pending';
  categories?: number[];
  acf?: {
    price?: number;
    delivery_time?: string;
    service_location?: string;
    skills?: string[];
  };
}

export interface ServiceFilters {
  category?: number;
  author?: number;
  search?: string;
  per_page?: number;
  page?: number;
  orderby?: 'date' | 'title' | 'modified';
  order?: 'asc' | 'desc';
  status?: 'publish' | 'draft' | 'pending';
}

/**
 * Service de gestion des services NEXTGEN
 */
class ServicesService {
  /**
   * Récupérer la liste des catégories de services
   */
  async getCategories(): Promise<ApiResponse<ServiceCategory[]>> {
    try {
      const response = await fetch(API_ENDPOINTS.SERVICES.CATEGORIES, {
        headers: getHeaders(false),
      });

      if (!response.ok) {
        return {
          success: false,
          error: 'Erreur lors de la récupération des catégories',
        };
      }

      const data: ServiceCategory[] = await response.json();

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Get categories error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Récupérer une catégorie par son ID
   */
  async getCategoryById(id: number): Promise<ApiResponse<ServiceCategory>> {
    try {
      const response = await fetch(`${API_ENDPOINTS.SERVICES.CATEGORIES}/${id}`, {
        headers: getHeaders(false),
      });

      if (!response.ok) {
        return {
          success: false,
          error: 'Catégorie non trouvée',
        };
      }

      const data: ServiceCategory = await response.json();

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Get category error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Récupérer la liste des services avec filtres
   */
  async getServices(filters?: ServiceFilters): Promise<ApiResponse<Service[]>> {
    try {
      // Construire l'URL avec les paramètres de filtre
      const params = new URLSearchParams();

      if (filters) {
        if (filters.category) params.append('service-categories', filters.category.toString());
        if (filters.author) params.append('author', filters.author.toString());
        if (filters.search) params.append('search', filters.search);
        if (filters.per_page) params.append('per_page', filters.per_page.toString());
        if (filters.page) params.append('page', filters.page.toString());
        if (filters.orderby) params.append('orderby', filters.orderby);
        if (filters.order) params.append('order', filters.order);
        if (filters.status) params.append('status', filters.status);
      }

      // Toujours inclure les données embedded (author, featured media, terms)
      params.append('_embed', 'true');

      const url = `${API_ENDPOINTS.SERVICES.LIST}?${params.toString()}`;

      const response = await fetch(url, {
        headers: getHeaders(false),
      });

      if (!response.ok) {
        return {
          success: false,
          error: 'Erreur lors de la récupération des services',
        };
      }

      const data: Service[] = await response.json();

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Get services error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Récupérer un service par son ID
   */
  async getServiceById(id: number): Promise<ApiResponse<Service>> {
    try {
      const response = await fetch(`${API_ENDPOINTS.SERVICES.LIST}/${id}?_embed=true`, {
        headers: getHeaders(false),
      });

      if (!response.ok) {
        return {
          success: false,
          error: 'Service non trouvé',
        };
      }

      const data: Service = await response.json();

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Get service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Créer un nouveau service (requiert authentification)
   */
  async createService(serviceData: CreateServiceData): Promise<ApiResponse<Service>> {
    try {
      const response = await fetch(API_ENDPOINTS.SERVICES.LIST, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la création du service',
        };
      }

      const data: Service = await response.json();

      return {
        success: true,
        data,
        message: 'Service créé avec succès',
      };
    } catch (error) {
      console.error('Create service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Mettre à jour un service existant (requiert authentification)
   */
  async updateService(id: number, serviceData: Partial<CreateServiceData>): Promise<ApiResponse<Service>> {
    try {
      const response = await fetch(`${API_ENDPOINTS.SERVICES.LIST}/${id}`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la mise à jour du service',
        };
      }

      const data: Service = await response.json();

      return {
        success: true,
        data,
        message: 'Service mis à jour avec succès',
      };
    } catch (error) {
      console.error('Update service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Supprimer un service (requiert authentification)
   */
  async deleteService(id: number): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${API_ENDPOINTS.SERVICES.LIST}/${id}`, {
        method: 'DELETE',
        headers: getHeaders(true),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la suppression du service',
        };
      }

      return {
        success: true,
        message: 'Service supprimé avec succès',
      };
    } catch (error) {
      console.error('Delete service error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue',
      };
    }
  }

  /**
   * Rechercher des services par mot-clé
   */
  async searchServices(query: string, filters?: Omit<ServiceFilters, 'search'>): Promise<ApiResponse<Service[]>> {
    return this.getServices({
      ...filters,
      search: query,
    });
  }

  /**
   * Récupérer les services d'un utilisateur spécifique
   */
  async getServicesByAuthor(authorId: number, filters?: Omit<ServiceFilters, 'author'>): Promise<ApiResponse<Service[]>> {
    return this.getServices({
      ...filters,
      author: authorId,
    });
  }

  /**
   * Récupérer les services d'une catégorie spécifique
   */
  async getServicesByCategory(categoryId: number, filters?: Omit<ServiceFilters, 'category'>): Promise<ApiResponse<Service[]>> {
    return this.getServices({
      ...filters,
      category: categoryId,
    });
  }
}

// Export singleton instance
const servicesService = new ServicesService();
export default servicesService;

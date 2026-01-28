/**
 * NEXTGEN WordPress API Service
 * Service pour gérer toutes les interactions avec l'API WordPress
 */

import { API_CONFIG, API_ENDPOINTS, getHeaders } from '../config/api.config';

// Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface WPError {
  code: string;
  message: string;
  data?: {
    status: number;
  };
}

/**
 * Service API WordPress
 */
class WordPressService {

  /**
   * Requête GET générique
   */
  async get<T>(url: string, authenticated = false): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders(authenticated),
      });

      if (!response.ok) {
        const error: WPError = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la requête',
        };
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('GET Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur réseau',
      };
    }
  }

  /**
   * Requête POST générique
   */
  async post<T>(url: string, body: unknown, authenticated = false): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(authenticated),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error: WPError = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la requête',
        };
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('POST Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur réseau',
      };
    }
  }

  /**
   * Requête PUT générique
   */
  async put<T>(url: string, body: unknown, authenticated = false): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: getHeaders(authenticated),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error: WPError = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la requête',
        };
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('PUT Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur réseau',
      };
    }
  }

  /**
   * Requête DELETE générique
   */
  async delete<T>(url: string, authenticated = false): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: getHeaders(authenticated),
      });

      if (!response.ok) {
        const error: WPError = await response.json();
        return {
          success: false,
          error: error.message || 'Erreur lors de la requête',
        };
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('DELETE Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur réseau',
      };
    }
  }

  // ========== ENDPOINTS SPÉCIFIQUES ==========

  /**
   * Vérifier le statut de l'API NEXTGEN
   */
  async checkStatus() {
    return this.get(API_ENDPOINTS.NEXTGEN.STATUS);
  }

  /**
   * Récupérer les statistiques du site
   */
  async getStats() {
    return this.get(API_ENDPOINTS.NEXTGEN.STATS);
  }

  /**
   * Récupérer les catégories de services
   */
  async getServiceCategories() {
    return this.get(API_ENDPOINTS.SERVICES.CATEGORIES);
  }

  /**
   * Récupérer les services
   */
  async getServices(params?: {
    per_page?: number;
    page?: number;
    category?: number;
    search?: string;
  }) {
    let url = API_ENDPOINTS.SERVICES.LIST;

    if (params) {
      const queryParams = new URLSearchParams();
      if (params.per_page) queryParams.append('per_page', params.per_page.toString());
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.category) queryParams.append('nextgen_service_category', params.category.toString());
      if (params.search) queryParams.append('search', params.search);

      url += `?${queryParams.toString()}`;
    }

    return this.get(url);
  }

  /**
   * Récupérer un service par ID
   */
  async getService(serviceId: number) {
    return this.get(API_ENDPOINTS.SERVICES.DETAIL(serviceId));
  }

  /**
   * Récupérer les missions
   */
  async getMissions(params?: {
    per_page?: number;
    page?: number;
    author?: number;
  }) {
    let url = API_ENDPOINTS.MISSIONS.LIST;

    if (params) {
      const queryParams = new URLSearchParams();
      if (params.per_page) queryParams.append('per_page', params.per_page.toString());
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.author) queryParams.append('author', params.author.toString());

      url += `?${queryParams.toString()}`;
    }

    return this.get(url, true); // Authentifié
  }

  /**
   * Créer une mission
   */
  async createMission(missionData: {
    title: string;
    content: string;
    status?: string;
    [key: string]: unknown;
  }) {
    return this.post(API_ENDPOINTS.MISSIONS.LIST, missionData, true);
  }

  /**
   * Créer un service
   */
  async createService(serviceData: {
    title: string;
    content: string;
    status?: string;
    nextgen_service_category?: number[];
    [key: string]: unknown;
  }) {
    return this.post(API_ENDPOINTS.SERVICES.LIST, serviceData, true);
  }
}

// Export singleton instance
const wordPressService = new WordPressService();
export default wordPressService;

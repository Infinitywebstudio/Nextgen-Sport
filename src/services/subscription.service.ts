/**
 * NEXTGEN Subscription Service
 * Gestion des abonnements, checkout, portail et feature access
 */

import { API_ENDPOINTS, getHeaders } from '../config/api.config';

// ============================================================
// Types
// ============================================================

export type TalentPlanSlug = 'talent_starter' | 'talent_ambition' | 'talent_elite';
export type RecruteurPlanSlug = 'recruteur_selectif' | 'recruteur_premium' | 'recruteur_illimite';
export type PlanSlug = TalentPlanSlug | RecruteurPlanSlug | 'free';
export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'cancelled' | 'expired' | 'none';
export type PaymentProvider = 'stripe' | 'cinetpay';

export interface SubscriptionUsage {
  profile_views_used: number | null;
  profile_views_limit: number | null;
  videos_used: number | null;
  videos_limit: number | null;
}

export interface SubscriptionFeatures {
  video_limit: number | null;
  profile_views_limit: number | null;
  advanced_search: boolean;
  badge: 'ambition' | 'elite' | null;
  talent_tier_access: TalentPlanSlug[];
  search_priority: boolean;
  stats_access: boolean;
  notifications: boolean;
  pro_dashboard: boolean;
  pre_access_24h: boolean;
}

export interface SubscriptionData {
  plan: PlanSlug;
  plan_label: string;
  status: SubscriptionStatus;
  price: string | null;
  currency: string;
  payment_provider: PaymentProvider | null;
  trial_end: string | null;
  current_period_end: string | null;
  trial_used: boolean;
  usage: SubscriptionUsage;
  features: SubscriptionFeatures;
}

export interface CheckAccessResult {
  allowed: boolean;
  remaining?: number | null;
  reason?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// ============================================================
// Service
// ============================================================

class SubscriptionService {

  private async request<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        ...options,
        headers: getHeaders(true),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || `Erreur ${response.status}`,
        };
      }

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur réseau',
      };
    }
  }

  /**
   * Récupérer l'abonnement courant
   */
  async getSubscription(): Promise<ApiResponse<SubscriptionData>> {
    return this.request<SubscriptionData>(API_ENDPOINTS.SUBSCRIPTION.STATUS);
  }

  /**
   * Créer une session de checkout
   */
  async createCheckout(
    plan: PlanSlug,
    paymentProvider: PaymentProvider,
    successUrl: string,
    cancelUrl: string,
  ): Promise<ApiResponse<{ checkout_url: string; session_id?: string; transaction_id?: string }>> {
    return this.request(API_ENDPOINTS.SUBSCRIPTION.CHECKOUT, {
      method: 'POST',
      body: JSON.stringify({
        plan,
        payment_provider: paymentProvider,
        success_url: successUrl,
        cancel_url: cancelUrl,
      }),
    });
  }

  /**
   * Obtenir l'URL du portail Stripe
   */
  async getPortalUrl(returnUrl: string): Promise<ApiResponse<{ portal_url: string }>> {
    return this.request(API_ENDPOINTS.SUBSCRIPTION.PORTAL, {
      method: 'POST',
      body: JSON.stringify({ return_url: returnUrl }),
    });
  }

  /**
   * Annuler l'abonnement
   */
  async cancelSubscription(): Promise<ApiResponse<{ success: boolean; message: string; current_period_end?: string }>> {
    return this.request(API_ENDPOINTS.SUBSCRIPTION.CANCEL, {
      method: 'POST',
    });
  }

  /**
   * Activer l'essai gratuit
   */
  async activateTrial(plan: PlanSlug): Promise<ApiResponse<{ success: boolean; plan: string; status: string; trial_end: string }>> {
    return this.request(API_ENDPOINTS.SUBSCRIPTION.ACTIVATE_TRIAL, {
      method: 'POST',
      body: JSON.stringify({ plan }),
    });
  }

  /**
   * Vérifier l'accès à une fonctionnalité
   */
  async checkAccess(feature: string, context?: Record<string, unknown>): Promise<ApiResponse<CheckAccessResult>> {
    return this.request(API_ENDPOINTS.SUBSCRIPTION.CHECK_ACCESS, {
      method: 'POST',
      body: JSON.stringify({ feature, ...context }),
    });
  }
}

const subscriptionService = new SubscriptionService();
export default subscriptionService;

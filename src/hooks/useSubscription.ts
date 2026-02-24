/**
 * NEXTGEN Subscription Hooks
 * useSubscription : charge et expose l'état d'abonnement
 * useFeatureAccess : vérifie l'accès à une fonctionnalité selon le plan
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../core/redux/store';
import { fetchSubscription } from '../core/redux/subscriptionSlice';
import type { SubscriptionState } from '../core/redux/subscriptionSlice';
import authService from '../services/auth.service';

/**
 * Hook principal pour accéder à l'état d'abonnement.
 * Charge automatiquement l'abonnement si l'utilisateur est connecté et que l'état n'a pas été chargé.
 */
export const useSubscription = (): SubscriptionState => {
  const dispatch = useDispatch<AppDispatch>();
  const subscription = useSelector((state: RootState) => state.subscription);

  useEffect(() => {
    if (authService.isAuthenticated() && subscription.status === 'none' && !subscription.loading) {
      dispatch(fetchSubscription());
    }
  }, [dispatch, subscription.status, subscription.loading]);

  return subscription;
};

/**
 * Résultat du check d'accès à une fonctionnalité
 */
interface FeatureAccessResult {
  allowed: boolean;
  reason?: string;
  subscription: SubscriptionState;
  isTrialing: boolean;
  isActive: boolean;
  isPastDue: boolean;
  isExpired: boolean;
}

/**
 * Hook pour vérifier l'accès à une fonctionnalité selon le plan actuel.
 * Côté frontend uniquement (UX) - le backend fait la vraie vérification.
 */
export const useFeatureAccess = (feature: string): FeatureAccessResult => {
  const subscription = useSubscription();

  const checkAccess = (): { allowed: boolean; reason?: string } => {
    // Pas de plan actif
    if (!['active', 'trialing'].includes(subscription.status)) {
      return { allowed: false, reason: 'no_active_subscription' };
    }

    if (subscription.plan === 'free') {
      return { allowed: false, reason: 'no_plan' };
    }

    switch (feature) {
      case 'advanced_search':
        return { allowed: subscription.features.advanced_search };

      case 'view_elite_talent':
        return { allowed: subscription.features.talent_tier_access.includes('talent_elite') };

      case 'view_talent_profile': {
        const limit = subscription.features.profile_views_limit;
        if (limit === null) return { allowed: false, reason: 'no_plan' };
        if (limit === -1) return { allowed: true };
        const used = subscription.usage.profile_views_used ?? 0;
        return {
          allowed: used < limit,
          reason: used >= limit ? 'profile_view_limit_reached' : undefined,
        };
      }

      case 'upload_video': {
        const limit = subscription.features.video_limit;
        if (limit === null) return { allowed: false, reason: 'no_plan' };
        if (limit === -1) return { allowed: true };
        const used = subscription.usage.videos_used ?? 0;
        return {
          allowed: used < limit,
          reason: used >= limit ? 'video_limit_reached' : undefined,
        };
      }

      case 'stats_access':
        return { allowed: subscription.features.stats_access };

      case 'notifications':
        return { allowed: subscription.features.notifications };

      case 'pro_dashboard':
        return { allowed: subscription.features.pro_dashboard };

      case 'pre_access_24h':
        return { allowed: subscription.features.pre_access_24h };

      case 'search_priority':
        return { allowed: subscription.features.search_priority };

      default:
        return { allowed: false, reason: 'unknown_feature' };
    }
  };

  const access = checkAccess();

  return {
    ...access,
    subscription,
    isTrialing: subscription.status === 'trialing',
    isActive: subscription.status === 'active' || subscription.status === 'trialing',
    isPastDue: subscription.status === 'past_due',
    isExpired: subscription.status === 'expired',
  };
};

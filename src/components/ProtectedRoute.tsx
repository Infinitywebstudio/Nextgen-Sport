/**
 * Protected Route Component
 * Protège les routes par authentification, rôle, statut d'abonnement et plan
 */

import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth.service';
import { useSubscription } from '../hooks/useSubscription';
import { all_routes } from '../feature-module/router/all_routes';
import type { PlanSlug, SubscriptionStatus } from '../core/redux/subscriptionSlice';

interface ProtectedRouteProps {
  requiredRole?: 'client' | 'prestataire' | 'admin';
  requiredPlans?: PlanSlug[];
  requiredStatus?: SubscriptionStatus[];
  fallbackPath?: string;
}

const ProtectedRoute = ({
  requiredRole,
  requiredPlans,
  requiredStatus,
  fallbackPath,
}: ProtectedRouteProps) => {
  const subscription = useSubscription();

  // 1. Vérifier l'authentification
  if (!authService.isAuthenticated()) {
    return <Navigate to={all_routes.signIn} replace />;
  }

  // 2. Vérifier le rôle
  if (requiredRole) {
    const hasRequiredRole =
      (requiredRole === 'client' && authService.isClient()) ||
      (requiredRole === 'prestataire' && authService.isPrestataire()) ||
      (requiredRole === 'admin' && authService.isAdmin());

    if (!hasRequiredRole) {
      return <Navigate to={`${all_routes.error403}?reason=role`} replace />;
    }
  }

  // 3. Vérifier le statut d'abonnement (indépendant du plan)
  if (requiredStatus) {
    if (subscription.loading || !subscription.loaded) {
      return null;
    }

    const hasStatus = requiredStatus.includes(subscription.status);
    if (!hasStatus) {
      if (subscription.status === 'expired' || subscription.status === 'past_due') {
        return <Navigate to={all_routes.accountSuspended} replace />;
      }

      if (subscription.status === 'none') {
        if (!subscription.trialUsed) {
          return <Navigate to={all_routes.onboarding} replace />;
        }
        const pricingRoute = authService.isClient()
          ? all_routes.pricingRecruteur
          : all_routes.pricingTalent;
        return <Navigate to={pricingRoute} replace />;
      }

      const redirect = fallbackPath || `${all_routes.upgradeRequired}?currentPlan=${subscription.plan}`;
      return <Navigate to={redirect} replace />;
    }
  }

  // 4. Vérifier le plan d'abonnement (si requis)
  if (requiredPlans && requiredPlans.length > 0) {
    if (subscription.loading || !subscription.loaded) {
      return null;
    }

    const hasPlan = requiredPlans.includes(subscription.plan);
    if (!hasPlan) {
      const redirect = fallbackPath || `${all_routes.upgradeRequired}?currentPlan=${subscription.plan}`;
      return <Navigate to={redirect} replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;

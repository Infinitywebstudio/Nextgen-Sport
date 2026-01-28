/**
 * Protected Route Component
 * Protège les routes qui nécessitent une authentification
 */

import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth.service';
import { all_routes } from '../feature-module/router/all_routes';

interface ProtectedRouteProps {
  requiredRole?: 'client' | 'prestataire' | 'admin';
}

const ProtectedRoute = ({ requiredRole }: ProtectedRouteProps) => {
  // Vérifier si l'utilisateur est authentifié
  if (!authService.isAuthenticated()) {
    // Rediriger vers la page de connexion si non authentifié
    return <Navigate to={all_routes.signIn} replace />;
  }

  // Si un rôle spécifique est requis, le vérifier
  if (requiredRole) {
    const hasRequiredRole =
      (requiredRole === 'client' && authService.isClient()) ||
      (requiredRole === 'prestataire' && authService.isPrestataire()) ||
      (requiredRole === 'admin' && authService.isAdmin());

    if (!hasRequiredRole) {
      // Rediriger vers la page d'accueil si le rôle ne correspond pas
      return <Navigate to={all_routes.home} replace />;
    }
  }

  // Si authentifié et rôle correct, afficher la route protégée
  return <Outlet />;
};

export default ProtectedRoute;

/**
 * Checkout Success Page
 * Affichée après un paiement Stripe réussi
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { all_routes } from '../../router/all_routes';
import authService from '../../../services/auth.service';
import { fetchSubscription } from '../../../core/redux/subscriptionSlice';
import type { AppDispatch } from '../../../core/redux/store';

const CheckoutSuccess = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isClient = authService.isClient();
  const dashboardRoute = isClient ? all_routes.recruteurAccount : all_routes.talentDashboard;

  useEffect(() => {
    // Refresh subscription state after successful payment
    if (authService.isAuthenticated()) {
      dispatch(fetchSubscription());
    }
  }, [dispatch]);

  return (
    <div className="nex-auth-page">
      <div className="nex-auth-container">
        <div className="nex-auth-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>
            <i className="ti ti-circle-check" style={{ color: '#27AE60' }} />
          </div>
          <h1 className="nex-auth-title">Paiement réussi !</h1>
          <p className="nex-auth-subtitle" style={{ marginBottom: 24 }}>
            Votre abonnement est maintenant actif. Vous avez accès à toutes les fonctionnalités de votre plan.
          </p>
          <Link to={dashboardRoute} className="nex-btn nex-btn--yellow" style={{ display: 'inline-block' }}>
            Accéder à mon espace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

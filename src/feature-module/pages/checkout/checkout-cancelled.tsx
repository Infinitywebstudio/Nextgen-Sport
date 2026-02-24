/**
 * Checkout Cancelled Page
 * Affichée quand l'utilisateur annule le checkout Stripe
 */

import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import authService from '../../../services/auth.service';

const CheckoutCancelled = () => {
  const isClient = authService.isClient();
  const pricingRoute = isClient ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  return (
    <div className="nex-auth-page">
      <div className="nex-auth-container">
        <div className="nex-auth-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>
            <i className="ti ti-x" style={{ color: '#6b7280' }} />
          </div>
          <h1 className="nex-auth-title">Paiement annulé</h1>
          <p className="nex-auth-subtitle" style={{ marginBottom: 24 }}>
            Le paiement a été annulé. Aucun montant n'a été débité. Vous pouvez réessayer à tout moment.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={pricingRoute} className="nex-btn nex-btn--yellow" style={{ display: 'inline-block' }}>
              Voir les plans
            </Link>
            <Link to={all_routes.home} className="nex-btn nex-btn--red" style={{ display: 'inline-block' }}>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancelled;

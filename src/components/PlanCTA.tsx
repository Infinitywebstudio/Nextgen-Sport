/**
 * PlanCTA Component
 * Bouton d'action sur les pages pricing : déclenche checkout ou trial selon l'état de l'utilisateur
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';
import subscriptionService from '../services/subscription.service';
import type { PlanSlug } from '../services/subscription.service';
import { all_routes } from '../feature-module/router/all_routes';

interface PlanCTAProps {
  planSlug: PlanSlug;
  className?: string;
  label?: string;
}

const PlanCTA = ({ planSlug, className = '', label = 'Je choisis' }: PlanCTAProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    // Not authenticated → redirect to signup with plan preselected
    if (!authService.isAuthenticated()) {
      navigate(`${all_routes.signUp}?plan=${planSlug}`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const baseUrl = window.location.origin;
      const result = await subscriptionService.createCheckout(
        planSlug,
        'stripe',
        `${baseUrl}/checkout/success`,
        `${baseUrl}/checkout/cancelled`,
      );

      if (result.success && result.data?.checkout_url) {
        window.location.href = result.data.checkout_url;
      } else {
        setError(result.error || 'Erreur lors de la création du checkout');
      }
    } catch {
      setError('Erreur réseau. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={className}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            {' '}Chargement...
          </>
        ) : (
          label
        )}
      </button>
      {error && (
        <p style={{ color: '#ef4444', fontSize: 12, marginTop: 4, textAlign: 'center' }}>{error}</p>
      )}
    </div>
  );
};

export default PlanCTA;

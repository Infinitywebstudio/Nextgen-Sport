/**
 * Onboarding Page
 * Affichée après l'inscription pour choisir un plan et démarrer l'essai gratuit
 */

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../core/redux/store';
import { activateTrial } from '../../../core/redux/subscriptionSlice';
import type { PlanSlug } from '../../../services/subscription.service';
import authService from '../../../services/auth.service';
import { useSubscription } from '../../../hooks/useSubscription';
import { talentPlans, recruteurPlans } from '../pricing/pricing-data';
import { all_routes } from '../../router/all_routes';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const subscription = useSubscription();

  const isAuthenticated = authService.isAuthenticated();
  const isClient = authService.isClient();
  const plans = isClient ? recruteurPlans : talentPlans;
  const dashboardRoute = isClient ? all_routes.recruteurAccount : all_routes.talentDashboard;
  const pricingRoute = isClient ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  const [selectedPlan, setSelectedPlan] = useState<string>(plans[0]?.slug ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Guard auth : non authentifié → signin
  if (!isAuthenticated) {
    return <Navigate to={all_routes.signIn} replace />;
  }

  // Guard abonnement : déjà actif → dashboard
  if (subscription.status === 'active' || subscription.status === 'trialing') {
    return <Navigate to={dashboardRoute} replace />;
  }

  // Guard abonnement : trial déjà utilisé et plus actif → pricing
  if (subscription.trialUsed) {
    return <Navigate to={pricingRoute} replace />;
  }

  const handleStartTrial = async () => {
    setLoading(true);
    setError('');

    try {
      const result = await dispatch(activateTrial(selectedPlan as PlanSlug)).unwrap();
      if (result.success) {
        navigate(dashboardRoute);
      }
    } catch (err) {
      setError(typeof err === 'string' ? err : "Erreur lors de l'activation de l'essai");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate(dashboardRoute);
  };

  return (
    <div className="nex-onboarding">
      <div className="nex-onboarding__container">
        <div className="nex-onboarding__header">
          <h1 className="nex-onboarding__title nex-title">
            Bienvenue sur NexGen Sport !
          </h1>
          <p className="nex-onboarding__subtitle">
            Choisissez votre plan pour commencer avec <strong>7 jours d'essai gratuit</strong>.
            Aucun paiement requis.
          </p>
        </div>

        <div className="nex-onboarding__plans">
          {plans.map((plan) => (
            <button
              key={plan.slug}
              type="button"
              className={`nex-onboarding__plan ${
                selectedPlan === plan.slug ? 'nex-onboarding__plan--selected' : ''
              }`}
              onClick={() => setSelectedPlan(plan.slug)}
            >
              <div className="nex-onboarding__plan-header">
                <img src={plan.icon} alt="" className="nex-onboarding__plan-icon" />
                <h3 className="nex-onboarding__plan-name nex-title">{plan.name}</h3>
              </div>
              <div className="nex-onboarding__plan-price">
                <span className="nex-onboarding__plan-amount">{plan.price}€</span>
                <span className="nex-onboarding__plan-period">/mois après l'essai</span>
              </div>
              <ul className="nex-onboarding__plan-features">
                {plan.features.slice(0, 4).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              {selectedPlan === plan.slug && (
                <div className="nex-onboarding__plan-check">
                  <i className="ti ti-circle-check" />
                </div>
              )}
            </button>
          ))}
        </div>

        {error && (
          <div className="nex-auth-error" style={{ marginBottom: 16 }}>
            <p>{error}</p>
          </div>
        )}

        <div className="nex-onboarding__actions">
          <button
            className="nex-btn nex-btn--yellow"
            onClick={handleStartTrial}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                {' '}Activation...
              </>
            ) : (
              'Démarrer mon essai gratuit'
            )}
          </button>
          <button
            className="nex-onboarding__skip"
            onClick={handleSkip}
            disabled={loading}
          >
            Passer cette étape
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;

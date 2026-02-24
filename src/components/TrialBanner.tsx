/**
 * TrialBanner Component
 * Barre affichée dans les dashboards :
 * 1. Trial actif → jours restants + CTA s'abonner
 * 2. Pas de trial (free, jamais essayé) → CTA activer essai
 * 3. Expiré / free après trial → CTA voir les offres
 */

import { Link } from 'react-router-dom';
import { useSubscription } from '../hooks/useSubscription';
import authService from '../services/auth.service';
import { all_routes } from '../feature-module/router/all_routes';

const TrialBanner = () => {
  const { status, trialEnd, planLabel, plan, trialUsed } = useSubscription();

  const pricingRoute = authService.isClient() ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  // Cas 1 : Trial actif
  if (status === 'trialing' && trialEnd) {
    const daysLeft = Math.max(0, Math.ceil(
      (new Date(trialEnd).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    ));

    return (
      <div className={`nex-trial-banner ${daysLeft <= 2 ? 'nex-trial-banner--urgent' : ''}`}>
        <div className="nex-trial-banner__content">
          <span className="nex-trial-banner__icon"><i className="ti ti-clock" /></span>
          <span>
            Essai gratuit <strong>{planLabel}</strong> :{' '}
            {daysLeft > 0
              ? `${daysLeft} jour${daysLeft > 1 ? 's' : ''} restant${daysLeft > 1 ? 's' : ''}`
              : "expire aujourd'hui"}
          </span>
        </div>
        <Link to={pricingRoute} className="nex-trial-banner__cta">
          S'abonner maintenant
        </Link>
      </div>
    );
  }

  // Cas 2 : Pas de trial (free, jamais essayé)
  if (status === 'none' && plan === 'free' && !trialUsed) {
    return (
      <div className="nex-trial-banner nex-trial-banner--promo">
        <div className="nex-trial-banner__content">
          <span className="nex-trial-banner__icon"><i className="ti ti-gift" /></span>
          <span>
            <strong>7 jours d'essai gratuit</strong> — Débloquez toutes les fonctionnalités sans engagement
          </span>
        </div>
        <Link to={all_routes.onboarding} className="nex-trial-banner__cta">
          Activer mon essai
        </Link>
      </div>
    );
  }

  // Cas 3 : Expiré ou free après trial utilisé
  if (status === 'expired' || (trialUsed && status === 'none')) {
    return (
      <div className="nex-trial-banner nex-trial-banner--urgent">
        <div className="nex-trial-banner__content">
          <span className="nex-trial-banner__icon"><i className="ti ti-lock" /></span>
          <span>
            <strong>Accès limité</strong> — Votre essai est terminé. Abonnez-vous pour continuer.
          </span>
        </div>
        <Link to={pricingRoute} className="nex-trial-banner__cta">
          Voir les offres
        </Link>
      </div>
    );
  }

  // Sinon (active, cancelled, past_due...) : pas de banner
  return null;
};

export default TrialBanner;

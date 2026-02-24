/**
 * UpgradePrompt Component
 * Affiché quand un utilisateur tente d'accéder à une fonctionnalité limitée par son plan
 */

import { Link } from 'react-router-dom';
import { all_routes } from '../feature-module/router/all_routes';
import authService from '../services/auth.service';

interface UpgradePromptProps {
  reason?: string;
  currentPlan?: string;
  variant?: 'inline' | 'banner' | 'compact';
}

const REASON_MESSAGES: Record<string, { title: string; description: string }> = {
  profile_view_limit_reached: {
    title: 'Limite de consultations atteinte',
    description: 'Vous avez atteint votre limite mensuelle de consultations de profils. Passez au plan supérieur pour un accès illimité.',
  },
  video_limit_reached: {
    title: 'Limite de vidéos atteinte',
    description: 'Vous avez atteint le nombre maximum de vidéos pour votre plan. Passez au plan supérieur pour en ajouter davantage.',
  },
  no_plan: {
    title: 'Fonctionnalité Premium',
    description: 'Cette fonctionnalité nécessite un abonnement actif. Choisissez un plan pour y accéder.',
  },
  no_active_subscription: {
    title: 'Abonnement requis',
    description: 'Votre abonnement a expiré. Renouvelez-le pour continuer à accéder à cette fonctionnalité.',
  },
  unknown_feature: {
    title: 'Accès restreint',
    description: 'Cette fonctionnalité n\'est pas disponible avec votre plan actuel.',
  },
};

const UpgradePrompt = ({ reason, variant = 'inline' }: UpgradePromptProps) => {
  const message = REASON_MESSAGES[reason || 'no_plan'] || REASON_MESSAGES.no_plan;
  const pricingRoute = authService.isClient() ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  if (variant === 'compact') {
    return (
      <div className="nex-upgrade-prompt nex-upgrade-prompt--compact">
        <i className="ti ti-lock" />
        <span>{message.title}</span>
        <Link to={pricingRoute} className="nex-upgrade-prompt__link">
          Voir les plans
        </Link>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="nex-upgrade-prompt nex-upgrade-prompt--banner">
        <div className="nex-upgrade-prompt__content">
          <i className="ti ti-lock" />
          <div>
            <strong>{message.title}</strong>
            <p>{message.description}</p>
          </div>
        </div>
        <Link to={pricingRoute} className="nex-dash-btn nex-dash-btn--primary">
          Voir les plans
        </Link>
      </div>
    );
  }

  return (
    <div className="nex-upgrade-prompt nex-upgrade-prompt--inline">
      <div className="nex-upgrade-prompt__icon">
        <i className="ti ti-lock" />
      </div>
      <h3 className="nex-upgrade-prompt__title">{message.title}</h3>
      <p className="nex-upgrade-prompt__text">{message.description}</p>
      <Link to={pricingRoute} className="nex-dash-btn nex-dash-btn--primary">
        Voir les plans
      </Link>
    </div>
  );
};

export default UpgradePrompt;

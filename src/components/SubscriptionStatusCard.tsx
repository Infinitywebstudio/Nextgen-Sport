/**
 * SubscriptionStatusCard Component
 * Widget affichant le plan actuel, le statut et l'usage dans le dashboard
 */

import { Link } from 'react-router-dom';
import { useSubscription } from '../hooks/useSubscription';
import authService from '../services/auth.service';
import { all_routes } from '../feature-module/router/all_routes';

const STATUS_LABELS: Record<string, string> = {
  active: 'Actif',
  trialing: 'Essai gratuit',
  past_due: 'Paiement en retard',
  cancelled: 'Annulé',
  expired: 'Expiré',
  none: 'Aucun',
};

const SubscriptionStatusCard = () => {
  const subscription = useSubscription();
  const pricingRoute = authService.isClient() ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  if (subscription.loading) {
    return (
      <div className="nex-subscription-card">
        <p style={{ color: '#9ca3af' }}>Chargement...</p>
      </div>
    );
  }

  const statusLabel = STATUS_LABELS[subscription.status] || subscription.status;
  const statusClass = `nex-subscription-card__badge nex-subscription-card__badge--${subscription.status}`;

  // Usage bar for recruiter profile views
  const showProfileViewsUsage =
    subscription.usage.profile_views_limit !== null &&
    subscription.usage.profile_views_limit !== -1 &&
    subscription.usage.profile_views_limit > 0;

  const showVideoUsage =
    subscription.usage.videos_limit !== null &&
    subscription.usage.videos_limit !== -1 &&
    subscription.usage.videos_limit > 0;

  const getUsagePercentage = (used: number, limit: number) => {
    if (limit <= 0) return 0;
    return Math.min(100, Math.round((used / limit) * 100));
  };

  const getUsageBarClass = (percentage: number) => {
    if (percentage >= 90) return 'nex-subscription-card__usage-fill--danger';
    if (percentage >= 70) return 'nex-subscription-card__usage-fill--warning';
    return '';
  };

  return (
    <div className="nex-subscription-card">
      <div className="nex-subscription-card__header">
        <span className="nex-subscription-card__plan">{subscription.planLabel}</span>
        <span className={statusClass}>{statusLabel}</span>
      </div>

      <div className="nex-subscription-card__details">
        {subscription.price && (
          <div className="nex-subscription-card__detail">
            <span>Prix</span>
            <strong>{subscription.price} {subscription.currency}/mois</strong>
          </div>
        )}
        {subscription.trialEnd && subscription.status === 'trialing' && (
          <div className="nex-subscription-card__detail">
            <span>Fin de l'essai</span>
            <strong>{new Date(subscription.trialEnd).toLocaleDateString('fr-FR')}</strong>
          </div>
        )}
        {subscription.currentPeriodEnd && subscription.status === 'active' && (
          <div className="nex-subscription-card__detail">
            <span>Prochain renouvellement</span>
            <strong>{new Date(subscription.currentPeriodEnd).toLocaleDateString('fr-FR')}</strong>
          </div>
        )}
      </div>

      {/* Profile views usage */}
      {showProfileViewsUsage && (
        <div className="nex-subscription-card__usage">
          <div className="nex-subscription-card__usage-label">
            <span>Consultations de profils</span>
            <span>{subscription.usage.profile_views_used} / {subscription.usage.profile_views_limit}</span>
          </div>
          <div className="nex-subscription-card__usage-bar">
            <div
              className={`nex-subscription-card__usage-fill ${getUsageBarClass(
                getUsagePercentage(
                  subscription.usage.profile_views_used ?? 0,
                  subscription.usage.profile_views_limit ?? 0,
                )
              )}`}
              style={{
                width: `${getUsagePercentage(
                  subscription.usage.profile_views_used ?? 0,
                  subscription.usage.profile_views_limit ?? 0,
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Video usage */}
      {showVideoUsage && (
        <div className="nex-subscription-card__usage">
          <div className="nex-subscription-card__usage-label">
            <span>Vidéos</span>
            <span>{subscription.usage.videos_used} / {subscription.usage.videos_limit}</span>
          </div>
          <div className="nex-subscription-card__usage-bar">
            <div
              className={`nex-subscription-card__usage-fill ${getUsageBarClass(
                getUsagePercentage(
                  subscription.usage.videos_used ?? 0,
                  subscription.usage.videos_limit ?? 0,
                )
              )}`}
              style={{
                width: `${getUsagePercentage(
                  subscription.usage.videos_used ?? 0,
                  subscription.usage.videos_limit ?? 0,
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      <Link to={pricingRoute} className="nex-dash-btn nex-dash-btn--outline" style={{ marginTop: 8 }}>
        {subscription.plan === 'free' || subscription.status === 'expired'
          ? 'Choisir un plan'
          : 'Changer de plan'}
      </Link>
    </div>
  );
};

export default SubscriptionStatusCard;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import authService from "../../../services/auth.service";
import dashboardService, { type TalentStats } from "../../../services/dashboard.service";
import SubscriptionStatusCard from "../../../components/SubscriptionStatusCard";
import FeatureGate from "../../../components/FeatureGate";

const TalentDashboard = () => {
  const user = authService.getUser();
  const firstName = user?.name?.split(" ")[0] || "Talent";

  const [stats, setStats] = useState<TalentStats>({
    profile_views: 0,
    profile_completion: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const result = await dashboardService.getTalentStats();
      if (result.success && result.data) {
        setStats(result.data);
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">
          Bienvenue, {firstName}
        </h1>
        <p className="nex-dash-page__subtitle">
          Voici un aperçu de votre activité
        </p>
      </div>

      {/* Stats */}
      <div className="nex-dash-stats">
        <FeatureGate feature="stats_access" blurred>
          <div className="nex-dash-stat">
            <div className="nex-dash-stat__icon nex-dash-stat__icon--dark">
              <i className="ti ti-eye" />
            </div>
            <div className="nex-dash-stat__info">
              <div className="nex-dash-stat__value">
                {loading ? "–" : stats.profile_views}
              </div>
              <div className="nex-dash-stat__label">Vues du profil</div>
            </div>
          </div>
        </FeatureGate>
        <div className="nex-dash-stat">
          <div className="nex-dash-stat__icon nex-dash-stat__icon--yellow">
            <i className="ti ti-chart-pie" />
          </div>
          <div className="nex-dash-stat__info">
            <div className="nex-dash-stat__value">
              {loading ? "–" : `${stats.profile_completion}%`}
            </div>
            <div className="nex-dash-stat__label">Profil complété</div>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <SubscriptionStatusCard />

      {/* Profile CTA */}
      {stats.profile_completion < 100 && (
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Votre profil</h3>
            <Link to={all_routes.talentMyProfile} className="nex-dash-btn nex-dash-btn--outline nex-dash-btn--sm">
              Modifier
            </Link>
          </div>
          <div className="nex-dash-card__body">
            <div className="nex-dash-empty">
              <div className="nex-dash-empty__icon">
                <i className="ti ti-user-circle" />
              </div>
              <h4 className="nex-dash-empty__title">Complétez votre profil</h4>
              <p className="nex-dash-empty__text">
                Un profil complet augmente votre visibilité auprès des recruteurs.
              </p>
              <Link to={all_routes.talentMyProfile} className="nex-dash-btn nex-dash-btn--primary" style={{ marginTop: 16 }}>
                Compléter mon profil
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentDashboard;

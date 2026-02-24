import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import dashboardService, { type VisitedTalent } from "../../../services/dashboard.service";

const RecruteurVisited = () => {
  const [visited, setVisited] = useState<VisitedTalent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await dashboardService.getVisitedTalents();
      if (result.success && result.data) {
        setVisited(result.data);
      }
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="nex-dash-page">
        <div className="nex-dash-page__header">
          <h1 className="nex-dash-page__title">Talents visités</h1>
        </div>
        <div className="nex-dash-card">
          <div className="nex-dash-card__body" style={{ textAlign: "center", padding: 40 }}>
            <span className="spinner-border" role="status" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Talents visités</h1>
        <p className="nex-dash-page__subtitle">
          Retrouvez les profils que vous avez consultés
        </p>
      </div>

      {visited.length > 0 ? (
        <div className="nex-dash-talent-grid">
          {visited.map((talent) => (
            <div key={`${talent.id}-${talent.visited_at}`} className="nex-dash-talent-card">
              <img
                src={talent.avatar}
                alt={talent.name}
                className="nex-dash-talent-card__avatar"
              />
              <h4 className="nex-dash-talent-card__name">{talent.name}</h4>
              <p className="nex-dash-talent-card__sport">{talent.sport}</p>
              <Link
                to={all_routes.talentProfile.replace(":id", String(talent.id))}
                className="nex-dash-btn nex-dash-btn--outline nex-dash-btn--sm"
              >
                Voir le profil
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="nex-dash-card">
          <div className="nex-dash-card__body">
            <div className="nex-dash-empty">
              <div className="nex-dash-empty__icon">
                <i className="ti ti-users" />
              </div>
              <h4 className="nex-dash-empty__title">Aucun talent visité</h4>
              <p className="nex-dash-empty__text">
                Parcourez notre catalogue de talents pour trouver les profils
                qui correspondent à vos besoins.
              </p>
              <Link
                to={all_routes.searchTalents}
                className="nex-dash-btn nex-dash-btn--primary"
                style={{ marginTop: 16 }}
              >
                Rechercher des talents
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruteurVisited;

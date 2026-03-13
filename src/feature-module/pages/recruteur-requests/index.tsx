import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dashboardService, { type RecruteurRequest } from "../../../services/dashboard.service";
import { all_routes } from "../../router/all_routes";

type StatusFilter = "all" | "pending" | "accepted" | "declined";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "En attente", color: "#F59E0B" },
  accepted: { label: "Acceptée", color: "#27AE60" },
  declined: { label: "Refusée", color: "#EF4444" },
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
};

const RecruteurRequests = () => {
  const [requests, setRequests] = useState<RecruteurRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");

  useEffect(() => {
    const load = async () => {
      const result = await dashboardService.getRecruteurRequests();
      if (result.success && result.data) {
        setRequests(result.data);
      } else {
        setError(result.error || "Impossible de charger les demandes");
      }
      setLoading(false);
    };
    load();
  }, []);

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  const counts = {
    all: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    accepted: requests.filter((r) => r.status === "accepted").length,
    declined: requests.filter((r) => r.status === "declined").length,
  };

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Mes Demandes</h1>
        <p className="nex-dash-page__subtitle">Suivez vos demandes envoyées aux talents</p>
      </div>

      {/* Filtres */}
      <div className="nex-dash-request__filters">
        {(["all", "pending", "accepted", "declined"] as StatusFilter[]).map((f) => (
          <button
            key={f}
            className={`nex-dash-request__filter ${filter === f ? "nex-dash-request__filter--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "Toutes" : STATUS_LABELS[f].label} ({counts[f]})
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="nex-dash-card">
        <div className="nex-dash-card__body">
          {loading ? (
            <div style={{ textAlign: "center", padding: 40 }}>
              <span className="spinner-border" role="status" aria-hidden="true" />
            </div>
          ) : error ? (
            <div className="nex-auth-error">
              <p>{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <i className="ti ti-send" style={{ fontSize: 48, color: "#ccc", display: "block", marginBottom: 16 }} />
              <h4 className="nex-title" style={{ marginBottom: 8 }}>
                {filter === "all" ? "Aucune demande envoyée" : `Aucune demande ${STATUS_LABELS[filter]?.label.toLowerCase()}`}
              </h4>
              <p style={{ color: "#888" }}>
                Consultez des profils talents et envoyez-leur une demande de contact.
              </p>
              <Link to={all_routes.searchTalents} className="nex-dash-btn nex-dash-btn--primary" style={{ marginTop: 16 }}>
                Rechercher des talents
              </Link>
            </div>
          ) : (
            <div className="nex-dash-request__list">
              {filtered.map((req) => {
                const status = STATUS_LABELS[req.status] || STATUS_LABELS.pending;
                return (
                  <div key={req.id} className="nex-dash-request__item">
                    <div className="nex-dash-request__header">
                      <div className="nex-dash-request__user">
                        {req.talent_avatar ? (
                          <img src={req.talent_avatar} alt={req.talent_name} className="nex-dash-request__avatar" />
                        ) : (
                          <div className="nex-dash-request__avatar-placeholder">
                            <i className="ti ti-user" />
                          </div>
                        )}
                        <Link to={`/talent/${req.talent_id}`} className="nex-dash-request__recruiter">
                          {req.talent_name}
                        </Link>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          className="nex-dash-request__status"
                          style={{ color: status.color, fontWeight: 600, fontSize: 13 }}
                        >
                          {status.label}
                        </span>
                        <span className="nex-dash-request__date">{formatDate(req.created_at)}</span>
                      </div>
                    </div>
                    <p className="nex-dash-request__message">{req.message}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruteurRequests;

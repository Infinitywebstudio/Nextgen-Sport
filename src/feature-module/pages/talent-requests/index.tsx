import { useState, useEffect, useCallback } from "react";
import dashboardService from "../../../services/dashboard.service";
import type { TalentRequest } from "../../../services/dashboard.service";

type RequestFilter = "all" | "pending" | "accepted" | "declined";

const tabs: { key: RequestFilter; label: string }[] = [
  { key: "all", label: "Toutes" },
  { key: "pending", label: "Nouvelles" },
  { key: "accepted", label: "Acceptées" },
  { key: "declined", label: "Refusées" },
];

const TalentRequests = () => {
  const [requests, setRequests] = useState<TalentRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<RequestFilter>("all");
  const [respondingId, setRespondingId] = useState<number | null>(null);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await dashboardService.getTalentRequests();
    if (result.success && result.data) {
      setRequests(result.data);
    } else {
      setError(result.error || "Erreur lors du chargement des demandes");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleRespond = async (requestId: number, status: "accepted" | "declined") => {
    setRespondingId(requestId);
    const result = await dashboardService.respondToRequest(requestId, status);
    if (result.success) {
      setRequests((prev) =>
        prev.map((r) => (r.id === requestId ? { ...r, status } : r))
      );
    } else {
      setError(result.error || "Erreur lors de la réponse");
    }
    setRespondingId(null);
  };

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((r) => r.status === filter);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Demandes reçues</h1>
        <p className="nex-dash-page__subtitle">
          Gérez les demandes des recruteurs
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="nex-dash-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`nex-dash-tabs__btn ${
              filter === tab.key ? "nex-dash-tabs__btn--active" : ""
            }`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
            {tab.key !== "all" && (
              <span className="nex-dash-tabs__count">
                {requests.filter((r) =>
                  tab.key === "all" ? true : r.status === tab.key
                ).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError(null)}
          />
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="nex-dash-card">
          <div className="nex-dash-card__body text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3 text-muted">Chargement des demandes...</p>
          </div>
        </div>
      ) : filteredRequests.length > 0 ? (
        <div>
          {filteredRequests.map((request) => (
            <div key={request.id} className="nex-dash-request">
              <div className="nex-dash-request__header">
                <div className="d-flex align-items-center gap-2">
                  {request.recruiter_avatar && (
                    <img
                      src={request.recruiter_avatar}
                      alt={request.recruiter_name}
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                  )}
                  <span className="nex-dash-request__recruiter">
                    {request.recruiter_name}
                  </span>
                </div>
                <span className="nex-dash-request__date">
                  {formatDate(request.created_at)}
                </span>
              </div>
              <p className="nex-dash-request__message">{request.message}</p>
              {request.budget && (
                <div className="nex-dash-request__meta">
                  <span>
                    <i className="ti ti-currency-euro" /> {request.budget}
                  </span>
                </div>
              )}
              {request.status === "pending" ? (
                <div className="nex-dash-request__actions">
                  <button
                    className="nex-dash-btn nex-dash-btn--primary nex-dash-btn--sm"
                    disabled={respondingId === request.id}
                    onClick={() => handleRespond(request.id, "accepted")}
                  >
                    {respondingId === request.id ? "..." : "Accepter"}
                  </button>
                  <button
                    className="nex-dash-btn nex-dash-btn--danger nex-dash-btn--sm"
                    disabled={respondingId === request.id}
                    onClick={() => handleRespond(request.id, "declined")}
                  >
                    {respondingId === request.id ? "..." : "Refuser"}
                  </button>
                </div>
              ) : (
                <span
                  className={`nex-dash-request__status nex-dash-request__status--${request.status}`}
                >
                  {request.status === "accepted" ? "Acceptée" : "Refusée"}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="nex-dash-card">
          <div className="nex-dash-card__body">
            <div className="nex-dash-empty">
              <div className="nex-dash-empty__icon">
                <i className="ti ti-inbox" />
              </div>
              <h4 className="nex-dash-empty__title">Aucune demande</h4>
              <p className="nex-dash-empty__text">
                {filter === "all"
                  ? "Vous n'avez pas encore reçu de demande de la part de recruteurs."
                  : "Aucune demande dans cette catégorie."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentRequests;

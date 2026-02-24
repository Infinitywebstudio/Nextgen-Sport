import { useState } from "react";

type RequestStatus = "all" | "pending" | "accepted" | "declined";

interface Request {
  id: number;
  recruiterName: string;
  message: string;
  budget: string;
  date: string;
  status: "pending" | "accepted" | "declined";
}

// TODO: Replace with API data
const mockRequests: Request[] = [];

const TalentRequests = () => {
  const [filter, setFilter] = useState<RequestStatus>("all");

  const filteredRequests =
    filter === "all"
      ? mockRequests
      : mockRequests.filter((r) => r.status === filter);

  const tabs: { key: RequestStatus; label: string }[] = [
    { key: "all", label: "Toutes" },
    { key: "pending", label: "Nouvelles" },
    { key: "accepted", label: "Acceptées" },
    { key: "declined", label: "Refusées" },
  ];

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
          </button>
        ))}
      </div>

      {/* Requests List */}
      {filteredRequests.length > 0 ? (
        <div>
          {filteredRequests.map((request) => (
            <div key={request.id} className="nex-dash-request">
              <div className="nex-dash-request__header">
                <span className="nex-dash-request__recruiter">
                  {request.recruiterName}
                </span>
                <span className="nex-dash-request__date">{request.date}</span>
              </div>
              <p className="nex-dash-request__message">{request.message}</p>
              <div className="nex-dash-request__meta">
                <span>
                  <i className="ti ti-currency-euro" /> {request.budget}
                </span>
              </div>
              {request.status === "pending" ? (
                <div className="nex-dash-request__actions">
                  <button className="nex-dash-btn nex-dash-btn--primary nex-dash-btn--sm">
                    Accepter
                  </button>
                  <button className="nex-dash-btn nex-dash-btn--danger nex-dash-btn--sm">
                    Refuser
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

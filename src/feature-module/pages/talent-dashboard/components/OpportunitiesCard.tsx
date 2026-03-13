import { useState } from 'react';
import dashboardService, { type OpportunityItem } from '../../../../services/dashboard.service';

interface OpportunitiesCardProps {
  opportunities: OpportunityItem[];
  loading: boolean;
  onUpdate: (updated: OpportunityItem[]) => void;
}

const OpportunitiesCard = ({ opportunities, loading, onUpdate }: OpportunitiesCardProps) => {
  const [respondingId, setRespondingId] = useState<number | null>(null);

  const handleRespond = async (id: number, status: 'accepted' | 'declined') => {
    setRespondingId(id);
    const result = await dashboardService.respondToOpportunity(id, status);
    if (result.success) {
      onUpdate(opportunities.filter(o => o.id !== id));
    }
    setRespondingId(null);
  };

  return (
    <div className="nex-dash-card td-opportunities-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-briefcase" /> Opportunités</h3>
        {opportunities.length > 0 && (
          <span className="td-badge">{opportunities.length} nouvelle{opportunities.length > 1 ? 's' : ''}</span>
        )}
      </div>
      <div className="nex-dash-card__body">
        {loading ? (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : opportunities.length === 0 ? (
          <p className="text-muted" style={{ textAlign: 'center', padding: 20 }}>
            Aucune opportunité en attente pour le moment.
          </p>
        ) : (
          opportunities.map(opp => (
            <div className="td-opportunity" key={opp.id}>
              <div className="td-opportunity__logo">
                {opp.recruiter_avatar ? (
                  <img src={opp.recruiter_avatar} alt={opp.club} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                ) : (
                  <i className="ti ti-building-stadium" />
                )}
              </div>
              <div className="td-opportunity__content">
                <h4>{opp.title}</h4>
                <p>{opp.club}</p>
                <span className="td-opportunity__date">
                  <i className="ti ti-calendar" /> {opp.date}
                </span>
              </div>
              <div className="td-opportunity__actions">
                <button
                  className="td-opportunity__btn td-opportunity__btn--accept"
                  title="Accepter"
                  disabled={respondingId === opp.id}
                  onClick={() => handleRespond(opp.id, 'accepted')}
                >
                  <i className="ti ti-check" />
                </button>
                <button
                  className="td-opportunity__btn td-opportunity__btn--decline"
                  title="Refuser"
                  disabled={respondingId === opp.id}
                  onClick={() => handleRespond(opp.id, 'declined')}
                >
                  <i className="ti ti-x" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OpportunitiesCard;

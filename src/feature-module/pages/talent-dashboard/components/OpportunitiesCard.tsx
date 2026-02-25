const PLACEHOLDER_OPPORTUNITIES = [
  {
    id: '1',
    club: 'FC Marseille Academy',
    title: 'Essai - Attaquant U21',
    location: 'Marseille, France',
    date: 'Dans 5 jours',
    icon: 'ti ti-building-stadium',
  },
  {
    id: '2',
    club: 'AS Monaco Formation',
    title: 'Détection - Milieu de terrain',
    location: 'Monaco',
    date: 'Dans 2 semaines',
    icon: 'ti ti-trophy',
  },
  {
    id: '3',
    club: 'OGC Nice',
    title: 'Stage découverte',
    location: 'Nice, France',
    date: 'Dans 3 semaines',
    icon: 'ti ti-ball-football',
  },
];

const OpportunitiesCard = () => {
  return (
    <div className="dashboard-card opportunities-card">
      <div className="card-header">
        <h2><i className="ti ti-briefcase" /> Opportunités</h2>
        <span className="badge">{PLACEHOLDER_OPPORTUNITIES.length} nouvelles</span>
      </div>
      <div className="card-body">
        {PLACEHOLDER_OPPORTUNITIES.map(opp => (
          <div className="opportunity-item" key={opp.id}>
            <div className="opportunity-logo">
              <i className={opp.icon} />
            </div>
            <div className="opportunity-content">
              <h4>{opp.title}</h4>
              <p>{opp.club} &middot; {opp.location}</p>
              <span className="opportunity-date">
                <i className="ti ti-calendar" /> {opp.date}
              </span>
            </div>
            <div className="opportunity-actions">
              <button className="btn-accept" title="Accepter">
                <i className="ti ti-check" />
              </button>
              <button className="btn-decline" title="Refuser">
                <i className="ti ti-x" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesCard;

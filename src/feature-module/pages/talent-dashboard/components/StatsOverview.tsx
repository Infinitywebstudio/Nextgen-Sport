import type { TalentStats } from '../../../../services/dashboard.service';

interface StatsOverviewProps {
  stats: TalentStats;
  loading: boolean;
}

const StatsOverview = ({ stats, loading }: StatsOverviewProps) => {
  const cards = [
    {
      icon: 'ti ti-eye',
      colorClass: 'blue',
      value: stats.profile_views,
      label: 'Vues du profil',
      change: '+12% ce mois',
    },
    {
      icon: 'ti ti-users',
      colorClass: 'green',
      value: stats.follower_count,
      label: 'Abonnés',
      change: null,
    },
    {
      icon: 'ti ti-briefcase',
      colorClass: 'orange',
      value: stats.opportunities,
      label: 'Opportunités',
      change: null,
    },
    {
      icon: 'ti ti-chart-pie',
      colorClass: 'red',
      value: `${stats.profile_completion}%`,
      label: 'Profil complété',
      change: null,
    },
  ];

  return (
    <div className="stats-overview">
      {cards.map((card, index) => (
        <div className="stat-card" key={index}>
          <div className={`stat-icon ${card.colorClass}`}>
            <i className={card.icon} />
          </div>
          <div className="stat-content">
            <h3>{loading ? '–' : card.value}</h3>
            <p>{card.label}</p>
            {card.change && <span className="stat-change positive">{card.change}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;

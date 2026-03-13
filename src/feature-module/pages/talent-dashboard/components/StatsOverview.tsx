import type { TalentStats } from '../../../../services/dashboard.service';

interface StatsOverviewProps {
  stats: TalentStats;
  loading: boolean;
}

const StatsOverview = ({ stats, loading }: StatsOverviewProps) => {
  const cards = [
    {
      icon: 'ti ti-eye',
      colorMod: 'nex-dash-stat__icon--dark',
      value: stats.profile_views,
      label: 'Vues du profil',
    },
    {
      icon: 'ti ti-users',
      colorMod: 'nex-dash-stat__icon--green',
      value: stats.follower_count,
      label: 'Abonnés',
    },
    {
      icon: 'ti ti-briefcase',
      colorMod: 'nex-dash-stat__icon--yellow',
      value: stats.opportunities,
      label: 'Opportunités',
    },
    {
      icon: 'ti ti-chart-pie',
      colorMod: 'nex-dash-stat__icon--red',
      value: `${stats.profile_completion}%`,
      label: 'Profil complété',
    },
  ];

  return (
    <div className="nex-dash-stats">
      {cards.map((card, index) => (
        <div className="nex-dash-stat" key={index}>
          <div className={`nex-dash-stat__icon ${card.colorMod}`}>
            <i className={card.icon} />
          </div>
          <div className="nex-dash-stat__info">
            <div className="nex-dash-stat__value">{loading ? '–' : card.value}</div>
            <div className="nex-dash-stat__label">{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;

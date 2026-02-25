import type { ActivityItem } from '../../../../services/dashboard.service';

const PLACEHOLDER_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    type: 'view',
    title: 'Nouveau visiteur',
    description: 'Un recruteur a consulté votre profil',
    time: 'Il y a 2 heures',
  },
  {
    id: '2',
    type: 'message',
    title: 'Nouveau message',
    description: 'Vous avez reçu un message d\'un club',
    time: 'Il y a 5 heures',
  },
  {
    id: '3',
    type: 'badge',
    title: 'Badge débloqué',
    description: 'Profil complété à 80%',
    time: 'Hier',
  },
  {
    id: '4',
    type: 'opportunity',
    title: 'Nouvelle opportunité',
    description: 'Un essai est disponible dans votre région',
    time: 'Il y a 2 jours',
  },
];

const ICON_CONFIG: Record<string, { icon: string; bg: string }> = {
  view: { icon: 'ti ti-eye', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  message: { icon: 'ti ti-message', bg: 'linear-gradient(135deg, #4bc3b9 0%, #8fc92f 100%)' },
  badge: { icon: 'ti ti-award', bg: 'linear-gradient(135deg, #f87028 0%, #ff3131 100%)' },
  opportunity: { icon: 'ti ti-briefcase', bg: 'linear-gradient(135deg, #8fc92f 0%, #4bc3b9 100%)' },
};

const RecentActivity = () => {
  const activities = PLACEHOLDER_ACTIVITIES;

  return (
    <div className="dashboard-card activity-card">
      <div className="card-header">
        <h2><i className="ti ti-activity" /> Activité récente</h2>
      </div>
      <div className="card-body">
        {activities.map(activity => {
          const config = ICON_CONFIG[activity.type] || ICON_CONFIG.view;
          return (
            <div className="activity-item" key={activity.id}>
              <div className="activity-icon" style={{ background: config.bg }}>
                <i className={config.icon} />
              </div>
              <div className="activity-content">
                <p><strong>{activity.title}</strong></p>
                <span>{activity.description}</span>
              </div>
              <span className="activity-time">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;

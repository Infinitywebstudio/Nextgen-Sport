import type { ActivityItem } from '../../../../services/dashboard.service';

const ICON_CONFIG: Record<string, { icon: string; bg: string }> = {
  view: { icon: 'ti ti-eye', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  message: { icon: 'ti ti-message', bg: 'linear-gradient(135deg, #4bc3b9 0%, #8fc92f 100%)' },
  badge: { icon: 'ti ti-award', bg: 'linear-gradient(135deg, #f87028 0%, #ff3131 100%)' },
  opportunity: { icon: 'ti ti-briefcase', bg: 'linear-gradient(135deg, #8fc92f 0%, #4bc3b9 100%)' },
};

interface RecentActivityProps {
  activities: ActivityItem[];
  loading: boolean;
}

const RecentActivity = ({ activities, loading }: RecentActivityProps) => {
  return (
    <div className="nex-dash-card td-activity-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-activity" /> Activité récente</h3>
      </div>
      <div className="nex-dash-card__body">
        {loading ? (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : activities.length === 0 ? (
          <p className="text-muted" style={{ textAlign: 'center', padding: 20 }}>
            Aucune activité récente pour le moment.
          </p>
        ) : (
          activities.map(activity => {
            const config = ICON_CONFIG[activity.type] || ICON_CONFIG.view;
            return (
              <div className="td-activity-item" key={activity.id}>
                <div className="td-activity-item__icon" style={{ background: config.bg }}>
                  <i className={config.icon} />
                </div>
                <div className="td-activity-item__content">
                  <p><strong>{activity.title}</strong></p>
                  <span>{activity.description}</span>
                </div>
                <span className="td-activity-item__time">{activity.time}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecentActivity;

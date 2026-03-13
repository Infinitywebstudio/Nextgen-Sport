import { useState } from 'react';
import type { TalentStats } from '../../../../services/dashboard.service';

interface PerformanceStatsProps {
  stats: TalentStats;
}

const PerformanceStats = ({ stats }: PerformanceStatsProps) => {
  const [period, setPeriod] = useState('saison');

  const statBoxes = [
    { icon: 'ti ti-ball-football', value: stats.matches_played, label: 'Matchs joués', highlight: false },
    { icon: 'ti ti-target', value: stats.goals, label: 'Buts', highlight: true },
    { icon: 'ti ti-arrows-exchange', value: stats.assists, label: 'Passes déc.', highlight: false },
    { icon: 'ti ti-clock', value: stats.minutes_played, label: 'Minutes', highlight: false },
  ];

  return (
    <div className="nex-dash-card td-perf-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-chart-dots" /> Statistiques</h3>
        <select
          className="td-period-select"
          value={period}
          onChange={e => setPeriod(e.target.value)}
        >
          <option value="saison">Cette saison</option>
          <option value="mois">Ce mois</option>
          <option value="total">Carrière</option>
        </select>
      </div>
      <div className="nex-dash-card__body">
        <div className="td-perf-grid">
          {statBoxes.map((box, index) => (
            <div className={`td-perf-box${box.highlight ? ' td-perf-box--highlight' : ''}`} key={index}>
              <i className={box.icon} />
              <h3>{box.value}</h3>
              <p>{box.label}</p>
            </div>
          ))}
        </div>
        <div className="td-perf-chart">
          <span>Graphique de performance (bientôt disponible)</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;

import type { ExperienceItem } from '../../../../services/dashboard.service';

const PLACEHOLDER_EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    club: 'FC Exemple',
    role: 'Attaquant - Équipe U21',
    period: '2024 - Présent',
    description: 'Titulaire régulier avec 15 buts en 20 matchs.',
    tags: ['Ligue 2', 'U21', 'Titulaire'],
  },
  {
    id: '2',
    club: 'AS Formation',
    role: 'Milieu offensif - Centre de formation',
    period: '2022 - 2024',
    description: 'Formation intensive avec participation aux tournois régionaux.',
    tags: ['Formation', 'Régional'],
  },
  {
    id: '3',
    club: 'Académie Sport',
    role: 'Attaquant - Académie',
    period: '2020 - 2022',
    description: 'Début de carrière en académie, sélectionné pour les compétitions nationales.',
    tags: ['Académie', 'National'],
  },
];

const ExperienceTimeline = () => {
  const experiences = PLACEHOLDER_EXPERIENCE;

  return (
    <div className="dashboard-card experience-card">
      <div className="card-header">
        <h2><i className="ti ti-timeline" /> Parcours sportif</h2>
      </div>
      <div className="card-body">
        <div className="timeline">
          {experiences.map(exp => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{exp.club}</h4>
                <p className="timeline-period">{exp.role} &middot; {exp.period}</p>
                <p>{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

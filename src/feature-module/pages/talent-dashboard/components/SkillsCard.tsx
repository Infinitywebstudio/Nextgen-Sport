interface SkillsCardProps {
  skills: string[];
}

const SKILL_LEVELS: Record<string, number> = {
  'Vitesse': 85,
  'Dribble': 78,
  'Finition': 92,
  'Passe': 70,
  'Défense': 65,
  'Endurance': 88,
  'Tir': 80,
  'Contrôle': 75,
};

const SkillsCard = ({ skills }: SkillsCardProps) => {
  const skillsToDisplay = skills.length > 0
    ? skills.map(name => ({ name, level: SKILL_LEVELS[name] ?? Math.floor(Math.random() * 30 + 60) }))
    : [
        { name: 'Vitesse', level: 85 },
        { name: 'Dribble', level: 78 },
        { name: 'Finition', level: 92 },
        { name: 'Endurance', level: 88 },
      ];

  return (
    <div className="dashboard-card skills-card">
      <div className="card-header">
        <h2><i className="ti ti-chart-bar" /> Compétences</h2>
      </div>
      <div className="card-body">
        {skillsToDisplay.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <strong>{skill.level}%</strong>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;

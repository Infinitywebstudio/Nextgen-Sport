interface SkillsCardProps {
  skills?: string[];
}

const SKILL_COLORS = [
  '#EE2731', '#135FB3', '#27AE60', '#FDC00A', '#8B5CF6',
  '#F97316', '#06B6D4', '#EC4899', '#14B8A6', '#6366F1',
];

const SkillsCard = ({ skills }: SkillsCardProps) => {
  const safeSkills = skills ?? [];

  return (
    <div className="nex-dash-card td-skills-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-chart-bar" /> Compétences</h3>
      </div>
      <div className="nex-dash-card__body">
        {safeSkills.length === 0 ? (
          <p className="text-muted" style={{ textAlign: 'center', padding: 20 }}>
            Ajoutez vos compétences dans <strong>Mon Profil</strong> pour les afficher ici.
          </p>
        ) : (
          <div className="td-skills-tags">
            {safeSkills.map((skill, index) => {
              const color = SKILL_COLORS[index % SKILL_COLORS.length];
              return (
                <span
                  key={skill}
                  className="td-skills-tags__tag"
                  style={{
                    backgroundColor: `${color}12`,
                    color: color,
                    borderColor: `${color}30`,
                  }}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;

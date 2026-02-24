import {
  IconStarFilled,
  IconTarget,
  IconUsers,
  IconAward,
  IconBallFootball,
} from '@tabler/icons-react';

const skills = [
  { label: 'Technique', value: 4.5 },
  { label: 'Physique', value: 4.2 },
  { label: 'Mental', value: 4.8 },
  { label: 'Vision de jeu', value: 4.0 },
];

const features = [
  {
    icon: IconTarget,
    title: 'Notation multi-critères',
    desc: 'Évaluez chaque talent sur des critères précis liés à son sport.',
  },
  {
    icon: IconUsers,
    title: 'Votes communautaires',
    desc: 'La communauté NEXGEN participe à la notation pour plus d\'objectivité.',
  },
  {
    icon: IconAward,
    title: 'Badges de performance',
    desc: 'Les meilleurs talents décrochent des badges qui boostent leur visibilité.',
  },
];

const overallRating = (skills.reduce((s, k) => s + k.value, 0) / skills.length).toFixed(1);

const RatingSection = () => (
  <section className="nex-rating">
    <div className="nex-rating__container">
      {/* Left column */}
      <div className="nex-rating__left">
        <h2 className="nex-rating__title nex-title">
          ÉVALUEZ. NOTEZ.<br />DÉMARQUEZ-VOUS.
        </h2>
        <p className="nex-rating__text">
          Notre système de notation exclusif permet aux recruteurs d'identifier
          les meilleurs profils en un coup d'œil, et aux talents de se
          démarquer grâce à des évaluations objectives et transparentes.
        </p>
        <ul className="nex-rating__features">
          {features.map((f) => (
            <li key={f.title} className="nex-rating__feature">
              <span className="nex-rating__feature-icon">
                <f.icon size={22} stroke={1.8} />
              </span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <a href="/inscription" className="nex-btn nex-btn--yellow">
          Découvrir le système
        </a>
      </div>

      {/* Right column — mock rating card */}
      <div className="nex-rating__right">
        <div className="nex-rating__card">
          {/* Profile header */}
          <div className="nex-rating__card-header">
            <div className="nex-rating__avatar">
              <IconBallFootball size={28} stroke={1.5} />
            </div>
            <div>
              <div className="nex-rating__player-name">Marcus D.</div>
              <div className="nex-rating__player-sport">Football — Milieu offensif</div>
            </div>
          </div>

          {/* Badge */}
          <div className="nex-rating__badge">BADGE ÉLITE</div>

          {/* Skill bars */}
          <div className="nex-rating__skills">
            {skills.map((s) => (
              <div key={s.label} className="nex-rating__skill">
                <div className="nex-rating__skill-header">
                  <span>{s.label}</span>
                  <span>{s.value}/5</span>
                </div>
                <div className="nex-rating__bar-track">
                  <div
                    className="nex-rating__bar-fill"
                    style={{ '--bar-width': `${(s.value / 5) * 100}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Overall */}
          <div className="nex-rating__overall">
            <div className="nex-rating__overall-label">Note globale</div>
            <div className="nex-rating__overall-value">
              <IconStarFilled size={22} />
              <span>{overallRating}</span>
              <small>/5</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RatingSection;

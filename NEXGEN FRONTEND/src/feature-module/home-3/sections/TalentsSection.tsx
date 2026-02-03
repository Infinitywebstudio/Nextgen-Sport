import { Link } from 'react-router-dom';
import talentImg from '../../../assets/img/homepage/talent-placeholder.webp';
import arrowIcon from '../../../assets/img/homepage/right-arrow.svg';

const talents = [
  { id: 1, name: 'Talent', sport: 'Football' },
  { id: 2, name: 'Talent', sport: 'Handball' },
  { id: 3, name: 'Talent', sport: 'Basketball' },
  { id: 4, name: 'Talent', sport: 'Boxe' },
];

const TalentsSection = () => {
  return (
    <section className="nex-talents">
      <div className="nex-talents__container">
        <h2 className="nex-talents__title nex-title">
          Talents de la semaine
        </h2>
        <div className="nex-talents__grid">
          {talents.map((talent) => (
            <Link
              to={`/talent/${talent.id}`}
              key={talent.id}
              className="nex-talent-card"
            >
              <div className="nex-talent-card__image">
                <img src={talentImg} alt={talent.name} />
              </div>
              <h3 className="nex-talent-card__name nex-title">{talent.name}</h3>
              <div className="nex-talent-card__footer">
                <h4 className="nex-talent-card__sport nex-title">
                  {talent.sport}
                </h4>
                <span className="nex-talent-card__arrow">
                  <img src={arrowIcon} alt="" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentsSection;

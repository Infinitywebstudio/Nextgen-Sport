import { Link } from 'react-router-dom';
import heroBg from '../../../assets/img/homepage/hero-bg.png';
import heroDecor from '../../../assets/img/homepage/Group-5.png';

const HeroSection = () => {
  return (
    <section
      className="nex-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="nex-hero__content">
        <h1 className="nex-hero__title nex-title">
          METS TA CARRIÈRE SOUS LES PROJECTEURS
        </h1>
        <div className="nex-hero__buttons">
          <Link to="/search" className="nex-btn nex-btn--red">
            Trouver un talent
          </Link>
          <Link to="/signup" className="nex-btn nex-btn--yellow">
            Créer un compte
          </Link>
        </div>
        <div className="nex-hero__decor">
          <img src={heroDecor} alt="NEXTGEN Sport" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

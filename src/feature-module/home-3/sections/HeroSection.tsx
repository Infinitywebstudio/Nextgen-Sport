import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
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
          METS TA CARRIERE SOUS LES PROJECTEURS
        </h1>
        <div className="nex-hero__buttons">
          <Link to={all_routes.searchTalents} className="nex-btn nex-btn--red">
            Trouver un talent
          </Link>
          <Link to={all_routes.signUp} className="nex-btn nex-btn--yellow">
            Creer un compte
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

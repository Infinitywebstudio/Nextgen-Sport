import { Link } from 'react-router-dom';
import passionImg from '../../../assets/img/homepage/passion-image.png';

const PassionSection = () => {
  return (
    <section className="nex-passion">
      <div className="nex-passion__container">
        <div className="nex-passion__image">
          <img src={passionImg} alt="Vis de ta passion" />
        </div>
        <div className="nex-passion__content">
          <h2 className="nex-passion__title nex-title">VIS DE TA PASSION</h2>
          <p className="nex-passion__text">
            NEXTGEN Sport est la plateforme qui connecte les talents sportifs
            aux recruteurs du monde entier. Crée ton profil, montre tes
            performances et laisse les opportunités venir à toi. Ta carrière
            commence ici.
          </p>
          <Link to="/signup" className="nex-btn nex-btn--yellow">
            Créer un compte
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PassionSection;

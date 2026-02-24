import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-nextgen">
      <div className="footer-wrapper">
        <div className="footer-links-section">
          <div className="footer-column">
            <h6 className="footer-column-title">Liens utiles</h6>
            <ul className="footer-links">
              <li><Link to="#">Comment ça marche</Link></li>
              <li><Link to="#">Publier une demande</Link></li>
              <li><Link to="#">Devenir talent</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6 className="footer-column-title">Support</h6>
            <ul className="footer-links">
              <li><Link to="#">Centre d'aides</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Partenariat</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6 className="footer-column-title">Informations légales</h6>
            <ul className="footer-links">
              <li><Link to="#">Conditions générales</Link></li>
              <li><Link to="#">Politique de confidentialité</Link></li>
              <li><Link to="#">Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-brand-section">
          <div className="footer-logo-large">
            <span className="logo-text-large">NEXTGEN</span>
          </div>
          <p className="copyright">&copy; 2025 NEXTGEN Sport</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

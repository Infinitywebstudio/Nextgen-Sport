import { Link } from 'react-router-dom';
import { all_routes } from '../../feature-module/router/all_routes';

interface FooterProps {
  variant?: 'default' | 'dark';
  className?: string;
}

const Footer = ({ variant = 'dark', className = '' }: FooterProps) => {
  const routes = all_routes;

  return (
    <footer className={`footer-nextgen ${variant === 'dark' ? 'footer-dark' : ''} ${className}`}>
      <div className="footer-wrapper">
        {/* Section des liens */}
        <div className="footer-links-section">
          {/* Colonne Liens utiles */}
          <div className="footer-column">
            <h3 className="footer-column-title">Liens utiles</h3>
            <ul className="footer-links">
              <li><Link to="#">Comment ça marche</Link></li>
              <li><Link to="#">Publier une demande</Link></li>
              <li><Link to="#">Devenir talent</Link></li>
            </ul>
          </div>

          {/* Colonne Support */}
          <div className="footer-column">
            <h3 className="footer-column-title">Support</h3>
            <ul className="footer-links">
              <li><Link to="#">Centre d'aides</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Partenariat</Link></li>
            </ul>
          </div>

          {/* Colonne Informations légales */}
          <div className="footer-column">
            <h3 className="footer-column-title">Informations légales</h3>
            <ul className="footer-links">
              <li><Link to={routes.termCondition}>Conditions générales</Link></li>
              <li><Link to={routes.privacyPolicy}>Politique de confidentialité</Link></li>
              <li><Link to="#">Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Section logo et copyright */}
        <div className="footer-brand-section">
          <div className="footer-logo-large">
            <h2 className="logo-text-large">NEXTGEN</h2>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} NEXTGEN Sport
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

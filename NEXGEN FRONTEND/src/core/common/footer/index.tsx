import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-nextgen"> {/* Custom class for main container styling */}
      <div className="container">
        {/* Partie Supérieure (Navigation) */}
        <div className="row footer-navigation-section pb-4 mb-4"> {/* Custom class for navigation section */}
          {/* Colonne 1: Liens utiles */}
          <div className="col-md-4 d-flex flex-column">
            <h6 className="footer-title">Liens utiles</h6> {/* Custom class for titles */}
            <ul className="list-unstyled footer-link-list"> {/* Custom class for link lists */}
              <li><Link to="#">Comment ça marche</Link></li>
              <li><Link to="#">Publier une demande</Link></li>
              <li><Link to="#">Devenir talent</Link></li>
            </ul>
          </div>

          {/* Colonne 2: Support */}
          <div className="col-md-4 d-flex flex-column">
            <h6 className="footer-title">Support</h6>
            <ul className="list-unstyled footer-link-list">
              <li><Link to="#">Centre d'aides</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Partenariat</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Informations légales */}
          <div className="col-md-4 d-flex flex-column">
            <h6 className="footer-title">Informations légales</h6>
            <ul className="list-unstyled footer-link-list">
              <li><Link to="#">Conditions générales</Link></li>
              <li><Link to="#">Politique de confidentialité</Link></li>
              <li><Link to="#">Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Partie Inférieure (Branding) */}
        <div className="d-flex justify-content-between align-items-baseline footer-branding-section pt-4"> {/* Custom class for branding section */}
          {/* Logo */}
          <div className="footer-logo">NEXTGEN</div> {/* Custom class for logo */}

          {/* Copyright */}
          <div className="footer-copyright">© 2025 NEXTGEN Sport</div> {/* Custom class for copyright */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

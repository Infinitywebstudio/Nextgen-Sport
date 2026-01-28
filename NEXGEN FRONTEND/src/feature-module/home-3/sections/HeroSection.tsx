import Button from '../../../components/nextgen/Button';

const HeroSection = () => {
  return (
    <section className="hero-section-home3">
      <div className="hero-container">
        <div className="hero-content">
          {/* Bloc du haut */}
          <div className="hero-top">
            <h1 className="hero-title">
              Des prestataires fiables, près de chez vous
            </h1>
            <Button
              variant="primary"
              icon={<i className="ti ti-arrow-right" />}
              iconPosition="right"
              className="hero-button"
            >
              Trouver un prestataire
            </Button>
          </div>

          {/* Bloc du bas */}
          <div className="hero-bottom">
            <h2 className="hero-brand">NEXTGEN</h2>
            <p className="hero-tagline">
              Trouvez facilement la bonne personne pour vos travaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import Button from '../../../components/nextgen/Button';

const PromoSection = () => {
  return (
    <section className="promo-section-home3">
      <div className="promo-container">
        <div className="promo-card">
          {/* Titre en haut */}
          <h2 className="promo-title">
            Découvrez nos services de qualité
          </h2>

          {/* Bloc du bas avec texte, bouton et stat */}
          <div className="promo-bottom">
            <div className="promo-content">
              <p className="promo-text">
                Rejoignez des milliers d'utilisateurs satisfaits qui font confiance à NEXTGEN pour trouver les meilleurs talents sportifs.
              </p>
              <Button
                variant="primary"
                icon={<i className="ti ti-arrow-right" />}
                iconPosition="right"
                className="promo-button"
              >
                Commencer maintenant
              </Button>
            </div>

            {/* Stat box à droite */}
            <div className="promo-stat">
              <div className="promo-stat-number">+100</div>
              <div className="promo-stat-label">services disponibles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

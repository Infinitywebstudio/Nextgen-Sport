const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Un service, un prestataire,<br />
          zéro complication
        </h2>
        <a href="/gigs/service" className="cta-button">
          <span>Trouver un prestataire</span>
          <span className="cta-button-icon">
            {/* SVG pour la flèche, plus fiable que les polices d'icônes */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;

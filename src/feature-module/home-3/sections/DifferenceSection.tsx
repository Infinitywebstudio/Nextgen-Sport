const DifferenceSection = () => {
  return (
    <section className="difference-section">
      <div className="difference-container">
        {/* Container de gauche - Images circulaires */}
        <div className="difference-left">
          <div className="circle-images">
            <div className="circle-image circle-1">
              <img src="/Animaux.png" alt="Animaux" />
            </div>
            <div className="circle-image circle-2">
              <img src="/sanitary-technician-gesturing-thumb-up.jpg" alt="Technicien sanitaire" />
            </div>
          </div>
        </div>

        {/* Container de droite - Contenu */}
        <div className="difference-right">
          <h2 className="difference-title">Ce qui fait la différence</h2>
          <p className="difference-text">
            Une solution simple et transparente, qui vous laisse le contrôle et vous met en relation avec des prestataires de confiance.
          </p>
          <div className="difference-white-box"></div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

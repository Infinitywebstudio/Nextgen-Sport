import brandImg from '../../../assets/img/homepage/brand-image.png';

const BrandStatementSection = () => {
  return (
    <section className="nex-brand">
      <div className="nex-brand__container">
        <div className="nex-brand__left">
          <h2 className="nex-brand__title nex-title">GÉNÉRATION ELITE</h2>
          <div className="nex-brand__lines">
            <span className="nex-brand__line">Repousse les limites,</span>
            <span className="nex-brand__line">transforme chaque défi</span>
            <span className="nex-brand__line">en victoire et vise</span>
            <span className="nex-brand__line">toujours l'excellence.</span>
          </div>
        </div>
        <div className="nex-brand__right">
          <img src={brandImg} alt="Génération Elite" />
        </div>
      </div>
    </section>
  );
};

export default BrandStatementSection;

import ctaBg from '../../../assets/img/homepage/cta-banner-bg.jpg';

const CtaBannerSection = () => {
  return (
    <section className="nex-cta-banner">
      <div
        className="nex-cta-banner__card"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <h2 className="nex-cta-banner__title nex-title">
          ENTRE DANS LE MONDE PRO DÈS AUJOURD'HUI
        </h2>
      </div>
    </section>
  );
};

export default CtaBannerSection;

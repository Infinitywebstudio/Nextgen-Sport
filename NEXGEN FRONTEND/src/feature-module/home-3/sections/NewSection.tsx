import Button from '../../../components/nextgen/Button';

const NewSection = () => {
  return (
    <section className="new-section">
      <div
        className="new-section-container"
        style={{
          backgroundImage: 'url(/react/template/section-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="new-section-content">
          <h2 className="new-section-title">
            La solution simple pour
            <br />
            vos travaux du quotidien
          </h2>

          <div className="new-section-bottom">
            <div className="new-section-bottom-left">
              <p className="new-section-text">
                Publiez votre demande et faites intervenir
                <br />
                un professionnel proche de chez vous.
              </p>
              <Button
                variant="primary"
                rounded={true}
                icon={<i className="ti ti-arrow-right" />}
                iconPosition="right"
                className="new-section-button"
              >
                Publier ma demande
              </Button>
            </div>
            <div className="new-section-square">
              <div className="square-number">+100</div>
              <div className="square-text">Services disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;

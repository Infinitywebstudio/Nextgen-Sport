interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="ti ti-tool" style={{ fontSize: '80px', color: '#FF6900', opacity: 0.3 }} />
            </div>
            <h2 className="mb-3">{title}</h2>
            <p className="text-muted lead mb-4">{description}</p>

            <div className="card border-0 shadow-sm bg-light text-start">
              <div className="card-body p-4">
                <h5 className="mb-3">
                  <i className="ti ti-clipboard-list me-2 text-primary" />
                  Pour créer ce composant :
                </h5>
                <ol className="mb-0 ps-3">
                  <li className="mb-2">
                    Créer le fichier du composant dans{' '}
                    <code>src/components/nextgen/</code>
                  </li>
                  <li className="mb-2">
                    Utiliser Bootstrap 5 classes (comme UserProfile et ReviewsCarousel)
                  </li>
                  <li className="mb-2">
                    Ajouter les styles custom dans{' '}
                    <code>src/style/scss/pages/_nextgen-components.scss</code>
                  </li>
                  <li className="mb-0">
                    Créer une page de test ici pour visualiser le composant
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-muted small">
                <i className="ti ti-info-circle me-1" />
                Consultez <strong>GUIDE-COMPOSANTS-NEXTGEN.md</strong> pour plus d'informations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;

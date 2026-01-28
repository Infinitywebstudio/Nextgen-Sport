const WelcomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <div className="mb-4">
              <i className="ti ti-rocket" style={{ fontSize: '64px', color: '#FF6900' }} />
            </div>
            <h1 className="display-4 mb-3">Bienvenue dans NEXTGEN Components Lab</h1>
            <p className="lead text-muted">
              Environnement de développement pour créer et tester les composants NEXTGEN
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <i className="ti ti-palette text-primary" style={{ fontSize: '24px' }} />
                    </div>
                    <h5 className="mb-0 ms-3">Bootstrap 5</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Composants créés avec Bootstrap 5 pour une intégration parfaite avec DreamGigs
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <i className="ti ti-brand-react text-success" style={{ fontSize: '24px' }} />
                    </div>
                    <h5 className="mb-0 ms-3">React 19</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Composants React modernes avec TypeScript pour une meilleure maintenabilité
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <i className="ti ti-components text-info" style={{ fontSize: '24px' }} />
                    </div>
                    <h5 className="mb-0 ms-3">Composants Réutilisables</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Créez des composants une fois, utilisez-les partout dans l'application NEXTGEN
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <i className="ti ti-database text-warning" style={{ fontSize: '24px' }} />
                    </div>
                    <h5 className="mb-0 ms-3">WordPress API</h5>
                  </div>
                  <p className="text-muted mb-0">
                    Connectés au backend WordPress Headless pour les données en temps réel
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body p-4">
              <h5 className="mb-3">
                <i className="ti ti-arrow-right me-2 text-primary" />
                Comment utiliser
              </h5>
              <ol className="mb-0 ps-3">
                <li className="mb-2">
                  <strong>Naviguez</strong> entre les composants en utilisant la sidebar de gauche
                </li>
                <li className="mb-2">
                  <strong>Testez</strong> chaque composant individuellement avec des données de test
                </li>
                <li className="mb-2">
                  <strong>Modifiez</strong> les composants dans{' '}
                  <code>src/components/nextgen/</code>
                </li>
                <li className="mb-0">
                  <strong>Intégrez</strong> les composants dans vos pages NEXTGEN
                </li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-muted">
              <i className="ti ti-info-circle me-1" />
              Consultez{' '}
              <strong>GUIDE-COMPOSANTS-NEXTGEN.md</strong> pour la documentation complète
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

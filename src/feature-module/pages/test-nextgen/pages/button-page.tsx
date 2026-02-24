import Button from '../../../../components/nextgen/Button';

const ButtonPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>Button Component NEXTGEN</h2>
        <p className="text-muted">
          Bouton personnalisé avec la couleur NEXTGEN (#FF6961) et border-radius 8px
        </p>
      </div>

      {/* Variants */}
      <div className="mb-5">
        <h4 className="mb-3">Variants</h4>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary">
                Primary Button
              </Button>
              <Button variant="secondary">
                Secondary Button
              </Button>
              <Button variant="outline">
                Outline Button
              </Button>
              <Button variant="ghost">
                Ghost Button
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Avec Icônes */}
      <div className="mb-5">
        <h4 className="mb-3">Avec Icônes</h4>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button
                variant="primary"
                icon={<i className="ti ti-arrow-right" />}
                iconPosition="right"
              >
                Trouver un prestataire
              </Button>

              <Button
                variant="primary"
                icon={<i className="ti ti-search" />}
                iconPosition="left"
              >
                Rechercher
              </Button>

              <Button
                variant="secondary"
                icon={<i className="ti ti-heart" />}
                iconPosition="right"
              >
                Ajouter aux favoris
              </Button>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="outline"
                icon={<i className="ti ti-download" />}
                iconPosition="left"
              >
                Télécharger
              </Button>

              <Button
                variant="ghost"
                icon={<i className="ti ti-share" />}
                iconPosition="right"
              >
                Partager
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailles */}
      <div className="mb-5">
        <h4 className="mb-3">Tailles</h4>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Button size="sm" icon={<i className="ti ti-arrow-right" />}>
                Small
              </Button>
              <Button size="sm" rounded icon={<i className="ti ti-arrow-right" />}>
                Small arrondi
              </Button>
              <Button size="md" icon={<i className="ti ti-arrow-right" />}>
                Medium (défaut)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* États */}
      <div className="mb-5">
        <h4 className="mb-3">États</h4>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Button>Normal</Button>
              <Button disabled>Désactivé</Button>
              <Button loading>Chargement...</Button>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Button variant="outline">Normal</Button>
              <Button variant="outline" disabled>Désactivé</Button>
              <Button variant="outline" loading>Chargement...</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Formes */}
      <div className="mb-5">
        <h4 className="mb-3">Formes</h4>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-3">
              <Button>Rectangle (défaut)</Button>
              <Button rounded icon={<i className="ti ti-arrow-right" />}>
                Arrondi (pill)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pleine largeur */}
      <div className="mb-5">
        <h4 className="mb-3">Pleine Largeur</h4>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <Button fullWidth icon={<i className="ti ti-arrow-right" />}>
                Bouton pleine largeur
              </Button>
            </div>
            <div className="mb-3">
              <Button
                fullWidth
                variant="secondary"
                icon={<i className="ti ti-heart" />}
              >
                Bouton secondaire pleine largeur
              </Button>
            </div>
            <div>
              <Button
                fullWidth
                variant="outline"
                icon={<i className="ti ti-download" />}
              >
                Bouton outline pleine largeur
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Utilisation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <div className="mb-3">
          <strong>Bouton simple :</strong>
          <code className="d-block mt-1">
            {'<Button>Cliquez ici</Button>'}
          </code>
        </div>

        <div className="mb-3">
          <strong>Avec icône :</strong>
          <code className="d-block mt-1">
            {'<Button icon={<i className="ti ti-arrow-right" />}>Suivant</Button>'}
          </code>
        </div>

        <div className="mb-3">
          <strong>Variantes disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>variant="primary"</code> - Rouge/Rose corail (#FF6961)</li>
            <li><code>variant="secondary"</code> - Bleu NEXTGEN (#0D7FFF)</li>
            <li><code>variant="outline"</code> - Transparent avec bordure</li>
            <li><code>variant="ghost"</code> - Transparent sans bordure</li>
          </ul>
        </div>

        <div>
          <strong>Tailles :</strong> <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;

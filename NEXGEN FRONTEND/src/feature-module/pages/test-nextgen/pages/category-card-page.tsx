import CategoryCard from '../../../../components/nextgen/CategoryCard';

const CategoryCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>Category Card Component</h2>
        <p className="text-muted">
          Carte de catégorie avec image ronde et bouton "Découvrir"
        </p>
      </div>

      {/* Exemple unique */}
      <div className="mb-5">
        <h4 className="mb-3">Exemple: Catégorie Enfants</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <CategoryCard
              title="Enfants"
              image="/baby-sitting.jpg"
              imageAlt="Catégorie Enfants"
              buttonText="Découvrir"
              onClick={() => console.log('Catégorie Enfants cliquée')}
            />
          </div>
        </div>
      </div>

      {/* Plusieurs exemples */}
      <div className="mb-5">
        <h4 className="mb-3">Plusieurs catégories</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <CategoryCard
              title="Enfants"
              image="/baby-sitting.jpg"
              imageAlt="Catégorie Enfants"
              buttonText="Découvrir"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <CategoryCard
              title="Maison"
              image="/baby-sitting.jpg"
              imageAlt="Catégorie Maison"
              buttonText="Découvrir"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <CategoryCard
              title="Jardin"
              image="/baby-sitting.jpg"
              imageAlt="Catégorie Jardin"
              buttonText="Découvrir"
            />
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
          <strong>Basique :</strong>
          <code className="d-block mt-1">
            {'<CategoryCard title="Enfants" image="/path/to/image.jpg" />'}
          </code>
        </div>

        <div className="mb-3">
          <strong>Avec action onClick :</strong>
          <code className="d-block mt-1">
            {'<CategoryCard title="Enfants" image="/path/to/image.jpg" onClick={() => console.log("Clicked")} />'}
          </code>
        </div>

        <div className="mb-3">
          <strong>Avec lien href :</strong>
          <code className="d-block mt-1">
            {'<CategoryCard title="Enfants" image="/path/to/image.jpg" href="/categories/enfants" />'}
          </code>
        </div>

        <div>
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>title</code> - Titre de la catégorie (requis)</li>
            <li><code>image</code> - URL de l'image (requis)</li>
            <li><code>imageAlt</code> - Texte alternatif pour l'image</li>
            <li><code>buttonText</code> - Texte du bouton (défaut: "Découvrir")</li>
            <li><code>onClick</code> - Fonction appelée au clic</li>
            <li><code>href</code> - URL de redirection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardPage;

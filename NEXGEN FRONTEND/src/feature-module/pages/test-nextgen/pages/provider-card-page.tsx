import ProviderCard from '../../../../../MODULATION/src/components/ProviderCard';
import { mockProviders } from '../../../../../MODULATION/src/components/ProviderCard.data';

const ProviderCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>ProviderCard</h2>
        <p className="text-muted">
          Composant d'affichage de prestataire avec informations détaillées, système de variantes et mapping catégorie → profession.
        </p>
      </div>

      {/* Variante Default */}
      <div className="mb-5">
        <h4 className="mb-3">Variante Default</h4>
        <p className="text-muted small mb-3">
          Affichage standard avec nom sur la photo, catégorie en titre
        </p>
        <div className="row g-4">
          {mockProviders.slice(0, 3).map((provider) => (
            <div key={provider.id} className="col-lg-4">
              <ProviderCard
                {...provider}
                variant="default"
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Variante 1 */}
      <div className="mb-5">
        <h4 className="mb-3">Variante 1 (Compact)</h4>
        <p className="text-muted small mb-3">
          Format plus compact avec nom + profession en haut, photo réduite
        </p>
        <div className="row g-4">
          {mockProviders.slice(3, 6).map((provider) => (
            <div key={provider.id} className="col-lg-4">
              <ProviderCard
                {...provider}
                variant="variant1"
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top Prestataires */}
      <div className="mb-5">
        <h4 className="mb-3">Top Prestataires</h4>
        <p className="text-muted small mb-3">
          Prestataires avec badge "Top prestataire"
        </p>
        <div className="row g-4">
          {mockProviders.filter(p => p.isTopPrestataire).map((provider) => (
            <div key={provider.id} className="col-lg-4">
              <ProviderCard
                {...provider}
                variant="default"
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Avec Distance */}
      <div className="mb-5">
        <h4 className="mb-3">Avec Affichage de Distance (Variant1)</h4>
        <p className="text-muted small mb-3">
          Affiche la distance au lieu de la ville (utile pour recherche géolocalisée)
        </p>
        <div className="row g-4">
          {mockProviders.slice(0, 3).map((provider) => (
            <div key={provider.id} className="col-lg-4">
              <ProviderCard
                {...provider}
                variant="variant1"
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Documentation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-3">
          {`import ProviderCard from '@/components/ProviderCard';

<ProviderCard
  id={1}
  name="Marie Dupont"
  avatar="/avatar.jpg"
  category="Baby-sitting"
  location="Paris"
  distance="2.4km"
  rating={4.9}
  reviewCount={127}
  price="25€"
  isTopPrestataire={true}
  variant="default"
  onContact={(id) => console.log('Contact:', id)}
/>`}
        </code>

        <div className="mt-3">
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>id</code> (number, requis) - ID unique du prestataire</li>
            <li><code>name</code> (string, requis) - Nom du prestataire</li>
            <li><code>avatar</code> (string, requis) - URL de l'avatar</li>
            <li><code>category</code> (string, requis) - Catégorie de service</li>
            <li><code>location</code> (string, requis) - Ville</li>
            <li><code>distance</code> (string, optionnel) - Distance (ex: "2.4km")</li>
            <li><code>rating</code> (number, requis) - Note moyenne (0-5)</li>
            <li><code>reviewCount</code> (number, requis) - Nombre d'avis</li>
            <li><code>price</code> (string, requis) - Tarif (ex: "25€")</li>
            <li><code>isTopPrestataire</code> (boolean, optionnel) - Badge top prestataire</li>
            <li><code>variant</code> (string, optionnel) - "default" ou "variant1"</li>
            <li><code>onFavorite</code> (function, optionnel) - Callback favori</li>
            <li><code>onClick</code> (function, optionnel) - Callback clic sur carte</li>
            <li><code>onContact</code> (function, optionnel) - Callback bouton contact</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Mapping catégorie → profession :</strong>
          <p className="mb-0 small text-muted">
            Le composant convertit automatiquement la catégorie en titre de profession
            (ex: "Bricolage" → "Bricoleur", "Baby-sitting" → "Baby-sitter")
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderCardPage;

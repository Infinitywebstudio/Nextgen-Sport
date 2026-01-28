import { ServiceCardTailwind, ServiceCardInline, ServiceCardContact } from '../../../../../MODULATION/src/components/ServiceCard/variants';
import { mockServices } from '../../../../../MODULATION/src/components/ServiceCard.data';

const ServiceCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>ServiceCard - 3 Variantes</h2>
        <p className="text-muted">
          Composant d'affichage de services avec 3 variantes visuelles. Focus sur la catégorie du service plutôt que sur le prestataire.
        </p>
      </div>

      {/* Variante Tailwind */}
      <div className="mb-5">
        <h4 className="mb-3">
          <span className="badge bg-primary me-2">1</span>
          Variante Tailwind (Moderne)
        </h4>
        <p className="text-muted small mb-3">
          Design moderne avec Tailwind CSS, support du dark mode, bouton "Demander un service"
        </p>
        <div className="row g-4">
          {mockServices.slice(0, 3).map((service) => (
            <div key={service.id} className="col-lg-4">
              <ServiceCardTailwind
                {...service}
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onRequestService={(id) => console.log('Service demandé:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Variante Inline avec icône */}
      <div className="mb-5">
        <h4 className="mb-3">
          <span className="badge bg-success me-2">2</span>
          Variante Inline + Icône
        </h4>
        <p className="text-muted small mb-3">
          Styles inline, bouton "Demander un service" avec icône MessageCircle
        </p>
        <div className="row g-4">
          {mockServices.slice(3, 6).map((service) => (
            <div key={service.id} className="col-lg-4">
              <ServiceCardInline
                {...service}
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Variante Contact (compacte) */}
      <div className="mb-5">
        <h4 className="mb-3">
          <span className="badge bg-info me-2">3</span>
          Variante Contact (Compacte)
        </h4>
        <p className="text-muted small mb-3">
          Version compacte avec bouton court "Contacter" + icône
        </p>
        <div className="row g-4">
          {mockServices.slice(0, 3).map((service) => (
            <div key={service.id} className="col-lg-4">
              <ServiceCardContact
                {...service}
                onFavorite={(id) => console.log('Favori:', id)}
                onClick={(id) => console.log('Clic:', id)}
                onContact={(id) => console.log('Contact:', id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Comparaison côte à côte */}
      <div className="mb-5">
        <h4 className="mb-3">Comparaison des 3 Variantes</h4>
        <p className="text-muted small mb-3">
          Même service affiché dans les 3 styles différents
        </p>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="text-center mb-2 small text-muted">Tailwind</div>
            <ServiceCardTailwind
              {...mockServices[0]}
              onRequestService={(id) => console.log('Service:', id)}
            />
          </div>
          <div className="col-lg-4">
            <div className="text-center mb-2 small text-muted">Inline + Icône</div>
            <ServiceCardInline
              {...mockServices[0]}
              onContact={(id) => console.log('Contact:', id)}
            />
          </div>
          <div className="col-lg-4">
            <div className="text-center mb-2 small text-muted">Contact Compact</div>
            <ServiceCardContact
              {...mockServices[0]}
              onContact={(id) => console.log('Contact:', id)}
            />
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-3">
          {`import { ServiceCardTailwind, ServiceCardInline, ServiceCardContact }
  from '@/components/ServiceCard/variants';

// Variante 1: Tailwind
<ServiceCardTailwind
  id={1}
  category="Plomberie"
  rating={4.8}
  reviewCount={45}
  seller={{
    name: "Jean Dupont",
    avatar: "/avatar.jpg",
    location: "Paris",
    isTopPrestataire: true
  }}
  price="45€"
  onRequestService={(id) => console.log('Demande:', id)}
/>

// Variante 2: Inline + Icône
<ServiceCardInline {...props} onContact={(id) => {...}} />

// Variante 3: Contact Compact
<ServiceCardContact {...props} onContact={(id) => {...}} />`}
        </code>

        <div className="mt-3">
          <strong>Props communes à toutes les variantes :</strong>
          <ul className="mb-0 mt-2">
            <li><code>id</code> (number, requis) - ID unique</li>
            <li><code>category</code> (string, requis) - Catégorie du service</li>
            <li><code>rating</code> (number, requis) - Note moyenne</li>
            <li><code>reviewCount</code> (number, requis) - Nombre d'avis</li>
            <li><code>seller</code> (object, requis) - Infos prestataire (name, avatar, location, isTopPrestataire)</li>
            <li><code>price</code> (string, requis) - Tarif (ex: "45€")</li>
            <li><code>onFavorite</code> (function, optionnel) - Callback favori</li>
            <li><code>onClick</code> (function, optionnel) - Callback clic sur carte</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Callbacks spécifiques :</strong>
          <ul className="mb-0 mt-2">
            <li><code>onRequestService</code> - Pour ServiceCardTailwind</li>
            <li><code>onContact</code> - Pour ServiceCardInline et ServiceCardContact</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>📁 Structure des fichiers :</strong>
          <pre className="mb-0 mt-2 p-2 bg-light rounded small">
{`ServiceCard/
├── variants/
│   ├── TailwindVariant.tsx
│   ├── InlineWithIconVariant.tsx
│   ├── ContactVariant.tsx
│   └── index.ts
└── README.md`}
          </pre>
        </div>
      </div>

      {/* Tableau comparatif */}
      <div className="card">
        <div className="card-header bg-light">
          <h6 className="mb-0">
            <i className="ti ti-table me-1" />
            Tableau Comparatif des Variantes
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th>Caractéristique</th>
                  <th>TailwindVariant</th>
                  <th>InlineWithIconVariant</th>
                  <th>ContactVariant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Style</strong></td>
                  <td>Tailwind CSS</td>
                  <td>Inline styles</td>
                  <td>Inline styles</td>
                </tr>
                <tr>
                  <td><strong>Bouton</strong></td>
                  <td>"Demander un service"</td>
                  <td>"Demander un service" + icône</td>
                  <td>"Contacter" + icône</td>
                </tr>
                <tr>
                  <td><strong>Callback</strong></td>
                  <td><code>onRequestService</code></td>
                  <td><code>onContact</code></td>
                  <td><code>onContact</code></td>
                </tr>
                <tr>
                  <td><strong>Icône bouton</strong></td>
                  <td>❌</td>
                  <td>✅ MessageCircle</td>
                  <td>✅ MessageCircle</td>
                </tr>
                <tr>
                  <td><strong>Dark mode</strong></td>
                  <td>✅ (via Tailwind)</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td><strong>Usage recommandé</strong></td>
                  <td>Projets avec Tailwind</td>
                  <td>Design avec icônes</td>
                  <td>Interface compacte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardPage;

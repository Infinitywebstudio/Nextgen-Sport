import { useState } from 'react';
import SearchFilterBar from '../../../../components/nextgen/SearchFilterBar';
import type { FilterValues } from '../../../../components/nextgen/SearchFilterBar';

const CategoryFilterPage = () => {
  const [appliedFilters, setAppliedFilters] = useState<FilterValues | null>(null);
  const [filterHistory, setFilterHistory] = useState<FilterValues[]>([]);

  const handleFilterChange = (filters: FilterValues) => {
    console.log('Filtres appliqués:', filters);
    setAppliedFilters(filters);

    // Ajouter à l'historique
    setFilterHistory(prev => [...prev.slice(-4), filters]);
  };

  const handleReset = () => {
    console.log('Filtres réinitialisés');
    setAppliedFilters(null);
  };

  return (
    <div>
      <div className="mb-4">
        <h2>SearchFilterBar - Barre de Filtres</h2>
        <p className="text-muted">
          Composant de filtrage avancé pour la recherche de prestataires avec sélection de catégorie, localisation, zone d'intervention et budget.
        </p>
      </div>

      {/* Composant SearchFilterBar */}
      <div className="mb-5">
        <h4 className="mb-3">Barre de Filtres Interactive</h4>
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <SearchFilterBar
            onFilterChange={handleFilterChange}
            onReset={handleReset}
          />
        </div>
      </div>

      {/* Filtres actifs */}
      {appliedFilters && (
        <div className="mb-5">
          <h4 className="mb-3">Filtres Actuellement Actifs</h4>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div className="row g-3">
              {/* Catégories */}
              {appliedFilters.categories.length > 0 && (
                <div className="col-md-6">
                  <div style={{ padding: '12px', backgroundColor: '#fef3c7', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#78350f' }}>
                      <i className="ti ti-category me-2"></i>
                      Catégorie :
                    </strong>
                    <span style={{ color: '#92400e' }}>{appliedFilters.categories.join(', ')}</span>
                  </div>
                </div>
              )}

              {/* Localisation */}
              {appliedFilters.locationText && (
                <div className="col-md-6">
                  <div style={{ padding: '12px', backgroundColor: '#dbeafe', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#1e3a8a' }}>
                      <i className="ti ti-map-pin me-2"></i>
                      Adresse :
                    </strong>
                    <span style={{ color: '#1e40af' }}>{appliedFilters.locationText}</span>
                  </div>
                </div>
              )}

              {/* Zone d'intervention */}
              {(appliedFilters.minZone !== 1 || appliedFilters.maxZone !== 80) && (
                <div className="col-md-6">
                  <div style={{ padding: '12px', backgroundColor: '#dcfce7', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#14532d' }}>
                      <i className="ti ti-radar-2 me-2"></i>
                      Zone d'intervention :
                    </strong>
                    <span style={{ color: '#15803d' }}>{appliedFilters.minZone} km - {appliedFilters.maxZone} km</span>
                  </div>
                </div>
              )}

              {/* Budget */}
              {(appliedFilters.minBudget > 0 || appliedFilters.maxBudget < 100) && (
                <div className="col-md-6">
                  <div style={{ padding: '12px', backgroundColor: '#fce7f3', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#831843' }}>
                      <i className="ti ti-currency-euro me-2"></i>
                      Budget :
                    </strong>
                    <span style={{ color: '#9f1239' }}>{appliedFilters.minBudget}€ - {appliedFilters.maxBudget}€/h</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Message si aucun filtre */}
      {!appliedFilters && (
        <div className="mb-5">
          <div className="alert alert-info">
            <i className="ti ti-info-circle me-2"></i>
            Aucun filtre actif. Utilisez la barre de filtres ci-dessus pour commencer.
          </div>
        </div>
      )}

      {/* Historique des filtres */}
      {filterHistory.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3">Historique des Filtres (5 derniers)</h4>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            {filterHistory.map((filter, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  marginBottom: index < filterHistory.length - 1 ? '12px' : 0,
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              >
                <strong style={{ color: '#6b7280', marginRight: '8px' }}>#{filterHistory.length - index}:</strong>
                <span style={{ color: '#374151' }}>
                  {filter.categories.length > 0 && `Catégorie: ${filter.categories[0]} `}
                  {filter.locationText && `📍 ${filter.locationText} `}
                  {(filter.minZone !== 1 || filter.maxZone !== 80) && `🎯 ${filter.minZone}-${filter.maxZone}km `}
                  {(filter.minBudget > 0 || filter.maxBudget < 100) && `💰 ${filter.minBudget}-${filter.maxBudget}€/h`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documentation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-3">
          {`import SearchFilterBar from '@/components/nextgen/SearchFilterBar';
import type { FilterValues } from '@/components/nextgen/SearchFilterBar';

<SearchFilterBar
  onFilterChange={(filters) => console.log('Filtres:', filters)}
  onReset={() => console.log('Reset')}
/>`}
        </code>

        <div className="mt-3">
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>onFilterChange</code> (function, optionnel) - Callback appelé quand les filtres changent</li>
            <li><code>onReset</code> (function, optionnel) - Callback appelé quand le bouton "Effacer" est cliqué</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Interface FilterValues :</strong>
          <pre className="mb-0 mt-2 p-2 bg-light rounded small">
{`interface FilterValues {
  categories: string[];       // Catégorie sélectionnée (radio)
  locations: string[];        // Non utilisé actuellement
  locationText: string;       // Adresse saisie
  minZone: number;           // Zone min (1-80 km)
  maxZone: number;           // Zone max (1-80 km)
  minRating: number;         // Non utilisé actuellement
  minBudget: number;         // Budget min (€/h)
  maxBudget: number;         // Budget max (€/h)
  availability: string[];    // Non utilisé actuellement
  sellerLevel: string[];     // Non utilisé actuellement
}`}
          </pre>
        </div>

        <div className="mt-3">
          <strong>Fonctionnalités :</strong>
          <ul className="mb-0 mt-2">
            <li>✅ <strong>Catégories</strong> - Sélection unique (radio), affiche la catégorie choisie</li>
            <li>✅ <strong>Localisation</strong> - Champ de saisie libre avec bouton d'effacement</li>
            <li>✅ <strong>Zone d'intervention</strong> - Double slider (1-80 km) avec valeurs flottantes</li>
            <li>✅ <strong>Budget</strong> - Inputs numériques min/max (€/h)</li>
            <li>✅ <strong>Bouton "Effacer le filtre"</strong> - Réinitialise tous les filtres</li>
            <li>✅ <strong>Fermeture au clic extérieur</strong> - Un seul dropdown ouvert à la fois</li>
            <li>✅ <strong>État actif</strong> - Boutons en surbrillance quand filtres appliqués</li>
          </ul>
        </div>
      </div>

      {/* Caractéristiques techniques */}
      <div className="card">
        <div className="card-header bg-light">
          <h6 className="mb-0">
            <i className="ti ti-code me-1" />
            Caractéristiques Techniques
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <strong>Gestion des dropdowns :</strong>
              <ul className="mt-2">
                <li>Un seul dropdown ouvert à la fois</li>
                <li>Fermeture automatique au clic extérieur</li>
                <li>Utilisation de <code>useRef</code> et <code>useEffect</code></li>
              </ul>
            </div>
            <div className="col-md-6">
              <strong>Mise à jour des filtres :</strong>
              <ul className="mt-2">
                <li>Changements appliqués instantanément</li>
                <li>Callback <code>onFilterChange</code> à chaque modification</li>
                <li>État interne synchronisé</li>
              </ul>
            </div>
          </div>

          <hr className="my-3" />

          <strong>Double slider Zone d'intervention :</strong>
          <ul className="mt-2 mb-0">
            <li>2 inputs range superposés pour min et max</li>
            <li>Valeurs flottantes qui suivent les curseurs</li>
            <li>Affichage combiné quand les valeurs sont proches (≤25 km d'écart)</li>
            <li>Track coloré dynamiquement selon la sélection</li>
            <li>Empêche les valeurs min/max de se croiser</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterPage;

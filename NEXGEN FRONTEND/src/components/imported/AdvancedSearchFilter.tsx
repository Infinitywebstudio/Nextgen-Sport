import { useState } from 'react';
import { Search, MapPin, Star, DollarSign, Clock, User, ChevronDown } from 'lucide-react';

export interface FilterCriteria {
  categories: string[];
  locations: string[];
  minRating: number;
  minBudget: number;
  maxBudget: number;
  deliveryTime: string[];
  sellerLevel: string[];
}

export interface AdvancedSearchFilterProps {
  onFilterChange: (criteria: FilterCriteria) => void;
  onReset: () => void;
}

// Données luxembourgeoises pour les filtres
const CATEGORIES = [
  'Plomberie',
  'Électricité',
  'Ménage',
  'Baby-sitting',
  'Jardinage',
  'Coiffure à domicile',
  'Dépannage informatique',
  'Cours de soutien',
  'Réparation',
  'Déménagement'
];

const LOCATIONS = [
  'Luxembourg-Ville',
  'Esch-sur-Alzette',
  'Differdange',
  'Dudelange',
  'Ettelbruck',
  'Pétange',
  'Schifflange',
  'Wiltz',
  'Diekirch',
  'Mersch'
];

const DELIVERY_TIMES = [
  'Immédiat (24h)',
  '2-3 jours',
  'Une semaine',
  'Plus d\'une semaine'
];

const SELLER_LEVELS = [
  'Top prestataire',
  'Prestataire vérifié',
  'Nouveau prestataire'
];

export default function AdvancedSearchFilter({ onFilterChange, onReset }: AdvancedSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(100);
  const [selectedDeliveryTimes, setSelectedDeliveryTimes] = useState<string[]>([]);
  const [selectedSellerLevels, setSelectedSellerLevels] = useState<string[]>([]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationToggle = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const handleDeliveryTimeToggle = (time: string) => {
    setSelectedDeliveryTimes(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  const handleSellerLevelToggle = (level: string) => {
    setSelectedSellerLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const handleApply = () => {
    onFilterChange({
      categories: selectedCategories,
      locations: selectedLocations,
      minRating,
      minBudget,
      maxBudget,
      deliveryTime: selectedDeliveryTimes,
      sellerLevel: selectedSellerLevels
    });
    setOpenDropdown(null);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLocations([]);
    setMinRating(0);
    setMinBudget(0);
    setMaxBudget(100);
    setSelectedDeliveryTimes([]);
    setSelectedSellerLevels([]);
    setOpenDropdown(null);
    onReset();
  };

  const filteredCategories = CATEGORIES.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      {/* Filtres horizontaux */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center'
      }}>
        {/* Catégories Dropdown */}
        <div style={{ position: 'relative', flex: '1 1 200px' }}>
          <button
            onClick={() => toggleDropdown('categories')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: selectedCategories.length > 0 ? '#fff5f5' : '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={16} color="#ff6961" />
              Catégories {selectedCategories.length > 0 && `(${selectedCategories.length})`}
            </div>
            <ChevronDown size={16} />
          </button>

          {openDropdown === 'categories' && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              width: '280px',
              maxHeight: '300px',
              overflowY: 'auto',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '12px'
            }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher..."
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  marginBottom: '8px'
                }}
              />
              {filteredCategories.map((category) => (
                <label
                  key={category}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Localisation Dropdown */}
        <div style={{ position: 'relative', flex: '1 1 200px' }}>
          <button
            onClick={() => toggleDropdown('locations')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: selectedLocations.length > 0 ? '#f0f9ff' : '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#3b82f6" />
              Localisation {selectedLocations.length > 0 && `(${selectedLocations.length})`}
            </div>
            <ChevronDown size={16} />
          </button>

          {openDropdown === 'locations' && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              width: '280px',
              maxHeight: '300px',
              overflowY: 'auto',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '12px'
            }}>
              {LOCATIONS.map((location) => (
                <label
                  key={location}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location)}
                    onChange={() => handleLocationToggle(location)}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  {location}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Note minimale Dropdown */}
        <div style={{ position: 'relative', flex: '1 1 150px' }}>
          <button
            onClick={() => toggleDropdown('rating')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: minRating > 0 ? '#fffbeb' : '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={16} color="#f59e0b" />
              Note {minRating > 0 && `${minRating}+`}
            </div>
            <ChevronDown size={16} />
          </button>

          {openDropdown === 'rating' && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              width: '220px',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '16px'
            }}>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                style={{ width: '100%', marginBottom: '8px' }}
              />
              <div style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
                {minRating} étoiles et plus
              </div>
            </div>
          )}
        </div>

        {/* Budget Dropdown */}
        <div style={{ position: 'relative', flex: '1 1 150px' }}>
          <button
            onClick={() => toggleDropdown('budget')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DollarSign size={16} color="#10b981" />
              Budget
            </div>
            <ChevronDown size={16} />
          </button>

          {openDropdown === 'budget' && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              width: '280px',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '20px'
            }}>
              <div style={{ marginBottom: '16px', fontSize: '13px', fontWeight: '600', color: '#374151' }}>
                Budget par heure (€)
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px', display: 'block' }}>Minimum</label>
                  <input
                    type="number"
                    min="0"
                    value={minBudget}
                    onChange={(e) => setMinBudget(parseInt(e.target.value) || 0)}
                    placeholder="0"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px', display: 'block' }}>Maximum</label>
                  <input
                    type="number"
                    min="0"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(parseInt(e.target.value) || 0)}
                    placeholder="100"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#10b981',
                fontWeight: '600',
                textAlign: 'center',
                padding: '8px',
                backgroundColor: '#f0fdf4',
                borderRadius: '6px'
              }}>
                {minBudget}€ - {maxBudget}€
              </div>
            </div>
          )}
        </div>

        {/* Plus de filtres Dropdown */}
        <div style={{ position: 'relative', flex: '1 1 150px' }}>
          <button
            onClick={() => toggleDropdown('more')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: (selectedDeliveryTimes.length > 0 || selectedSellerLevels.length > 0) ? '#f3f4f6' : '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}
          >
            Plus de filtres
            <ChevronDown size={16} />
          </button>

          {openDropdown === 'more' && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              width: '280px',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '16px'
            }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                  Délai de disponibilité
                </div>
                {DELIVERY_TIMES.map((time) => (
                  <label
                    key={time}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '6px 0',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedDeliveryTimes.includes(time)}
                      onChange={() => handleDeliveryTimeToggle(time)}
                      style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                    {time}
                  </label>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                  Niveau du prestataire
                </div>
                {SELLER_LEVELS.map((level) => (
                  <label
                    key={level}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '6px 0',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSellerLevels.includes(level)}
                      onChange={() => handleSellerLevelToggle(level)}
                      style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Boutons d'action */}
        <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
          <button
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: '#fff',
              color: '#374151',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Réinitialiser
          </button>
          <button
            onClick={handleApply}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#ff6961',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}

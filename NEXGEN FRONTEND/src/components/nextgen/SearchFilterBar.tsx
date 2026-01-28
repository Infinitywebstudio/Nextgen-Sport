import { useState, useEffect, useRef } from 'react';
import { getHierarchicalCategories } from '../../services/category.service';

export interface SearchFilterBarProps {
  onFilterChange?: (filters: FilterValues) => void;
  onReset?: () => void;
}

export interface FilterValues {
  categoryId: number | null;
  locations: string[];
  locationText: string;
  minZone: number; // en km
  maxZone: number; // en km
  minRating: number;
  minBudget: number;
  maxBudget: number;
  availability: string[];
  sellerLevel: string[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  children: Category[];
}

const SearchFilterBar = ({ onFilterChange, onReset }: SearchFilterBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<FilterValues>({
    categoryId: null,
    locations: [],
    locationText: '',
    minZone: 1,
    maxZone: 80,
    minRating: 0,
    minBudget: 0,
    maxBudget: 100,
    availability: [],
    sellerLevel: [],
  });
  
  const [categoryName, setCategoryName] = useState<string>('Catégories');
  const [hierarchicalCategories, setHierarchicalCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getHierarchicalCategories();
      setHierarchicalCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);


  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  };

  // Gère la sélection d'une sous-catégorie
  const handleCategoryChange = (category: { id: number; name: string }) => {
    const newCategoryId = filters.categoryId === category.id ? null : category.id;
    const newCategoryName = filters.categoryId === category.id ? 'Catégories' : category.name;
    
    const newFilters = { ...filters, categoryId: newCategoryId };
    setFilters(newFilters);
    setCategoryName(newCategoryName);
    onFilterChange?.(newFilters);
  };

  const handleLocationTextChange = (text: string) => {
    const newFilters = { ...filters, locationText: text };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleZoneChange = (min: number, max: number) => {
    const newFilters = { ...filters, minZone: min, maxZone: max };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleBudgetChange = (min: number, max: number) => {
    const newFilters = { ...filters, minBudget: min, maxBudget: max };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      categoryId: null,
      locations: [],
      locationText: '',
      minZone: 1,
      maxZone: 80,
      minRating: 0,
      minBudget: 0,
      maxBudget: 100,
      availability: [],
      sellerLevel: [],
    };
    setFilters(resetFilters);
    setCategoryName('Catégories');
    setOpenDropdown(null);
    onReset?.();
  };

  const handleApply = () => {
    onFilterChange?.(filters);
    setOpenDropdown(null);
  };

  return (
    <div className="search-filter-bar" ref={containerRef}>
      {/* Bouton Effacer le filtre - positionné en haut à droite */}
      <div className="filter-clear-wrapper">
        <button className="filter-clear-btn" onClick={handleReset}>
          <span className="clear-icon">
            <i className="ti ti-x"></i>
          </span>
          <span>Effacer le filtre</span>
        </button>
      </div>

      <div className="search-filter-bar-wrapper">
        {/* Catégories - Hiérarchique */}
        <div className="filter-dropdown">
          <button
            className={`filter-button ${filters.categoryId ? 'active' : ''}`}
            onClick={() => toggleDropdown('categories')}
          >
            <i className="ti ti-category"></i>
            <span>{categoryName}</span>
            <i className="ti ti-chevron-down"></i>
          </button>
          {openDropdown === 'categories' && (
            <div className="filter-dropdown-menu">
              <div className="filter-dropdown-content">
                {hierarchicalCategories.map(mainCategory => ( // Itérer sur les catégories principales
                  <div key={mainCategory.id} className="filter-radio-label">
                    <span
                      className={`custom-radio ${filters.categoryId === mainCategory.id ? 'checked' : ''}`}
                      onClick={() => handleCategoryChange(mainCategory)} // Sélectionner la catégorie principale
                    />
                    <span>{mainCategory.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Localisation - Champ de saisie */}
        <div className="filter-location-input">
          <i className="ti ti-map-pin"></i>
          <input
            type="text"
            placeholder="Entrez une adresse..."
            value={filters.locationText}
            onChange={(e) => handleLocationTextChange(e.target.value)}
            className={filters.locationText ? 'has-value' : ''}
          />
          {filters.locationText && (
            <button
              type="button"
              className="clear-location"
              onClick={() => handleLocationTextChange('')}
              aria-label="Effacer l'adresse"
            >
              <i className="ti ti-x"></i>
            </button>
          )}
        </div>

        {/* Zone d'intervention */}
        <div className="filter-dropdown">
          <button
            className={`filter-button ${filters.minZone !== 1 || filters.maxZone !== 80 ? 'active' : ''}`}
            onClick={() => toggleDropdown('zone')}
          >
            <i className="ti ti-radar-2"></i>
            <span>Zone d'intervention</span>
            <i className="ti ti-chevron-down"></i>
          </button>
          {openDropdown === 'zone' && (
            <div className="filter-dropdown-menu zone-dropdown">
              <div className="filter-dropdown-content">
                <div className="zone-slider-container">
                  {/* Double slider avec valeurs flottantes */}
                  <div className="dual-slider-container">
                    {/* Affichage des valeurs - combinées si proches (seuil 25 pour éviter chevauchement) */}
                    {filters.maxZone - filters.minZone <= 25 ? (
                      // Valeurs combinées quand proches - position limitée aux bords
                      <div
                        className="slider-value slider-value-combined"
                        style={{
                          left: filters.maxZone >= 65
                            ? `${((filters.maxZone - 1) / 79) * 100}%`
                            : `${((filters.minZone - 1) / 79) * 100}%`,
                          transform: filters.maxZone >= 65 ? 'translateX(-100%)' : 'translateX(0)'
                        }}
                      >
                        {filters.minZone} - {filters.maxZone} km
                      </div>
                    ) : (
                      <>
                        {/* Valeur Min flottante - ne dépasse jamais la gauche */}
                        <div
                          className="slider-value slider-value-min"
                          style={{
                            left: `${((filters.minZone - 1) / 79) * 100}%`,
                            transform: 'translateX(0)'
                          }}
                        >
                          {filters.minZone} km
                        </div>
                        {/* Valeur Max flottante - ne dépasse jamais la droite */}
                        <div
                          className="slider-value slider-value-max"
                          style={{
                            left: `${((filters.maxZone - 1) / 79) * 100}%`,
                            transform: 'translateX(-100%)'
                          }}
                        >
                          {filters.maxZone} km
                        </div>
                      </>
                    )}

                    <div
                      className="slider-track"
                      style={{
                        background: `linear-gradient(to right,
                          #e5e7eb 0%,
                          #e5e7eb ${((filters.minZone - 1) / 79) * 100}%,
                          #FF6900 ${((filters.minZone - 1) / 79) * 100}%,
                          #FF6900 ${((filters.maxZone - 1) / 79) * 100}%,
                          #e5e7eb ${((filters.maxZone - 1) / 79) * 100}%,
                          #e5e7eb 100%)`
                      }}
                    />
                    <input
                      type="range"
                      min="1"
                      max="80"
                      value={filters.minZone}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value < filters.maxZone) {
                          handleZoneChange(value, filters.maxZone);
                        }
                      }}
                      className="zone-slider zone-slider-min"
                    />
                    <input
                      type="range"
                      min="1"
                      max="80"
                      value={filters.maxZone}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value > filters.minZone) {
                          handleZoneChange(filters.minZone, value);
                        }
                      }}
                      className="zone-slider zone-slider-max"
                    />
                  </div>

                  <div className="zone-range-labels">
                    <span>Min</span>
                    <span>Max</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Budget */}
        <div className="filter-dropdown">
          <button
            className={`filter-button ${filters.minBudget > 0 || filters.maxBudget < 100 ? 'active' : ''}`}
            onClick={() => toggleDropdown('budget')}
          >
            <i className="ti ti-currency-euro"></i>
            <span>Budget</span>
            <i className="ti ti-chevron-down"></i>
          </button>

          {openDropdown === 'budget' && (
            <div className="filter-dropdown-menu">
              <div className="filter-dropdown-content">
                <div className="budget-inputs">
                  <div className="budget-input-group">
                    <label>Min (€/h)</label>
                    <input
                      type="number"
                      value={filters.minBudget}
                      onChange={(e) => handleBudgetChange(parseInt(e.target.value) || 0, filters.maxBudget)}
                      min="0"
                      max={filters.maxBudget}
                    />
                  </div>
                  <div className="budget-input-group">
                    <label>Max (€/h)</label>
                    <input
                      type="number"
                      value={filters.maxBudget}
                      onChange={(e) => handleBudgetChange(filters.minBudget, parseInt(e.target.value) || 100)}
                      min={filters.minBudget}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchFilterBar;

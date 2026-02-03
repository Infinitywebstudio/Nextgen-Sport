import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  MapPin,
  Star,
  ChevronDown,
  X,
  Bookmark,
  Trash2,
} from 'lucide-react';
import { mockTalents, FILTER_OPTIONS, type TalentData } from './mockTalents';
import talentPlaceholder from '../../../assets/img/homepage/talent-placeholder.webp';
import arrowIcon from '../../../assets/img/homepage/right-arrow.svg';

// ===== Filter config =====
type FilterKey = 'sport' | 'country' | 'ageGroup';

const FILTERS: { key: FilterKey; label: string; placeholder: string }[] = [
  { key: 'sport', label: 'Sport', placeholder: 'Sélectionner sport' },
  { key: 'country', label: 'Pays', placeholder: 'Sélectionner pays' },
  { key: 'ageGroup', label: "Groupe d'âge", placeholder: "Sélectionner l'âge" },
];

interface SavedSearch {
  name: string;
  filters: Record<FilterKey, string[]>;
}

const STORAGE_KEY = 'nex-saved-searches';

// ===== Component =====
const SearchTalentsPage = () => {
  const [searchParams] = useSearchParams();
  const [allTalents] = useState<TalentData[]>(mockTalents);
  const [selectedFilters, setSelectedFilters] = useState<Record<FilterKey, string[]>>({
    sport: [],
    country: [],
    ageGroup: [],
  });
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveSearchName, setSaveSearchName] = useState('');
  const filtersRef = useRef<HTMLDivElement>(null);
  const modalInputRef = useRef<HTMLInputElement>(null);

  // Init from URL params + load saved searches
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = FILTER_OPTIONS.sport.find(
        (s) => s.toLowerCase() === cat.toLowerCase()
      );
      if (match) {
        setSelectedFilters((prev) => ({ ...prev, sport: [match] }));
      }
    }
  }, [searchParams]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSavedSearches(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filtersRef.current && !filtersRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus modal input
  useEffect(() => {
    if (showSaveModal && modalInputRef.current) {
      modalInputRef.current.focus();
    }
  }, [showSaveModal]);

  // Filter logic
  const filteredTalents = useMemo(() => {
    return allTalents.filter((t) => {
      if (selectedFilters.sport.length > 0 && !selectedFilters.sport.includes(t.category)) return false;
      if (selectedFilters.country.length > 0 && !selectedFilters.country.includes(t.country)) return false;
      if (selectedFilters.ageGroup.length > 0 && !selectedFilters.ageGroup.includes(t.ageGroup)) return false;
      return true;
    });
  }, [allTalents, selectedFilters]);

  const hasActiveFilters = selectedFilters.sport.length > 0 || selectedFilters.country.length > 0 || selectedFilters.ageGroup.length > 0;

  // Handlers
  const toggleOption = (filterKey: FilterKey, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterKey];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [filterKey]: next };
    });
  };

  const clearFilter = (filterKey: FilterKey) => {
    setSelectedFilters((prev) => ({ ...prev, [filterKey]: [] }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({ sport: [], country: [], ageGroup: [] });
  };

  const persistSavedSearches = useCallback((searches: SavedSearch[]) => {
    setSavedSearches(searches);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
    } catch { /* ignore */ }
  }, []);

  const handleSaveSearch = () => {
    if (!saveSearchName.trim()) return;
    const newSearch: SavedSearch = {
      name: saveSearchName.trim(),
      filters: { ...selectedFilters },
    };
    persistSavedSearches([...savedSearches, newSearch]);
    setSaveSearchName('');
    setShowSaveModal(false);
  };

  const handleLoadSearch = (search: SavedSearch) => {
    setSelectedFilters({ ...search.filters });
  };

  const handleDeleteSearch = (index: number) => {
    const next = savedSearches.filter((_, i) => i !== index);
    persistSavedSearches(next);
  };

  return (
    <div className="nex-search-page">

      {/* ===== HERO ===== */}
      <section className="nex-search-hero">
        <div className="nex-search-hero__container">
          <h1 className="nex-search-hero__title nex-title">Trouver un talent</h1>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="nex-search-filters">
        <div className="nex-search-filters__container" ref={filtersRef}>
          <div className="nex-search-filters__grid">
            {FILTERS.map((filter) => {
              const options = FILTER_OPTIONS[filter.key];
              const selected = selectedFilters[filter.key];
              const isOpen = openDropdown === filter.key;

              return (
                <div key={filter.key} className="nex-filter">
                  <div className="nex-filter__label">
                    <span>{filter.label}</span>
                    {selected.length > 0 && (
                      <button
                        className="nex-filter__clear"
                        onClick={() => clearFilter(filter.key)}
                      >
                        Réinitialiser
                      </button>
                    )}
                  </div>
                  <button
                    className={`nex-filter__toggle ${isOpen ? 'nex-filter__toggle--open' : ''}`}
                    onClick={() => setOpenDropdown(isOpen ? null : filter.key)}
                  >
                    <span className="nex-filter__toggle-text">
                      {selected.length > 0 ? (
                        <>
                          {filter.label} <span className="nex-filter__count">{selected.length}</span>
                        </>
                      ) : (
                        filter.placeholder
                      )}
                    </span>
                    <ChevronDown size={16} className="nex-filter__arrow" />
                  </button>

                  {isOpen && (
                    <div className="nex-filter__dropdown">
                      {options.map((option) => (
                        <label
                          key={option}
                          className={`nex-filter__option ${selected.includes(option) ? 'nex-filter__option--selected' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={selected.includes(option)}
                            onChange={() => toggleOption(filter.key, option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Save / Load actions */}
          <div className="nex-search-filters__actions">
            {savedSearches.length > 0 && (
              <div className="nex-saved-dropdown">
                <button
                  className="nex-saved-dropdown__toggle"
                  onClick={() => setOpenDropdown(openDropdown === ('saved' as FilterKey) ? null : ('saved' as FilterKey))}
                >
                  <Bookmark size={14} />
                  <span>Mes recherches ({savedSearches.length})</span>
                  <ChevronDown size={14} />
                </button>
                {openDropdown === ('saved' as FilterKey) && (
                  <div className="nex-saved-dropdown__menu">
                    {savedSearches.map((search, i) => (
                      <div key={i} className="nex-saved-dropdown__item">
                        <button
                          className="nex-saved-dropdown__name"
                          onClick={() => { handleLoadSearch(search); setOpenDropdown(null); }}
                        >
                          {search.name}
                        </button>
                        <button
                          className="nex-saved-dropdown__delete"
                          onClick={() => handleDeleteSearch(i)}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {hasActiveFilters && (
              <button
                className="nex-search-filters__save-btn"
                onClick={() => setShowSaveModal(true)}
              >
                <Bookmark size={13} /> Sauvegarder
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="nex-search-results">
        <div className="nex-search-results__container">

          <div className="nex-search-results__header">
            <h2 className="nex-search-results__title nex-title">Talents disponibles</h2>
            <span className="nex-search-results__count">
              {filteredTalents.length} résultat{filteredTalents.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Empty state */}
          {filteredTalents.length === 0 && (
            <div className="nex-search-results__empty">
              <Search size={48} />
              <h3 className="nex-title">Aucun talent trouvé</h3>
              <p>Essayez de modifier vos critères de recherche.</p>
              <button className="nex-search-results__empty-btn" onClick={clearAllFilters}>
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Results grid */}
          {filteredTalents.length > 0 && (
            <div className="nex-search-results__grid">
              {filteredTalents.map((talent) => (
                <Link
                  key={talent.id}
                  to={`/talent/${talent.id}`}
                  className="nex-result-card"
                >
                  <div className="nex-result-card__image">
                    <img
                      src={talent.avatar || talentPlaceholder}
                      alt={talent.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = talentPlaceholder;
                      }}
                    />
                    {talent.isTopPrestataire && (
                      <span className="nex-result-card__badge">Top Talent</span>
                    )}
                  </div>
                  <div className="nex-result-card__body">
                    <h3 className="nex-result-card__name nex-title">{talent.name}</h3>
                    <div className="nex-result-card__footer">
                      <h4 className="nex-result-card__sport nex-title">{talent.category}</h4>
                      <span className="nex-result-card__arrow">
                        <img src={arrowIcon} alt="" />
                      </span>
                    </div>
                    <div className="nex-result-card__meta">
                      {talent.rating > 0 && (
                        <span className="nex-result-card__rating">
                          <Star size={14} /> {talent.rating.toFixed(1)}
                          <span className="nex-result-card__reviews">({talent.reviewCount})</span>
                        </span>
                      )}
                      {talent.location && (
                        <span className="nex-result-card__location">
                          <MapPin size={14} /> {talent.location}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== SAVE MODAL ===== */}
      {showSaveModal && (
        <div className="nex-modal-overlay" onClick={() => setShowSaveModal(false)}>
          <div className="nex-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="nex-modal__title nex-title">Sauvegarder cette recherche</h2>
            <input
              ref={modalInputRef}
              type="text"
              className="nex-modal__input"
              placeholder="Nom de la recherche (ex: Football France 18-21)"
              value={saveSearchName}
              onChange={(e) => setSaveSearchName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveSearch()}
            />
            <div className="nex-modal__actions">
              <button className="nex-modal__btn nex-modal__btn--cancel" onClick={() => setShowSaveModal(false)}>
                Annuler
              </button>
              <button className="nex-modal__btn nex-modal__btn--save" onClick={handleSaveSearch}>
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTalentsPage;

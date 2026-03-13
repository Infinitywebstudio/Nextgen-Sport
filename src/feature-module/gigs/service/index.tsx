import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import SearchFilterBar from "../../../components/nextgen/SearchFilterBar";
import type { FilterValues } from "../../../components/nextgen/SearchFilterBar";
import ProviderCard from "../../../../MODULATION/src/components/ProviderCard";
import type { ServiceCardProps } from "../../../components/ServiceCard";
import { fetchProviders } from "../../../services/providerService";
import { providersToServiceCards } from "../../../services/providerAdapter";
import { mockServices } from "../../../components/ServiceCard.data";

const Service = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const [filteredServices, setFilteredServices] = useState<Omit<ServiceCardProps, 'onFavorite' | 'onClick' | 'onContact'>[]>([]);
  const [allServices, setAllServices] = useState<Omit<ServiceCardProps, 'onFavorite' | 'onClick' | 'onContact'>[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterValues | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useWordPress, setUseWordPress] = useState(true);

  // Charger les prestataires au montage du composant
  useEffect(() => {
    const loadProviders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (useWordPress) {
          // Récupérer les données depuis WordPress
          const providers = await fetchProviders();
          const services = providersToServiceCards(providers);
          setAllServices(services);
          setFilteredServices(services);
          // Chargé depuis WordPress
        } else {
          // Utiliser les données mockées
          setAllServices(mockServices);
          setFilteredServices(mockServices);
          // Données mockées en fallback
        }
      } catch (err) {
        console.error('Erreur lors du chargement des prestataires:', err);
        setError('Impossible de charger les prestataires. Utilisation des données de test.');
        // Fallback vers les données mockées en cas d'erreur
        setAllServices(mockServices);
        setFilteredServices(mockServices);
        setUseWordPress(false);
      } finally {
        setIsLoading(false);
      }
    };

    loadProviders();
  }, [useWordPress]);

  const handleFilterChange = (criteria: FilterValues) => {
    setActiveFilters(criteria);

    // Appliquer les filtres
    let filtered = [...allServices];

    // Filtre par catégories
    if (criteria.categories.length > 0) {
      filtered = filtered.filter(service =>
        criteria.categories.includes(service.category)
      );
    }

    // Filtre par localisation
    if (criteria.locations.length > 0) {
      filtered = filtered.filter(service =>
        criteria.locations.includes(service.seller.location)
      );
    }

    // Filtre par note minimale
    if (criteria.minRating > 0) {
      filtered = filtered.filter(service =>
        service.rating >= criteria.minRating
      );
    }

    // Filtre par budget
    const budgetInRange = (price: string) => {
      const priceValue = parseInt(price.replace('€', ''));
      return priceValue >= criteria.minBudget && priceValue <= criteria.maxBudget;
    };
    filtered = filtered.filter(service => budgetInRange(service.price));

    // Filtre par niveau de prestataire
    if (criteria.sellerLevel.length > 0) {
      filtered = filtered.filter(service => {
        if (criteria.sellerLevel.includes('Top prestataire')) {
          return service.seller.isTopPrestataire;
        }
        return true;
      });
    }

    setFilteredServices(filtered);
  };

  const handleReset = () => {
    setActiveFilters(null);
    setFilteredServices(allServices);
  };

  const handleFavorite = (_serviceId: number) => {
    // TODO: implémenter favoris
  };

  const handleServiceClick = (serviceId: number) => {
    navigate(`/gigs/provider/${serviceId}`);
  };

  const handleContact = (_serviceId: number) => {
    // TODO: implémenter contact
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.home}>Accueil</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Recherche de prestataires
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title mb-0">
                Trouvez le prestataire parfait{" "}
                <span className="text-primary ms-2">
                  " {filteredServices.length} Prestataire{filteredServices.length > 1 ? 's' : ''} "
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="page-content nex-service-page">
        <div className="container">
          {/* Filtres de recherche horizontaux en haut */}
          <div className="row mb-4">
            <div className="col-12">
              <SearchFilterBar
                onFilterChange={handleFilterChange}
                onReset={handleReset}
              />
            </div>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="row mb-3">
              <div className="col-12">
                <div className="alert alert-warning" role="alert">
                  <i className="ti ti-alert-circle me-2"></i>
                  {error}
                </div>
              </div>
            </div>
          )}

          {/* Indicateur de source des données */}
          {!isLoading && (
            <div className="row mb-3">
              <div className="col-12">
                <span className={`nex-service-badge ${useWordPress ? 'nex-service-badge--wp' : 'nex-service-badge--mock'}`}>
                  <i className={`ti ${useWordPress ? 'ti-database' : 'ti-code'}`}></i>
                  <span>
                    {useWordPress
                      ? 'Données chargées depuis WordPress'
                      : 'Données de test (WordPress non disponible)'}
                  </span>
                </span>
              </div>
            </div>
          )}

          <div className="row">
            {/* Grille de résultats - ProviderCards */}
            <div className="col-12">
              {/* État de chargement */}
              {isLoading ? (
                <div className="nex-service-empty">
                  <div className="spinner-border text-primary nex-service-spinner" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                  <p className="nex-service-empty__text">Chargement des prestataires...</p>
                </div>
              ) : (
                <>
              {/* Grille de ProviderCards - 4 par ligne */}
              {filteredServices.length > 0 ? (
                <div className="row nex-service-grid">
                  {filteredServices.map((service) => {
                    const hasLocationFilter = activeFilters?.locationText && activeFilters.locationText.trim() !== '';
                    const simulatedDistance = hasLocationFilter
                      ? `${(Math.random() * (activeFilters.maxZone - activeFilters.minZone) + activeFilters.minZone).toFixed(1)}km`
                      : undefined;

                    return (
                      <div key={service.id} className="col-xl-3 col-md-6 col-12">
                        <ProviderCard
                          id={service.id}
                          name={service.seller.name}
                          avatar={service.seller.avatar}
                          category={service.category}
                          location={service.seller.location}
                          distance={simulatedDistance}
                          rating={service.rating}
                          reviewCount={service.reviewCount}
                          price={service.price}
                          isTopPrestataire={service.seller.isTopPrestataire}
                          variant="variant1"
                          onFavorite={handleFavorite}
                          onClick={handleServiceClick}
                          onContact={handleContact}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="nex-service-empty">
                  <div className="nex-service-empty__icon">&#128269;</div>
                  <h3 className="nex-service-empty__title">
                    Aucun résultat trouvé
                  </h3>
                  <p className="nex-service-empty__subtitle">
                    Essayez de modifier vos critères de recherche
                  </p>
                  <button onClick={handleReset} className="nex-service-reset-btn">
                    Réinitialiser les filtres
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredServices.length > 0 && (
                <nav className="nex-service-pagination" aria-label="Pagination">
                  <button className="nex-service-pagination__btn">
                    Précédent
                  </button>
                  <button className="nex-service-pagination__btn nex-service-pagination__btn--active">
                    1
                  </button>
                  <button className="nex-service-pagination__btn nex-service-pagination__num">
                    2
                  </button>
                  <button className="nex-service-pagination__btn nex-service-pagination__num">
                    3
                  </button>
                  <button className="nex-service-pagination__btn">
                    Suivant
                  </button>
                </nav>
              )}
              </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Service;

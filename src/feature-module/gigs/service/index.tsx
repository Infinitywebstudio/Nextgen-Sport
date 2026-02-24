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
          console.log(`${services.length} prestataires chargés depuis WordPress`);
        } else {
          // Utiliser les données mockées
          setAllServices(mockServices);
          setFilteredServices(mockServices);
          console.log(`${mockServices.length} prestataires chargés (données mockées)`);
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
    console.log('Critères de filtre appliqués:', criteria);
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
    console.log('Filtres réinitialisés');
    setActiveFilters(null);
    setFilteredServices(allServices);
  };

  const handleFavorite = (serviceId: number) => {
    console.log('Service ajouté aux favoris:', serviceId);
  };

  const handleServiceClick = (serviceId: number) => {
    console.log('Service cliqué:', serviceId);
    // Rediriger vers le profil prestataire
    navigate(`/gigs/provider/${serviceId}`);
  };

  const handleContact = (serviceId: number) => {
    console.log('Contacter le prestataire du service:', serviceId);
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
      <div className="page-content" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
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
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: useWordPress ? '#dcfce7' : '#fef3c7',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: useWordPress ? '#16a34a' : '#f59e0b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className={`ti ${useWordPress ? 'ti-database' : 'ti-code'}`}></i>
                  <span>
                    {useWordPress
                      ? 'Données chargées depuis WordPress'
                      : 'Données de test (WordPress non disponible)'}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            {/* Grille de résultats - ProviderCards */}
            <div className="col-12">
              {/* État de chargement */}
              {isLoading ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                  <p style={{ marginTop: '16px', color: '#6b7280' }}>Chargement des prestataires...</p>
                </div>
              ) : (
                <>
              {/* Grille de ProviderCards - 4 par ligne */}
              {filteredServices.length > 0 ? (
                <div className="row" style={{ rowGap: '24px' }}>
                  {filteredServices.map((service) => {
                    // Si une localisation est saisie dans le filtre, afficher une distance simulée
                    // Dans une vraie implémentation, on calculerait la distance réelle via une API de géolocalisation
                    const hasLocationFilter = activeFilters?.locationText && activeFilters.locationText.trim() !== '';
                    const simulatedDistance = hasLocationFilter
                      ? `${(Math.random() * (activeFilters.maxZone - activeFilters.minZone) + activeFilters.minZone).toFixed(1)}km`
                      : undefined;

                    return (
                      <div key={service.id} className="col-xl-3 col-md-6">
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
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
                    Aucun résultat trouvé
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
                    Essayez de modifier vos critères de recherche
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '12px 24px',
                      border: 'none',
                      borderRadius: '6px',
                      backgroundColor: '#ff6961',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredServices.length > 0 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '40px',
                  gap: '8px'
                }}>
                  <button style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    color: '#374151',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    Précédent
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    border: '1px solid #ff6961',
                    borderRadius: '6px',
                    backgroundColor: '#ff6961',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    1
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    color: '#374151',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    2
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    color: '#374151',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    3
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    color: '#374151',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    Suivant
                  </button>
                </div>
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

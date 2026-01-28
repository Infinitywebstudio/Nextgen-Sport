import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import { MapPin, Star, Share2, Heart, MessageCircle } from "lucide-react";
import { fetchProviderById } from "../../../services/providerService";
import type { Provider } from "../../../services/providerService";
import { all_routes } from "../../router/all_routes";

const ProviderProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const routes = all_routes;

  useEffect(() => {
    const loadProvider = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await fetchProviderById(parseInt(id));
        setProvider(data);
      } catch (err) {
        console.error("Erreur lors du chargement du prestataire:", err);
        setError("Impossible de charger le profil");
      } finally {
        setLoading(false);
      }
    };

    loadProvider();
  }, [id]);

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  if (loading) {
    return (
      <div className="content provider-profile-page">
        <div className="container">
          <div className="loading-state">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p>Chargement du profil...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !provider) {
    return (
      <div className="content provider-profile-page">
        <div className="container">
          <div className="error-state">
            <h3>Prestataire introuvable</h3>
            <p className="text-muted mb-4">Le prestataire que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link to={routes.service} className="btn btn-primary">
              Retour à la liste des prestataires
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Convertir specialties (string avec \n) en tableau
  const specialtiesList = provider.specialties
    ? provider.specialties.split('\n').filter(s => s.trim())
    : [];

  return (
    <div className="content provider-profile-page">
      <div className="container">
        <div className="profile-content">
          {/* Main Content - 75% */}
          <div className="profile-main">
            <div className="service-detail-wrap">
              {/* 1. Présentation */}
              <div className="profile-section">
                <h3 className="section-title">Présentation</h3>
                <div className="section-content">
                  {provider.bio ? (
                    <div dangerouslySetInnerHTML={{ __html: provider.bio }} />
                  ) : (
                    <p className="text-muted">Aucune présentation disponible.</p>
                  )}
                </div>
              </div>

              {/* 2. Services proposés */}
              {specialtiesList.length > 0 && (
                <div className="profile-section">
                  <h3 className="section-title">Services proposés</h3>
                  <ul className="services-list">
                    {specialtiesList.map((specialty, index) => (
                      <li key={index}>
                        <i className="feather-check-circle"></i>
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Galerie de réalisations */}
              {provider.portfolio && provider.portfolio.length > 0 && (
                <div className="profile-section gallery-section">
                  <h3 className="section-title">
                    Réalisations <span className="gallery-count">({provider.portfolio.length})</span>
                  </h3>
                  <Slider {...gallerySettings}>
                    {provider.portfolio.map((imageUrl, index) => (
                      <div key={index} className="gallery-image">
                        <img
                          src={imageUrl}
                          alt={`Réalisation ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}

              {/* 4. Section Avis */}
              <div className="profile-section reviews-section">
                <h3 className="section-title">
                  Avis ({provider.reviewCount})
                </h3>

                {/* Résumé des notes */}
                <div className="review-summary">
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                      <div className="overall-rating">
                        <h1 className="display-3 mb-0">{provider.rating.toFixed(1)}</h1>
                        <div className="stars mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={20}
                              className={star <= provider.rating ? 'filled' : ''}
                              fill={star <= provider.rating ? '#ffc107' : 'none'}
                              color="#ffc107"
                            />
                          ))}
                        </div>
                        <p className="text-muted mb-0">{provider.reviewCount} avis</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="rating-bars">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="rating-bar">
                            <span className="rating-label">{rating} <Star size={16} fill="#ffc107" color="#ffc107" /></span>
                            <div className="progress">
                              <div className="progress-bar" style={{ width: '0%' }}></div>
                            </div>
                            <span className="rating-count">0</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Liste des avis */}
                {provider.reviewCount === 0 && (
                  <div className="no-reviews">
                    <i className="feather-message-circle"></i>
                    <p>Aucun avis pour le moment</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - 25% */}
          <div className="profile-sidebar">
            <div className="sidebar-card">
              {/* Top section */}
              <div className="sidebar-top">
                <div className="provider-header">
                  {/* Avatar */}
                  <div className="provider-avatar">
                    <img
                      src={provider.avatar}
                      alt={provider.name}
                    />
                    {provider.isTopPrestataire && (
                      <span className="top-badge">
                        Top
                      </span>
                    )}
                  </div>

                  {/* Provider Info */}
                  <div className="provider-info">
                    <h3>{provider.name}</h3>

                    <div className="info-item">
                      <MapPin size={16} />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle section */}
              <div className="sidebar-middle">
                {/* Note */}
                <div className="stat-item">
                  <div className="stat-label">Note</div>
                  <div className="stat-value rating">
                    <Star size={18} fill="#ffc107" color="#ffc107" />
                    <span className="rating-number">{provider.rating.toFixed(1)}</span>
                    <span className="rating-count">({provider.reviewCount})</span>
                  </div>
                </div>

                {/* Missions */}
                <div className="stat-item">
                  <div className="stat-label">Missions réalisées</div>
                  <div className="stat-value">{provider.missionsCount}</div>
                </div>

                {/* Tarif horaire */}
                <div className="stat-item">
                  <div className="stat-label">Tarif horaire</div>
                  <div className="stat-value price">{provider.price}€/h</div>
                </div>

                {/* Temps de réponse */}
                <div className="stat-item">
                  <div className="stat-label">Temps de réponse</div>
                  <div className="stat-value">{provider.responseTime}</div>
                </div>
              </div>

              {/* Actions section */}
              <div className="sidebar-actions">
                <button className="btn btn-primary">
                  Demander un service
                </button>
                <button className="btn btn-outline-primary">
                  <MessageCircle size={18} />
                  Envoyer un message
                </button>
              </div>

              {/* Bottom section */}
              <div className="sidebar-bottom">
                <div className="bottom-actions">
                  <button
                    className={`btn ${isFavorite ? 'active' : ''}`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                  </button>
                  <button className="btn">
                    <Share2 size={20} />
                  </button>
                </div>

                <div className="member-since">
                  Membre depuis {provider.registeredDate ? new Date(provider.registeredDate).getFullYear() : new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Star,
  Share2,
  MessageCircle,
  Play,
  User,
  TrendingUp,
  Award,
  Zap,
  Eye,
  Target,
  Calendar,
  Home,
  Crosshair,
  Loader,
} from 'lucide-react';
import { all_routes } from '../../router/all_routes';
import { fetchProviderById, type Provider } from '../../../services/providerService';
import authService from '../../../services/auth.service';
import dashboardService from '../../../services/dashboard.service';
import UpgradePrompt from '../../../components/UpgradePrompt';
import talentPlaceholder from '../../../assets/img/homepage/talent-placeholder.webp';

const strengthIcons: Record<string, React.ReactNode> = {
  eye: <Eye size={24} />,
  zap: <Zap size={24} />,
  target: <Target size={24} />,
};

type Tab = 'vue-generale' | 'highlights';

const TalentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [talent, setTalent] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('vue-generale');
  const [quotaReached, setQuotaReached] = useState(false);

  useEffect(() => {
    const loadTalent = async () => {
      if (!id) {
        setError('ID du talent manquant');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchProviderById(Number(id));
        setTalent(data);

        // Enregistrer la visite si l'utilisateur est un recruteur connecté
        if (authService.isClient()) {
          const visitResult = await dashboardService.recordVisit(Number(id));
          if (!visitResult.success && visitResult.status === 403) {
            setQuotaReached(true);
          }
        }
      } catch (err) {
        console.error('Erreur chargement profil talent:', err);
        setError('Impossible de charger le profil de ce talent.');
      } finally {
        setLoading(false);
      }
    };

    loadTalent();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="nex-tp">
        <div className="nex-tp__container">
          <div className="nex-tp__loading">
            <Loader size={48} className="nex-tp__spinner" />
            <p>Chargement du profil...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !talent) {
    return (
      <div className="nex-tp">
        <div className="nex-tp__container">
          <div className="nex-tp__loading">
            <User size={48} />
            <h2 className="nex-title">{error || 'Talent non trouvé'}</h2>
            <Link to={all_routes.searchTalents} className="nex-tp-sidebar__btn-primary" style={{ marginTop: '1rem' }}>
              Retour à la recherche
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Extraire les données du profil
  const bio = talent.bio ? talent.bio.split('\n').filter(Boolean) : ['Ce talent n\'a pas encore complété sa biographie.'];
  const specialties = talent.specialties ? talent.specialties.split('\n').filter(Boolean) : [];

  return (
    <div className="nex-tp" style={{ position: 'relative' }}>
      {quotaReached && (
        <div className="nex-feature-gate__overlay" style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UpgradePrompt reason="profile_view_limit_reached" />
        </div>
      )}
      <div className="nex-tp__container" style={quotaReached ? { filter: 'blur(6px)', pointerEvents: 'none' } : undefined}>
        <div className="nex-tp__layout">

          {/* ===== SIDEBAR ===== */}
          <aside className="nex-tp-sidebar">
            <div className="nex-tp-sidebar__card">
              {/* Avatar */}
              <div className="nex-tp-sidebar__avatar">
                <img
                  src={talent.avatar || talentPlaceholder}
                  alt={talent.name}
                  onError={(e) => { (e.target as HTMLImageElement).src = talentPlaceholder; }}
                />
              </div>

              {/* Name */}
              <h1 className="nex-tp-sidebar__name nex-title">{talent.name}</h1>

              {/* Badge */}
              {talent.isTopPrestataire && (
                <div className="nex-tp-sidebar__badge-row">
                  <span className="nex-tp-badge nex-tp-badge--elite">Élite</span>
                  {talent.rating > 0 && (
                    <span className="nex-tp-sidebar__rating">
                      <Star size={14} /> {talent.rating.toFixed(1)}
                      <span className="nex-tp-sidebar__reviews">({talent.reviewCount})</span>
                    </span>
                  )}
                </div>
              )}

              {/* Rating for non-top */}
              {!talent.isTopPrestataire && talent.rating > 0 && (
                <div className="nex-tp-sidebar__badge-row">
                  <span className="nex-tp-sidebar__rating">
                    <Star size={14} /> {talent.rating.toFixed(1)}
                    <span className="nex-tp-sidebar__reviews">({talent.reviewCount})</span>
                  </span>
                </div>
              )}

              {/* Info Items */}
              <div className="nex-tp-sidebar__info">
                {talent.location && (
                  <div className="nex-tp-sidebar__info-item">
                    <MapPin size={18} />
                    <div className="nex-tp-sidebar__info-content">
                      <span className="nex-tp-sidebar__info-label">Localisation</span>
                      <span className="nex-tp-sidebar__info-value">{talent.location}</span>
                    </div>
                  </div>
                )}
                {talent.category && (
                  <div className="nex-tp-sidebar__info-item">
                    <Crosshair size={18} />
                    <div className="nex-tp-sidebar__info-content">
                      <span className="nex-tp-sidebar__info-label">Sport</span>
                      <span className="nex-tp-sidebar__info-value">{talent.category}</span>
                    </div>
                  </div>
                )}
                {talent.registeredDate && (
                  <div className="nex-tp-sidebar__info-item">
                    <Calendar size={18} />
                    <div className="nex-tp-sidebar__info-content">
                      <span className="nex-tp-sidebar__info-label">Membre depuis</span>
                      <span className="nex-tp-sidebar__info-value">
                        {new Date(talent.registeredDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                )}
                {talent.responseTime && (
                  <div className="nex-tp-sidebar__info-item">
                    <Home size={18} />
                    <div className="nex-tp-sidebar__info-content">
                      <span className="nex-tp-sidebar__info-label">Temps de réponse</span>
                      <span className="nex-tp-sidebar__info-value">{talent.responseTime}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Specialties as tags */}
              {specialties.length > 0 && (
                <div className="nex-tp-sidebar__tags">
                  {specialties.map((spec, i) => (
                    <span key={i} className="nex-tp-sidebar__tag">#{spec.trim()}</span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="nex-tp-sidebar__actions">
                <Link to={all_routes.signUp} className="nex-tp-sidebar__btn-primary">
                  <MessageCircle size={18} /> Contacter
                </Link>
                <button
                  className="nex-tp-sidebar__btn-secondary"
                  onClick={() => navigator.clipboard?.writeText(window.location.href)}
                >
                  <Share2 size={18} /> Partager
                </button>
              </div>
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="nex-tp-main">

            {/* Tabs */}
            <div className="nex-tp-tabs">
              <button
                className={`nex-tp-tabs__btn ${activeTab === 'vue-generale' ? 'nex-tp-tabs__btn--active' : ''}`}
                onClick={() => setActiveTab('vue-generale')}
              >
                <Home size={20} /> Vue Générale
              </button>
              <button
                className={`nex-tp-tabs__btn ${activeTab === 'highlights' ? 'nex-tp-tabs__btn--active' : ''}`}
                onClick={() => setActiveTab('highlights')}
              >
                <Play size={20} /> Highlights
              </button>
            </div>

            {/* === TAB: VUE GENERALE === */}
            {activeTab === 'vue-generale' && (
              <div className="nex-tp-tab-content">

                {/* Card: À Propos */}
                <div className="nex-tp-card">
                  <h2 className="nex-tp-card__title nex-title">
                    <User size={22} /> À propos
                  </h2>
                  <div className="nex-tp-card__body">
                    {bio.map((p, i) => (
                      <p key={i} className="nex-tp-card__text">{p}</p>
                    ))}

                    {/* Stats */}
                    <div className="nex-tp-stats">
                      {talent.missionsCount > 0 && (
                        <div className="nex-tp-stats__item">
                          <TrendingUp size={20} />
                          <span className="nex-tp-stats__label">Missions</span>
                          <span className="nex-tp-stats__value">{talent.missionsCount}</span>
                        </div>
                      )}
                      {talent.rating > 0 && (
                        <div className="nex-tp-stats__item">
                          <Star size={20} />
                          <span className="nex-tp-stats__label">Note</span>
                          <span className="nex-tp-stats__value">{talent.rating.toFixed(1)}/5</span>
                        </div>
                      )}
                      {talent.reviewCount > 0 && (
                        <div className="nex-tp-stats__item">
                          <Award size={20} />
                          <span className="nex-tp-stats__label">Avis</span>
                          <span className="nex-tp-stats__value">{talent.reviewCount}</span>
                        </div>
                      )}
                      {talent.price > 0 && (
                        <div className="nex-tp-stats__item">
                          <Target size={20} />
                          <span className="nex-tp-stats__label">Tarif</span>
                          <span className="nex-tp-stats__value">{talent.price}€/h</span>
                        </div>
                      )}
                    </div>

                    {/* Strengths from specialties */}
                    {specialties.length > 0 && (
                      <div className="nex-tp-strengths">
                        <h3 className="nex-tp-strengths__title">
                          <Zap size={20} /> Points Forts
                        </h3>
                        <div className="nex-tp-strengths__grid">
                          {specialties.slice(0, 3).map((spec, i) => (
                            <div key={i} className="nex-tp-strengths__card">
                              <div className="nex-tp-strengths__icon">
                                {strengthIcons[['eye', 'zap', 'target'][i] || 'zap']}
                              </div>
                              <h4>{spec.trim()}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card: Portfolio */}
                {talent.portfolio && talent.portfolio.length > 0 && (
                  <div className="nex-tp-card">
                    <h2 className="nex-tp-card__title nex-title">
                      <Eye size={22} /> Portfolio
                    </h2>
                    <div className="nex-tp-card__body">
                      <div className="nex-tp-strengths__grid">
                        {talent.portfolio.map((url, i) => (
                          <div key={i} className="nex-tp-video-card">
                            <img src={url} alt={`Portfolio ${i + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* === TAB: HIGHLIGHTS === */}
            {activeTab === 'highlights' && (
              <div className="nex-tp-tab-content">
                <div className="nex-tp-videos-header">
                  <h2 className="nex-title">Vidéos Highlights</h2>
                </div>
                <div className="nex-search-results__empty" style={{ padding: '3rem 0' }}>
                  <Play size={48} />
                  <h3 className="nex-title">Aucune vidéo pour le moment</h3>
                  <p>Ce talent n'a pas encore ajouté de vidéos highlights.</p>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;

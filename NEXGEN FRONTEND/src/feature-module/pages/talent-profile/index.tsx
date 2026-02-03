import { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import { all_routes } from '../../router/all_routes';
import talentPlaceholder from '../../../assets/img/homepage/talent-placeholder.webp';

// TODO: Remplacer par fetchProviderById(id) quand l'API sera prête
const mockTalent = {
  name: 'Alexandre Dubois',
  firstName: 'Alexandre',
  avatar: talentPlaceholder,
  category: 'Football',
  position: 'Milieu Offensif',
  location: 'France',
  club: 'FC Avenir Pro',
  birthDate: '15 mars 2004',
  bio: [
    "Natif de la région, j'ai toujours eu une passion pour le football et le jeu créatif. J'ai été repéré dès l'âge de 12 ans lors d'un tournoi régional, ce qui m'a permis d'intégrer le centre de formation où j'ai rapidement progressé en surclassant mes catégories d'âge.",
    "Mon style de jeu est inspiré des ailiers modernes : je suis percutant, capable de repiquer dans l'axe pour frapper ou de déborder pour centrer. J'aime décrocher pour organiser le jeu et casser les lignes par la passe ou le dribble.",
    "En dehors du terrain, je suis quelqu'un de calme et déterminé. Je prends mon rôle de leader au sérieux et je m'efforce d'être un exemple pour mes coéquipiers.",
  ],
  physicalStats: {
    age: '19 ans',
    height: '182 cm',
    weight: '74 kg',
    foot: 'Gaucher',
  },
  seasonStats: {
    season: '2023/24',
    matches: 24,
    goals: 8,
    assists: 12,
    minutes: 1840,
  },
  strengths: [
    { label: 'Vision de jeu', detail: 'Jeu long & court', icon: 'eye' },
    { label: 'Accélération', detail: 'Explosivité sur 10m', icon: 'zap' },
    { label: 'Finition', detail: 'Efficace face au but', icon: 'target' },
  ],
  timeline: [
    { period: '2023 - Présent', club: 'FC Avenir Pro', role: 'Équipe Réserve / Groupe Pro — Contrat Stagiaire' },
    { period: '2020 - 2023', club: 'Académie Espoir', role: 'Formation U15 - U19 Nationaux' },
    { period: '2015 - 2020', club: 'CS Municipal', role: 'École de foot & Pré-formation' },
  ],
  achievements: [
    'Capitaine U19 Nationaux (Saison 2023)',
    'Meilleur Passeur du championnat (12 passes)',
    'Sélection Régionale U16',
    'Vainqueur Coupe Régionale 2022',
  ],
  tags: ['#Explosif', '#VisionDeJeu', '#Dribbleur', '#Leader'],
  rating: 4.7,
  reviewCount: 23,
  isTopPrestataire: true,
  videos: [
    { id: 1, title: 'Saison 2024 - Highlights', duration: '10:32' },
    { id: 2, title: 'But incroyable vs Lyon U19', duration: '0:45' },
    { id: 3, title: 'Skills & Dribbles 2023', duration: '4:15' },
    { id: 4, title: 'Performance vs PSG Academy', duration: '8:10' },
    { id: 5, title: 'Entraînement finition', duration: '2:30' },
    { id: 6, title: 'Interview après match', duration: '1:15' },
    { id: 7, title: 'Coupe Gambardella - 1/8', duration: '5:45' },
    { id: 8, title: 'Mes 5 plus beaux buts', duration: '3:20' },
  ],
};

const strengthIcons: Record<string, React.ReactNode> = {
  eye: <Eye size={24} />,
  zap: <Zap size={24} />,
  target: <Target size={24} />,
};

type Tab = 'vue-generale' | 'highlights';

const TalentProfile = () => {
  const talent = mockTalent;
  const [activeTab, setActiveTab] = useState<Tab>('vue-generale');

  return (
    <div className="nex-tp">
      <div className="nex-tp__container">
        <div className="nex-tp__layout">

          {/* ===== SIDEBAR ===== */}
          <aside className="nex-tp-sidebar">
            <div className="nex-tp-sidebar__card">
              {/* Avatar */}
              <div className="nex-tp-sidebar__avatar">
                <img src={talent.avatar} alt={talent.name} />
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

              {/* Info Items */}
              <div className="nex-tp-sidebar__info">
                <div className="nex-tp-sidebar__info-item">
                  <MapPin size={18} />
                  <div className="nex-tp-sidebar__info-content">
                    <span className="nex-tp-sidebar__info-label">Pays</span>
                    <span className="nex-tp-sidebar__info-value">{talent.location}</span>
                  </div>
                </div>
                <div className="nex-tp-sidebar__info-item">
                  <Crosshair size={18} />
                  <div className="nex-tp-sidebar__info-content">
                    <span className="nex-tp-sidebar__info-label">Position</span>
                    <span className="nex-tp-sidebar__info-value">{talent.position}</span>
                  </div>
                </div>
                <div className="nex-tp-sidebar__info-item">
                  <Calendar size={18} />
                  <div className="nex-tp-sidebar__info-content">
                    <span className="nex-tp-sidebar__info-label">Date de naissance</span>
                    <span className="nex-tp-sidebar__info-value">{talent.birthDate}</span>
                  </div>
                </div>
                <div className="nex-tp-sidebar__info-item">
                  <Home size={18} />
                  <div className="nex-tp-sidebar__info-content">
                    <span className="nex-tp-sidebar__info-label">Club actuel</span>
                    <span className="nex-tp-sidebar__info-value">{talent.club}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="nex-tp-sidebar__tags">
                {talent.tags.map((tag, i) => (
                  <span key={i} className="nex-tp-sidebar__tag">{tag}</span>
                ))}
              </div>

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
                    {talent.bio.map((p, i) => (
                      <p key={i} className="nex-tp-card__text">{p}</p>
                    ))}

                    {/* Physical Stats */}
                    <div className="nex-tp-stats">
                      <div className="nex-tp-stats__item">
                        <Calendar size={20} />
                        <span className="nex-tp-stats__label">Âge</span>
                        <span className="nex-tp-stats__value">{talent.physicalStats.age}</span>
                      </div>
                      <div className="nex-tp-stats__item">
                        <TrendingUp size={20} />
                        <span className="nex-tp-stats__label">Taille</span>
                        <span className="nex-tp-stats__value">{talent.physicalStats.height}</span>
                      </div>
                      <div className="nex-tp-stats__item">
                        <Zap size={20} />
                        <span className="nex-tp-stats__label">Poids</span>
                        <span className="nex-tp-stats__value">{talent.physicalStats.weight}</span>
                      </div>
                      <div className="nex-tp-stats__item">
                        <Target size={20} />
                        <span className="nex-tp-stats__label">Pied</span>
                        <span className="nex-tp-stats__value">{talent.physicalStats.foot}</span>
                      </div>
                    </div>

                    {/* Season Stats */}
                    <div className="nex-tp-season">
                      <h3 className="nex-tp-season__title">Saison {talent.seasonStats.season}</h3>
                      <div className="nex-tp-season__grid">
                        <div className="nex-tp-season__stat">
                          <span className="nex-tp-season__value">{talent.seasonStats.matches}</span>
                          <span className="nex-tp-season__label">Matchs</span>
                        </div>
                        <div className="nex-tp-season__stat">
                          <span className="nex-tp-season__value">{talent.seasonStats.goals}</span>
                          <span className="nex-tp-season__label">Buts</span>
                        </div>
                        <div className="nex-tp-season__stat">
                          <span className="nex-tp-season__value">{talent.seasonStats.assists}</span>
                          <span className="nex-tp-season__label">Passes D.</span>
                        </div>
                        <div className="nex-tp-season__stat">
                          <span className="nex-tp-season__value">{talent.seasonStats.minutes}</span>
                          <span className="nex-tp-season__label">Min. jouées</span>
                        </div>
                      </div>
                    </div>

                    {/* Strengths */}
                    <div className="nex-tp-strengths">
                      <h3 className="nex-tp-strengths__title">
                        <Zap size={20} /> Points Forts Clés
                      </h3>
                      <div className="nex-tp-strengths__grid">
                        {talent.strengths.map((s, i) => (
                          <div key={i} className="nex-tp-strengths__card">
                            <div className="nex-tp-strengths__icon">
                              {strengthIcons[s.icon]}
                            </div>
                            <h4>{s.label}</h4>
                            <p>{s.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card: Parcours & Clubs */}
                <div className="nex-tp-card">
                  <h2 className="nex-tp-card__title nex-title">
                    <TrendingUp size={22} /> Parcours & Clubs
                  </h2>
                  <div className="nex-tp-card__body">
                    <div className="nex-tp-timeline">
                      {talent.timeline.map((item, i) => (
                        <div key={i} className="nex-tp-timeline__item">
                          <div className="nex-tp-timeline__marker" />
                          <div className="nex-tp-timeline__content">
                            <span className="nex-tp-timeline__period">{item.period}</span>
                            <h4 className="nex-tp-timeline__club">{item.club}</h4>
                            <p className="nex-tp-timeline__role">{item.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card: Palmarès */}
                <div className="nex-tp-card">
                  <h2 className="nex-tp-card__title nex-title">
                    <Award size={22} /> Palmarès
                  </h2>
                  <div className="nex-tp-card__body">
                    <div className="nex-tp-achievements">
                      {talent.achievements.map((item, i) => (
                        <div key={i} className="nex-tp-achievements__item">
                          <div className="nex-tp-achievements__icon">
                            <Award size={20} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* === TAB: HIGHLIGHTS === */}
            {activeTab === 'highlights' && (
              <div className="nex-tp-tab-content">
                <div className="nex-tp-videos-header">
                  <h2 className="nex-title">Vidéos Highlights</h2>
                  <span className="nex-tp-videos-header__count">{talent.videos.length} vidéos</span>
                </div>
                <div className="nex-tp-videos-grid">
                  {talent.videos.map((video) => (
                    <div key={video.id} className="nex-tp-video-card">
                      <div className="nex-tp-video-card__thumb">
                        <div className="nex-tp-video-card__overlay">
                          <Play size={40} />
                        </div>
                        <span className="nex-tp-video-card__duration">{video.duration}</span>
                      </div>
                    </div>
                  ))}
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

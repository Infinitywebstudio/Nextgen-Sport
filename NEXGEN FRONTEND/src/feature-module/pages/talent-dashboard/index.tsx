import React from 'react';
import { Link } from 'react-router-dom';
import './TalentDashboard.scss';

// --- Sub-components for better structure ---

const Sidebar: React.FC = () => (
    <aside className="sidebar">
        <div className="sidebar-header">
            <h2>NEXGEN <span>SPORT</span></h2>
        </div>
        <nav className="sidebar-nav">
            <ul>
                <li className="active">
                    <Link to="#overview">
                        <i className="fas fa-th-large"></i>
                        <span>Vue d'ensemble</span>
                    </Link>
                </li>
                <li>
                    <Link to="#profile">
                        <i className="fas fa-user"></i>
                        <span>Mon Profil</span>
                    </Link>
                </li>
                <li>
                    <Link to="#skills">
                        <i className="fas fa-star"></i>
                        <span>Compétences</span>
                    </Link>
                </li>
                <li>
                    <Link to="#experience">
                        <i className="fas fa-trophy"></i>
                        <span>Parcours</span>
                    </Link>
                </li>
                <li>
                    <Link to="#portfolio">
                        <i className="fas fa-folder-open"></i>
                        <span>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link to="#opportunities">
                        <i className="fas fa-briefcase"></i>
                        <span>Opportunités</span>
                    </Link>
                </li>
                <li>
                    <Link to="#settings">
                        <i className="fas fa-cog"></i>
                        <span>Paramètres</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="sidebar-footer">
            <Link to="/" className="btn-back">
                <i className="fas fa-arrow-left"></i> Retour au site
            </Link>
        </div>
    </aside>
);

const Header: React.FC = () => (
    <header className="dashboard-header">
        <div className="header-left">
            <h1>Tableau de Bord</h1>
            <p>Bienvenue, <strong>Amadou DIALLO</strong></p>
        </div>
        <div className="header-right">
            <button className="notification-btn">
                <i className="fas fa-bell"></i>
                <span className="notification-badge">3</span>
            </button>
            <div className="user-profile-header">
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=100&h=100&fit=crop" alt="Profile" />
                <div className="user-info">
                    <span className="user-name">Amadou DIALLO</span>
                    <span className="user-role">Attaquant • Football</span>
                </div>
            </div>
        </div>
    </header>
);

const StatsOverview: React.FC = () => (
    <section className="stats-overview">
        <div className="stat-card">
            <div className="stat-icon blue">
                <i className="fas fa-eye"></i>
            </div>
            <div className="stat-content">
                <h3>1,247</h3>
                <p>Vues du Profil</p>
                <span className="stat-change positive">+12% ce mois</span>
            </div>
        </div>
        <div className="stat-card">
            <div className="stat-icon green">
                <i className="fas fa-users"></i>
            </div>
            <div className="stat-content">
                <h3>86</h3>
                <p>Abonnés</p>
                <span className="stat-change positive">+8 cette semaine</span>
            </div>
        </div>
        <div className="stat-card">
            <div className="stat-icon orange">
                <i className="fas fa-briefcase"></i>
            </div>
            <div className="stat-content">
                <h3>5</h3>
                <p>Opportunités</p>
                <span className="stat-change">2 en attente</span>
            </div>
        </div>
        <div className="stat-card">
            <div className="stat-icon red">
                <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-content">
                <h3>92%</h3>
                <p>Profil Complété</p>
                <span className="stat-change">Presque fini!</span>
            </div>
        </div>
    </section>
);

const ProfileCard: React.FC = () => (
    <div className="dashboard-card profile-card">
        <div className="card-header">
            <h2><i className="fas fa-user"></i> Profil Talent</h2>
            <button className="btn-edit"><i className="fas fa-edit"></i> Modifier</button>
        </div>
        <div className="card-body">
            <div className="profile-main">
                <div className="profile-avatar">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150&h=150&fit=crop" alt="Amadou DIALLO" />
                    <span className="status-badge online">En ligne</span>
                </div>
                <div className="profile-details">
                    <h3>Amadou DIALLO</h3>
                    <p className="profile-position">Attaquant • Football Masculin</p>
                    <p className="profile-location"><i className="fas fa-map-marker-alt"></i> Paris, France</p>
                    <div className="profile-meta">
                        <span><i className="fas fa-birthday-cake"></i> 19 ans</span>
                        <span><i className="fas fa-medal"></i> Semi-professionnel</span>
                        <span><i className="fas fa-running"></i> Pied préféré: Droit</span>
                    </div>
                </div>
            </div>
            <div className="profile-bio">
                <h4>À propos</h4>
                <p>Attaquant polyvalent avec une excellente vision du jeu. Passionné et déterminé à progresser vers le niveau professionnel.</p>
            </div>
        </div>
    </div>
);

const SkillsCard: React.FC = () => (
     <div className="dashboard-card skills-card">
        <div className="card-header">
            <h2><i className="fas fa-star"></i> Compétences</h2>
            <button className="btn-edit"><i className="fas fa-edit"></i></button>
        </div>
        <div className="card-body">
            {/* Placeholder for skills data */}
            {[
                { name: 'Finition', value: 88 },
                { name: 'Vitesse', value: 92 },
                { name: 'Dribble', value: 85 },
                { name: 'Passes', value: 78 },
                { name: 'Vision de jeu', value: 82 },
                { name: 'Condition physique', value: 90 },
            ].map(skill => (
                <div className="skill-item" key={skill.name}>
                    <div className="skill-label">
                        <span>{skill.name}</span>
                        <strong>{skill.value}%</strong>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.value}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const PerformanceCard: React.FC = () => (
    <div className="dashboard-card stats-card">
        <div className="card-header">
            <h2><i className="fas fa-chart-bar"></i> Statistiques de Performance</h2>
            <select className="period-select">
                <option>Cette saison</option>
                <option>Ce mois</option>
                <option>Cette année</option>
            </select>
        </div>
        <div className="card-body">
            <div className="stats-grid">
                <div className="stat-box">
                    <i className="fas fa-futbol"></i>
                    <h3>24</h3>
                    <p>Matchs joués</p>
                </div>
                <div className="stat-box highlight">
                    <i className="fas fa-bullseye"></i>
                    <h3>18</h3>
                    <p>Buts marqués</p>
                </div>
                <div className="stat-box">
                    <i className="fas fa-hands-helping"></i>
                    <h3>7</h3>
                    <p>Passes décisives</p>
                </div>
                <div className="stat-box">
                    <i className="fas fa-clock"></i>
                    <h3>1,890</h3>
                    <p>Minutes jouées</p>
                </div>
            </div>
            <div className="performance-chart">
                {/* Canvas will be replaced by a chart component later */}
                <p>Performance Chart Placeholder</p>
            </div>
        </div>
    </div>
);

const ActivityCard: React.FC = () => (
    <div className="dashboard-card activity-card">
        <div className="card-header">
            <h2><i className="fas fa-history"></i> Activité Récente</h2>
        </div>
        <div className="card-body">
             {/* Placeholder for activity data */}
            <div className="activity-item">
                <div className="activity-icon blue"><i className="fas fa-trophy"></i></div>
                <div className="activity-content"><p><strong>Nouveau match ajouté</strong></p><span>Match contre FC Lyon - 2 buts marqués</span><p className="activity-time">Il y a 2 jours</p></div>
            </div>
            <div className="activity-item">
                <div className="activity-icon green"><i className="fas fa-user-plus"></i></div>
                <div className="activity-content"><p><strong>Nouvel abonné</strong></p><span>Agent sportif - Paris FC</span><p className="activity-time">Il y a 3 jours</p></div>
            </div>
            <div className="activity-item">
                <div className="activity-icon orange"><i className="fas fa-video"></i></div>
                <div className="activity-content"><p><strong>Vidéo ajoutée</strong></p><span>Highlights - Match du 15 novembre</span><p className="activity-time">Il y a 5 jours</p></div>
            </div>
        </div>
    </div>
);

const ExperienceCard: React.FC = () => (
    <div className="dashboard-card experience-card">
        <div className="card-header">
            <h2><i className="fas fa-trophy"></i> Parcours & Expériences</h2>
            <button className="btn-edit"><i className="fas fa-plus"></i> Ajouter</button>
        </div>
        <div className="card-body">
            <div className="timeline">
                {/* Placeholder for timeline data */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content"><h4>Paris FC - Équipe Réserve</h4><p className="timeline-period">Sept 2024 - Aujourd'hui</p><p>Attaquant principal • 18 buts en 24 matchs</p><div className="timeline-tags"><span className="tag">Semi-professionnel</span><span className="tag">Championnat National 3</span></div></div>
                </div>
                 <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content"><h4>FC Créteil - U19</h4><p className="timeline-period">Jan 2023 - Août 2024</p><p>Attaquant • 32 buts en 45 matchs</p><div className="timeline-tags"><span className="tag">Formation</span><span className="tag">Champion régional</span></div></div>
                </div>
            </div>
        </div>
    </div>
);

const PortfolioCard: React.FC = () => (
    <div className="dashboard-card portfolio-card">
        <div className="card-header">
            <h2><i className="fas fa-folder-open"></i> Portfolio Vidéo</h2>
            <button className="btn-edit"><i className="fas fa-upload"></i> Upload</button>
        </div>
        <div className="card-body">
            <div className="portfolio-grid">
                 {/* Placeholder for portfolio data */}
                <div className="portfolio-item"><div className="portfolio-thumbnail"><img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&h=200&fit=crop" alt="Video 1" /><div className="play-overlay"><i className="fas fa-play"></i></div></div><p>Highlights - Saison 2024/25</p></div>
                <div className="portfolio-item"><div className="portfolio-thumbnail"><img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=200&fit=crop" alt="Video 2" /><div className="play-overlay"><i className="fas fa-play"></i></div></div><p>Match vs FC Lyon (2 buts)</p></div>
                <div className="portfolio-item add-new"><i className="fas fa-plus"></i><p>Ajouter une vidéo</p></div>
            </div>
        </div>
    </div>
);

const OpportunitiesCard: React.FC = () => (
     <div className="dashboard-card opportunities-card">
        <div className="card-header">
            <h2><i className="fas fa-briefcase"></i> Opportunités</h2>
            <span className="badge">3 nouvelles</span>
        </div>
        <div className="card-body">
            {/* Placeholder for opportunities data */}
            <div className="opportunity-item">
                <div className="opportunity-logo"><i className="fas fa-building"></i></div>
                <div className="opportunity-content"><h4>Essai - Stade de Reims</h4><p>Invitation pour un essai avec l'équipe réserve</p><span className="opportunity-date"><i className="far fa-calendar"></i> 15 Déc 2025</span></div>
                <div className="opportunity-actions"><button className="btn-accept"><i className="fas fa-check"></i></button><button className="btn-decline"><i className="fas fa-times"></i></button></div>
            </div>
             <div className="opportunity-item">
                <div className="opportunity-logo"><i className="fas fa-handshake"></i></div>
                <div className="opportunity-content"><h4>Contact Agent - Sport Management Pro</h4><p>Agent sportif souhaite vous rencontrer</p><span className="opportunity-date"><i className="far fa-calendar"></i> En attente</span></div>
                <div className="opportunity-actions"><button className="btn-accept"><i className="fas fa-check"></i></button><button className="btn-decline"><i className="fas fa-times"></i></button></div>
            </div>
        </div>
    </div>
);


// --- Main Page Component ---

const TalentDashboardPage: React.FC = () => {
    return (
        <div className="dashboard-body">
            <Sidebar />
            <main className="dashboard-main">
                <Header />
                <StatsOverview />
                <div className="dashboard-grid">
                    <ProfileCard />
                    <SkillsCard />
                    <PerformanceCard />
                    <ActivityCard />
                    <ExperienceCard />
                    <PortfolioCard />
                    <OpportunitiesCard />
                </div>
            </main>
        </div>
    );
};

export default TalentDashboardPage;

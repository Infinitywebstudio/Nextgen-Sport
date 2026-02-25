import { useEffect, useState } from 'react';
import authService from '../../../services/auth.service';
import dashboardService, {
  type TalentStats,
  type TalentProfileData,
  type PortfolioImage,
} from '../../../services/dashboard.service';
import SubscriptionStatusCard from '../../../components/SubscriptionStatusCard';
import FeatureGate from '../../../components/FeatureGate';
import StatsOverview from './components/StatsOverview';
import ProfileCard from './components/ProfileCard';
import SkillsCard from './components/SkillsCard';
import PerformanceStats from './components/PerformanceStats';
import RecentActivity from './components/RecentActivity';
import ExperienceTimeline from './components/ExperienceTimeline';
import PortfolioGrid from './components/PortfolioGrid';
import OpportunitiesCard from './components/OpportunitiesCard';
import './TalentDashboard.scss';

const DEFAULT_STATS: TalentStats = {
  profile_views: 0,
  profile_completion: 0,
  follower_count: 0,
  opportunities: 0,
  matches_played: 0,
  goals: 0,
  assists: 0,
  rating: 0,
  minutes_played: 0,
};

const DEFAULT_PROFILE: TalentProfileData = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  sport: '',
  position: '',
  bio: '',
  location: '',
  height: '',
  weight: '',
  preferred_foot: '',
  portfolio_urls: '',
  portfolio_gallery: [],
  skills: [],
  avatar_url: '',
  profile_post_id: null,
};

const TalentDashboard = () => {
  const user = authService.getUser();
  const firstName = user?.name?.split(' ')[0] || 'Talent';

  const [stats, setStats] = useState<TalentStats>(DEFAULT_STATS);
  const [profile, setProfile] = useState<TalentProfileData>(DEFAULT_PROFILE);
  const [gallery, setGallery] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [statsResult, profileResult] = await Promise.all([
        dashboardService.getTalentStats(),
        dashboardService.getTalentProfile(),
      ]);

      if (statsResult.success && statsResult.data) {
        setStats(statsResult.data);
      }
      if (profileResult.success && profileResult.data) {
        setProfile(profileResult.data);
        setGallery(profileResult.data.portfolio_gallery || []);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <h1>Chargement...</h1>
            <p>Préparation de votre espace</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 80 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-main">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Bienvenue, {firstName}</h1>
          <p>Voici un aperçu de votre activité</p>
        </div>
        <div className="header-right">
          <div className="user-profile-header">
            <img
              src={profile.avatar_url || '/assets/img/default-avatar.png'}
              alt={firstName}
            />
            <div className="user-info">
              <span className="user-name">{profile.first_name} {profile.last_name}</span>
              <span className="user-role">Talent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <FeatureGate feature="stats_access" blurred>
        <StatsOverview stats={stats} loading={loading} />
      </FeatureGate>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Profile Card - Full width */}
        <ProfileCard profile={profile} />

        {/* Performance Stats - Left column */}
        <PerformanceStats stats={stats} />

        {/* Skills Card - Right column (spans 2 rows) */}
        <SkillsCard skills={profile.skills} />

        {/* Recent Activity - Left column */}
        <RecentActivity />

        {/* Experience Timeline - Full width */}
        <ExperienceTimeline />

        {/* Portfolio Grid - Full width */}
        <PortfolioGrid gallery={gallery} onGalleryUpdate={setGallery} />

        {/* Opportunities - Full width */}
        <OpportunitiesCard />
      </div>

      {/* Subscription Status */}
      <div style={{ padding: '0 32px 32px' }}>
        <SubscriptionStatusCard />
      </div>
    </div>
  );
};

export default TalentDashboard;

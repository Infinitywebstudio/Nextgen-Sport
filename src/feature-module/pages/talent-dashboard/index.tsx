import { useEffect, useState } from 'react';
import authService from '../../../services/auth.service';
import dashboardService, {
  type TalentStats,
  type TalentProfileData,
  type PortfolioImage,
  type ActivityItem,
  type ExperienceItem,
  type OpportunityItem,
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
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [opportunities, setOpportunities] = useState<OpportunityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [extraLoading, setExtraLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Primary data (stats + profile)
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

      // Secondary data (activity, experience, opportunities) - loaded in parallel after
      const [activityResult, experienceResult, opportunitiesResult] = await Promise.all([
        dashboardService.getTalentActivity(),
        dashboardService.getTalentExperience(),
        dashboardService.getTalentOpportunities(),
      ]);

      if (activityResult.success && activityResult.data) {
        setActivities(activityResult.data);
      }
      if (experienceResult.success && experienceResult.data) {
        setExperiences(experienceResult.data);
      }
      if (opportunitiesResult.success && opportunitiesResult.data) {
        setOpportunities(opportunitiesResult.data);
      }

      setExtraLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="nex-dash-page">
        <div className="nex-dash-page__header">
          <h1 className="nex-dash-page__title">Dashboard</h1>
          <p className="nex-dash-page__subtitle">Préparation de votre espace...</p>
        </div>
        <div className="nex-dash-card">
          <div className="nex-dash-card__body" style={{ textAlign: 'center', padding: 60 }}>
            <div className="spinner-border" role="status" style={{ color: '#EE2731', width: '2.5rem', height: '2.5rem' }}>
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3 text-muted">Chargement de vos données...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nex-dash-page">
      {/* Header */}
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Bienvenue, {firstName}</h1>
        <p className="nex-dash-page__subtitle">Voici un aperçu de votre activité</p>
      </div>

      {/* Stats Overview */}
      <FeatureGate feature="stats_access" blurred>
        <StatsOverview stats={stats} loading={loading} />
      </FeatureGate>

      {/* Profile Card - Full width */}
      <ProfileCard profile={profile} />

      {/* Dashboard Grid - 2 column layout */}
      <div className="td-grid">
        {/* Left column */}
        <PerformanceStats stats={stats} />
        <RecentActivity activities={activities} loading={extraLoading} />

        {/* Right column - skills spans 2 rows */}
        <SkillsCard skills={profile.skills} />
      </div>

      {/* Full-width cards */}
      <ExperienceTimeline experiences={experiences} loading={extraLoading} onUpdate={setExperiences} />
      <PortfolioGrid gallery={gallery} onGalleryUpdate={setGallery} />
      <OpportunitiesCard
        opportunities={opportunities}
        loading={extraLoading}
        onUpdate={setOpportunities}
      />

      {/* Subscription Status */}
      <SubscriptionStatusCard />
    </div>
  );
};

export default TalentDashboard;

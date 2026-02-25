import { Link } from 'react-router-dom';
import { all_routes } from '../../../router/all_routes';
import type { TalentProfileData } from '../../../../services/dashboard.service';

interface ProfileCardProps {
  profile: TalentProfileData;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const fullName = `${profile.first_name} ${profile.last_name}`.trim() || 'Talent';

  return (
    <div className="dashboard-card profile-card">
      <div className="card-header">
        <h2><i className="ti ti-user" /> Profil</h2>
        <Link to={all_routes.talentMyProfile} className="btn-edit">
          <i className="ti ti-edit" /> Modifier
        </Link>
      </div>
      <div className="card-body">
        <div className="profile-main">
          <div className="profile-avatar">
            <img
              src={profile.avatar_url || '/assets/img/default-avatar.png'}
              alt={fullName}
            />
            <span className="status-badge">Actif</span>
          </div>
          <div className="profile-details">
            <h3>{fullName}</h3>
            {profile.position && <p className="profile-position">{profile.position}</p>}
            {profile.location && (
              <p className="profile-location">
                <i className="ti ti-map-pin" /> {profile.location}
              </p>
            )}
            <div className="profile-meta">
              {profile.sport && (
                <span><i className="ti ti-ball-football" /> {profile.sport}</span>
              )}
              {profile.height && (
                <span><i className="ti ti-ruler-2" /> {profile.height} cm</span>
              )}
              {profile.weight && (
                <span><i className="ti ti-weight" /> {profile.weight} kg</span>
              )}
              {profile.preferred_foot && (
                <span><i className="ti ti-shoe" /> Pied {profile.preferred_foot}</span>
              )}
            </div>
          </div>
        </div>
        {profile.bio && (
          <div className="profile-bio">
            <h4>Biographie</h4>
            <p>{profile.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

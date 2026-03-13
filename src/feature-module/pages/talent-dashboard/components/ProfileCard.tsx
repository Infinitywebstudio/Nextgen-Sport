import { Link } from 'react-router-dom';
import { all_routes } from '../../../router/all_routes';
import type { TalentProfileData } from '../../../../services/dashboard.service';

interface ProfileCardProps {
  profile: TalentProfileData;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const fullName = `${profile.first_name} ${profile.last_name}`.trim() || 'Talent';

  return (
    <div className="nex-dash-card td-profile-card">
      <div className="nex-dash-card__header">
        <h3 className="nex-dash-card__title"><i className="ti ti-user" /> Profil</h3>
        <Link to={all_routes.talentMyProfile} className="nex-dash-btn nex-dash-btn--outline nex-dash-btn--sm">
          <i className="ti ti-edit" /> Modifier
        </Link>
      </div>
      <div className="nex-dash-card__body">
        <div className="td-profile-main">
          <div className="td-profile-avatar">
            <img
              src={profile.avatar_url || '/assets/img/default-avatar.png'}
              alt={fullName}
            />
            <span className="td-profile-avatar__badge">Actif</span>
          </div>
          <div className="td-profile-details">
            <h3>{fullName}</h3>
            {profile.position && <p className="td-profile-details__position">{profile.position}</p>}
            {profile.location && (
              <p className="td-profile-details__location">
                <i className="ti ti-map-pin" /> {profile.location}
              </p>
            )}
            <div className="td-profile-meta">
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
          <div className="td-profile-bio">
            <h4>Biographie</h4>
            <p>{profile.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

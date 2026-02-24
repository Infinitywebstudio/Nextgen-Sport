import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import dashboardService, { type TalentProfileData } from '../../../services/dashboard.service';
import ImageWithBasePath from '../../../core/img';

interface ProfileField {
  key: keyof TalentProfileData;
  label: string;
  icon: string;
}

const profileFields: ProfileField[] = [
  { key: 'avatar_url', label: 'Photo de profil', icon: 'fa-camera' },
  { key: 'bio', label: 'Biographie', icon: 'fa-pen' },
  { key: 'sport', label: 'Sport pratique', icon: 'fa-futbol' },
  { key: 'position', label: 'Poste / Position', icon: 'fa-location-crosshairs' },
  { key: 'height', label: 'Taille', icon: 'fa-ruler-vertical' },
  { key: 'weight', label: 'Poids', icon: 'fa-weight-scale' },
  { key: 'location', label: 'Localisation', icon: 'fa-map-marker-alt' },
  { key: 'phone', label: 'Telephone', icon: 'fa-phone' },
];

const ProfileIncomplete = () => {
  const [profile, setProfile] = useState<TalentProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await dashboardService.getTalentProfile();
        if (response.success && response.data) {
          setProfile(response.data);
        }
      } catch {
        // Silently fail, show default state
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const isFieldComplete = (field: ProfileField): boolean => {
    if (!profile) return false;
    const value = profile[field.key];
    if (Array.isArray(value)) return value.length > 0;
    return !!value && String(value).trim() !== '';
  };

  const completedCount = profile
    ? profileFields.filter((f) => isFieldComplete(f)).length
    : 0;
  const completionPercent = Math.round((completedCount / profileFields.length) * 100);

  const progressColor =
    completionPercent >= 80
      ? '#8fc92f'
      : completionPercent >= 50
        ? '#f87028'
        : '#ff3131';

  if (loading) {
    return (
      <div className="error-wrapper">
        <div className="error-item">
          <div className="text-center py-5">
            <div className="spinner-border" style={{ color: '#4bc3b9' }} role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3 text-muted">Chargement de votre profil...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="error-wrapper">
      <div className="error-item">
        <div className="row w-100">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="error-content text-center">
              <div className="error-img">
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4bc3b9 0%, #3aa89f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <i
                    className="fa-solid fa-user-pen"
                    style={{ fontSize: 48, color: '#fff' }}
                  />
                </div>
              </div>
              <div className="error-info">
                <h2>Completez votre profil</h2>
                <p>
                  Pour etre visible par les recruteurs et maximiser vos chances,
                  completez votre profil talent.
                </p>

                {/* Barre de progression */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Progression</span>
                    <span className="fw-bold" style={{ color: progressColor }}>
                      {completionPercent}%
                    </span>
                  </div>
                  <div
                    className="progress"
                    style={{ height: 10, borderRadius: 5 }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${completionPercent}%`,
                        backgroundColor: progressColor,
                        borderRadius: 5,
                        transition: 'width 0.5s ease-in-out',
                      }}
                    />
                  </div>
                </div>

                {/* Checklist */}
                <ul className="list-unstyled text-start mb-4">
                  {profileFields.map((field) => {
                    const complete = isFieldComplete(field);
                    return (
                      <li
                        key={field.key}
                        className="d-flex align-items-center py-2 px-3 mb-2 rounded"
                        style={{
                          backgroundColor: complete
                            ? 'rgba(143, 201, 47, 0.08)'
                            : 'rgba(248, 112, 40, 0.08)',
                          border: `1px solid ${complete ? 'rgba(143, 201, 47, 0.2)' : 'rgba(248, 112, 40, 0.2)'}`,
                        }}
                      >
                        <i
                          className={`fa-solid ${complete ? 'fa-circle-check' : 'fa-circle-xmark'} me-3`}
                          style={{
                            color: complete ? '#8fc92f' : '#f87028',
                            fontSize: 18,
                          }}
                        />
                        <i
                          className={`fa-solid ${field.icon} me-2`}
                          style={{ color: '#666', width: 20, textAlign: 'center' }}
                        />
                        <span
                          style={{
                            color: complete ? '#555' : '#333',
                            fontWeight: complete ? 400 : 500,
                          }}
                        >
                          {field.label}
                        </span>
                        {!complete && (
                          <Link
                            to={all_routes.talentMyProfile}
                            className="ms-auto text-decoration-none"
                            style={{ color: '#f87028', fontSize: 13 }}
                          >
                            Completer
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <Link to={all_routes.talentMyProfile} className="btn btn-primary">
                  <i className="fa-solid fa-pen-to-square me-2" />
                  Completer mon profil
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="error-imgs">
          <ImageWithBasePath
            src="assets/img/bg/error-01.png"
            alt="img"
            className="error-01 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-01.png"
            alt="img"
            className="error-05 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-02.png"
            alt="img"
            className="error-02 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-03.png"
            alt="img"
            className="error-03 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-04.png"
            alt="img"
            className="error-04 error-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileIncomplete;

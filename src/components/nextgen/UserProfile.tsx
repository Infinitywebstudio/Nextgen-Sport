import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img";

interface UserProfileProps {
  // Informations de base
  name: string;
  job: string;
  location: string;
  rating: number;
  hourlyRate: number;
  experience: string;
  memberSince: string;
  isTopProvider?: boolean;

  // Description
  description: string;

  // Engagements
  engagements: string[];

  // Équipements
  equipment: string[];

  // Statistiques avis
  totalReviews: number;
  positiveReviews: number;
  totalEvaluations: number;

  // Fiabilité
  reliability: {
    realization: number;
    punctuality: number;
  };

  // Distribution des notes
  ratingDistribution: Array<{
    stars: number;
    count: number;
  }>;

  // Avis récents (pour le carousel)
  recentReviews: Array<{
    name: string;
    location: string;
    date: string;
    service: string;
    comment: string;
    rating: number;
  }>;

  // Informations vérifiées
  identityVerified?: boolean;
  emailVerified?: boolean;
  phoneVerified?: boolean;

  // Garanties
  hasInsurance?: boolean;
  insuranceAmount?: string;

  // Réseaux sociaux
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };

  // Zone d'intervention
  serviceRadius: number;

  // Images
  profileImage?: string;
}

const UserProfile = ({
  name,
  job,
  location,
  rating,
  hourlyRate,
  experience,
  memberSince,
  isTopProvider = false,
  description,
  engagements,
  equipment,
  totalReviews,
  positiveReviews,
  totalEvaluations,
  reliability,
  ratingDistribution,
  recentReviews,
  identityVerified = false,
  emailVerified = false,
  phoneVerified = false,
  hasInsurance = false,
  insuranceAmount,
  socialLinks,
  serviceRadius,
  profileImage = "/assets/img/user/user-05.jpg"
}: UserProfileProps) => {

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="page-content content">
      <div className="container">
        <div className="row">
          {/* LEFT SIDE - Photo */}
          <div className="col-lg-3 mb-4">
            <div className="card profile-card">
              <div className="card-body p-0">
                <div className="position-relative">
                  <ImageWithBasePath
                    src={profileImage}
                    alt={name}
                    className="img-fluid w-100"
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  {isTopProvider && (
                    <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark">
                      <i className="ti ti-star-filled me-1" />
                      Top prestataire
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE - Main Content */}
          <div className="col-lg-6 mb-4">
            {/* Header Section */}
            <div className="card profile-card mb-4" style={{ minHeight: '280px' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div>
                    <h2 className="mb-2">{name}</h2>
                    <p className="text-muted mb-0 fs-5">{job}</p>
                  </div>
                  <div className="text-end">
                    <h2 className="mb-0">{rating}/5</h2>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <p className="text-muted mb-1 small">Expérience:</p>
                    <p className="mb-0 fw-medium">{experience}</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted mb-1 small">Ancienneté:</p>
                    <p className="mb-0 fw-medium">{memberSince}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* À propos et Engagements */}
            <div className="card profile-details mb-4">
              <div className="card-body">
                <h5 className="mb-3">À propos</h5>
                <p className="text-muted mb-4">{description}</p>

                {/* Engagements badges */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {engagements.map((engagement, index) => (
                    <span key={index} className="badge bg-success-transparent text-success p-2">
                      <i className="ti ti-circle-check me-1" />
                      {engagement}
                    </span>
                  ))}
                </div>

                <hr className="my-4" />

                {/* Équipements */}
                <h5 className="mb-3">Équipements</h5>
                <div className="d-flex flex-wrap gap-2">
                  {equipment.map((item, index) => (
                    <span key={index} className="badge bg-info-transparent text-info p-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Avis client */}
            <div className="card profile-details mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <h5 className="mb-0">Avis client</h5>
                  <div className="d-flex align-items-center">
                    <i className="ti ti-star-filled text-warning me-1" />
                    <span className="fw-semibold">{rating}/5</span>
                  </div>
                  <span className="text-muted small">({positiveReviews} sur {totalReviews} avis)</span>
                </div>

                {/* Statistiques fiabilité + Distribution */}
                <div className="row g-3 mb-4">
                  {/* Fiabilité */}
                  <div className="col-md-6">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="p-3 bg-success-transparent rounded">
                          <p className="text-muted mb-1 small">Réalisation</p>
                          <h4 className="text-success mb-0">{reliability.realization}%</h4>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 bg-info-transparent rounded">
                          <p className="text-muted mb-1 small">Ponctualité</p>
                          <h4 className="text-info mb-0">{reliability.punctuality}%</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Distribution */}
                  <div className="col-md-6">
                    <div className="d-flex flex-column gap-2">
                      {ratingDistribution.map((item) => (
                        <div key={item.stars} className="d-flex align-items-center gap-2">
                          <span className="text-warning small" style={{ minWidth: '30px' }}>{item.stars}★</span>
                          <div className="progress flex-grow-1" style={{ height: '8px' }}>
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${(item.count / totalReviews) * 100}%` }}
                            />
                          </div>
                          <span className="text-muted small" style={{ minWidth: '50px' }}>{item.count} avis</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews carousel - Placeholder for now */}
                <div className="mb-3">
                  <p className="text-muted small mb-2">Derniers avis ({recentReviews.length})</p>
                  <div className="d-flex gap-2 overflow-auto">
                    {recentReviews.slice(0, 2).map((review, index) => (
                      <div key={index} className="card border" style={{ minWidth: '300px' }}>
                        <div className="card-body p-3">
                          <div className="d-flex align-items-start gap-2 mb-2">
                            <span className="avatar avatar-sm">
                              <span className="avatar-title rounded-circle bg-light text-dark">
                                {review.name.charAt(0).toUpperCase()}
                              </span>
                            </span>
                            <div className="flex-grow-1">
                              <h6 className="mb-0 small">{review.name}</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>
                                <i className="ti ti-map-pin" style={{ fontSize: '10px' }} /> {review.location}
                              </p>
                            </div>
                            <span className="text-muted" style={{ fontSize: '11px' }}>{review.date}</span>
                          </div>
                          <div className="mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <i key={i} className="ti ti-star-filled text-warning" style={{ fontSize: '12px' }} />
                            ))}
                          </div>
                          <p className="mb-2 small">{review.comment}</p>
                          <span className="badge bg-light text-dark small">{review.service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link to="#" className="btn btn-primary">
                    Voir les évaluations ({totalEvaluations})
                  </Link>
                </div>
              </div>
            </div>

            {/* Informations vérifiées et garanties */}
            <div className="card profile-details">
              <div className="card-body">
                <h5 className="mb-3">Informations vérifiées</h5>
                <div className="d-flex flex-column gap-2 mb-4">
                  {identityVerified && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti ti-circle-check text-success" />
                      <span>Identité vérifiée</span>
                    </div>
                  )}
                  {emailVerified && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti ti-circle-check text-success" />
                      <span>Email vérifié</span>
                    </div>
                  )}
                  {phoneVerified && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti ti-circle-check text-success" />
                      <span>Téléphone vérifié</span>
                    </div>
                  )}
                </div>

                {hasInsurance && (
                  <>
                    <hr className="my-4" />
                    <h5 className="mb-3">Garanties et assurances</h5>
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti ti-shield-check text-primary" />
                      <span>Assuré jusqu'à {insuranceAmount}</span>
                    </div>
                  </>
                )}

                {socialLinks && (
                  <>
                    <hr className="my-4" />
                    <h5 className="mb-3">Réseaux sociaux</h5>
                    <div className="d-flex gap-2">
                      {socialLinks.facebook && (
                        <Link to={socialLinks.facebook} className="btn btn-sm btn-light">
                          <i className="fa-brands fa-facebook" />
                        </Link>
                      )}
                      {socialLinks.twitter && (
                        <Link to={socialLinks.twitter} className="btn btn-sm btn-light">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      )}
                      {socialLinks.linkedin && (
                        <Link to={socialLinks.linkedin} className="btn btn-sm btn-light">
                          <i className="fa-brands fa-linkedin" />
                        </Link>
                      )}
                      {socialLinks.instagram && (
                        <Link to={socialLinks.instagram} className="btn btn-sm btn-light">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Pricing & Actions */}
          <div className="col-lg-3 mb-4">
            {/* Prix */}
            <div className="card profile-card mb-4" style={{ minHeight: '280px' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="text-center">
                  <h5 className="mb-3">Tarif</h5>
                  <h2 className="mb-0">
                    {hourlyRate} €<span className="fs-5">/h</span>
                  </h2>
                </div>

                <div className="d-flex flex-column gap-2">
                  <Link to="#" className="btn btn-primary">
                    Demander un service
                  </Link>
                  <Link to="#" className="btn btn-outline-secondary">
                    <i className="ti ti-share-2 me-1" />
                    Partager
                  </Link>
                </div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="card profile-card">
              <div className="card-body">
                <h5 className="mb-2">Zone d'intervention</h5>
                <p className="mb-3 fw-semibold small">
                  {serviceRadius} km autour de {location}
                </p>
                <div className="position-relative bg-light rounded" style={{ height: '250px' }}>
                  {/* Simple map placeholder */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div
                      className="rounded-circle border border-primary border-3"
                      style={{
                        width: '120px',
                        height: '120px',
                        backgroundColor: 'rgba(0, 150, 255, 0.1)'
                      }}
                    >
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <span className="avatar avatar-sm">
                          <ImageWithBasePath
                            src={profileImage}
                            alt={name}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

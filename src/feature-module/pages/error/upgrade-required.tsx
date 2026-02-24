import { Link, useSearchParams } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import { useSubscription } from '../../../hooks/useSubscription';
import { talentPlans, recruteurPlans, type Plan } from '../pricing/pricing-data';
import authService from '../../../services/auth.service';
import ImageWithBasePath from '../../../core/img';

const featureLabels: Record<string, string> = {
  advanced_search: 'Recherche avancee',
  view_elite_talent: 'Acces aux profils Elite',
  view_talent_profile: 'Consultation de profils',
  upload_video: 'Upload de videos',
  stats_access: 'Statistiques de profil',
  notifications: 'Notifications',
  pro_dashboard: 'Tableau de bord professionnel',
  pre_access_24h: 'Pre-acces 24h',
  search_priority: 'Priorite dans les recherches',
};

const UpgradeRequired = () => {
  const [searchParams] = useSearchParams();
  const subscription = useSubscription();

  const feature = searchParams.get('feature') || '';
  const currentPlanParam = searchParams.get('currentPlan') || subscription.plan;

  const isRecruteur = authService.isClient();
  const plans = isRecruteur ? recruteurPlans : talentPlans;

  const currentPlanIndex = plans.findIndex((p) => p.slug === currentPlanParam);
  const currentPlan: Plan | undefined = plans[currentPlanIndex];
  const nextPlan: Plan | undefined = plans[currentPlanIndex + 1] || plans[plans.length - 1];

  const featureLabel = featureLabels[feature] || feature;

  return (
    <div className="error-wrapper">
      <div className="error-item">
        <div className="row w-100">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="error-content text-center">
              <div className="error-img">
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f87028 0%, #e5601a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <i
                    className="fa-solid fa-arrow-up-right-dots"
                    style={{ fontSize: 48, color: '#fff' }}
                  />
                </div>
              </div>
              <div className="error-info">
                <h2>Mise a niveau requise</h2>
                {feature && (
                  <p>
                    La fonctionnalite <strong>"{featureLabel}"</strong> n'est
                    pas disponible avec votre plan actuel.
                  </p>
                )}
                {!feature && (
                  <p>
                    Cette fonctionnalite necessite un plan superieur. Decouvrez
                    les avantages du plan suivant.
                  </p>
                )}

                {/* Comparatif plans */}
                {currentPlan && nextPlan && (
                  <div className="row g-4 my-4">
                    {/* Plan actuel */}
                    <div className="col-md-6">
                      <div
                        className="card h-100"
                        style={{
                          border: '2px solid #e0e0e0',
                          borderRadius: 12,
                        }}
                      >
                        <div className="card-body text-start">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">{currentPlan.name}</h5>
                            <span
                              className="badge"
                              style={{
                                backgroundColor: 'rgba(108, 117, 125, 0.1)',
                                color: '#6c757d',
                              }}
                            >
                              Plan actuel
                            </span>
                          </div>
                          <p className="h4 mb-3">
                            {currentPlan.price}
                            <small className="text-muted fs-6">/mois</small>
                          </p>
                          <ul className="list-unstyled">
                            {currentPlan.features.slice(0, 4).map((f, i) => (
                              <li key={i} className="py-1">
                                <i className="fa-solid fa-check me-2 text-muted" />
                                <small>{f}</small>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Plan recommande */}
                    <div className="col-md-6">
                      <div
                        className="card h-100"
                        style={{
                          border: '2px solid #4bc3b9',
                          borderRadius: 12,
                          boxShadow: '0 4px 20px rgba(75, 195, 185, 0.15)',
                        }}
                      >
                        <div className="card-body text-start">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0" style={{ color: '#4bc3b9' }}>
                              {nextPlan.name}
                            </h5>
                            <span
                              className="badge"
                              style={{
                                backgroundColor: '#4bc3b9',
                                color: '#fff',
                              }}
                            >
                              Recommande
                            </span>
                          </div>
                          <p className="h4 mb-3" style={{ color: '#4bc3b9' }}>
                            {nextPlan.price}
                            <small className="text-muted fs-6">/mois</small>
                          </p>
                          <ul className="list-unstyled">
                            {nextPlan.features.slice(0, 4).map((f, i) => (
                              <li key={i} className="py-1">
                                <i
                                  className="fa-solid fa-check me-2"
                                  style={{ color: '#4bc3b9' }}
                                />
                                <small>{f}</small>
                              </li>
                            ))}
                            {nextPlan.features.length > 4 && (
                              <li className="py-1 text-muted">
                                <small>
                                  + {nextPlan.features.length - 4} autres
                                  avantages...
                                </small>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link
                    to={
                      isRecruteur
                        ? all_routes.pricingRecruteur
                        : all_routes.pricingTalent
                    }
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-rocket me-2" />
                    Passer au plan {nextPlan?.name || 'superieur'}
                  </Link>
                  <Link
                    to={all_routes.home}
                    className="btn btn-outline-secondary"
                  >
                    Retour a l'accueil
                  </Link>
                </div>
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

export default UpgradeRequired;

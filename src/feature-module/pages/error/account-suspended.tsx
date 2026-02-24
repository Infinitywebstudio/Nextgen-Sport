import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import { useSubscription } from '../../../hooks/useSubscription';
import authService from '../../../services/auth.service';
import ImageWithBasePath from '../../../core/img';

const AccountSuspended = () => {
  const subscription = useSubscription();

  const expirationDate = subscription.currentPeriodEnd
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const isPastDue = subscription.status === 'past_due';
  const isTrialExpired = subscription.status === 'expired' && !subscription.currentPeriodEnd;

  const pricingRoute = authService.isClient() ? all_routes.pricingRecruteur : all_routes.pricingTalent;

  return (
    <div className="error-wrapper">
      <div className="error-item">
        <div className="row w-100">
          <div className="col-md-7 col-sm-10 mx-auto">
            <div className="error-content text-center">
              <div className="error-img">
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: isTrialExpired
                      ? 'linear-gradient(135deg, #4bc3b9 0%, #3aa89f 100%)'
                      : 'linear-gradient(135deg, #f87028 0%, #e5601a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <i
                    className={isTrialExpired ? 'fa-regular fa-clock' : 'fa-solid fa-credit-card'}
                    style={{ fontSize: 48, color: '#fff' }}
                  />
                </div>
              </div>
              <div className="error-info">
                <h2>
                  {isTrialExpired
                    ? 'Votre essai gratuit est termine'
                    : isPastDue
                      ? 'Paiement en attente'
                      : 'Abonnement expire'}
                </h2>
                <p>
                  {isTrialExpired
                    ? 'Votre periode d\'essai de 7 jours est terminee. Choisissez un abonnement pour continuer a profiter de toutes les fonctionnalites de NextGen Sport.'
                    : isPastDue
                      ? 'Votre dernier paiement n\'a pas pu etre traite. Pas d\'inquietude, il suffit de mettre a jour vos informations de paiement pour retrouver l\'acces a toutes vos fonctionnalites.'
                      : 'Votre abonnement a pris fin. Renouvelez-le pour continuer a profiter de toutes les fonctionnalites de NextGen Sport.'}
                </p>
                {expirationDate && (
                  <p className="text-muted mb-4">
                    <i className="fa-regular fa-calendar me-2" />
                    {isPastDue ? 'Echeance :' : 'Expire le :'}{' '}
                    <strong>{expirationDate}</strong>
                  </p>
                )}
                {subscription.planLabel && subscription.planLabel !== 'Gratuit' && (
                  <p className="text-muted mb-4">
                    <i className="fa-regular fa-gem me-2" />
                    Plan : <strong>{subscription.planLabel}</strong>
                  </p>
                )}
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to={isTrialExpired ? pricingRoute : all_routes.pricing} className="btn btn-primary">
                    <i className={`fa-solid ${isTrialExpired ? 'fa-rocket' : 'fa-arrows-rotate'} me-2`} />
                    {isTrialExpired ? 'Choisir mon abonnement' : 'Mettre a jour mon paiement'}
                  </Link>
                  <Link to={all_routes.contactUs} className="btn btn-outline-secondary">
                    <i className="fa-regular fa-envelope me-2" />
                    Contacter le support
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

export default AccountSuspended;

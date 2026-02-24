import { Link, useSearchParams } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import ImageWithBasePath from '../../../core/img';

const reasonMessages: Record<string, { title: string; description: string }> = {
  role: {
    title: 'Espace non autorise',
    description: 'Vous n\'avez pas le role requis pour acceder a cette section. Cette zone est reservee a un autre type de compte.',
  },
  plan: {
    title: 'Plan insuffisant',
    description: 'Votre plan actuel ne vous donne pas acces a cette fonctionnalite. Passez a un plan superieur pour en profiter.',
  },
  status: {
    title: 'Abonnement expire',
    description: 'Votre abonnement a expire ou votre paiement est en attente. Veuillez mettre a jour vos informations de paiement.',
  },
};

const defaultMessage = {
  title: 'Acces refuse',
  description: 'Vous n\'avez pas la permission d\'acceder a cette page.',
};

const Error403 = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason') || '';
  const message = reasonMessages[reason] || defaultMessage;
  const showPricingLink = reason === 'plan' || reason === 'status';

  return (
    <div className="error-wrapper">
      <div className="error-item">
        <div className="row w-100">
          <div className="col-md-6 col-sm-8 mx-auto">
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
                    className="fa-solid fa-lock"
                    style={{ fontSize: 48, color: '#fff' }}
                  />
                </div>
              </div>
              <div className="error-info">
                <h2>{message.title}</h2>
                <p>{message.description}</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to={all_routes.home} className="btn btn-primary">
                    <i className="feather icon-chevron-left me-2" />
                    Retour a l'accueil
                  </Link>
                  {showPricingLink && (
                    <Link to={all_routes.pricing} className="btn btn-outline-primary">
                      <i className="feather icon-star me-2" />
                      Voir les plans
                    </Link>
                  )}
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

export default Error403;

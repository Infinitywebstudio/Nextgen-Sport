import { useState } from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import { talentPlans, recruteurPlans } from '../../pages/pricing/pricing-data';

type Tab = 'talent' | 'recruteur';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('talent');
  const plans = activeTab === 'talent' ? talentPlans : recruteurPlans;
  const detailsLink = activeTab === 'talent' ? all_routes.pricingTalent : all_routes.pricingRecruteur;

  return (
    <section className="nex-pricing">
      <div className="nex-pricing__container">
        <h2 className="nex-pricing__title nex-title">
          NOS PACKS D'ABONNEMENT
        </h2>
        <div className="nex-pricing__tabs">
          <button
            className={`nex-pricing__tab ${activeTab === 'talent' ? 'nex-pricing__tab--active' : ''}`}
            onClick={() => setActiveTab('talent')}
          >
            Talent
          </button>
          <button
            className={`nex-pricing__tab ${activeTab === 'recruteur' ? 'nex-pricing__tab--active' : ''}`}
            onClick={() => setActiveTab('recruteur')}
          >
            Recruteur
          </button>
        </div>
        <div className="nex-pricing__plans">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`nex-plan nex-plan--${plan.color}`}
            >
              <div className="nex-plan__header">
                <img src={plan.icon} alt="" className="nex-plan__icon" />
                <h3 className="nex-plan__name nex-title">{plan.name}</h3>
              </div>
              <div className="nex-plan__price">
                <span className="nex-plan__amount">{plan.price}€</span>
                <span className="nex-plan__period">/mois</span>
              </div>
              <ul className="nex-plan__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="nex-plan__feature">
                    <img src={plan.bulletIcon} alt="" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="nex-plan__cta">
                <Link
                  to={all_routes.signUp}
                  className={`nex-btn ${plan.color === 'yellow' ? 'nex-btn--red' : 'nex-btn--white'}`}
                >
                  Je choisis
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="nex-pricing__more">
          <Link to={detailsLink} className="nex-pricing__more-link">
            Voir tous les détails et comparer les packs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

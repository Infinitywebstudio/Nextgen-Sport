import { useState } from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import { recruteurPlans, recruteurComparison, recruteurFaq, recruteurTierNames } from './pricing-data';
import type { ComparisonFeature } from './pricing-data';
import PlanCTA from '../../../components/PlanCTA';
import type { PlanSlug } from '../../../services/subscription.service';

const PricingRecruteur = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderCellValue = (value: boolean | string) => {
    if (value === true) return <span className="nex-comparison__check">✓</span>;
    if (value === false) return <span className="nex-comparison__cross">✗</span>;
    return <span className="nex-comparison__text">{value}</span>;
  };

  return (
    <div className="nex-pricing-page">
      {/* Hero */}
      <section className="nex-pricing-hero nex-pricing-hero--recruteur">
        <div className="nex-pricing-hero__container">
          <h1 className="nex-pricing-hero__title nex-title">PACKS RECRUTEUR</h1>
          <p className="nex-pricing-hero__subtitle">
            Accédez aux meilleurs talents sportifs et optimisez votre processus de recrutement.
          </p>
          <Link to={all_routes.pricingTalent} className="nex-pricing-hero__switch">
            Vous êtes talent ? Voir les packs talent →
          </Link>
        </div>
      </section>

      {/* Plans */}
      <section className="nex-pricing-plans">
        <div className="nex-pricing-plans__container">
          <div className="nex-pricing__plans">
            {recruteurPlans.map((plan) => (
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
                  <PlanCTA
                    planSlug={plan.slug as PlanSlug}
                    className={`nex-btn ${plan.color === 'yellow' ? 'nex-btn--red' : 'nex-btn--white'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="nex-comparison">
        <div className="nex-comparison__container">
          <h2 className="nex-comparison__title nex-title">COMPARER LES PACKS</h2>
          <div className="nex-comparison__table-wrapper">
            <table className="nex-comparison__table">
              <thead>
                <tr>
                  <th className="nex-comparison__feature-col">Fonctionnalité</th>
                  <th className="nex-comparison__plan-col nex-comparison__plan-col--blue">{recruteurTierNames[0]}</th>
                  <th className="nex-comparison__plan-col nex-comparison__plan-col--yellow">{recruteurTierNames[1]}</th>
                  <th className="nex-comparison__plan-col nex-comparison__plan-col--red">{recruteurTierNames[2]}</th>
                </tr>
              </thead>
              <tbody>
                {recruteurComparison.map((row: ComparisonFeature, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? 'nex-comparison__row--even' : ''}>
                    <td className="nex-comparison__feature-label">{row.label}</td>
                    <td className="nex-comparison__cell">{renderCellValue(row.tier1)}</td>
                    <td className="nex-comparison__cell">{renderCellValue(row.tier2)}</td>
                    <td className="nex-comparison__cell">{renderCellValue(row.tier3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="nex-faq">
        <div className="nex-faq__container">
          <h2 className="nex-faq__title nex-title">QUESTIONS FRÉQUENTES</h2>
          <div className="nex-faq__list">
            {recruteurFaq.map((item, index) => (
              <div
                key={index}
                className={`nex-faq__item ${openFaq === index ? 'nex-faq__item--open' : ''}`}
              >
                <button
                  className="nex-faq__question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span className="nex-faq__icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className="nex-faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingRecruteur;

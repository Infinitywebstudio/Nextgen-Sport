import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import dashboardService, { type SubscriptionInfo } from "../../../services/dashboard.service";

const RecruteurPayment = () => {
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await dashboardService.getSubscription();
      if (result.success && result.data) {
        setSubscription(result.data);
      }
      setLoading(false);
    };
    load();
  }, []);

  const planLabel = subscription?.plan_label || "Gratuit";
  const planDescription = subscription?.plan === "free"
    ? "Accès limité - Passez à un plan premium pour débloquer toutes les fonctionnalités"
    : `Plan ${planLabel} - ${subscription?.price}€/mois`;

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Paiement</h1>
        <p className="nex-dash-page__subtitle">
          Gérez votre abonnement et vos moyens de paiement
        </p>
      </div>

      {/* Current Subscription */}
      <div className="nex-dash-card">
        <div className="nex-dash-card__header">
          <h3 className="nex-dash-card__title">Abonnement actuel</h3>
        </div>
        <div className="nex-dash-card__body">
          {loading ? (
            <div style={{ textAlign: "center", padding: 20 }}>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            </div>
          ) : (
            <div className="nex-dash-subscription">
              <div className="nex-dash-subscription__info">
                <div className="nex-dash-subscription__plan">{planLabel}</div>
                <div className="nex-dash-subscription__price">
                  {planDescription}
                </div>
                {subscription?.next_billing && (
                  <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                    Prochain paiement : {new Date(subscription.next_billing).toLocaleDateString("fr-FR")}
                  </div>
                )}
              </div>
              <Link
                to={all_routes.pricingRecruteur}
                className="nex-dash-btn nex-dash-btn--primary"
              >
                Changer de plan
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="nex-dash-card">
        <div className="nex-dash-card__header">
          <h3 className="nex-dash-card__title">Moyens de paiement</h3>
        </div>
        <div className="nex-dash-card__body">
          <div className="nex-dash-empty">
            <div className="nex-dash-empty__icon">
              <i className="ti ti-credit-card" />
            </div>
            <h4 className="nex-dash-empty__title">
              Aucun moyen de paiement
            </h4>
            <p className="nex-dash-empty__text">
              Ajoutez un moyen de paiement pour souscrire à un abonnement.
            </p>
            <button
              className="nex-dash-btn nex-dash-btn--outline"
              style={{ marginTop: 16 }}
            >
              <i className="ti ti-plus" /> Ajouter une carte
            </button>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="nex-dash-card">
        <div className="nex-dash-card__header">
          <h3 className="nex-dash-card__title">Historique de facturation</h3>
        </div>
        <div className="nex-dash-card__body">
          <div className="nex-dash-empty">
            <div className="nex-dash-empty__icon">
              <i className="ti ti-file-invoice" />
            </div>
            <h4 className="nex-dash-empty__title">Aucune facture</h4>
            <p className="nex-dash-empty__text">
              Votre historique de facturation apparaîtra ici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruteurPayment;

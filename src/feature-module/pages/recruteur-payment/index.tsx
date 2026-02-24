import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { useSubscription } from "../../../hooks/useSubscription";
import subscriptionService from "../../../services/subscription.service";

const RecruteurPayment = () => {
  const subscription = useSubscription();
  const [portalLoading, setPortalLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleOpenPortal = async () => {
    setPortalLoading(true);
    setMessage(null);

    const result = await subscriptionService.getPortalUrl(window.location.href);
    if (result.success && result.data?.portal_url) {
      window.location.href = result.data.portal_url;
    } else {
      setMessage({ type: "error", text: result.error || "Impossible d'ouvrir le portail de paiement" });
    }
    setPortalLoading(false);
  };

  const handleCancel = async () => {
    if (!window.confirm("Êtes-vous sûr de vouloir annuler votre abonnement ? Vous conserverez l'accès jusqu'à la fin de la période en cours.")) {
      return;
    }

    setCancelLoading(true);
    setMessage(null);

    const result = await subscriptionService.cancelSubscription();
    if (result.success) {
      setMessage({ type: "success", text: "Abonnement annulé. Vous conservez l'accès jusqu'à la fin de votre période." });
    } else {
      setMessage({ type: "error", text: result.error || "Erreur lors de l'annulation" });
    }
    setCancelLoading(false);
  };

  const isActive = subscription.status === "active" || subscription.status === "trialing";
  const isPaid = subscription.plan !== "free" && isActive;

  return (
    <div className="nex-dash-page">
      <div className="nex-dash-page__header">
        <h1 className="nex-dash-page__title">Paiement</h1>
        <p className="nex-dash-page__subtitle">
          Gérez votre abonnement et vos moyens de paiement
        </p>
      </div>

      {message && (
        <div
          className="nex-auth-error"
          style={
            message.type === "success"
              ? { background: "rgba(39,174,96,0.06)", borderColor: "rgba(39,174,96,0.2)" }
              : undefined
          }
        >
          <p style={message.type === "success" ? { color: "#27AE60" } : undefined}>
            {message.text}
          </p>
        </div>
      )}

      {/* Current Subscription */}
      <div className="nex-dash-card">
        <div className="nex-dash-card__header">
          <h3 className="nex-dash-card__title">Abonnement actuel</h3>
        </div>
        <div className="nex-dash-card__body">
          {subscription.loading ? (
            <div style={{ textAlign: "center", padding: 20 }}>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            </div>
          ) : (
            <div className="nex-dash-subscription">
              <div className="nex-dash-subscription__info">
                <div className="nex-dash-subscription__plan">{subscription.planLabel}</div>
                <div className="nex-dash-subscription__price">
                  {subscription.plan === "free"
                    ? "Accès limité - Passez à un plan premium pour débloquer toutes les fonctionnalités"
                    : `${subscription.price} ${subscription.currency}/mois`}
                </div>
                {subscription.status === "trialing" && subscription.trialEnd && (
                  <div style={{ fontSize: 13, color: "#f59e0b", marginTop: 4 }}>
                    Essai gratuit jusqu'au {new Date(subscription.trialEnd).toLocaleDateString("fr-FR")}
                  </div>
                )}
                {subscription.status === "active" && subscription.currentPeriodEnd && (
                  <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                    Prochain renouvellement : {new Date(subscription.currentPeriodEnd).toLocaleDateString("fr-FR")}
                  </div>
                )}
                {subscription.status === "cancelled" && (
                  <div style={{ fontSize: 13, color: "#ef4444", marginTop: 4 }}>
                    Abonnement annulé
                  </div>
                )}
              </div>
              <Link
                to={all_routes.pricingRecruteur}
                className="nex-dash-btn nex-dash-btn--primary"
              >
                {subscription.plan === "free" || subscription.status === "expired" ? "Choisir un plan" : "Changer de plan"}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Stripe Portal – payment methods & invoices */}
      {isPaid && (
        <div className="nex-dash-card">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Moyens de paiement & Factures</h3>
          </div>
          <div className="nex-dash-card__body">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#6b7280", marginBottom: 16 }}>
              Gérez vos cartes de paiement, consultez vos factures et mettez à jour vos informations de facturation via le portail sécurisé Stripe.
            </p>
            <button
              className="nex-dash-btn nex-dash-btn--outline"
              onClick={handleOpenPortal}
              disabled={portalLoading}
            >
              {portalLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  {' '}Ouverture...
                </>
              ) : (
                <><i className="ti ti-external-link" /> Ouvrir le portail de paiement</>
              )}
            </button>
          </div>
        </div>
      )}

      {/* No subscription state */}
      {!isPaid && !subscription.loading && (
        <>
          <div className="nex-dash-card">
            <div className="nex-dash-card__header">
              <h3 className="nex-dash-card__title">Moyens de paiement</h3>
            </div>
            <div className="nex-dash-card__body">
              <div className="nex-dash-empty">
                <div className="nex-dash-empty__icon">
                  <i className="ti ti-credit-card" />
                </div>
                <h4 className="nex-dash-empty__title">Aucun moyen de paiement</h4>
                <p className="nex-dash-empty__text">
                  Souscrivez à un abonnement pour ajouter un moyen de paiement.
                </p>
              </div>
            </div>
          </div>

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
        </>
      )}

      {/* Cancel subscription */}
      {isPaid && subscription.status !== "cancelled" && (
        <div className="nex-dash-card nex-dash-danger">
          <div className="nex-dash-card__header">
            <h3 className="nex-dash-card__title">Annuler l'abonnement</h3>
          </div>
          <div className="nex-dash-card__body">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#6b7280", marginBottom: 16 }}>
              L'annulation prend effet à la fin de votre période de facturation en cours. Vous conserverez l'accès à toutes les fonctionnalités jusqu'à cette date.
            </p>
            <button
              className="nex-dash-btn nex-dash-btn--danger"
              onClick={handleCancel}
              disabled={cancelLoading}
            >
              {cancelLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  {' '}Annulation...
                </>
              ) : (
                "Annuler mon abonnement"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruteurPayment;

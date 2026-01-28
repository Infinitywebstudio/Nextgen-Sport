import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import Button from "../../../components/nextgen/Button";

// Types pour les commandes
interface Order {
  id: string;
  serviceTitle: string;
  providerName: string;
  providerAvatar: string;
  category: string;
  price: string;
  orderDate: string;
  deliveryDate?: string;
  status: "en_cours" | "terminee";
}

// Données fictives pour le développement
const initialOrders: Order[] = [
  {
    id: "CMD-001",
    serviceTitle: "Réparation fuite sous évier",
    providerName: "Jean Dupont",
    providerAvatar: "assets/img/user/user-01.jpg",
    category: "Plomberie",
    price: "85€",
    orderDate: "2026-01-18",
    status: "en_cours",
  },
  {
    id: "CMD-002",
    serviceTitle: "Nettoyage appartement complet",
    providerName: "Marie Claire",
    providerAvatar: "assets/img/user/user-02.jpg",
    category: "Ménage",
    price: "110€",
    orderDate: "2026-01-17",
    status: "en_cours",
  },
  {
    id: "CMD-003",
    serviceTitle: "Installation luminaires salon",
    providerName: "Pierre Martin",
    providerAvatar: "assets/img/user/user-03.jpg",
    category: "Électricité",
    price: "150€",
    orderDate: "2026-01-10",
    deliveryDate: "2026-01-12",
    status: "terminee",
  },
  {
    id: "CMD-004",
    serviceTitle: "Cours de français - 5 séances",
    providerName: "Sophie Bernard",
    providerAvatar: "assets/img/user/user-04.jpg",
    category: "Cours particuliers",
    price: "175€",
    orderDate: "2026-01-05",
    deliveryDate: "2026-01-15",
    status: "terminee",
  },
  {
    id: "CMD-005",
    serviceTitle: "Montage meuble IKEA",
    providerName: "Lucas Petit",
    providerAvatar: "assets/img/user/user-05.jpg",
    category: "Bricolage",
    price: "45€",
    orderDate: "2025-12-28",
    deliveryDate: "2025-12-28",
    status: "terminee",
  },
];

const BuyerOrders = () => {
  const [activeTab, setActiveTab] = useState<"en_cours" | "terminee">("en_cours");
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState<string | null>(null);

  const filteredOrders = orders.filter(
    (order) => order.status === activeTab
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleCancelClick = (orderId: string) => {
    setOrderToCancel(orderId);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    if (orderToCancel) {
      setOrders(orders.filter((o) => o.id !== orderToCancel));
    }
    setShowCancelModal(false);
    setOrderToCancel(null);
  };

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "24px 32px" }}>
        {/* Onglets style NEXTGEN */}
        <div className="d-flex gap-2 mb-4">
          <Button
            variant={activeTab === "en_cours" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("en_cours")}
          >
            En cours
          </Button>
          <Button
            variant={activeTab === "terminee" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("terminee")}
          >
            Terminées
          </Button>
        </div>

        {/* Contenu */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-5">
            <i className="ti ti-shopping-cart fs-1 text-muted mb-3 d-block" />
            <h5>Aucune commande {activeTab === "en_cours" ? "en cours" : "terminée"}</h5>
            <p className="text-muted">
              {activeTab === "en_cours"
                ? "Vos commandes en cours apparaîtront ici."
                : "Vos commandes terminées apparaîtront ici."}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                  <th className="fw-semibold" style={{ fontSize: "15px", color: "#1a1a1a" }}>Commande</th>
                  <th className="fw-semibold" style={{ fontSize: "15px", color: "#1a1a1a" }}>Prestataire</th>
                  <th className="fw-semibold" style={{ fontSize: "15px", color: "#1a1a1a" }}>Prix</th>
                  <th className="fw-semibold" style={{ fontSize: "15px", color: "#1a1a1a" }}>{activeTab === "en_cours" ? "Date" : "Livrée le"}</th>
                  <th className="fw-semibold" style={{ fontSize: "15px", color: "#1a1a1a" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                    <td className="py-3">
                      <div>
                        <span className="text-muted d-block" style={{ fontSize: "13px" }}>{order.id}</span>
                        <span className="fw-medium" style={{ fontSize: "15px" }}>{order.serviceTitle}</span>
                        <span
                          className="ms-2"
                          style={{
                            backgroundColor: "#f5f5f5",
                            padding: "3px 10px",
                            borderRadius: "4px",
                            color: "#666",
                            fontSize: "13px"
                          }}
                        >
                          {order.category}
                        </span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="d-flex align-items-center">
                        <ImageWithBasePath
                          src={order.providerAvatar}
                          alt={order.providerName}
                          className="rounded-circle me-2"
                          style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <span style={{ fontSize: "15px" }}>{order.providerName}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="fw-medium" style={{ color: "#FF6961", fontSize: "15px" }}>{order.price}</span>
                    </td>
                    <td className="py-3">
                      {activeTab === "en_cours" ? (
                        <span className="text-muted" style={{ fontSize: "14px" }}>{formatDate(order.orderDate)}</span>
                      ) : (
                        <span style={{ color: "#28a745", fontSize: "14px" }}>
                          {order.deliveryDate && formatDate(order.deliveryDate)}
                        </span>
                      )}
                    </td>
                    <td className="py-3">
                      <div className="d-flex gap-2">
                        <Link
                          to="#"
                          className="btn btn-sm"
                          style={{
                            border: "1px solid #e0e0e0",
                            backgroundColor: "transparent",
                            color: "#666"
                          }}
                          title="Voir détails"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm"
                          style={{
                            border: "1px solid #e0e0e0",
                            backgroundColor: "transparent",
                            color: "#666"
                          }}
                          title="Contacter"
                        >
                          <i className="ti ti-message" />
                        </Link>
                        {activeTab === "en_cours" && (
                          <button
                            className="btn btn-sm"
                            style={{
                              border: "1px solid #ffcdd2",
                              backgroundColor: "transparent",
                              color: "#e53935"
                            }}
                            title="Annuler"
                            onClick={() => handleCancelClick(order.id)}
                          >
                            <i className="ti ti-x" />
                          </button>
                        )}
                        {activeTab === "terminee" && (
                          <Link
                            to="#"
                            className="btn btn-sm"
                            style={{
                              border: "1px solid #ffe0b2",
                              backgroundColor: "transparent",
                              color: "#ff9800"
                            }}
                            title="Laisser un avis"
                          >
                            <i className="ti ti-star" />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de confirmation d'annulation */}
      {showCancelModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: "12px", border: "none" }}>
              <div className="modal-header" style={{ borderBottom: "1px solid #f0f0f0" }}>
                <h5 className="modal-title">Annuler la commande</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCancelModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>Êtes-vous sûr de vouloir annuler cette commande ?</p>
                <p className="text-muted small mb-0">
                  Cette action est irréversible. Le prestataire sera notifié de l'annulation.
                </p>
              </div>
              <div className="modal-footer" style={{ borderTop: "1px solid #f0f0f0" }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCancelModal(false)}
                >
                  Non, garder
                </Button>
                <button
                  type="button"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#e53935",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 16px"
                  }}
                  onClick={confirmCancel}
                >
                  Oui, annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerOrders;

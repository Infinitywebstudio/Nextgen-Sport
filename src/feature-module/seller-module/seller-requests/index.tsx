import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/nextgen/Button";

// Types pour les demandes reçues
interface Request {
  id: string;
  title: string;
  category: string;
  description: string;
  budget: string;
  createdAt: string;
  status: "nouvelle" | "en_cours" | "acceptee" | "refusee";
  clientName: string;
  clientAvatar: string;
}

// Données fictives pour le développement
const mockRequests: Request[] = [
  {
    id: "1",
    title: "Recherche plombier pour réparation fuite",
    category: "Plomberie",
    description: "J'ai une fuite sous l'évier de ma cuisine qui nécessite une intervention rapide.",
    budget: "50-100€",
    createdAt: "2026-01-18",
    status: "nouvelle",
    clientName: "Marie Dupont",
    clientAvatar: "assets/img/user/user-01.jpg",
  },
  {
    id: "2",
    title: "Ménage appartement 3 pièces",
    category: "Ménage",
    description: "Nettoyage complet d'un appartement de 65m² avant déménagement.",
    budget: "80-120€",
    createdAt: "2026-01-15",
    status: "en_cours",
    clientName: "Pierre Martin",
    clientAvatar: "assets/img/user/user-02.jpg",
  },
  {
    id: "3",
    title: "Installation étagères murales",
    category: "Bricolage",
    description: "Pose de 3 étagères murales dans le salon.",
    budget: "40-60€",
    createdAt: "2026-01-10",
    status: "acceptee",
    clientName: "Sophie Bernard",
    clientAvatar: "assets/img/user/user-03.jpg",
  },
  {
    id: "4",
    title: "Cours de mathématiques niveau lycée",
    category: "Cours particuliers",
    description: "Recherche professeur pour cours de maths, 2h par semaine.",
    budget: "25-35€/h",
    createdAt: "2026-01-05",
    status: "refusee",
    clientName: "Jean Durand",
    clientAvatar: "assets/img/user/user-04.jpg",
  },
];

const SellerRequests = () => {
  const [activeTab, setActiveTab] = useState<"nouvelle" | "en_cours" | "acceptee" | "refusee">("nouvelle");

  const filteredRequests = mockRequests.filter(
    (request) => request.status === activeTab
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nouvelle":
        return { bg: "#e3f2fd", color: "#1976d2" };
      case "en_cours":
        return { bg: "#fff8e1", color: "#f9a825" };
      case "acceptee":
        return { bg: "#e8f5e9", color: "#43a047" };
      case "refusee":
        return { bg: "#ffebee", color: "#e53935" };
      default:
        return { bg: "#f5f5f5", color: "#666" };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "nouvelle":
        return "Nouvelle";
      case "en_cours":
        return "En cours";
      case "acceptee":
        return "Acceptée";
      case "refusee":
        return "Refusée";
      default:
        return status;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "24px 32px" }}>
        {/* Onglets style NEXTGEN */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant={activeTab === "nouvelle" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("nouvelle")}
            >
              Nouvelles
            </Button>
            <Button
              variant={activeTab === "en_cours" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("en_cours")}
            >
              En cours
            </Button>
            <Button
              variant={activeTab === "acceptee" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("acceptee")}
            >
              Acceptées
            </Button>
            <Button
              variant={activeTab === "refusee" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("refusee")}
            >
              Refusées
            </Button>
          </div>
        </div>

        {/* Contenu */}
        {filteredRequests.length === 0 ? (
          <div className="text-center py-5">
            <i className="ti ti-file-text fs-1 text-muted mb-3 d-block" />
            <h5>Aucune demande {getStatusLabel(activeTab).toLowerCase()}</h5>
            <p className="text-muted">
              Les demandes des clients apparaîtront ici.
            </p>
          </div>
        ) : (
          <div className="row">
            {filteredRequests.map((request) => (
              <div key={request.id} className="col-lg-6 col-xl-4 mb-4">
                <div
                  className="h-100"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    padding: "20px",
                    transition: "box-shadow 0.2s ease"
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        color: "#666"
                      }}
                    >
                      {request.category}
                    </span>
                    <span
                      style={{
                        backgroundColor: getStatusColor(request.status).bg,
                        padding: "5px 12px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        color: getStatusColor(request.status).color
                      }}
                    >
                      {getStatusLabel(request.status)}
                    </span>
                  </div>

                  <h6 className="mb-2" style={{ fontSize: "16px", fontWeight: 600 }}>
                    {request.title}
                  </h6>
                  <p className="text-muted mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    {request.description.length > 80
                      ? `${request.description.substring(0, 80)}...`
                      : request.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <span style={{ color: "#FF6961", fontWeight: 600, fontSize: "15px" }}>{request.budget}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={request.clientAvatar}
                        alt={request.clientName}
                        style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                      />
                      <span style={{ color: "#666", fontSize: "13px" }}>{request.clientName}</span>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center pt-3"
                    style={{ borderTop: "1px solid #f5f5f5" }}
                  >
                    <span style={{ color: "#999", fontSize: "13px" }}>
                      {formatDate(request.createdAt)}
                    </span>
                    <div className="d-flex gap-2">
                      {request.status === "nouvelle" && (
                        <>
                          <Button variant="ghost" size="sm">
                            Refuser
                          </Button>
                          <Button variant="primary" size="sm">
                            Accepter
                          </Button>
                        </>
                      )}
                      {request.status !== "nouvelle" && (
                        <Link
                          to="#"
                          style={{
                            color: "#FF6961",
                            fontSize: "14px",
                            fontWeight: 500,
                            textDecoration: "none"
                          }}
                        >
                          Voir détails
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerRequests;

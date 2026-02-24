import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/nextgen/Button";
import NewRequestForm from './NewRequestForm'; // New import

// Types pour les demandes
interface Request {
  id: string;
  title: string;
  category: string;
  description: string;
  budget: string;
  createdAt: string;
  status: "en_cours" | "terminee";
  responses: number;
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
    status: "en_cours",
    responses: 3,
  },
  {
    id: "2",
    title: "Ménage appartement 3 pièces",
    category: "Ménage",
    description: "Nettoyage complet d'un appartement de 65m² avant déménagement.",
    budget: "80-120€",
    createdAt: "2026-01-15",
    status: "en_cours",
    responses: 5,
  },
  {
    id: "3",
    title: "Installation étagères murales",
    category: "Bricolage",
    description: "Pose de 3 étagères murales dans le salon.",
    budget: "40-60€",
    createdAt: "2026-01-10",
    status: "terminee",
    responses: 2,
  },
  {
    id: "4",
    title: "Cours de mathématiques niveau lycée",
    category: "Cours particuliers",
    description: "Recherche professeur pour cours de maths, 2h par semaine.",
    budget: "25-35€/h",
    createdAt: "2026-01-05",
    status: "terminee",
    responses: 4,
  },
];

const BuyerRequests = () => {
  const [activeTab, setActiveTab] = useState<"en_cours" | "terminee">("en_cours");
  const [showModal, setShowModal] = useState(false); // New state for modal visibility

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

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "24px 32px" }}>
        {/* Onglets style NEXTGEN */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex gap-2">
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
          <Button
            variant="primary"
            size="sm"
            icon={<i className="ti ti-plus" />}
            iconPosition="left"
            onClick={() => setShowModal(true)} // Added onClick to open modal
          >
            Nouvelle demande
          </Button>
        </div>

        {/* Contenu */}
        {filteredRequests.length === 0 ? (
          <div className="text-center py-5">
            <i className="ti ti-file-text fs-1 text-muted mb-3 d-block" />
            <h5>Aucune demande {activeTab === "en_cours" ? "en cours" : "terminée"}</h5>
            <p className="text-muted">
              {activeTab === "en_cours"
                ? "Créez une nouvelle demande pour trouver un prestataire."
                : "Vos demandes terminées apparaîtront ici."}
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
                        backgroundColor: request.status === "en_cours" ? "#fff8e1" : "#e8f5e9",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        color: request.status === "en_cours" ? "#f9a825" : "#43a047"
                      }}
                    >
                      {request.status === "en_cours" ? "En cours" : "Terminée"}
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
                    <div style={{ color: "#999", fontSize: "14px" }}>
                      {request.responses} réponse{request.responses > 1 ? "s" : ""}
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center pt-3"
                    style={{ borderTop: "1px solid #f5f5f5" }}
                  >
                    <span style={{ color: "#999", fontSize: "13px" }}>
                      {formatDate(request.createdAt)}
                    </span>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showModal && ( // Conditional rendering of the modal
        <NewRequestForm
          onClose={() => setShowModal(false)}
          onSubmit={(formData) => {
            console.log('Nouvelle demande soumise:', formData);
            // Ici, vous intégreriez la logique pour envoyer la demande au backend
            // Pour l'instant, on ferme juste la modale
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default BuyerRequests;

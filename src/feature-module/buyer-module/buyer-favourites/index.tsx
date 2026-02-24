import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";
import type { ServiceCardProps } from "../../../components/ServiceCard";

// Données fictives pour les favoris (même format que mockServices)
const mockFavorites: Omit<ServiceCardProps, 'onFavorite' | 'onClick' | 'onContact'>[] = [
  {
    id: 1,
    category: 'Plomberie',
    rating: 4.8,
    reviewCount: 127,
    seller: {
      name: 'Marc Weber',
      avatar: 'https://i.pravatar.cc/150?img=12',
      location: 'Luxembourg-Ville',
      isTopPrestataire: true,
    },
    price: '35€',
  },
  {
    id: 2,
    category: 'Électricité',
    rating: 5.0,
    reviewCount: 89,
    seller: {
      name: 'Sophie Müller',
      avatar: 'https://i.pravatar.cc/150?img=47',
      location: 'Esch-sur-Alzette',
      isTopPrestataire: true,
    },
    price: '40€',
  },
  {
    id: 3,
    category: 'Ménage',
    rating: 4.6,
    reviewCount: 203,
    seller: {
      name: 'Thomas Schmit',
      avatar: 'https://i.pravatar.cc/150?img=33',
      location: 'Differdange',
      isTopPrestataire: false,
    },
    price: '15€',
  },
  {
    id: 4,
    category: 'Baby-sitting',
    rating: 4.9,
    reviewCount: 56,
    seller: {
      name: 'Laura Becker',
      avatar: 'https://i.pravatar.cc/150?img=27',
      location: 'Dudelange',
      isTopPrestataire: true,
    },
    price: '12€',
  },
  {
    id: 6,
    category: 'Coiffure à domicile',
    rating: 4.8,
    reviewCount: 178,
    seller: {
      name: 'Claire Fontaine',
      avatar: 'https://i.pravatar.cc/150?img=45',
      location: 'Pétange',
      isTopPrestataire: true,
    },
    price: '25€',
  },
  {
    id: 7,
    category: 'Dépannage informatique',
    rating: 4.9,
    reviewCount: 92,
    seller: {
      name: 'Nicolas Klein',
      avatar: 'https://i.pravatar.cc/150?img=52',
      location: 'Schifflange',
      isTopPrestataire: true,
    },
    price: '45€',
  },
];

const BuyerFavourites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(mockFavorites);

  const handleFavorite = (serviceId: number) => {
    // Retirer le prestataire des favoris
    setFavorites(favorites.filter(f => f.id !== serviceId));
  };

  const handleServiceClick = (serviceId: number) => {
    // Rediriger vers le profil prestataire
    navigate(`/gigs/provider/${serviceId}`);
  };

  const handleContact = (serviceId: number) => {
    console.log('Contacter le prestataire:', serviceId);
    // TODO: Ouvrir une modal de contact ou rediriger vers la messagerie
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="mb-1">Mes favoris</h4>
            <p className="text-muted mb-0">
              {favorites.length} prestataire{favorites.length > 1 ? "s" : ""} enregistré{favorites.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Liste des favoris */}
        {favorites.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>❤️</div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
              Aucun favori
            </h3>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
              Vous n'avez pas encore ajouté de prestataires à vos favoris.
            </p>
            <Link
              to="/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: '#ff6961',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Trouver des prestataires
            </Link>
          </div>
        ) : (
          <div className="row" style={{ rowGap: '24px' }}>
            {favorites.map((service) => (
              <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                <ServiceCard
                  {...service}
                  onFavorite={handleFavorite}
                  onClick={handleServiceClick}
                  onContact={handleContact}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerFavourites;

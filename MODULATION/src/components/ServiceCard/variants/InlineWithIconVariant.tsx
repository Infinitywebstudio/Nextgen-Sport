import { useState } from 'react';
import { Heart, MapPin, MessageCircle, Star } from 'lucide-react';

export interface ServiceCardProps {
  id: number;
  category: string;
  rating: number;
  reviewCount: number;
  seller: {
    name: string;
    avatar: string;
    location: string;
    isTopPrestataire?: boolean;
  };
  price: string;
  onFavorite?: (id: number) => void;
  onClick?: (id: number) => void;
  onContact?: (id: number) => void;
}

export default function ServiceCard({
  id,
  category,
  rating,
  reviewCount,
  seller,
  price,
  onFavorite,
  onClick,
  onContact,
}: ServiceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.(id);
  };

  const handleContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    onContact?.(id);
  };

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s'
      }}
    >
      {/* Photo de profil du prestataire */}
      <div style={{
        position: 'relative',
        height: '256px',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
      }}>
        <img
          src={seller.avatar}
          alt={seller.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.3s'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Avatar';
          }}
        />

        {/* Badge Top prestataire */}
        {seller.isTopPrestataire && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span style={{
              color: 'white',
              fontSize: '12px',
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: '#ff6961'
            }}>
              Top prestataire
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '8px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isFavorited ? '#ef4444' : 'rgba(255,255,255,0.9)',
            color: isFavorited ? 'white' : '#374151',
            transition: 'all 0.3s'
          }}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={18}
            fill={isFavorited ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </button>

        {/* Nom du prestataire sur la photo */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '16px'
        }}>
          <h4 style={{ color: 'white', fontWeight: '600', fontSize: '18px', marginBottom: '4px' }}>
            {seller.name}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
            <MapPin size={14} />
            {seller.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '16px' }}>
        {/* Catégorie mise en avant */}
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}>
          {category}
        </h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
          <Star size={16} fill="#FFA500" stroke="#FFA500" />
          <span style={{ fontWeight: '600', color: '#111827' }}>
            {rating.toFixed(1)}
          </span>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>
            ({reviewCount} avis)
          </span>
        </div>

        {/* Footer - Prix & Bouton Contact */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid #e5e7eb'
        }}>
          {/* Tarif horaire */}
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
              {price}
              <span style={{ fontSize: '16px', fontWeight: 'normal', color: '#6b7280' }}>/h</span>
            </div>
          </div>

          {/* Bouton Demander un service */}
          <button
            onClick={handleContact}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#ff6961',
              transition: 'opacity 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MessageCircle size={16} />
            Demander un service
          </button>
        </div>
      </div>
    </div>
  );
}

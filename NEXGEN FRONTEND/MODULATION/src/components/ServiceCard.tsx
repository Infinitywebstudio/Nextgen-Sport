import { useState } from 'react';
import { Heart, MapPin, ShoppingCart, Star } from 'lucide-react';

export interface ServiceCardProps {
  id: number;
  category: string;
  rating: number;
  reviewCount: number;
  seller: {
    name: string;
    avatar: string;
    location: string;
    isTopPrestataire?: boolean; // Badge "Top prestataire"
  };
  price: string;
  onFavorite?: (id: number) => void;
  onClick?: (id: number) => void;
  onRequestService?: (id: number) => void; // Callback pour demander un service
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
  onRequestService,
}: ServiceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.(id);
  };

  const handleRequestService = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRequestService?.(id);
  };

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <div
      className="bg-white dark:bg-bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Photo de profil du prestataire */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-bg-tertiary dark:to-bg-secondary">
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Avatar';
          }}
        />

        {/* Badge Top prestataire */}
        {seller.isTopPrestataire && (
          <div className="absolute top-3 left-3">
            <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#ff6961' }}>
              Top prestataire
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            isFavorited
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
          }`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={18}
            fill={isFavorited ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </button>

        {/* Nom du prestataire sur la photo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h4 className="text-white font-semibold text-lg">{seller.name}</h4>
          <div className="flex items-center gap-1 text-white/90 text-sm">
            <MapPin size={14} />
            {seller.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Catégorie mise en avant */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-3">
          {category}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star size={16} fill="#FFA500" stroke="#FFA500" />
          <span className="font-semibold text-gray-900 dark:text-text-primary">
            {rating.toFixed(1)}
          </span>
          <span className="text-gray-500 dark:text-text-secondary text-sm">
            ({reviewCount} avis)
          </span>
        </div>

        {/* Footer - Prix & Bouton Contact */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-border">
          {/* Tarif horaire */}
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-text-primary">
              {price}<span className="text-base font-normal text-gray-500 dark:text-text-secondary">/h</span>
            </div>
          </div>

          {/* Bouton Demander un service */}
          <button
            onClick={handleRequestService}
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: '#ff6961' }}
          >
            Demander un service
          </button>
        </div>
      </div>
    </div>
  );
}

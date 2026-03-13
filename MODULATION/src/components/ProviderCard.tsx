import { useState } from 'react';
import { Heart, MapPin, MessageCircle, Star } from 'lucide-react';

export type ProviderCardVariant = 'default' | 'variant1' | 'compact' | 'detailed' | 'horizontal';

// Mapping catégorie → titre de profession
const categoryToProfession: Record<string, string> = {
  // Services à la personne
  'Bricolage': 'Bricoleur',
  'Déménagement': 'Déménageur',
  'Baby-sitting': 'Baby-sitter',
  'Babysitting': 'Baby-sitter',
  'Jardinage': 'Jardinier',
  'Plomberie': 'Plombier',
  'Électricité': 'Électricien',
  'Electricité': 'Électricien',
  'Peinture': 'Peintre',
  'Coiffure à domicile': 'Coiffeur',
  'Coiffure': 'Coiffeur',
  'Réparation': 'Réparateur',
  'Cuisine': 'Cuisinier',
  'Informatique': 'Technicien informatique',
  'Aide informatique': 'Technicien informatique',
  'Dépannage informatique': 'Technicien informatique',
  'Cours particuliers': 'Professeur particulier',
  'Soutien scolaire': 'Professeur particulier',
  'Garde d\'animaux': 'Pet-sitter',
  'Animaux': 'Pet-sitter',
  // Services digitaux
  'Développement Web & Mobile': 'Développeur',
  'Sites Web WordPress': 'Développeur WordPress',
  'Applications React/Vue': 'Développeur Frontend',
  'Applications Mobiles iOS/Android': 'Développeur Mobile',
  'Design Graphique & Créatif': 'Designer',
  'Logo & Identité Visuelle': 'Graphiste',
  'Design UI/UX': 'Designer UI/UX',
  'Montage Vidéo': 'Monteur vidéo',
  'Motion Design': 'Motion Designer',
  'Rédaction Web & SEO': 'Rédacteur Web',
  'Traduction FR/EN/DE': 'Traducteur',
  'Comptabilité & Finance': 'Comptable',
  'Formation & Coaching': 'Coach',
};

// Fonction pour obtenir le titre de profession depuis la catégorie
const getProfessionTitle = (category: string): string => {
  return categoryToProfession[category] || '';
};

export interface ProviderCardProps {
  id: number;
  name: string;
  avatar: string;
  category: string;
  location: string;
  distance?: string;
  rating: number;
  reviewCount: number;
  price: string;
  isTopPrestataire?: boolean;
  variant?: ProviderCardVariant;
  onFavorite?: (id: number) => void;
  onClick?: (id: number) => void;
  onContact?: (id: number) => void;
}

export default function ProviderCard({
  id,
  name,
  avatar,
  category,
  location,
  distance,
  rating,
  reviewCount,
  price,
  isTopPrestataire = false,
  variant = 'default',
  onFavorite,
  onClick,
  onContact,
}: ProviderCardProps) {
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

  // ============================================
  // VARIANT 1
  // ============================================
  if (variant === 'variant1') {
    return (
      <div
        onClick={handleClick}
        className="provider-card provider-card--variant1"
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s'
        }}
      >
        {/* Photo */}
        <div
          className="provider-card__image"
          style={{
            position: 'relative',
            height: '250px',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
          }}
        >
          <img
            src={avatar}
            alt={name}
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
          {isTopPrestataire && (
            <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
              <span
                className="provider-card__badge"
                style={{
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  backgroundColor: '#ff6961'
                }}
              >
                Top prestataire
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="provider-card__favorite"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              padding: 0,
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: isFavorited ? '#ef4444' : 'rgba(255,255,255,0.9)',
              color: isFavorited ? 'white' : '#374151',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart
              size={18}
              fill={isFavorited ? 'currentColor' : 'none'}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Content */}
        <div className="provider-card__content" style={{ padding: '16px' }}>
          {/* Ligne 1: Nom + Profession / Reviews */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '8px',
              minHeight: '40px'
            }}
          >
            <div style={{ minHeight: '40px' }}>
              <h4
                className="provider-card__name"
                style={{
                  fontWeight: '600',
                  fontSize: '16px',
                  color: '#111827',
                  margin: 0,
                  lineHeight: '1.25'
                }}
              >
                {name}
              </h4>
              <span
                className="provider-card__profession"
                style={{
                  color: '#6b7280',
                  fontSize: '14px',
                  lineHeight: '1.25',
                  display: 'block',
                  minHeight: '18px'
                }}
              >
                {getProfessionTitle(category)}
              </span>
            </div>
            <div
              className="provider-card__rating"
              style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0, fontSize: '14px' }}
            >
              <Star size={14} fill="#FFA500" stroke="#FFA500" />
              <span style={{ fontWeight: '600', color: '#111827' }}>
                {rating.toFixed(1)}
              </span>
              <span style={{ color: '#6b7280' }}>
                ({reviewCount})
              </span>
            </div>
          </div>

          {/* Ligne 2: Prix + Distance ou Ville */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827' }}>
              {price}<span style={{ fontSize: '14px', fontWeight: 'normal', color: '#6b7280' }}>/h</span>
            </span>
            <div
              className={distance ? 'provider-card__distance' : 'provider-card__location'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#6b7280',
                fontSize: '14px',
                minWidth: '60px',
                justifyContent: 'flex-end'
              }}
            >
              {/* Affiche distance si fournie, sinon affiche la ville */}
              {distance ? (
                <>
                  <MapPin size={14} />
                  {distance}
                </>
              ) : location ? (
                <>
                  <MapPin size={14} />
                  {location}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // DEFAULT VARIANT
  // ============================================
  return (
    <div
      onClick={handleClick}
      className={`provider-card provider-card--${variant}`}
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
      <div
        className="provider-card__image"
        style={{
          position: 'relative',
          height: '256px',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
        }}
      >
        <img
          src={avatar}
          alt={name}
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
        {isTopPrestataire && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span
              className="provider-card__badge"
              style={{
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
                padding: '6px 12px',
                borderRadius: '9999px',
                backgroundColor: '#ff6961'
              }}
            >
              Top prestataire
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="provider-card__favorite"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isFavorited ? '#ef4444' : 'rgba(255,255,255,0.9)',
            color: isFavorited ? 'white' : '#374151',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart
            size={18}
            fill={isFavorited ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </button>

        {/* Nom du prestataire sur la photo */}
        <div
          className="provider-card__overlay"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            padding: '16px'
          }}
        >
          <h4
            className="provider-card__name"
            style={{ color: 'white', fontWeight: '600', fontSize: '18px', marginBottom: '4px' }}
          >
            {name}
          </h4>
          <div
            className="provider-card__location"
            style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}
          >
            <MapPin size={14} />
            {location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="provider-card__content" style={{ padding: '16px' }}>
        {/* Catégorie mise en avant */}
        <h3
          className="provider-card__category"
          style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}
        >
          {category}
        </h3>

        {/* Rating */}
        <div
          className="provider-card__rating"
          style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}
        >
          <Star size={16} fill="#FFA500" stroke="#FFA500" />
          <span style={{ fontWeight: '600', color: '#111827' }}>
            {rating.toFixed(1)}
          </span>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>
            ({reviewCount} avis)
          </span>
        </div>

        {/* Footer - Prix & Bouton Contact */}
        <div
          className="provider-card__footer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid #e5e7eb'
          }}
        >
          {/* Tarif horaire */}
          <div className="provider-card__price">
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
              {price}
              <span style={{ fontSize: '16px', fontWeight: 'normal', color: '#6b7280' }}>/h</span>
            </div>
          </div>

          {/* Bouton Demander un service */}
          <button
            onClick={handleContact}
            className="provider-card__contact-btn"
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
            Contacter
          </button>
        </div>
      </div>
    </div>
  );
}

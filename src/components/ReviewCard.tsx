import { Star } from 'lucide-react';

export interface ReviewCardProps {
  id: number;
  reviewer: {
    name: string;
    avatar: string;
  };
  rating: number; // 1-5
  date: string; // ex: "2 jours" ou "1 semaine"
  comment: string;
}

export default function ReviewCard({
  reviewer,
  rating,
  date,
  comment,
}: ReviewCardProps) {
  // Générer les étoiles
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          fill={i <= rating ? '#fbbf24' : 'none'}
          color={i <= rating ? '#fbbf24' : '#d1d5db'}
        />
      );
    }
    return stars;
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'box-shadow 0.3s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Avatar */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={reviewer.avatar}
            alt={reviewer.name}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Contenu */}
        <div style={{ flex: 1 }}>
          {/* En-tête */}
          <div style={{ marginBottom: '8px' }}>
            <h6 style={{
              fontWeight: '600',
              fontSize: '16px',
              color: '#111827',
              marginBottom: '4px'
            }}>
              {reviewer.name}
            </h6>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              {/* Étoiles */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {renderStars()}
              </div>
              {/* Note */}
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }}>
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Commentaire */}
          <p style={{
            color: '#374151',
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '8px'
          }}>
            {comment}
          </p>

          {/* Date */}
          <span style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>
            Il y a {date}
          </span>
        </div>
      </div>
    </div>
  );
}

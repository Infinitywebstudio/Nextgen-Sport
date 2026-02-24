import { Star } from 'lucide-react';

export interface RatingDistribution {
  rating: number; // 1-5
  count: number;
  percentage: number; // 0-100
}

export interface ReviewStatsCardProps {
  averageRating: number; // ex: 4.8
  totalReviews: number; // ex: 127
  ratingDistribution: RatingDistribution[]; // [5★, 4★, 3★, 2★, 1★]
}

export default function ReviewStatsCard({
  averageRating,
  totalReviews,
  ratingDistribution,
}: ReviewStatsCardProps) {
  // Trier par rating décroissant (5★ en premier)
  const sortedDistribution = [...ratingDistribution].sort((a, b) => b.rating - a.rating);

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '32px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '24px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '32px',
        alignItems: 'center'
      }}>
        {/* Note moyenne (gauche) */}
        <div style={{
          textAlign: 'center',
          padding: '0 32px',
          borderRight: '1px solid #e5e7eb'
        }}>
          <div style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#111827',
            lineHeight: '1',
            marginBottom: '8px'
          }}>
            {averageRating.toFixed(1)}
          </div>

          {/* Étoiles */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            marginBottom: '8px'
          }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                fill={star <= Math.round(averageRating) ? '#fbbf24' : 'none'}
                color={star <= Math.round(averageRating) ? '#fbbf24' : '#d1d5db'}
              />
            ))}
          </div>

          <div style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            {totalReviews} avis
          </div>
        </div>

        {/* Barres de distribution (droite) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {sortedDistribution.map((item) => (
            <div
              key={item.rating}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr 50px',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              {/* Label (5★, 4★, etc.) */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827'
              }}>
                {item.rating}
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
              </div>

              {/* Barre de progression */}
              <div style={{
                height: '8px',
                backgroundColor: '#f3f4f6',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  height: '100%',
                  backgroundColor: '#fbbf24',
                  width: `${item.percentage}%`,
                  transition: 'width 0.3s ease'
                }} />
              </div>

              {/* Nombre d'avis */}
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                textAlign: 'right'
              }}>
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

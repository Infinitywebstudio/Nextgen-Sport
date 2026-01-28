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
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i + 1 <= rating ? 'text-amber-400' : 'text-gray-300'}
        fill={i + 1 <= rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={reviewer.avatar}
            alt={reviewer.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1">
          {/* En-tête */}
          <div className="mb-2">
            <h6 className="font-semibold text-base text-gray-900 mb-1">
              {reviewer.name}
            </h6>
            <div className="flex items-center gap-2 mt-1">
              {/* Étoiles */}
              <div className="flex gap-1">
                {renderStars()}
              </div>
              {/* Note */}
              <span className="text-sm font-medium text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Commentaire */}
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {comment}
          </p>

          {/* Date */}
          <span className="text-xs text-gray-500">
            Il y a {date}
          </span>
        </div>
      </div>
    </div>
  );
}

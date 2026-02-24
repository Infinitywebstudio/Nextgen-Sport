import type { ReviewStatsCardProps } from './ReviewStatsCard';

// Statistiques de Marc Weber (Plombier)
export const marcWeberStats: ReviewStatsCardProps = {
  averageRating: 4.8,
  totalReviews: 127,
  ratingDistribution: [
    { rating: 5, count: 98, percentage: 77.2 },  // 98/127 = 77.2%
    { rating: 4, count: 21, percentage: 16.5 },  // 21/127 = 16.5%
    { rating: 3, count: 6, percentage: 4.7 },    // 6/127 = 4.7%
    { rating: 2, count: 2, percentage: 1.6 },    // 2/127 = 1.6%
    { rating: 1, count: 0, percentage: 0 },      // 0/127 = 0%
  ],
};

// Statistiques de Sophie Laurent (Électricienne)
export const sophieLaurentStats: ReviewStatsCardProps = {
  averageRating: 4.9,
  totalReviews: 203,
  ratingDistribution: [
    { rating: 5, count: 178, percentage: 87.7 },
    { rating: 4, count: 19, percentage: 9.4 },
    { rating: 3, count: 4, percentage: 2.0 },
    { rating: 2, count: 2, percentage: 1.0 },
    { rating: 1, count: 0, percentage: 0 },
  ],
};

// Statistiques de Jean Muller (Peintre)
export const jeanMullerStats: ReviewStatsCardProps = {
  averageRating: 4.6,
  totalReviews: 89,
  ratingDistribution: [
    { rating: 5, count: 61, percentage: 68.5 },
    { rating: 4, count: 18, percentage: 20.2 },
    { rating: 3, count: 7, percentage: 7.9 },
    { rating: 2, count: 2, percentage: 2.2 },
    { rating: 1, count: 1, percentage: 1.1 },
  ],
};

// Statistiques de Marie Schneider (Femme de ménage)
export const marieSchneiderStats: ReviewStatsCardProps = {
  averageRating: 5.0,
  totalReviews: 42,
  ratingDistribution: [
    { rating: 5, count: 42, percentage: 100 },
    { rating: 4, count: 0, percentage: 0 },
    { rating: 3, count: 0, percentage: 0 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 },
  ],
};

// Statistiques de Thomas Becker (Jardinier)
export const thomasBeckerStats: ReviewStatsCardProps = {
  averageRating: 4.3,
  totalReviews: 156,
  ratingDistribution: [
    { rating: 5, count: 87, percentage: 55.8 },
    { rating: 4, count: 43, percentage: 27.6 },
    { rating: 3, count: 18, percentage: 11.5 },
    { rating: 2, count: 6, percentage: 3.8 },
    { rating: 1, count: 2, percentage: 1.3 },
  ],
};

// Statistiques de Claire Dupont (Baby-sitter)
export const claireDupontStats: ReviewStatsCardProps = {
  averageRating: 4.7,
  totalReviews: 78,
  ratingDistribution: [
    { rating: 5, count: 58, percentage: 74.4 },
    { rating: 4, count: 15, percentage: 19.2 },
    { rating: 3, count: 4, percentage: 5.1 },
    { rating: 2, count: 1, percentage: 1.3 },
    { rating: 1, count: 0, percentage: 0 },
  ],
};

export const allReviewStats: ReviewStatsCardProps[] = [
  marcWeberStats,
  sophieLaurentStats,
  jeanMullerStats,
  marieSchneiderStats,
  thomasBeckerStats,
  claireDupontStats,
];

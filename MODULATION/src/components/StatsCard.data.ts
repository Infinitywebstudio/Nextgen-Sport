import { Eye, ShoppingCart, TrendingUp, Star } from 'lucide-react';
import type { StatsCardProps } from './StatsCard';

export const mockStats: Omit<StatsCardProps, 'icon'>[] = [
  {
    title: 'Vues totales',
    value: '2,847',
    trend: {
      value: 12.5,
      isPositive: true,
    },
    subtitle: 'vs mois dernier',
    color: 'blue',
  },
  {
    title: 'Commandes',
    value: 156,
    trend: {
      value: 8.2,
      isPositive: true,
    },
    subtitle: 'ce mois',
    color: 'green',
  },
  {
    title: 'Revenus',
    value: '5,460€',
    trend: {
      value: 15.3,
      isPositive: true,
    },
    subtitle: 'ce mois',
    color: 'orange',
  },
  {
    title: 'Note moyenne',
    value: '4.8',
    trend: {
      value: 2.1,
      isPositive: true,
    },
    subtitle: 'sur 127 avis',
    color: 'purple',
  },
];

export const statsIcons = {
  views: Eye,
  orders: ShoppingCart,
  revenue: TrendingUp,
  rating: Star,
};

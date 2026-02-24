import { FileText, ShoppingCart, Package, XCircle } from 'lucide-react';
import type { OrderStatsCardProps } from './OrderStatsCard';

export const mockOrderStats: Omit<OrderStatsCardProps, 'icon'>[] = [
  {
    title: 'Commandes Actives',
    value: 454,
    iconColor: '#22c55e', // Green
    iconBgColor: '#dcfce7', // Light green
  },
  {
    title: 'Commande en cours',
    value: 47,
    iconColor: '#f59e0b', // Orange
    iconBgColor: '#fef3c7', // Light orange
  },
  {
    title: 'Commandes terminées',
    value: 25,
    iconColor: '#3b82f6', // Blue
    iconBgColor: '#dbeafe', // Light blue
  },
  {
    title: 'Commandes Annulées',
    value: 632,
    iconColor: '#ef4444', // Red
    iconBgColor: '#fee2e2', // Light red
  },
];

export const orderStatsIcons = {
  active: FileText,
  inProgress: ShoppingCart,
  completed: Package,
  cancelled: XCircle,
};

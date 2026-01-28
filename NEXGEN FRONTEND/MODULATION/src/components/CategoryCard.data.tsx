import React from 'react';
import {
  Wrench,
  Zap,
  Sparkles,
  Baby,
  Leaf,
  Paintbrush,
  Package,
  Hammer,
  ChefHat,
  Laptop
} from 'lucide-react';

// Données de test avec icônes Lucide (outline style)
export const mockCategoryCards = [
  {
    id: '1',
    name: 'Plomberie',
    serviceCount: 156,
    icon: <Wrench size={40} strokeWidth={1.5} />,
  },
  {
    id: '2',
    name: 'Électricité',
    serviceCount: 203,
    icon: <Zap size={40} strokeWidth={1.5} />,
  },
  {
    id: '3',
    name: 'Ménage',
    serviceCount: 89,
    icon: <Sparkles size={40} strokeWidth={1.5} />,
  },
  {
    id: '4',
    name: 'Baby-sitting',
    serviceCount: 45,
    icon: <Baby size={40} strokeWidth={1.5} />,
  },
  {
    id: '5',
    name: 'Jardinage',
    serviceCount: 67,
    icon: <Leaf size={40} strokeWidth={1.5} />,
  },
  {
    id: '6',
    name: 'Peinture',
    serviceCount: 124,
    icon: <Paintbrush size={40} strokeWidth={1.5} />,
  },
  {
    id: '7',
    name: 'Déménagement',
    serviceCount: 38,
    icon: <Package size={40} strokeWidth={1.5} />,
  },
  {
    id: '8',
    name: 'Réparation',
    serviceCount: 91,
    icon: <Hammer size={40} strokeWidth={1.5} />,
  },
  {
    id: '9',
    name: 'Cuisine',
    serviceCount: 52,
    icon: <ChefHat size={40} strokeWidth={1.5} />,
  },
  {
    id: '10',
    name: 'Informatique',
    serviceCount: 178,
    icon: <Laptop size={40} strokeWidth={1.5} />,
  },
];

import type { ReviewCardProps } from './ReviewCard';

export const mockReviews: Omit<ReviewCardProps, 'id'>[] = [
  {
    reviewer: {
      name: 'Sophie Dupont',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    rating: 5,
    date: '2 jours',
    comment: 'J\'ai fait appel à ce plombier pour une fuite d\'eau urgente. Il est intervenu rapidement et a résolu le problème de manière professionnelle. Je recommande vivement ses services!',
  },
  {
    reviewer: {
      name: 'Thomas Müller',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    rating: 5,
    date: '1 semaine',
    comment: 'Un service impeccable du début à la fin. Le prestataire a bien compris mes besoins et a livré un travail de qualité dans les délais convenus. Communication excellente.',
  },
  {
    reviewer: {
      name: 'Marie Schneider',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    rating: 4,
    date: '3 jours',
    comment: 'Bon travail dans l\'ensemble. Le prestataire est compétent et à l\'écoute. Juste un petit retard sur le délai initial mais le résultat final est satisfaisant.',
  },
  {
    reviewer: {
      name: 'Jean-Luc Weber',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
    rating: 5,
    date: '2 semaines',
    comment: 'Travail soigné et prestataire très sympathique. Il a pris le temps de bien expliquer ce qu\'il faisait et a même donné des conseils pour l\'entretien. Prix correct.',
  },
  {
    reviewer: {
      name: 'Claire Laurent',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
    rating: 3,
    date: '1 mois',
    comment: 'Le travail est correct mais j\'attendais un peu mieux pour le prix. Le prestataire est ponctuel et respectueux, mais manque un peu d\'initiative.',
  },
  {
    reviewer: {
      name: 'Pierre Becker',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    rating: 5,
    date: '5 jours',
    comment: 'Exactement ce que je cherchais. Le prestataire est très professionnel, efficace et propose des tarifs raisonnables. Je ferai de nouveau appel à ses services sans hésiter.',
  },
];

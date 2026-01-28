// EXEMPLE D'UTILISATION DES COMPOSANTS NEXTGEN
// Ce fichier montre comment utiliser UserProfile et ReviewsCarousel

import UserProfile from './UserProfile';
import ReviewsCarousel from './ReviewsCarousel';

const ExampleUsage = () => {
  // Données exemple pour UserProfile
  const userProfileData = {
    name: "Jean Dupont",
    job: "Plombier Expert",
    location: "Nantes",
    rating: 4.8,
    hourlyRate: 45,
    experience: "12 ans",
    memberSince: "Membre depuis 2018",
    isTopProvider: true,
    description: "Plombier professionnel avec plus de 12 ans d'expérience. Spécialisé dans les installations sanitaires, réparations d'urgence et rénovations complètes. Je mets un point d'honneur à fournir un travail de qualité avec des matériaux durables.",
    engagements: [
      "Devis gratuit",
      "Intervention rapide",
      "Garantie 2 ans",
      "Matériaux de qualité"
    ],
    equipment: [
      "Caméra d'inspection",
      "Déboucheur haute pression",
      "Détecteur de fuite",
      "Outillage professionnel"
    ],
    totalReviews: 127,
    positiveReviews: 121,
    totalEvaluations: 127,
    reliability: {
      realization: 98,
      punctuality: 95
    },
    ratingDistribution: [
      { stars: 5, count: 95 },
      { stars: 4, count: 26 },
      { stars: 3, count: 4 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 }
    ],
    recentReviews: [
      {
        name: "Sety",
        location: "Thoaré-sur-Loire 44470",
        date: "Il y a 1 jour",
        service: "Réparation fuite",
        comment: "Nickel et à l'heure très sympathique merci beaucoup",
        rating: 5
      },
      {
        name: "Carolina",
        location: "Orvault 44700",
        date: "Il y a 15 jours",
        service: "Installation sanitaire",
        comment: "Super prestation je recommande vivement",
        rating: 5
      },
      {
        name: "Neko",
        location: "Nantes",
        date: "Il y a 1 mois",
        service: "Déboucher évac",
        comment: "Super !",
        rating: 5
      }
    ],
    identityVerified: true,
    emailVerified: true,
    phoneVerified: true,
    hasInsurance: true,
    insuranceAmount: "100 000 €",
    socialLinks: {
      facebook: "https://facebook.com/jeandupont",
      linkedin: "https://linkedin.com/in/jeandupont"
    },
    serviceRadius: 30,
    profileImage: "/assets/img/user/user-05.jpg"
  };

  // Données exemple pour ReviewsCarousel
  const reviewsData = [
    {
      name: "Sety",
      location: "Thoaré-sur-Loire 44470",
      date: "Il y a 1 jour",
      service: "Assemblage de meubles",
      comment: "Nickel et à l'heure très sympathique merci beaucoup",
      rating: 5
    },
    {
      name: "Carolina",
      location: "Orvault 44700",
      date: "Il y a 15 jours",
      service: "Faire les joints de la salle de bain",
      comment: "Super prestation je recommande vivement",
      rating: 5
    },
    {
      name: "Neko",
      location: "Nantes",
      date: "Il y a 1 jour",
      service: "Déboucher évac",
      comment: "Super !",
      rating: 5
    },
    {
      name: "Marie",
      location: "Nantes 44000",
      date: "Il y a 2 jours",
      service: "Réparation plomberie",
      comment: "Très professionnel, travail de qualité",
      rating: 5
    },
    {
      name: "Jean",
      location: "Saint-Nazaire 44600",
      date: "Il y a 3 jours",
      service: "Installation électrique",
      comment: "Rapide et efficace, je recommande",
      rating: 4
    }
  ];

  return (
    <div>
      {/* EXEMPLE 1: Page Profil Prestataire Complète */}
      <UserProfile {...userProfileData} />

      {/* EXEMPLE 2: Carousel d'avis seul (variant default) */}
      <div className="page-content content">
        <div className="container">
          <h2 className="mb-4">Derniers avis clients</h2>
          <ReviewsCarousel reviews={reviewsData} variant="default" />
        </div>
      </div>

      {/* EXEMPLE 3: Carousel d'avis dans profil (variant userProfile) */}
      <div className="page-content content">
        <div className="container">
          <h2 className="mb-4">Avis sur mon profil</h2>
          <ReviewsCarousel reviews={reviewsData} variant="userProfile" />
        </div>
      </div>
    </div>
  );
};

export default ExampleUsage;

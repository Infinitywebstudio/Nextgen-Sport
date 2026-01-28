/**
 * Page de Démonstration - Profil Prestataire NEXTGEN
 *
 * Version avec données de test (mockées) pour visualisation
 * sans connexion WordPress requise
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Heart, MessageCircle, Share2, Briefcase, Award, Clock, CheckCircle, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const ProviderProfileDemo = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Données de test du prestataire
  const provider = {
    id: 1,
    name: "Marc Weber",
    title: "Plombier Expert",
    avatar: "https://i.pravatar.cc/256?img=12",
    location: "Luxembourg-Ville, Luxembourg",
    rating: 4.8,
    reviewCount: 127,
    completedJobs: 243,
    responseTime: "2h",
    memberSince: "2022",
    isVerified: true,
    isTopProvider: true,
    hourlyRate: 45,
    description: "Plombier professionnel avec plus de 15 ans d'expérience. Spécialisé dans les installations sanitaires, réparations d'urgence et rénovations complètes. Service rapide et soigné garanti.",
    skills: ["Plomberie générale", "Installations sanitaires", "Réparations d'urgence", "Chauffage", "Débouchage"],
    languages: ["Français", "Luxembourgeois", "Allemand"],
    portfolio: [
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop",
    ]
  };

  // Avis de test
  const reviews = [
    {
      id: 1,
      author: "Sophie Muller",
      avatar: "https://i.pravatar.cc/48?img=5",
      rating: 5,
      date: "2025-01-15",
      comment: "Excellent travail! Marc a résolu mon problème de fuite en moins d'une heure. Très professionnel et prix raisonnable."
    },
    {
      id: 2,
      author: "Jean Dupont",
      avatar: "https://i.pravatar.cc/48?img=7",
      rating: 5,
      date: "2025-01-10",
      comment: "Très satisfait du service. Installation d'une nouvelle salle de bain impeccable. Je recommande vivement!"
    },
    {
      id: 3,
      author: "Marie Schmidt",
      avatar: "https://i.pravatar.cc/48?img=9",
      rating: 4,
      date: "2025-01-05",
      comment: "Bon plombier, ponctuel et efficace. Travail soigné. Juste un petit retard sur le rendez-vous initial."
    },
    {
      id: 4,
      author: "Pierre Lebrun",
      avatar: "https://i.pravatar.cc/48?img=11",
      rating: 5,
      date: "2024-12-28",
      comment: "Intervention d'urgence un dimanche matin. Marc est venu rapidement et a réparé la fuite. Très réactif!"
    },
    {
      id: 5,
      author: "Claire Dubois",
      avatar: "https://i.pravatar.cc/48?img=15",
      rating: 5,
      date: "2024-12-20",
      comment: "Parfait! Remplacement complet de la tuyauterie. Travail propre, explications claires. Top!"
    }
  ];

  // Stats d'avis
  const reviewStats = {
    averageRating: 4.8,
    totalReviews: 127,
    ratingDistribution: [
      { rating: 5, count: 98, percentage: 77 },
      { rating: 4, count: 22, percentage: 17 },
      { rating: 3, count: 5, percentage: 4 },
      { rating: 2, count: 2, percentage: 2 },
      { rating: 1, count: 0, percentage: 0 }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % provider.portfolio.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? provider.portfolio.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header avec badge DEMO */}
      <div className="bg-yellow-500 text-black text-center py-2 font-semibold">
        🎨 MODE DÉMONSTRATION - Données de test (WordPress non requis)
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Section Hero */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar et info principale */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-lg"
                />
                {provider.isVerified && (
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1.5">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* Détails prestataire */}
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {provider.name}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                    {provider.title}
                  </p>
                </div>
                {provider.isTopProvider && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Top prestataire
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {provider.location}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(provider.rating)}
                  <span className="font-semibold text-gray-900 dark:text-white ml-1">
                    {provider.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({provider.reviewCount} avis)
                  </span>
                </div>
              </div>

              {/* Stats rapides */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Missions</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {provider.completedJobs}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Réponse</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {provider.responseTime}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Membre</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {provider.memberSince}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">💰</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Tarif</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {provider.hourlyRate}€/h
                  </p>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3 flex-wrap">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition">
                  <MessageCircle className="w-5 h-5" />
                  Contacter
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition">
                  <ShoppingCart className="w-5 h-5" />
                  Commander
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`border-2 px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition ${
                    isFavorite
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
                  {isFavorite ? 'Favoris' : 'Ajouter'}
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition">
                  <Share2 className="w-5 h-5" />
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                À propos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {provider.description}
              </p>
            </div>

            {/* Compétences */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compétences
              </h2>
              <div className="flex flex-wrap gap-2">
                {provider.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Portfolio
              </h2>
              <div className="relative">
                <img
                  src={provider.portfolio[currentImageIndex]}
                  alt={`Portfolio ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {provider.portfolio.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Avis */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Avis clients ({reviewStats.totalReviews})
              </h2>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                    <div className="flex gap-4">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {review.author}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            {/* Stats d'avis */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Notes des clients
              </h3>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {reviewStats.averageRating}
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {renderStars(reviewStats.averageRating)}
                </div>
                <p className="text-sm text-gray-500">
                  {reviewStats.totalReviews} avis au total
                </p>
              </div>

              <div className="space-y-3">
                {reviewStats.ratingDistribution.map((dist) => (
                  <div key={dist.rating} className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">
                      {dist.rating} ★
                    </span>
                    <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-12 text-right">
                      {dist.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Langues parlées
              </h3>
              <div className="space-y-2">
                {provider.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfileDemo;

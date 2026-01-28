import ReviewsCarousel from '../../../../components/nextgen/ReviewsCarousel';
import ReviewsCarouselSimple from '../../../../components/nextgen/ReviewsCarouselSimple';

const ReviewsCarouselPage = () => {
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
    },
    {
      name: "Sophie",
      location: "Rezé 44400",
      date: "Il y a 1 semaine",
      service: "Peinture intérieure",
      comment: "Travail soigné et propre, très satisfaite",
      rating: 5
    }
  ];

  return (
    <div>
      <div className="mb-4">
        <h2>Reviews Carousel Component</h2>
        <p className="text-muted">
          Carrousel d'avis clients avec navigation par flèches (react-slick)
        </p>
      </div>

      {/* Version Simple pour debug */}
      <div className="mb-5">
        <h4 className="mb-3">Version Simple (Debug)</h4>
        <div className="card">
          <div className="card-body p-4">
            <ReviewsCarouselSimple reviews={reviewsData} variant="default" />
          </div>
        </div>
      </div>

      {/* Variant Default */}
      <div className="mb-5">
        <h4 className="mb-3">Variant: Default (3 slides)</h4>
        <div className="card">
          <div className="card-body p-4">
            <ReviewsCarousel reviews={reviewsData} variant="default" />
          </div>
        </div>
      </div>

      {/* Variant UserProfile */}
      <div className="mb-5">
        <h4 className="mb-3">Variant: User Profile (2 slides)</h4>
        <div className="card">
          <div className="card-body p-4">
            <ReviewsCarousel reviews={reviewsData} variant="userProfile" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-2">
          {'<ReviewsCarousel reviews={reviews} variant="default" />'}
        </code>
        <small>
          Le variant "default" affiche 3 avis par slide (desktop), "userProfile" en affiche 2.
        </small>
      </div>
    </div>
  );
};

export default ReviewsCarouselPage;

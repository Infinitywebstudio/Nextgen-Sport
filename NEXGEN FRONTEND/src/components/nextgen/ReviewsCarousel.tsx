import Slider from "react-slick";

interface Review {
  name: string;
  location: string;
  date: string;
  service: string;
  comment: string;
  rating: number;
}

interface ReviewsCarouselProps {
  reviews: Review[];
  variant?: 'default' | 'userProfile';
}

const ReviewsCarousel = ({ reviews, variant = 'default' }: ReviewsCarouselProps) => {

  // Configuration du carousel selon le variant
  const getSliderSettings = () => {
    const baseSettings = {
      dots: true,
      infinite: reviews.length > 3,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: variant === 'userProfile' ? 2 : 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    if (variant === 'userProfile') {
      return {
        ...baseSettings,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    }

    return baseSettings;
  };

  return (
    <div className={`reviews-carousel ${variant === 'userProfile' ? 'reviews-carousel-profile' : ''}`}>
      <Slider {...getSliderSettings()}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="card border h-100">
              <div className="card-body">
                {/* Header: Photo + Nom + Location + Date */}
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="d-flex align-items-start gap-2 flex-grow-1">
                    {/* Photo de profil */}
                    <span className="avatar avatar-sm flex-shrink-0">
                      <span className="avatar-title rounded-circle bg-light text-dark">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </span>
                    {/* Nom + Position */}
                    <div className="flex-grow-1" style={{ minWidth: 0 }}>
                      <h6 className="mb-0 text-truncate">{review.name}</h6>
                      <p className="mb-0 text-muted small d-flex align-items-center">
                        <i className="ti ti-map-pin me-1" style={{ fontSize: '12px' }} />
                        <span className="text-truncate">{review.location}</span>
                      </p>
                    </div>
                  </div>
                  {/* Date */}
                  <span className="text-muted small flex-shrink-0">{review.date}</span>
                </div>

                {/* Étoiles + nombre */}
                <div className="d-flex align-items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ti ti-star-filled text-warning" style={{ fontSize: '14px' }} />
                  ))}
                  <span className="text-muted small">({review.rating})</span>
                </div>

                {/* Commentaire */}
                <p className="text-muted mb-3">{review.comment}</p>

                {/* Service (badge en bas) */}
                <div className="mt-auto">
                  <span className="badge bg-light text-dark border small">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;

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

const ReviewsCarouselSimple = ({ reviews, variant = 'default' }: ReviewsCarouselProps) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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

  return (
    <div className="reviews-carousel">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="card border">
              <div className="card-body">
                <h6>{review.name}</h6>
                <p className="text-muted small">{review.location}</p>
                <p>{review.comment}</p>
                <span className="badge bg-light text-dark">{review.service}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarouselSimple;

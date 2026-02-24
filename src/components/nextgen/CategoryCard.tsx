import Button from './Button';

interface CategoryCardProps {
  title: string;
  image: string;
  imageAlt?: string;
  buttonText?: string;
  onClick?: () => void;
  href?: string;
}

const CategoryCard = ({
  title,
  image,
  imageAlt = '',
  buttonText = 'Découvrir',
  onClick,
  href,
}: CategoryCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="category-card">
      <div className="category-card-header">
        <h2 className="category-card-title">{title}</h2>
        <div className="category-card-image-wrapper">
          <img
            src={image}
            alt={imageAlt || title}
            className="category-card-image"
          />
        </div>
      </div>

      <div className="category-card-footer">
        <Button
          size="sm"
          rounded
          icon={<i className="ti ti-arrow-right" />}
          onClick={handleClick}
          className="category-card-button"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;

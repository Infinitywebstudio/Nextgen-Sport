import { Link } from 'react-router-dom';
import footballImg from '../../../assets/img/homepage/football.png';
import handballImg from '../../../assets/img/homepage/handball.png';
import boxeImg from '../../../assets/img/homepage/boxe.png';
import basketballImg from '../../../assets/img/homepage/basketball.png';
import taekwondoImg from '../../../assets/img/homepage/taekwondo.png';
import arrowIcon from '../../../assets/img/homepage/right-arrow.svg';

const categories = [
  { name: 'Football', image: footballImg, slug: 'football' },
  { name: 'Handball', image: handballImg, slug: 'handball' },
  { name: 'Boxe', image: boxeImg, slug: 'boxe' },
  { name: 'Basketball', image: basketballImg, slug: 'basketball' },
  { name: 'Taekwondo', image: taekwondoImg, slug: 'taekwondo' },
  { name: 'Athlétisme', image: taekwondoImg, slug: 'athletisme' },
];

const CategoriesSection = () => {
  return (
    <section className="nex-categories">
      <div className="nex-categories__container">
        <h2 className="nex-categories__title nex-title">
          EXPLORER PAR CATÉGORIE
        </h2>
        <div className="nex-categories__grid">
          {categories.map((cat) => (
            <Link
              to={`/search?category=${cat.slug}`}
              key={cat.slug}
              className="nex-category-card"
            >
              <div className="nex-category-card__info">
                <h4 className="nex-category-card__name nex-title">
                  {cat.name}
                </h4>
                <span className="nex-category-card__arrow">
                  <img src={arrowIcon} alt="" />
                </span>
              </div>
              <div className="nex-category-card__image">
                <img src={cat.image} alt={cat.name} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

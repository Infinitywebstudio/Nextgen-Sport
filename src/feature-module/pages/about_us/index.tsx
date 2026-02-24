import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';
import Slider from 'react-slick';

const AboutUs = () => {
  const clientstay = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const popularCategorySlider  = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // nav:false in Owl
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    {/* Breadcrumb */}
    <div className="breadcrumb-bar">
      <div className="breadcrumb-img">
        <div className="breadcrumb-left">
          <ImageWithBasePath src="assets/img/bg/breadcrump-bg-01.png" alt="img" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={all_routes.home}>Accueil</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  A propos
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">A propos</h2>
          </div>
        </div>
      </div>
      <div className="breadcrumb-img">
        <div className="breadcrumb-right">
          <ImageWithBasePath src="assets/img/bg/breadcrump-bg-02.png" alt="img" />
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* About Us */}
    <section className="about-us-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="row me-4">
              <div className="col-sm-6">
                <div className="about-inner-img">
                  <ImageWithBasePath
                    src="assets/img/aboutus/about-us-01.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="about-inner-img">
                      <ImageWithBasePath
                        src="assets/img/aboutus/about-us-02.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="about-inner-img">
                      <ImageWithBasePath
                        src="assets/img/aboutus/about-us-03.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-info">
              <div className="about-us-head">
                <h6>A propos</h6>
                <h2>La plateforme qui revele les talents sportifs</h2>
                <p>
                  Bienvenue sur NextGen Sport, la plateforme de decouverte de
                  talents sportifs qui connecte les jeunes athletes de 13 a 30
                  ans avec les recruteurs, clubs et agents du monde francophone.
                  Nous couvrons l'Europe, l'Afrique francophone et les DOM-TOM
                  pour offrir une visibilite maximale a chaque talent.
                </p>
                <h5>Notre Mission</h5>
                <p>
                  Chez NextGen Sport, notre mission est de democratiser l'acces
                  a la detection sportive. Nous croyons que chaque jeune athlete
                  merite d'etre vu, quel que soit son lieu de naissance ou ses
                  moyens. Notre plateforme cree un pont direct entre les talents
                  et les opportunites.
                </p>
              </div>
              <div className="about-features">
                <ul className="list-one">
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/target-arrow-icon.svg"
                        alt="img"
                      />
                    </span>
                    Accessibilite pour tous
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/target-arrow-icon.svg"
                        alt="img"
                      />
                    </span>
                    Transparence et confiance
                  </li>
                </ul>
                <ul className="list-two">
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/target-arrow-icon.svg"
                        alt="img"
                      />
                    </span>
                    Accompagnement personnalise
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/target-arrow-icon.svg"
                        alt="img"
                      />
                    </span>
                    Couverture francophone
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /About Us */}
    {/* Why Choose Us */}
    <section className="why-choose-sec">
      <div className="container">
        <div className="about-us-header">
          <h2>Pourquoi NextGen Sport ?</h2>
          <p>
            Une plateforme concue pour reveler le potentiel des jeunes athletes
            et faciliter le travail des recruteurs.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-01.svg" alt="img" />
              </div>
              <h4>Visibilite maximale</h4>
              <p>
                Votre profil talent est visible par les recruteurs en France,
                DOM-TOM, Afrique francophone et Europe francophone.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-02.svg" alt="img" />
              </div>
              <h4>Profils enrichis</h4>
              <p>
                Photos, videos highlight, statistiques : montrez votre talent
                sous tous les angles aux agents et clubs.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-03.svg" alt="img" />
              </div>
              <h4>Donnees securisees</h4>
              <p>
                Vos informations personnelles sont protegees par un chiffrement
                robuste et des controles d'acces stricts.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-04.svg" alt="img" />
              </div>
              <h4>Mise en relation directe</h4>
              <p>
                Messagerie integree pour une communication directe entre
                talents, parents et recruteurs.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-05.svg" alt="img" />
              </div>
              <h4>Paiement securise</h4>
              <p>
                Stripe (EUR) et CinetPay (Mobile Money XOF/CFA) pour des
                transactions adaptees a chaque region.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why-choose-card">
              <div className="card-icon">
                <ImageWithBasePath src="assets/img/icons/why-choose-icon-06.svg" alt="img" />
              </div>
              <h4>Support dedie</h4>
              <p>
                Notre equipe vous accompagne a chaque etape pour une experience
                fluide sur la plateforme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Why Choose Us */}
    {/* Explore Popular Categories */}
    <section className="popular-category-sec">
      <div className="container">
        <div className="about-us-header">
          <h2>Sports couverts</h2>
          <p>
            Des disciplines variees pour reveler tous les talents
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="popular-category-slider owl-carousel">
              <Slider {...popularCategorySlider}>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-01.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Digital Marketing </h4>
                  <span>100 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-02.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Programming &amp; Tech </h4>
                  <span>200 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-03.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Writing Translation </h4>
                  <span>100 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-04.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Photography </h4>
                  <span>150 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-05.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Artificial Intelligence </h4>
                  <span>100 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-03.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Writing Translation </h4>
                  <span>100 Services</span>
                </div>
              </div>
              <div className="slider-cards">
                <div className="popular-cat-card">
                  <div className="category-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/popular-category-04.svg"
                      alt="img"
                    />
                  </div>
                  <h4>Photography </h4>
                  <span>150 Services</span>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Explore Popular Categories */}
    {/* What Our Client Say */}
    <section className="client-review-sec">
      <div className="container">
        <div className="about-us-header">
          <h2>Ils nous font confiance</h2>
          <p>
            Decouvrez les temoignages de talents et recruteurs qui utilisent
            NextGen Sport au quotidien.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="review-slider owl-carousel">
              <Slider {...clientstay}>
              <div className="review-card">
                <span className="quotation-icon">
                  <ImageWithBasePath src="assets/img/icons/quotation-icon.svg" alt="img" />
                </span>
                <h4>Great Work</h4>
                <p>
                  “Amazing design, easy to customize and a design quality
                  superlative account on its cloud platform for the optimized
                  performance. And we didn't on our original designs and
                  Development.”
                </p>
                <div className="star-rate">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
                <div className="review-user">
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/user/user-17.jpg" alt="img" />
                  </Link>
                  <h6>
                    <Link to="#">Gloria Weber</Link>
                    <span>United States</span>
                  </h6>
                </div>
              </div>
              <div className="review-card">
                <span className="quotation-icon">
                  <ImageWithBasePath src="assets/img/icons/quotation-icon.svg" alt="img" />
                </span>
                <h4>Seamless Experience</h4>
                <p>
                  “Communication with the service provider was smooth and
                  efficient through the platform's messaging system. The built-in
                  tools for file sharing ensuring a productive experience.”
                </p>
                <div className="star-rate">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
                <div className="review-user">
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/user/user-18.jpg" alt="img" />
                  </Link>
                  <h6>
                    <Link to="#">John Cramer</Link>
                    <span>United States</span>
                  </h6>
                </div>
              </div>
              <div className="review-card">
                <span className="quotation-icon">
                  <ImageWithBasePath src="assets/img/icons/quotation-icon.svg" alt="img" />
                </span>
                <h4>Great Work</h4>
                <p>
                  “This service marketplace is a game-changer, delivering a
                  polished and professional platform that exceeded our
                  expectations and it saved us time and resources, allowing for a
                  quick launch.”
                </p>
                <div className="star-rate">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
                <div className="review-user">
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/user/user-19.jpg" alt="img" />
                  </Link>
                  <h6>
                    <Link to="#">Mary Marquez</Link>
                    <span>United States</span>
                  </h6>
                </div>
              </div>
              <div className="review-card">
                <span className="quotation-icon">
                  <ImageWithBasePath src="assets/img/icons/quotation-icon.svg" alt="img" />
                </span>
                <h4>Great Work</h4>
                <p>
                  “This service marketplace is a game-changer, delivering a
                  polished and professional platform that exceeded our
                  expectations and it saved us time and resources, allowing for a
                  quick launch.”
                </p>
                <div className="star-rate">
                  <span>
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </span>
                </div>
                <div className="review-user">
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/user/user-16.jpg" alt="img" />
                  </Link>
                  <h6>
                    <Link to="#">Joanne Parise</Link>
                    <span>United States</span>
                  </h6>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /What Our Client Say */}
    {/* Start As Seller */}
    <section className="start-seller-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="seller-inner-img w-100">
              <ImageWithBasePath
                src="assets/img/aboutus/about-us-04.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="seller-info-content w-100">
              <div className="seller-head">
                <h3>Devenez talent NextGen</h3>
                <p>
                  Creez votre profil, mettez en avant vos performances avec des
                  photos et videos highlight, et soyez repere par des
                  recruteurs, agents et clubs du monde francophone.
                </p>
              </div>
              <div className="seller-feature-list d-flex w-100">
                <div className="sllers-list">
                  <ul>
                    <li>
                      <span>
                        <i className="feather-check-square" />
                      </span>
                      Profil visible en France, DOM-TOM et Afrique
                    </li>
                    <li>
                      <span>
                        <i className="feather-check-square" />
                      </span>
                      Photos et videos highlight
                    </li>
                    <li>
                      <span>
                        <i className="feather-check-square" />
                      </span>
                      Contact direct avec les recruteurs
                    </li>
                    <li>
                      <span>
                        <i className="feather-check-square" />
                      </span>
                      Suivi de vos statistiques
                    </li>
                  </ul>
                  <Link to={all_routes.signUp} className="btn btn-primary w-auto">
                    Creer mon profil talent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Start As Seller */}
  </>
  
  )
}

export default AboutUs
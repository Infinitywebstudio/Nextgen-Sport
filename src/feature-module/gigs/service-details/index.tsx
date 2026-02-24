import { useEffect, useRef, useState } from "react";
import ImageWithBasePath from "../../../core/img";
import Slider from "react-slick";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

import { Quantity, What, location } from "../../../core/common/selectOption";

const ServiceDetails = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  const routes = all_routes;
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };


  const navigateToGigs = () => {
    // Remove the modal backdrop
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop && backdrop.parentNode) {
      backdrop.parentNode.removeChild(backdrop);
    }
     // Remove any modal-related classes from the body
     document.body.classList.remove("modal-open");
     document.body.style.paddingRight = '';
     document.body.style.overflow = '';
  };
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
}, []);
  const imgslideroption = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    swipe:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
  const slideslideroption = {
    dots: true,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable:true,
    tochMove:true,
    swipe:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
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
        breakpoint: 1,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const recentimgslideroption  = {
    dots: false,
    loop:true,
    arrows: true,
    nav: true,
    infinite: true,
    smartSpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 || undefined, // Link to the second slider
    ref: (slider: any) => (sliderRef1.current = slider), // Assign the slider ref
   
};

const settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1 || undefined, // Link to the first slider
    ref: (slider: any) => (sliderRef2.current = slider), // Assign the slider ref
   
};

type SectionState = {
  mostRecent: boolean;
};

const [activeSections, setActiveSections] = useState<SectionState>({
  mostRecent: false,
});

const toggleSection = (section: keyof SectionState) => {
  setActiveSections((prevState) => {
    const newState: SectionState = {
      mostRecent: false,
    };
    return {
      ...newState,
      [section]: !prevState[section],
    };
  });
};

  return (
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
          <div className="breadcrumb-img">
            <div className="breadcrumb-left">
              <ImageWithBasePath src="assets/img/bg/banner-bg-03.png" alt="img" />
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 text-start">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={routes.home}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to={routes.service}>Gigs</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Gigs Detail
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">
                  I will design, redesign wordpress website using elementor pro
                </h2>
                <ul className="info-links">
                  <li>
                    <i className="ti ti-star-filled text-warning" />
                    5.0 (40 Reviews)
                  </li>
                  <li>
                    <i className="ti ti-file" />
                    20 Orders in Queue
                  </li>
                  <li>
                    <i className="ti ti-calendar-due" />
                    Created On : 25 May 2025
                  </li>
                  <li>
                    <i className="ti ti-home-shield" />
                    Remote
                  </li>
                  <li className="border-0">
                    <div className="tranlator d-flex align-items-center">
                      <ImageWithBasePath
                        src="assets/img/flags/us.svg"
                        alt="flag"
                        className="img-fluid img me-2 language"
                      />
                      Malaysia
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12">
                <ul className="breadcrumb-links service-details">
                  <li className="mb-3 me-0">
                    <Link to="#">
                      <span>
                        <i className="feather icon-heart" />
                      </span>
                      Add to Wishlist
                    </Link>
                  </li>
                  <li className="me-0">
                    <div className="social-links d-flex align-items-center breadcrumb-social justify-content-lg-end">
                      {" "}
                      Share
                      <ul className="ms-3">
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-google" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Content */}
        <div className="page-content content">
          <div className="container">
            <div className="row">
              {/* Service Details */}
              <div className="col-lg-8">
                {/* Slider */}
                <div className="slider-card common-slider-nav">
                  <div className="slider service-slider">
                  <Slider {...settings1}>
                    <div className="service-img-wrap">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-01.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="service-img-wrap">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-02.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="service-img-wrap">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-03.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="service-img-wrap">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-04.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="service-img-wrap">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-05.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    </Slider>
                  </div>
                  <div className="slider slider-nav-thumbnails">
                  <Slider {...settings2}>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-01.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-02.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-03.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-04.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-05.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    </Slider>
                  </div>
                </div>
                {/* /Slider */}
                {/* About Gigs */}
                <div className="service-wrap">
                  <h3>About this Gig</h3>
                  <p>
                    Amazon affiliate marketing autopilot website with google SEO
                    Autoblog for Making Money OnlineAffiliate marketing is an
                    excellent way to earn passive income. this type of website
                    doesn't require any extra maintenance or technical knowledge
                    to run.
                  </p>
                  <p>
                    Every product will be linked with your unique affiliate ID
                    so that you will earn commissions on every sale. Autoblog
                    Feature will automatically add high-quality blog content
                    relevant to your niche to the site. No maintenance is
                    required!With my service, you will get a Complete Automatic
                    amazon affiliate website with auto blogs for passive income
                  </p>
                </div>
                {/* /About Gigs */}
                {/* Why Work With Me */}
                <div className="service-wrap service-wrap">
                  <h3>Why Work With Me</h3>
                  <p>
                    {" "}
                    I have five years+ of experience in affiliate marketing, and I am running
                    my own affiliate marketing business, so I have an understanding of how
                    these things really work with google SEO.{" "}
                  </p>
                  <ul className="service-lists">
                    <li>
                      {" "}
                      <p> Flexibility and Customization </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <p> Expertise and Specialization </p>
                    </li>
                    <li>
                      {" "}
                      <p> Direct Communication </p>
                    </li>
                  </ul>
                </div>
                {/* /Why Work With Me */}
                {/* FAQ Lists */}
                <div className="service-wrap service-faq">
                  <h3>FAQ</h3>
                  <div className="faq-lists">
                    <div className="faq-card">
                      <h4 className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqone"
                          aria-expanded="false"
                        >
                          Do you offer assistance after the order has been completed?
                        </Link>
                      </h4>
                      <div id="faqone" className="card-collapse collapse">
                        <div className="faq-content">
                          <p>
                            Yes! My service guarantees you 24/7 lifetime support for anything
                            related to your website. Whenever you encounter a problem, feel
                            free to reach out to me anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-card">
                      <h4 className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqtwo"
                          aria-expanded="false"
                        >
                          Can I choose my favorite Product category or Niche?
                        </Link>
                      </h4>
                      <div id="faqtwo" className="card-collapse collapse">
                        <div className="faq-content">
                          <p>
                            Yes! My service guarantees you 24/7 lifetime support for anything
                            related to your website. Whenever you encounter a problem, feel
                            free to reach out to me anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-card">
                      <h4 className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqOne"
                          aria-expanded="false"
                        >
                          Can I add products myself?
                        </Link>
                      </h4>
                      <div id="faqOne" className="card-collapse collapse">
                        <div className="faq-content">
                          <p>
                            Yes! My service guarantees you 24/7 lifetime support for anything
                            related to your website. Whenever you encounter a problem, feel
                            free to reach out to me anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-card border-0 faq-end-card">
                      <h4 className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqfour"
                          aria-expanded="false"
                        >
                          Are there any additional or hidden charges?
                        </Link>
                      </h4>
                      <div id="faqfour" className="card-collapse collapse">
                        <div className="faq-content">
                          <p>
                            Yes! My service guarantees you 24/7 lifetime support for anything
                            related to your website. Whenever you encounter a problem, feel
                            free to reach out to me anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ Lists */}
                {/* Recent Works */}
                <div className="service-wrap">
                  <div className="row align-items-center">
                    <div className="col-sm-8">
                      <h3>Recent Works</h3>
                    </div>
                    <div className="col-sm-4">
                      <div className="owl-nav mynav1 nav-control" />
                    </div>
                  </div>
                  <div className="recent-carousel">
                  <Slider {...recentimgslideroption} >
                    <div className="recent-img">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-01.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="recent-img">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-02.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="recent-img">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-03.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    <div className="recent-img">
                      <ImageWithBasePath
                        src="assets/img/service/service-slide-04.jpg"
                        className="img-fluid"
                        alt="Slider Img"
                      />
                    </div>
                    </Slider>
                  </div>
                </div>
                {/* /Recent Works */}
                {/* Review Lists */}
                <div className="review-widget">
                  <div className="review-title sort-search-gigs">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <h3>Reviews (45)</h3>
                      </div>
                      <div className="col-sm-6">
                        <div className="filters-wrap sort-categories justify-content-end">
                          <div className={`collapse-card float-lg-end ${
                          activeSections.mostRecent ? "active" : ""
                        }`}>
                            <div className="filter-header">
                              <Link to="#" className="sorts-list" onClick={() => toggleSection("mostRecent")}>
                                Most Recent
                              </Link>
                            </div>
                            <div
                              id="categories"
                              className={`collapse-body ${
                                activeSections.mostRecent ? "active" : "enable"
                              }`}
                              style={{
                                display: activeSections.mostRecent
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <div className="form-group search-group">
                                <span className="search-icon">
                                  <i className="feather icon-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Category"
                                />
                              </div>
                              <ul className="checkbox-list categories-lists">
                                <li className="active">
                                  <label className="custom_check">
                                    <span className="checked-title"> Recent</span>
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check">
                                    <span className="checked-title">Oldest </span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Total Ratings */}
                  <div className="total-rating align-items-center">
                    <div className="total-review">
                      {/* Progress 1 */}
                      <div className="progress-lvl mb-2">
                        <h6>5 Star Ratings</h6>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning five-star"
                            role="progressbar"
                            aria-label="Success example"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>247</p>
                      </div>
                      {/* Progress 2 */}
                      <div className="progress-lvl mb-2">
                        <h6>4 Star Ratings</h6>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-label="Success example"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>145</p>
                      </div>
                      {/* Progress 3 */}
                      <div className="progress-lvl mb-2">
                        <h6>3 Star Ratings</h6>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-label="Success example"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>600</p>
                      </div>
                      {/* Progress 4 */}
                      <div className="progress-lvl mb-2">
                        <h6>2 Star Ratings</h6>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-label="Success example"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>560</p>
                      </div>
                      {/* Progress 5 */}
                      <div className="progress-lvl">
                        <h6>1 Star Ratings</h6>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-label="Success example"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p>400</p>
                      </div>
                    </div>
                    <div className="total-reviews text-center bg-white">
                      <h6> Customer Reviews &amp; Ratings </h6>
                      <h2> 4.9 / 5.0 </h2>
                      <div className="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                        <i className="ti ti-star-filled text-warning" />
                        <i className="ti ti-star-filled text-warning" />
                        <i className="ti ti-star-filled text-warning" />
                        <i className="ti ti-star-filled text-warning" />
                        <i className="ti ti-star-filled text-warning" />
                      </div>
                      <p className="text-center">Based On 2,459 Reviews</p>
                    </div>
                  </div>
                  {/* Total Ratings */}
                  <ul className="review-lists home-reviews">
                    <li>
                      <div className="review-wrap">
                        <div className="review-user-info">
                          <div className="review-img">
                            <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                          </div>
                          <div className="reviewer-info">
                            <div className="reviewer-loc">
                              <h6>
                                <Link to="#">kadajsalamander</Link>
                              </h6>
                            </div>
                            <div className="reviewer-rating">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="fa-solid fa-star filled" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                            <div className="reviewer-time">
                              <p>1 Months ago</p> <p> Excellent service! </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I recently hired a him to help me with a project and I must say, I
                            am extremely impressed with their work. From start to finish, the
                            freelancer was professional, efficient, and a pleasure to work
                            with.
                          </p>
                          <Link to="#" className="reply-btn bg-light">
                            <i className="feather icon-corner-up-left" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="review-wrap">
                        <div className="review-user-info">
                          <div className="review-img">
                            <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                          </div>
                          <div className="reviewer-info">
                            <div className="reviewer-loc">
                              <h6>
                                <Link to="#">kadajsalamander</Link>
                              </h6>
                            </div>
                            <div className="reviewer-rating">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="fa-solid fa-star filled" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                            <div className="reviewer-time">
                              <p>1 Months ago</p> <p> Excellent service! </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I recently hired a him to help me with a project and I must say, I
                            am extremely impressed with their work. From start to finish, the
                            freelancer was professional, efficient, and a pleasure to work
                            with.
                          </p>
                          <Link to="#" className="reply-btn bg-light">
                            <i className="feather icon-corner-up-left" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="review-wrap">
                        <div className="review-user-info">
                          <div className="review-img">
                            <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                          </div>
                          <div className="reviewer-info">
                            <div className="reviewer-loc">
                              <h6>
                                <Link to="#">kadajsalamander</Link>
                              </h6>
                            </div>
                            <div className="reviewer-rating">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="fa-solid fa-star filled" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                            <div className="reviewer-time">
                              <p>1 Months ago</p> <p> Excellent service! </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I recently hired a him to help me with a project and I must say, I
                            am extremely impressed with their work. From start to finish, the
                            freelancer was professional, efficient, and a pleasure to work
                            with.
                          </p>
                          <Link to="#" className="reply-btn bg-light">
                            <i className="feather icon-corner-up-left" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="border-0">
                      <div className="review-wrap">
                        <div className="review-user-info">
                          <div className="review-img">
                            <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                          </div>
                          <div className="reviewer-info">
                            <div className="reviewer-loc">
                              <h6>
                                <Link to="#">kadajsalamander</Link>
                              </h6>
                            </div>
                            <div className="reviewer-rating">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="fa-solid fa-star filled" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                            <div className="reviewer-time">
                              <p>1 Months ago</p> <p> Excellent service! </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I recently hired a him to help me with a project and I must say, I
                            am extremely impressed with their work. From start to finish, the
                            freelancer was professional, efficient, and a pleasure to work
                            with.
                          </p>
                          <Link to="#" className="reply-btn bg-light">
                            <i className="feather icon-corner-up-left" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="review-active">
                      <div className="review-wrap">
                        <div className="review-user-info">
                          <div className="review-img">
                            <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                          </div>
                          <div className="reviewer-info">
                            <div className="reviewer-loc">
                              <h6>
                                <Link to="#">kadajsalamander</Link>
                              </h6>
                            </div>
                            <div className="reviewer-rating">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="fa-solid fa-star filled" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                            <div className="reviewer-time">
                              <p>1 Months ago</p> <p> Excellent service! </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-content">
                          <p>
                            I recently hired a him to help me with a project and I must say, I
                            am extremely impressed with their work. From start to finish, the
                            freelancer was professional, efficient, and a pleasure to work
                            with.
                          </p>
                          <Link to="#" className="reply-btn bg-light">
                            <i className="feather icon-corner-up-left" />
                            Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center dark-btn">
                    <Link to={routes.faq} className="btn btn-dark text-center fs-13">
                      {" "}
                      Load More
                    </Link>
                  </div>
                </div>
                {/* /Review Lists */}
                {/* Review Tags */}
                <div className="login-card">
                  <div className="login-heading text-start mb-4">
                    <h5>Leave a Review</h5>
                  </div>
                  <div className="form-wrap form-focus">
                    <label className="mb-1 fw-medium text-dark mb-1">
                      Your Rating <span className="text-primary">*</span>
                    </label>
                    <div className="icon d-flex gap-1">
                      <i className="ti ti-star-filled text-warning" />
                      <i className="ti ti-star-filled text-warning" />
                      <i className="ti ti-star-filled text-warning" />
                      <i className="ti ti-star-filled text-warning" />
                      <i className="ti ti-star-filled text-light" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-wrap form-focus">
                        <label className="mb-1 fw-medium text-dark">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-wrap form-focus">
                        <label className="mb-1 fw-medium text-dark">
                          {" "}
                          Email <span className="text-primary">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-wrap form-focus">
                        <label className="mb-1 fw-medium text-dark">
                          {" "}
                          Write a Review <span className="text-primary">*</span>
                        </label>
                        <textarea className="form-control text-area" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="btn btn-primary member-btn">
                    {" "}
                    Submit a Review{" "}
                  </Link>
                </div>
                {/* /Review Tags */}
              </div>
              {/* /Service Details */}
              {/* Member Details */}
              <div className="col-lg-4">
                <div className="theiaStickySidebar">
                  <div className="service-widget">
                    <div className="service-amt d-flex align-items-center justify-content-between">
                      <p>Price</p>
                      <h2>
                        $256{" "}
                        <span className="text-decoration-line-through fs-6">
                          $300
                        </span>
                      </h2>
                    </div>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#order_details"
                      className="btn btn-primary w-100"
                    >
                      <i className="feather icon-shopping-cart" /> Buy this gig
                    </Link>
                    <div className="row gx-3 row-gap-3 mb-3">
                      <div className="col-xl-4 col-lg-6 col-sm-4 col-6">
                        <div className="buy-box">
                          <i className="feather icon-clock" />
                          <p>Delivery Time</p>
                          <h6>1 day</h6>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-sm-4 col-6">
                        <div className="buy-box">
                          <i className="feather icon-cloud" />
                          <p>Total Sales</p>
                          <h6>15</h6>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-sm-4 col-6">
                        <div className="buy-box">
                          <i className="feather icon-eye" />
                          <p>Total Views</p>
                          <h6>800</h6>
                        </div>
                      </div>
                    </div>
                    <div className="service-widget">
                      <div className="service-amt p-3 price-lvl price-lvl1 bg-light ">
                        <h3 className="text-grey">
                          <span className="d-block text-grey"> Price </span>
                          $256
                        </h3>
                      </div>
                      <div className="input-block form-wrap form-focus">
                        <label className="mb-1 fw-medium text-dark">
                          {" "}
                          Quantity <span className="text-primary">*</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={Quantity}
                          defaultValue={Quantity[0]}
                        />
                      </div>
                      <div className="service-widget service-select-widget">
                        <h5 className="mb-3"> Extra Services </h5>
                        <div className="service-select d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <label className="custom_radio">
                              <input type="radio" name="budget" defaultChecked />
                              <span className="checkmark" />
                              <span className="m-0 service-head-text">
                                Full website design
                                <span> Delivery in 1 day </span>
                              </span>
                            </label>
                          </div>
                          <p className="price m-0"> $252</p>
                        </div>
                        <div className="service-select d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <label className="custom_radio">
                              <input type="radio" name="budget" defaultChecked />
                              <span className="checkmark" />
                              <span className="m-0 service-head-text">
                                Mobile responsiveness
                                <span> Delivery in 1 day </span>
                              </span>
                            </label>
                          </div>
                          <p className="price m-0"> $21</p>
                        </div>
                        <div className="service-select d-flex align-items-center justify-content-between border-0 p-0 m-0">
                          <div className="d-flex align-items-center">
                            <label className="custom_radio">
                              <input type="radio" name="budget" defaultChecked />
                              <span className="checkmark" />
                              <span className="m-0 service-head-text">
                                Speed Optimization
                                <span> Delivery in 1 day </span>
                              </span>
                            </label>
                          </div>
                          <p className="price m-0"> $52</p>
                        </div>
                      </div>
                      <div className="service-widget service-select-widget">
                        <h5 className="mb-3"> Super fast Service </h5>
                        <div className="service-select d-flex align-items-center justify-content-between m-0 p-0 border-0">
                          <div className="d-flex align-items-center">
                            <label className="custom_radio">
                              <input type="radio" name="budget" defaultChecked />
                              <span className="checkmark" />
                              <span className="m-0 service-head-text">
                                Full website design
                                <span>Delivery in 5 day </span>
                              </span>
                            </label>
                          </div>
                          <p className="price text-primary high m-0 bg-primary-transparent">
                            {" "}
                            $252
                          </p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#order_details"
                        className="btn btn-primary w-100 mb-0"
                      >
                        <i className="feather icon-shopping-cart" /> Buy this gig
                      </Link>
                    </div>
                    <div className="service-widget member-widget">
                      <div className="user-details">
                        <div className="user-img users-img">
                          <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                        </div>
                        <div className="user-info">
                          <h5>
                            <span className="me-2">Adrian Revolt</span>{" "}
                            <span className="badge badge-success">
                              <i className="fa-solid fa-circle" /> Online
                            </span>
                          </h5>
                          <p>
                            <i className="fa-solid fa-star" />
                            5.0 (45 Reviews)
                          </p>
                        </div>
                      </div>
                      <ul className="member-info">
                        <li>
                          From
                          <span>United States</span>
                        </li>
                        <li>
                          Member Since
                          <span>25 Jan 2024</span>
                        </li>
                        <li>
                          Speaks
                          <span>English, Portugese</span>
                        </li>
                        <li>
                          Last Project Delivery
                          <span>29 Jan 2024</span>
                        </li>
                        <li>
                          Avg Response Time
                          <span>About 8 hours</span>
                        </li>
                      </ul>
                      <div className="about-me new-about">
                        <h6>About Me</h6>
                        <p>
                          Hello, Greetings! My name is Adrian, and I am an experienced affiliate
                          marketer and website developer
                          {isReadMore && (
                          <span className="more-content">
                            I have over five years experience in digital affiliate marketing
                            &amp; WordPress website development.
                          </span>
                          )}
                        </p>
                        <Link to="#" onClick={toggleReadMore} className="read-more">
                          {isReadMore ? 'Read Less' : 'Read More'}
                      </Link>
                      </div>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#contact_me"
                        className="btn btn-primary mb-0 w-100"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </div>    
              </div>
              {/* /Member Details */}
            </div>
            {/* Recent Work */}
            <div className="recent-works">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-sec">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h3>Recent Works</h3>
                      </div>
                      <div className="col-md-4">
                        <div className="owl-nav worknav nav-control nav-top" />
                      </div>
                    </div>
                  </div>
                  <div className="gigs-slider">
                  <Slider {...imgslideroption}>
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider">
                        <Slider {...slideslideroption}>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-13.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="card-overlay-badge">
                          <Link to={routes.service}>
                            <span className="badge bg-danger">
                              <i className="fa-solid fa-meteor" />
                              Hot
                            </span>
                          </Link>
                        </div>
                        <div className="fav-selection" key={1}
                            onClick={() => handleItemClick(1)}>
                          <Link to="#" className="video-icon">
                            <i className="feather icon-video" />
                          </Link>
                          <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[1] ? "favourite" : ""
                              }`}
                            >
                              <i className="feather icon-heart" />
                            </Link>
                        </div>
                        <div className="user-thumb">
                          <Link to={routes.buyerProfile}>
                            <ImageWithBasePath
                              src="assets/img/user/user-10.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to={routes.service}>
                            <span className="badge bg-primary-light">
                              Video Marketing
                            </span>
                          </Link>
                          <p>
                            <i className="feather icon-map-pin" />
                            Chicago
                          </p>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={routes.serviceDetails}>
                              I will do creating and promoting video content to
                              engage audiences
                            </Link>
                          </h3>
                        </div>
                        <div className="star-rate">
                          <span>
                            <i className="fa-solid fa-star" />
                            4.2 (65 Reviews)
                          </span>
                        </div>
                        <div className="gigs-card-footer">
                          <div>
                            <Link
                              to="#"
                              className="share-icon"
                            >
                              <i className="feather icon-share-2" />
                            </Link>
                            <span className="badge">Delivery in 1 day</span>
                          </div>
                          <h5>$600</h5>
                        </div>
                      </div>
                    </div>
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider">
                        <Slider {...slideslideroption}>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-14.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection" key={2}
                            onClick={() => handleItemClick(2)}>
                          <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[2] ? "favourite" : ""
                              }`}
                            >
                              <i className="feather icon-heart" />
                            </Link>
                        </div>
                        <div className="user-thumb">
                          <Link to={routes.buyerProfile}>
                            <ImageWithBasePath
                              src="assets/img/user/user-06.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to={routes.service}>
                            <span className="badge bg-primary-light">
                              Local SEO
                            </span>
                          </Link>
                          <p>
                            <i className="feather icon-map-pin" />
                            Moscow
                          </p>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={routes.serviceDetails}>
                              Optimizing online presence to enhance visibility
                              in local search...
                            </Link>
                          </h3>
                        </div>
                        <div className="star-rate">
                          <span>
                            <i className="fa-solid fa-star" />
                            4.3 (22 Reviews)
                          </span>
                        </div>
                        <div className="gigs-card-footer">
                          <div>
                            <Link
                              to="#"
                              className="share-icon"
                            >
                              <i className="feather icon-share-2" />
                            </Link>
                            <span className="badge">Delivery in 2 day</span>
                          </div>
                          <h5>$550</h5>
                        </div>
                      </div>
                    </div>
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider">
                        <Slider {...slideslideroption}>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-15.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection" key={2}
                            onClick={() => handleItemClick(2)}>
                         <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[2] ? "favourite" : ""
                              }`}
                            >
                              <i className="feather icon-heart" />
                            </Link>
                        </div>
                        <div className="user-thumb">
                          <Link to={routes.buyerProfile}>
                            <ImageWithBasePath
                              src="assets/img/user/user-03.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to={routes.service}>
                            <span className="badge bg-primary-light">
                              Mobile Marketing
                            </span>
                          </Link>
                          <p>
                            <i className="feather icon-map-pin" />
                            Norwich
                          </p>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={routes.serviceDetails}>
                              Optimizing marketing strategies for mobiles &amp;
                              app based promotions
                            </Link>
                          </h3>
                        </div>
                        <div className="star-rate">
                          <span>
                            <i className="fa-solid fa-star" />
                            4.6 (475 Reviews)
                          </span>
                        </div>
                        <div className="gigs-card-footer">
                          <div>
                            <Link
                              to="#"
                              className="share-icon"
                            >
                              <i className="feather icon-share-2" />
                            </Link>
                            <span className="badge">Delivery in 1 day</span>
                          </div>
                          <h5>$720</h5>
                        </div>
                      </div>
                    </div>
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider">
                        <Slider {...slideslideroption}>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-04.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-01.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-02.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="card-overlay-badge">
                          <span className="badge bg-danger">
                            <i className="fa-solid fa-meteor" />
                            Hot
                          </span>
                        </div>
                        <div className="fav-selection"  key={3}
                            onClick={() => handleItemClick(3)}>
                        <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[3] ? "favourite" : ""
                              }`}
                            >
                              <i className="feather icon-heart" />
                            </Link>
                        </div>
                        <div className="user-thumb">
                          <Link to={routes.buyerProfile}>
                            <ImageWithBasePath
                              src="assets/img/user/user-04.jpg"
                              alt="img"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to={routes.service}>
                            <span className="badge bg-primary-light">
                              Digital Marketing
                            </span>
                          </Link>
                          <p>
                            <i className="feather icon-map-pin" />
                            Indonesia
                          </p>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={routes.serviceDetails}>
                              Embedded Android &amp; AOSP customizations
                            </Link>
                          </h3>
                        </div>
                        <div className="star-rate">
                          <span>
                            <i className="fa-solid fa-star" />
                            4.5 (40 Reviews)
                          </span>
                        </div>
                        <div className="gigs-card-footer">
                          <div>
                            <Link
                              to="#"
                              className="share-icon"
                            >
                              <i className="feather icon-share-2" />
                            </Link>
                            <span className="badge">Delivery in 2 day</span>
                          </div>
                          <h5>$900</h5>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            {/* /Recent Work */}
          </div>
        </div>
        {/* /Content */}

        {/* Contact Me */}
        <div
          className="modal new-modal fade"
          id="contact_me"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Me</h5>
                <button type="button" className="close-btn" data-bs-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body service-modal">
                <div className="row">
                  <div className="col-md-12">
                    <div className="user-details">
                      <div className="user-img">
                        <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                      </div>
                      <div className="user-info">
                        <h5>
                          <span className="me-2">Adrian Revolt</span>{" "}
                          <span className="badge badge-success">
                            <i className="fa-solid fa-circle" /> Online
                          </span>
                        </h5>
                        <p>
                          <i className="fa-solid fa-star" />
                          Ratings 5.0 (45 Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-form-group">
                      <CommonSelect
                        className="select"
                        options={What}
                        defaultValue={What[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <CommonSelect
                        className="select"
                        options={location}
                        defaultValue={location[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-form-group">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Enter Your Comments"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="modal-form-group">
                    <label className="custom_check mt-0 mb-0 ps-4">
                      I agree to the <Link to="#">Terms &amp; Conditions</Link>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="modal-btn">
                  <Link
                    to="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary w-100"
                  >
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Contact Me */}

        {/* Order Details */}
        <div
          className="modal new-modal fade"
          id="order_details"
          data-keyboard="false"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button type="button" className="close-btn" data-bs-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body service-modal">
                <div className="row">
                  <div className="col-md-12">
                    <div className="order-status">
                      <div className="order-item">
                        <div className="order-img">
                          <ImageWithBasePath
                            src="assets/img/service/service-slide-01.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="order-info">
                          <h5>
                            I will design, redesign wordpress website using elementor
                            pro
                          </h5>
                          <ul>
                            <li>ID : #1245</li>
                            <li>Delivery : Jan 29 2024 8:10 AM</li>
                          </ul>
                        </div>
                      </div>
                      <h6 className="title">Details</h6>
                      <div className="user-details">
                        <div className="user-img">
                          <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                        </div>
                        <div className="user-info">
                          <h5>
                            Adrian Revolt <span className="location">From USA</span>
                          </h5>
                          <p>
                            <i className="fa-solid fa-star" />
                            Ratings 5.0 (45 Reviews)
                          </p>
                        </div>
                      </div>
                      <h6 className="title">Service Details</h6>
                      <div className="detail-table table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Service</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Designing and developing...</td>
                              <td>1</td>
                              <td className="text-primary">$100</td>
                            </tr>
                            <tr>
                              <td>Additional 1 : I can clean</td>
                              <td>1</td>
                              <td className="text-primary">$100</td>
                            </tr>
                            <tr>
                              <td>Super Fast : Super fast delivery</td>
                              <td>1</td>
                              <td className="text-primary">$100</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th colSpan={2}>Grand Total</th>
                              <th className="text-primary">$300</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="modal-btn">
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              data-bs-dismiss="modal"
                              className="btn btn-secondary w-100 justify-content-center"
                            >
                              Cancel
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to={routes.buyerPurchase}
                              className="btn btn-primary w-100" onClick={navigateToGigs}
                            >
                              Pay Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Order Details */}
      </>
  );
};

export default ServiceDetails;

import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'
import Slider from 'react-slick';
import { all_routes } from '../../router/all_routes';

const SellerGigs = () => {

    const imgSlider = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, // set to true if you want to use custom arrows
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
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
    {/* Page Content */}
    <div className="page-wrapper">
      <div className="page-content content bg-light">
        <div className="row">
          {/* Manage Gigs */}
          <div className="col-12">
            <div className="d-flex mb-4 align-items-center justify-content-between gap-3 flex-wrap">
              <div className="main-title">
                <h4 className="mb-0">My Gigs</h4>
              </div>
              <div className="head-info mb-0">
                <Link to={all_routes.addGigs} className="btn btn-primary btn-md">
                  Add New Gig
                </Link>
              </div>
            </div>
            <ul className="nav nav-tabs nav-tabs-bottom mb-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="#bottom-tab1"
                  data-bs-toggle="tab"
                >
                  Active
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#bottom-tab2" data-bs-toggle="tab">
                  Inactive
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="bottom-tab1">
                <div className="row">
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-01.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link
                            to="#"
                            className="badge bg-primary-light"
                          >
                            Software Development
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Designing and developing software applications
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$780</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-02.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Ecommerce-Seo
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Creating, managing, and optimizing databases
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$350</h5>
                          <span className="badge">Delivery in 2 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-03.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will develop openai, dalle, chat gpt app for
                              mobile
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$830</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-04.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Embedded Android &amp; AOSP customizations...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$650</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-05.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link
                            to="#"
                            className="badge bg-primary-light"
                          >
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will do implementing chatbots on websites or
                              messaging apps
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$750</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will do integrating AR elements into marketing
                              strategies for customers...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$800</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will do creating and promoting video content to
                              ...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$680</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Optimizing online presence to enhance in local...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$960</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            Email Marketing
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will do designing and executing targeted email
                              campaigns
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$850</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                </div>
              </div>
              <div className="tab-pane" id="bottom-tab2">
                <div className="row">
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-05.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link
                            to="#"
                            className="badge bg-primary-light"
                          >
                            Programming &amp; Tech
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Optimizing marketing strategies for mobiles...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$750</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            AR Marketing
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              I will do integrating AR elements into marketing
                              strategies for customers...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$800</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                  {/* Service List */}
                  <div className="col-xl-4 col-md-6">
                    <div className="gigs-grid">
                      <div className="gigs-img">
                        <div className="img-slider owl-carousel">
                            <Slider {...imgSlider}>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={all_routes.serviceDetails}>
                              <ImageWithBasePath
                                src="assets/img/gigs/gigs-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          </Slider>
                        </div>
                        <div className="fav-selection">
                          <Link to="#">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#remove-favourite"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </div>
                      <div className="gigs-content">
                        <div className="gigs-info">
                          <Link to="" className="badge bg-primary-light">
                            PPC Advertising
                          </Link>
                        </div>
                        <div className="gigs-title">
                          <h3>
                            <Link to={all_routes.serviceDetails}>
                              Managing and optimizing paid advertising campaigns
                              for search...
                            </Link>
                          </h3>
                        </div>
                        <div className="gigs-card-footer">
                          <h5>$680</h5>
                          <span className="badge">Delivery in 1 day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Service List */}
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="#"
                className="btn btn-md btn-dark d-inline-flex align-items-center"
              >
                <i className="ti ti-loader-3 me-2" />
                Load More
              </Link>
            </div>
          </div>
          {/* /Manage Gigs */}
        </div>
      </div>
    </div>
    {/* /Page Content */}

    <>
  {/* remove fav */}
  <div
    className="modal new-modal fade"
    id="remove-favourite"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div className="modal-dialog modal-sm modal-dialog-centered remove-modal">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-md-12 delete-card">
                <span>
                  <ImageWithBasePath
                    src="assets/img/icons/seller-gigs-trash.svg"
                    alt="img"
                    className="mb-3"
                  />
                </span>
                <h6 className="mb-1"> Are You Sure? </h6>
                <p className="mb-4">Want to permanently delete this item?</p>
                <div className="modal-btn d-flex align-items-center">
                  <button
                    type="button"
                    className="close-btn btn-light btn-sm btn border-0 w-100 me-3 fw-medium"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary btn-sm w-100"
                    type="submit"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* remove fav */}
</>

  </>
  
  )
}

export default SellerGigs
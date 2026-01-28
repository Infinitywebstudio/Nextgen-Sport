import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';

const Pricing = () => {
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
                    <Link to={all_routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pricing
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Pricing</h2>
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
      {/* Price Sction */}
      <section className="price-section">
        <div className="container">
          <div className="pricing-tab align-items-center justify-content-center">
            <ul className="nav">
              <li>
                <Link to="#" data-bs-toggle="tab" data-bs-target="#yearly">
                  Yearly
                </Link>
              </li>
              <li>
                <Link
                  className="active"
                  to="#"
                  data-bs-toggle="tab"
                  data-bs-target="#monthly"
                >
                  Monthly
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="monthly">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Basic</h6>
                            <p>Perfect Plan for Starters</p>
                          </div>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">49$</h2>
                          <p className="mb-0"> / month</p>
                        </div>
                        <p>For Only 10 Staffs</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          10 Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          50 Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          20 Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Limited Time Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          5 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          5 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (10 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card active aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Standard</h6>
                            <p>For Users who want to more</p>
                          </div>
                          <span className="badge">Recommended</span>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">$99</h2>
                          <p className="mb-0"> / month</p>
                        </div>
                        <p>For Only 20 Staffs</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          20 Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          100 Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          50 Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          24/7 Customer Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          15 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          10 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (20 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Current Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Premium</h6>
                            <p>To get et all the Features</p>
                          </div>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">$199</h2>
                          <p className="mb-0"> / month</p>
                        </div>
                        <p>For Only 1 User</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          24/7 Customer Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          30 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          15 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (30 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="yearly">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Standard</h6>
                            <p>For Users who want to more</p>
                          </div>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">$299</h2>
                          <p className="mb-0"> / year</p>
                        </div>
                        <p>For Only 20 Staffs</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          20 Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          100 Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          50 Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          24/7 Customer Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          15 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          10 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (20 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Current Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card active aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Standard</h6>
                            <p>For Users who want to more</p>
                          </div>
                          <span className="badge">Recommended</span>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">$299</h2>
                          <p className="mb-0"> / year</p>
                        </div>
                        <p>For Only 20 Staffs</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          20 Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          100 Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          50 Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          24/7 Customer Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          15 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          10 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (20 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Current Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="border-bottom mb-3">
                      <div className="price-title">
                        <div className="plan-type">
                          <div>
                            <h6>Premium</h6>
                            <p>To get et all the Features</p>
                          </div>
                        </div>
                      </div>
                      <div className="amt-item">
                        <div className="d-flex align-items-center">
                          <h2 className="me-1">$699</h2>
                          <p className="mb-0"> / year</p>
                        </div>
                        <p>For Only 1 User</p>
                      </div>
                    </div>
                    <div className="price-features">
                      <h6>Includes</h6>
                      <ul>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Staffs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Listings / Services
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Unlimited Orders / Jobs
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          24/7 Customer Support
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          30 Product Page Optimizations
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          15 High-Quality Backlinks
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          Keyword Research (30 Keywords)
                        </li>
                        <li>
                          <span>
                            <i className="ti ti-circle-x-filled" />
                          </span>
                          Portfolio
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to="#" className="btn-primary">
                        <i className="feather icon-shopping-cart me-2" />
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Price Sction */}
    </>
  )
}

export default Pricing
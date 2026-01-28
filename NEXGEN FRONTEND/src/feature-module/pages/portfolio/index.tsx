import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'
import { all_routes } from '../../router/all_routes';

const Portfolio = () => {
  const routes = all_routes;
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
                  Portfolio
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Portfolio</h2>
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
    {/* Contact Us */}
    <div className="page-content content">
      <div className="container">
        <div className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified portfolio-tabs owl-theme">
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate active"
              to="#tab1"
              data-bs-toggle="tab"
            >
              All Services
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab2"
              data-bs-toggle="tab"
            >
              AI Services
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab3"
              data-bs-toggle="tab"
            >
              Writing &amp; Translation
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab4"
              data-bs-toggle="tab"
            >
              Graphic Designing
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab5"
              data-bs-toggle="tab"
            >
              Data Analysis
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab6"
              data-bs-toggle="tab"
            >
              Analytics &amp; Strategy
            </Link>
          </div>
          <div className="nav-item me-3">
            <Link
              className="nav-link text-truncate"
              to="#tab7"
              data-bs-toggle="tab"
            >
              Data Science &amp; ML
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link text-truncate"
              to="#tab8"
              data-bs-toggle="tab"
            >
              Videography
            </Link>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane show active" id="tab1">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab2">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab3">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab4">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab5">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab6">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab7">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab8">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-01.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-02.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Social Media</h4>
                      <p>Ecommerce Seo</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-03.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Artificial Intelligence</h4>
                      <p>Promoted Listings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-04.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Digital Marketing</h4>
                      <p>Website Promotion</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-05.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Videography</h4>
                      <p>Promotion Video</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-widget">
                  <Link to={routes.portfolioDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="Image"
                      src="assets/img/gallery/gallery-06.jpg"
                    />
                    <div className="gallery-overlay">
                      <h4>Design</h4>
                      <p>Logo Design</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Contact Us */}
  </>
  
  )
}

export default Portfolio
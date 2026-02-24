import { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ImageWithBasePath from '../../../core/img'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogCarousel = () => {
  const routes = all_routes
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const blog  = {
    dots: true,
    loop:true,
    nav: false,
    infinite: true,
    smartSpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
                    <Link to={routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Blog Grid{" "}
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Blog Grid</h2>
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
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          {/* Blogs */}
          <div className="blog">
            <div className="row">
              <div className="col-md-12">
                <div className="blog-carousel owl-carousel">
                  <Slider {...blog}>
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-01.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={1}
                            onClick={() => handleItemClick(1)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[1] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Freelancing
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              How to Choose the Right Freelancer for Your Project
                            </Link>
                          </h3>
                          <p>
                            Skills, Portfolio, Reviews, Communication, Budget,
                            Deadlines, Experience, Reliability, Expertise, Fit.......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-06.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Robert Hollenbeck</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 20, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-02.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={2}
                            onClick={() => handleItemClick(2)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[2] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              In-Demand Skills
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3>
                            <Link to={routes.blogDetails}>
                              Top 10 In-Demand Skills in the Gig Economy for 2024
                            </Link>
                          </h3>
                          <p>
                            Data analytics, cloud computing, UX/UI design,
                            cybersecurity, cloud computing, full stack .......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-10.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Abigail Garett</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 21, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-03.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={3}
                            onClick={() => handleItemClick(3)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[3] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              User Guide
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3>
                            <Link to={routes.blogDetails}>
                              Understanding Service Marketplace Fees: A Guide for New
                              Users
                            </Link>
                          </h3>
                          <p>
                            A user guide is a document or manual that provides
                            instructions on how to use a product, service......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-11.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">David Shorey</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 23, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-04.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={4}
                            onClick={() => handleItemClick(4)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[4] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Future Trends
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              The Future of Remote Work: Trends and Predictions
                            </Link>
                          </h3>
                          <p>
                            Skills, Portfolio, Reviews, Communication, Budget,
                            Deadlines, Experience, Reliability, Expertise, Fit.......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-12.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Amanda Hansford</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 24, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-05.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={5}
                            onClick={() => handleItemClick(5)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[5] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Business
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3>
                            <Link to={routes.blogDetails}>
                              Effective Strategies for Growing Your Freelance Business
                            </Link>
                          </h3>
                          <p>
                            Skills, Portfolio, Reviews, Communication, Budget,
                            Deadlines, Experience, Reliability, Expertise, Fit.......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-09.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Kent Choi</Link>
                              </p>
                              <div className="dot me-2" />
                              <span>Jan 25, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-06.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={6}
                            onClick={() => handleItemClick(6)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[6] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Portfolio
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              The Importance of a Portfolio and How to Create One That
                              Stands Out
                            </Link>
                          </h3>
                          <p>
                            Data analytics, cloud computing, UX/UI design,
                            cybersecurity, cloud computing, full stack .......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-13.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Anne Castaneda</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 27, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-07.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={7}
                            onClick={() => handleItemClick(7)}>
                        <Link to="#" className={`fav-icon ${
                                  selectedItems[7] ? "favourite" : ""
                                }`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Home Care
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              Understanding the Benefits of Professional Cleaning
                              Services
                            </Link>
                          </h3>
                          <p>
                            A user guide is a document or manual that provides
                            instructions on how to use a product, service......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-14.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Joanne Parise</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 28, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-08.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={8}
                        onClick={() => handleItemClick(8)}>
                    <Link to="#" className={`fav-icon ${
                              selectedItems[8] ? "favourite" : ""
                            }`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Digital Marketing
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              Leveraging Digital Marketing Services for Small
                              Businesses
                            </Link>
                          </h3>
                          <p>
                            Skills, Portfolio, Reviews, Communication, Budget,
                            Deadlines, Experience, Reliability, Expertise, Fit.......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-15.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Kylee Zamudio</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 29, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                    {/* Blog */}
                    <div className="blog-grid">
                      <div className="blog-img">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            src="assets/img/blog/blog-09.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="fav-selection" key={9}
                        onClick={() => handleItemClick(9)}>
                    <Link to="#" className={`fav-icon ${
                              selectedItems[9] ? "favourite" : ""
                            }`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                      </div>
                      <div className="blog-content">
                        <div className="user-head">
                          <div className="badge-text">
                            <Link
                              to="#"
                              className="badge bg-primary-light"
                            >
                              Graphic Design
                            </Link>
                          </div>
                        </div>
                        <div className="blog-title">
                          <h3 className="mb-2">
                            <Link to={routes.blogDetails}>
                              Graphic Design for Social Media: Tips to Engage Your
                              Audience
                            </Link>
                          </h3>
                          <p>
                            Data analytics, cloud computing, UX/UI design,
                            cybersecurity, cloud computing, full stack .......
                          </p>
                        </div>
                        <div className="blog-content-footer d-flex justify-content-between align-items-center">
                          <div className="user-info">
                            <Link to="#">
                              <ImageWithBasePath src="assets/img/user/user-16.jpg" alt="img" />
                            </Link>
                            <div className="d-flex align-items-center">
                              <p className="me-2">
                                <Link to="#">Dann Bowman</Link>
                              </p>
                              <span className="dot me-2" />
                              <span>Jan 30, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Blog */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* /Blogs */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  )
}

export default BlogCarousel
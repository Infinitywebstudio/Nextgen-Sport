import { useState } from 'react'
import ImageWithBasePath from '../../../core/img'
import { all_routes } from '../../router/all_routes';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const routes = all_routes
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
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
                    Blog List{" "}
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Blog List</h2>
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
            <div className="row justify-content-center">
              {/* Blog */}
              <div className="col-lg-8">
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
                    <div className="blog-content-footer d-flex justify-content-between align-items-center">
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
                    <div className="user-head">
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
              </div>
              {/* /Blog */}
              {/* Blog */}
              <div className="col-lg-8">
                <div className="blog-grid">
                  <div className="blog-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        src="assets/img/blog/blog-04.jpg"
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
                        If you want to create a dropdown for selecting days within a
                        week (like selecting a specific day......
                      </p>
                    </div>
                    <div className="blog-content-footer d-flex justify-content-between align-items-center">
                      <div className="user-info">
                        <Link to={routes.blogDetails}>
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
              </div>
              {/* /Blog */}
              {/* Blog */}
              <div className="col-lg-8">
                <div className="blog-grid">
                  <div className="blog-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        src="assets/img/blog/blog-07.jpg"
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
                          Home Care
                        </Link>
                      </div>
                    </div>
                    <div className="blog-title">
                      <h3 className="mb-2">
                        <Link to={routes.blogDetails}>
                          Understanding the Benefits of Professional Cleaning
                        </Link>
                      </h3>
                      <p>
                        Refers to professional or personal support services provided
                        to individuals in their homes to help with daily
                        activities......
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
              </div>
              {/* /Blog */}
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="#" className="btn btn-dark">
                Load More
              </Link>
            </div>
          </div>
          {/* /Blogs */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  )
}

export default BlogList
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";

const SellerReviews = () => {
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="main-title mb-4">
            <h4>Reviews</h4>
          </div>
          {/*User Reviews */}
          <div className="col-xl-12 col-lg-12">
            <div className="user-review">
              <ul className="review-lists">
                <li>
                  <div className="review-wrap">
                    <div>
                      <div className="review-user-info">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            alt="img"
                          />
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
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                              </span>
                              <span className="rating-count">5.0 </span>
                            </div>
                            <p>2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-content">
                        <h6>
                          I will do designing and executing targeted email
                          campaigns
                        </h6>
                        <p>
                          I recently hired a him to help me with a project and I
                          must say, I am extremely impressed with their work.
                          From start to finish, the freelancer was professional,
                          efficient, and a pleasure to work with.
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#leave_review"
                      >
                        <i className="feather icon-edit text-success" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_review"
                      >
                        <i className="feather icon-trash-2 text-error" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="review-wrap">
                    <div>
                      <div className="review-user-info">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-02.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc">
                            <h6>
                              <Link to="#">Robert Metcalf</Link>
                            </h6>
                          </div>
                          <div className="reviewer-rating">
                            <div className="star-rate">
                              <span className="ratings">
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                              </span>
                              <span className="rating-count">5.0 </span>
                            </div>
                            <p>2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-content">
                        <h6>Professional and Reliable Service</h6>
                        <p>
                          Working with Hannah was a great experience. She
                          understood our project requirements perfectly and
                          executed them with professionalism and efficiency.
                          Will definitely hire again!.
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#leave_review"
                      >
                        <i className="feather icon-edit text-success" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_review"
                      >
                        <i className="feather icon-trash-2 text-error" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="review-wrap">
                    <div>
                      <div className="review-user-info">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-03.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc">
                            <h6>
                              <Link to="#">Betty Cheng</Link>
                            </h6>
                          </div>
                          <div className="reviewer-rating">
                            <div className="star-rate">
                              <span className="ratings">
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                              </span>
                              <span className="rating-count">5.0 </span>
                            </div>
                            <p>2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-content">
                        <h6>Top-Notch Freelancer for Email Marketing</h6>
                        <p>
                          If you need a freelancer who delivers high-quality
                          work, look no further. Hannah ensured that every
                          aspect of our project was executed smoothly and
                          successfully.
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#leave_review"
                      >
                        <i className="feather icon-edit text-success" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_review"
                      >
                        <i className="feather icon-trash-2 text-error" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="review-wrap">
                    <div>
                      <div className="review-user-info">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-04.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc">
                            <h6>
                              <Link to="#">Richard</Link>
                            </h6>
                          </div>
                          <div className="reviewer-rating">
                            <div className="star-rate">
                              <span className="ratings">
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                                <i className="fa-solid fa-star filled" />
                              </span>
                              <span className="rating-count">5.0 </span>
                            </div>
                            <p>2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="review-content">
                        <h6>Excellent Communication and Delivery</h6>
                        <p>
                          Throughout the entire project, Hannah kept us updated,
                          met all deadlines, and exceeded expectations. The
                          results were beyond what we imagined!
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#leave_review"
                      >
                        <i className="feather icon-edit text-success" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_review"
                      >
                        <i className="feather icon-trash-2 text-error" />
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /User Reviews */}
          <div className="review-btn text-center">
            <Link to="" className="btn btn-dark text-white">
              {" "}
              <i className="ti ti-loader-3 me-1 rotate" /> Load more{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Delete Review  */}
      <div
        className="modal new-modal fade"
        id="delete_review"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered notify-modal remove-modal">
          <div className="modal-content">
            <div className="modal-body service-modal">
              <div className="sumary-widget text-center">
                <div className="summary-info">
                  <ImageWithBasePath
                    src="assets/img/delete-notify.png"
                    alt="delete-notify"
                    className="img-fluid img1 mb-4"
                  />
                  <h6 className="mb-1 text-center"> Are You Sure? </h6>
                  <p className="mb-4">
                    {" "}
                    Want to permanently delete this item?{" "}
                  </p>
                  <div className="delete-btn d-flex align-item-center justify-content-between gap-2">
                    <Link
                      to=""
                      className="btn btn-light w-100 bg-light close-btn"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Cancel{" "}
                    </Link>
                    <Link
                      to=""
                      className="btn btn-primary w-100 close-btn"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Delete{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete details */}
      {/* Leave Review Modal  */}
      <div
        className="modal new-modal fade"
        id="leave_review"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a Review</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body service-modal">
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark mb-1">
                  Your Review <span className="text-primary">*</span>{" "}
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
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="kadajsalamander"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-wrap form-focus">
                    <label className="mb-1 fw-medium text-dark">
                      Email <span className="text-primary">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="kadajsal25@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-wrap form-focus">
                    <label className="mb-1 fw-medium text-dark">
                      Write a Review <span className="text-primary">*</span>
                    </label>
                    <input type="text" className="form-control text-area" />
                  </div>
                </div>
              </div>
              <div className="modal-btn d-flex pt-3">
                <Link to="#" className="btn btn-primary w-100">
                  Submit a Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Password Modal */}
    </>
  );
};

export default SellerReviews;

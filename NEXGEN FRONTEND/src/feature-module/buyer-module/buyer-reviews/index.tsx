import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import PredefinedDateRanges from "../../../core/common/datePicker";

const BuyerReviews = () => {
  return (
    <>
      {/* Page Content */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="main-title mb-4">
            <h4>Reviews</h4>
          </div>
          <div className="table-filter">
            <ul className="filter-item">
              <li>
                <div>
                  <div
                    id="reportrange"
                    className="reportrange-picker d-flex align-items-center"
                  >
                    <i className="ti ti-calendar text-gray-5 fs-14 me-1" />
                    <PredefinedDateRanges />
                  </div>
                </div>
              </li>
            </ul>
            <div id="tablefilter" />
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
                              <Link to="#">Aaron Markram</Link>
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
                        <h6>Exceptional Service!</h6>
                        <p>
                          John provided top-notch service, exceeding our
                          expectations. His attention to detail and prompt
                          communication made the process seamless. Highly
                          recommended!
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
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
                        <h6>Outstanding Work!</h6>
                        <p>
                          Sarah’s expertise in graphic design brought our vision
                          to life. The final product was creative, professional,
                          and delivered on time. Would definitely work with her
                          again!
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
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
                              <Link to="#">Oliver</Link>
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
                        <h6>Great Experience!</h6>
                        <p>
                          Sarah’s expertise in graphic design brought our vision
                          to life. The final product was creative, professional,
                          and delivered on time. Would definitely work with her
                          again!
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
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
                        <h6>Highly !</h6>
                        <p>
                          Mike was a pleasure to work with. His web development
                          skills helped us create a user-friendly website that
                          exceeded our expectations. 5 stars!
                        </p>
                      </div>
                    </div>
                    <div className="table-action">
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
            <Link to="#" className="btn btn-dark text-white">
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
        <div className="modal-dialog modal-dialog-centered notify-modal">
          <div className="modal-content">
            <div className="modal-body service-modal">
              <div className="sumary-widget text-center">
                <div className="summary-info">
                  <ImageWithBasePath
                    src="assets/img/icons/delete-vector.svg"
                    alt="delete-notify"
                    className="img-fluid img1 mb-4"
                  />
                  <div className="mb-4">
                    <h6 className="mb-1 text-center">Are You Sure?</h6>
                    <span>Want to permanently delete this item?</span>
                  </div>
                  <div className="delete-btn d-flex align-item-center justify-content-between gap-2">
                    <Link
                      to="#"
                      className="btn btn-light w-100 bg-light close-btn"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Cancel{" "}
                    </Link>
                    <Link
                      to="#"
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
              <h5 className="modal-title">Leave a Review</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body service-modal">
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
                      Email <span className="text-primary">*</span>{" "}
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-wrap form-focus">
                    <label className="mb-1 fw-medium text-dark">
                      Write a Review <span className="text-primary">*</span>
                    </label>
                    <textarea
                      className="text-area form-control"
                      defaultValue={""}
                    />
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

export default BuyerReviews;

import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";

export const BuyPurchasemodal = () => {
  return (
    <>
      {/* details */}
      <div
        className="modal new-modal fade"
        id="purchase-details"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h5 className="modal-title">Purchases Details</h5>
                <span className="badge badge-pink-transparent">New</span>
              </div>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="purchase-details-top d-flex align-items-center mb-3">
                      <div className="purchase-details-img me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="/assets/img/gigs/gigs-16.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6>
                          I will design, redesign wordpress website using
                          elementor pro
                        </h6>
                        <p className="mb-0">
                          ID : #1245 | Delivery : Jan 29 2025 8:10 AM
                        </p>
                      </div>
                    </div>
                    <h6 className="mb-2">Détails du prestataire</h6>
                    <div className="review-user-info mb-0 bg-light p-3 rounded-2 mb-3">
                      <div className="review-img">
                        <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                      </div>
                      <div className="reviewer-info">
                        <div className="reviewer-loc d-block">
                          <div className="d-flex align-items-center flex-wrap">
                            <h6>
                              <Link
                                to="#"
                                className="mb-2 me-2"
                              >
                                Adrian Revolt
                              </Link>
                            </h6>{" "}
                            | From USA
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="star-rate">
                              <span className="ratings">
                                <i className="ti ti-star-filled text-warning" />
                              </span>
                              <span className="rating-count">
                                Ratings 5.0 (45 Reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="mb-2">Service Details</h6>
                    <div className="table-responsive border rounded-3 mb-3">
                      <table className="table rounded purchase-table">
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
                            <td className="price">$100</td>
                          </tr>
                          <tr>
                            <td>Additional 1 : I can clean</td>
                            <td>1</td>
                            <td className="price">$100</td>
                          </tr>
                          <tr>
                            <td>Super Fast : Super fast delivery</td>
                            <td>1</td>
                            <td className="price">$100</td>
                          </tr>
                          <tr>
                            <td className="total no-border">Grand Total</td>
                            <td className="no-border" />
                            <td className="price no-border">$300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h6>Upload Final Files</h6>
                    <div className="drag-upload form-wrap mb-2">
                      <input type="file" accept="image/*" />
                      <div className="img-upload">
                        <p>
                          <i className="feather-upload-cloud" />
                          Drag or Upload Video
                        </p>
                      </div>
                    </div>
                    <p>Maximum file upload size 5MB</p>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <span className="files-icon flex-shrink-0 rounded-2">
                          <i className="ti ti-photo" />
                        </span>
                        <div className="file-text">
                          <h6 className="mb-1">Video_gig-1.mp4</h6>
                          <p className="mb-0">Size: 353KB</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="d-flex p-2 rounded bg-light"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <div className="modal-btn d-flex align-items-center">
                      <button
                        type="button"
                        className="close-btn btn-light btn-sm btn border-0 w-100 me-3"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary btn-sm w-100"
                        type="submit"
                      >
                        Save &amp; Complete
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* details */}
      {/* Add Review */}
      <div
        className="modal new-modal fade"
        id="add_review"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View Review</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="review-item review-wrap">
                      <div className="review-user-info mb-0 border-0">
                        <div className="review-img">
                          <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc d-block">
                            <h6>
                              <Link to="#" className="mb-2">
                                kadajsalamander
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                </span>
                                <span className="rating-count">
                                  5.0 | 1day ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-content review-contentnew">
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
                    <div className="review-item review-wrap">
                      <div className="review-user-info mb-0 border-0">
                        <div className="review-img">
                          <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc d-block">
                            <h6>
                              <Link to="#" className="mb-2">
                                kadajsalamander
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                </span>
                                <span className="rating-count">
                                  5.0 | 1day ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-content review-contentnew">
                        <p className="pt-3"> Thank You</p>
                      </div>
                    </div>
                    <div className="modal-btn text-lg-end">
                      <button className="btn btn-primary" type="submit">
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Review */}
      {/* Add Review */}
      <div
        className="modal new-modal fade"
        id="add_review1"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Write a Review</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="review-item review-wrap">
                      <div className="review-user-info mb-0">
                        <div className="review-img">
                          <ImageWithBasePath src="assets/img/user/user-01.jpg" alt="img" />
                        </div>
                        <div className="reviewer-info">
                          <div className="reviewer-loc d-block">
                            <h6 className="mb-2">
                              <Link to="#">kadajsalamander</Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <div className="star-rate">
                                <span className="ratings">
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                </span>
                                <span className="rating-count">5.0 </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="mb-1">
                            Your Rating
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div>
                            <i className="ti ti-star-filled text-warning" />
                            <i className="ti ti-star-filled text-warning" />
                            <i className="ti ti-star-filled text-warning" />
                            <i className="ti ti-star-filled text-warning" />
                          </div>
                        </div>
                        <div className="form-wrap form-item mb-0">
                          <label className="mb-1">
                            Write a Review
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-btn">
                      <button className="btn btn-primary w-100" type="submit">
                        Send Feedback
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Review */}
      {/* Order Cancel */}
      <div
        className="modal new-modal fade"
        id="cancel_order"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cancel your Order</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-wrap form-item">
                      <textarea
                        className="form-control"
                        placeholder="Reason"
                        defaultValue={""}
                      />
                    </div>
                    <div className="modal-btn">
                      <button className="btn btn-primary w-100" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Order Cancel */}
    </>
  );
};

import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { orderStatus } from "../../../core/common/selectOption";

const SellerOrdersModal = () => {
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
                <h5 className="modal-title">Order Details</h5>
                <span className="badge badge-pink-transparent">Completed</span>
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
                          src="assets/img/gigs/gigs-16.png"
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
                    <h6>Détails du client</h6>
                    <div
                      className="review-user-info mb-0 bg-light p-3 rounded-2 mb-3 Buyer-user
                              "
                    >
                      <div className="review-img">
                        <ImageWithBasePath
                          src="assets/img/user/user-05.jpg"
                          alt="img"
                          className="user-img"
                        />
                      </div>
                      <div className="reviewer-info">
                        <div className="reviewer-loc d-block">
                          <div className="d-flex align-items-center flex-wrap">
                            <h6>
                              <Link to="#" className="mb-2 me-2">
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
                              <span className="rating-count pt-1">
                                Ratings 5.0 (45 Reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-btn text-lg-end">
                      <button className="btn btn-primary btn-sm" type="submit">
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
                      <div className="review-user-info mb-0">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            alt="img"
                          />
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
                      <div className="review-user-info mb-0">
                        <div className="review-img">
                          <ImageWithBasePath
                            src="assets/img/user/user-01.jpg"
                            alt="img"
                          />
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
      {/* Change status */}
      <div
        className="modal new-modal fade"
        id="change_status"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change your status </h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-wrap">
                <label className="form-label mb-1 fw-medium text-dark">
                  Order Status<span className="text-primary">*</span>
                </label>
                <CommonSelect
                    className="select"
                    options={orderStatus}
                    defaultValue={orderStatus[0]}
                />
              </div>
              <div className="modal-btn">
                <button className="btn btn-primary w-100" type="submit">
                  Upadte Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Order Cancel */}
      {/* Order Cancel */}
      <div
        className="modal new-modal fade"
        id="cancel_order"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="model-item-new">
                <i className="ti ti-xbox-x avatar-sm bg-light text-muted mb-4" />
                <p className="text-dark fw-medium">
                  Are You Want to Cancel this Item ?
                </p>
              </div>
              <div className="modal-btn d-flex justify-content-between gap-3">
                <button
                  className="btn btn-light w-100 close-btn"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  className="btn btn-primary w-100 close-btn"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Order Cancel */}
    </>
  );
};

export default SellerOrdersModal;

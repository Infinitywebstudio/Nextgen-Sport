import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { city, country, state } from "../../../core/common/selectOption";
import { DatePicker } from "antd";

const SellerSettingsModal = () => {
  return (
    <>
      {/* Plans Modal */}
      <div
        className="modal new-modal fade"
        id="plans-modal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upgrade Plan</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body service-modal pb-0">
              <div className="text-center mb-3">
                <div className="enable-item d-inline-flex align-items-center justify-content-center bg-light px-3 py-2 rounded-pill">
                  <label className="mb-0 me-2">Monthly</label>
                  <div className="form-check form-switch check-on m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                  <label className="mb-0">Yearly</label>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="mb-3">
                        <strong>Basic</strong>
                      </p>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
                        <h3 className="mb-0">$99</h3>
                        <span>/month</span>
                        <span className="badge bg-info text-white p-1 rounded-2">
                          Only 10 Users
                        </span>
                      </div>
                      <p className="mb-3">
                        Best for Freelancers &amp; small businesses needs simple
                        invoicing.
                      </p>
                      <Link
                        to="#"
                        className="buy-plan-btn mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#checkout-modal"
                      >
                        <i className="ti ti-shopping-cart me-2" />
                        Buy Plan
                      </Link>
                      <p className="text-center mb-3">
                        <small>FEATURES</small>
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        10 Staffs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        50 Listings / Services
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        20 Orders / Jobs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Limited Time Support
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        5 Product Page Optimizations
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        5 High-Quality Backlinks
                      </p>
                      <p className="d-flex align-items-center">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Portfolio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="card">
                    <span className="badge popular-badge">Most Popular</span>
                    <div className="card-body">
                      <p className="mb-3">
                        <strong>Standard</strong>
                      </p>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
                        <h3 className="mb-0">$199</h3>
                        <span>/month</span>
                        <span className="badge bg-info text-white p-1 rounded-2">
                          Only 25 Users
                        </span>
                      </div>
                      <p className="mb-3">
                        Growing businesses managing recurring invoices &amp;
                        reports.
                      </p>
                      <Link
                        to="#"
                        className="buy-plan-btn mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#checkout-modal"
                      >
                        <i className="ti ti-shopping-cart me-2" />
                        Buy Plan
                      </Link>
                      <p className="text-center mb-3">
                        <small>FEATURES</small>
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        20 Staffs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        100 Listings / Services
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        50 Orders / Jobs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        24/7 Customer Support
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        15 Product Page Optimizations
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        10 High-Quality Backlinks
                      </p>
                      <p className="d-flex align-items-center">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Portfolio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="mb-3">
                        <strong>Professional</strong>
                      </p>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
                        <h3 className="mb-0">$299</h3>
                        <span>/month</span>
                        <span className="badge bg-info text-white p-1 rounded-2">
                          Only 50 Users
                        </span>
                      </div>
                      <p className="mb-3">
                        Best for Large sales teams requiring automation &amp;
                        integrations.
                      </p>
                      <Link
                        to="#"
                        className="buy-plan-btn mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#checkout-modal"
                      >
                        <i className="ti ti-shopping-cart me-2" />
                        Buy Plan
                      </Link>
                      <p className="text-center mb-3">
                        <small>FEATURES</small>
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Unlimited Staffs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Unlimited Listings / Services
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Unlimited Orders / Jobs
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        24/7 Customer Support
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        30 Product Page Optimizations
                      </p>
                      <p className="d-flex align-items-center mb-2">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        15 High-Quality Backlinks
                      </p>
                      <p className="d-flex align-items-center">
                        <i className="ti ti-circle-check-filled me-2 text-success" />
                        Portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Plans Modal */}
      <div
        className="modal new-modal fade"
        id="checkout-modal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Checkout</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body pb-2">
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mb-3">Basic Information</h6>
                  <div className="mb-4 border-bottom">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-1 fw-medium text-dark">
                            First Name <span className="text-primary">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-1 fw-medium text-dark">
                            Last Name <span className="text-primary">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-1 fw-medium text-dark">
                            {" "}
                            Email <span className="text-primary">*</span>
                          </label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="mb-1 fw-medium text-dark">
                            Phone number <span className="text-primary">*</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone2"
                            name="phone2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-3">Address Information</h6>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="mb-1 fw-medium text-dark">
                          Address<span className="text-primary">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium text-dark">
                          Country<span className="text-primary">*</span>
                        </label>
                        <CommonSelect
                            className="select"
                            options={country}
                            defaultValue={country[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium text-dark">
                          State<span className="text-primary">*</span>
                        </label>
                        <CommonSelect
                            className="select"
                            options={state}
                            defaultValue={state[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium text-dark">
                          City<span className="text-primary">*</span>
                        </label>
                        <CommonSelect
                            className="select"
                            options={city}
                            defaultValue={city[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-1 fw-medium text-dark">
                          Postal Code<span className="text-primary">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="flex-fill w-100 rounded-2 bg-light p-3 mb-3 d-flex justify-content-between flex-column">
                    <div className="card w-100 subscription-details">
                      <div className="card-body">
                        <h6 className="mb-3">Subscription Details</h6>
                        <ul>
                          <li className="mb-2">
                            Plan Name <span className="float-end">Basic</span>
                          </li>
                          <li className="mb-2">
                            Plan Amount{" "}
                            <span className="float-end">$99.00</span>
                          </li>
                          <li className="mb-2">
                            Tax <span className="float-end">$0.00</span>
                          </li>
                          <li>
                            Total <span className="float-end">$99.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-item-center justify-content-center mb-4">
                        <ImageWithBasePath
                          src="assets/img/icons/shield-lock.svg"
                          alt="img"
                          className="img-fluid flex-shrink-0 me-2"
                        />
                        <div>
                          <h6 className="mb-0">100% Cashback Guarantee</h6>
                          <span>We Protect Your Money</span>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#payment-successful"
                      >
                        Pay $99.00
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payment successful */}
      <div
        className="modal new-modal fade"
        id="payment-successful"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body text-center">
              <ImageWithBasePath
                src="assets/img/icons/success-icon.svg"
                alt="img"
                className="mb-4"
              />
              <h6 className="mb-2">Payment Successful</h6>
              <p className="mb-4">
                Your purchase of the Basic Plan has been completed with
                Reference Number #12559845
              </p>
              <div className="modal-btn d-flex align-items-center">
                <button
                  type="button"
                  className="close-btn btn-light btn-sm btn border-0 w-100 me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#plans-modal"
                >
                  Back to Plans
                </button>
                <button className="btn btn-primary btn-sm w-100" type="submit">
                  Purchase details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payment successful */}
      {/* add card  */}
      <div
        className="modal new-modal fade"
        id="add-card"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered model-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Card</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Name on the Card <span className="text-primary">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Card Number <span className="text-primary">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Expiration Date <span className="text-primary">*</span>
                    </label>
                    <DatePicker
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        className="form-control datetimepicker"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      CVV <span className="text-primary">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-btn d-flex gap-3">
                <Link
                  to="#"
                  className="btn btn-light w-100 text-dark"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary w-100">
                  Add Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /add card */}
      {/* add card  */}
      <div
        className="modal new-modal fade"
        id="edit-card"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered model-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Card</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Name on the Card <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Kevin Reynolds"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Card Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="5396 5250 1908 1568"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      Expiration Date <span className="text-primary">*</span>
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="mb-1 fw-medium text-dark">
                      CVV <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={556}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-btn d-flex gap-3">
                <Link
                  to="#"
                  className="btn btn-light w-100 text-dark"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary w-100">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /add card */}
      {/* delete card */}
      <div
        className="modal new-modal fade"
        id="delete-card"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <ImageWithBasePath
                src="assets/img/icons/delete-vector.svg"
                alt="img"
                className="mb-4"
              />
              <h6 className="mb-4">
                Are you sure want to permanently delete this card?
              </h6>
              <div className="modal-btn d-flex align-items-center">
                <button
                  type="button"
                  className="close-btn btn-light btn-sm btn border-0 w-100 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btn-primary btn-sm w-100" type="submit">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete details */}
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
      {/* Password Modal  */}
      <div
        className="modal new-modal fade"
        id="password_update"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
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
                <label className="mb-1 fw-medium text-dark">
                  Current Password
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">New Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">
                  Confirm Password
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="modal-btn d-flex gap-3 pt-3">
                <Link
                  to="#"
                  className="btn btn-light w-100 text-dark"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary w-100">
                  Save changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Password Modal */}
      {/* Payment integration Modal  */}
      <div
        className="modal new-modal fade"
        id="integration_popup"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Paypal Configuartion</h5>
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
                <label className="mb-1 fw-medium text-dark">
                  API Key <span className="text-primary">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">
                  API Secret Key<span className="text-primary">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">
                  Sender ID<span className="text-primary">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap gig-option">
                <label className="mb-1 fw-medium text-dark d-block mb-2">
                  {" "}
                  Status <span className="text-primary">*</span>
                </label>
                <label className="custom_radio">
                  <input type="radio" name="buyer" defaultChecked />
                  <span className="checkmark" />
                  Active
                </label>
                <label className="custom_radio">
                  <input type="radio" name="buyer" />
                  <span className="checkmark" />
                  In Active
                </label>
              </div>
              <div className="modal-btn d-flex gap-3 pt-3">
                <Link
                  to="#"
                  className="btn btn-light w-100 text-dark"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary w-100">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment integration Modal */}
    </>
  );
};

export default SellerSettingsModal;

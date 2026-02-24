import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { all_routes } from "../../router/all_routes";

const BuyerWalletModel = () => {
  return (
    <>
      {/* Add Payment */}
      <div
        className="modal new-modal fade"
        id="add_payment"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Payment</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="amt-wrap">
                    <div className="form-wrap">
                      <label className="form-label">
                        Enter Amount ($)
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <ul className="amt-list">
                      <li>Or</li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $50
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $100
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $150
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="buyer-method">
                    <h6>Select Payment Gateway *</h6>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Paypal
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Stripe
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="payment" defaultChecked />
                      <span className="checkmark" />
                      Credit Card
                    </label>
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Password<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#success_credit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary w-100"
                  >
                    Add Payment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Payment */}
      {/* Withdraw */}
      <div
        className="modal new-modal fade"
        id="withdraw"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Withdraw Payment</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="amt-wrap">
                    <div className="form-wrap">
                      <label className="form-label">
                        Enter Amount ($)
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <ul className="amt-list">
                      <li>Or</li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $50
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $100
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          $150
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="buyer-method">
                    <h6>Select Payment Gateway *</h6>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Paypal
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Stripe
                    </label>
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-wrap form-item">
                    <label className="form-label">
                      Password<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#success_credit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary w-100"
                  >
                    Withdraw
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Withdraw */}
      {/* Gigs Publish */}
      <div
        className="modal custom-modal fade"
        id="success_credit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="success-message text-center">
                <div className="success-popup-icon">
                  <ImageWithBasePath src="assets/img/icons/happy-icon.svg" alt="icon" />
                </div>
                <div className="success-content">
                  <h4>Credit Successfully</h4>
                  <p>
                    Amount of <span>“$200”</span> has been successfully Credited
                    to your account with transaction ID of{" "}
                    <span>“#124454487878874”</span>
                  </p>
                </div>
                <div className="col-lg-12 text-center">
                  <Link to={all_routes.buyerWallet} className="btn btn-primary">
                    Back to Wallet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Gigs Publish */}
    </>
  );
};

export default BuyerWalletModel;

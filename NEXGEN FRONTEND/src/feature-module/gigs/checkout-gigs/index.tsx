import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/img";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import { category, city, state } from "../../../core/common/selectOption";

const CheckoutGigs = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="breadcrumb-img">
          <div className="breadcrumb-left">
            <ImageWithBasePath src="assets/img/bg/banner-bg-03.png" alt="img" />
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
                    Checkout
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title mb-0">
                Checkout <span className="text-primary" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="login-card mb-3 mb-lg-0">
                <div className="login-heading text-start mb-4">
                  <h5>Billing Details</h5>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        Address <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-block form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        Category <span className="text-primary">*</span>
                      </label>
                      <CommonSelect
                        options={category}
                        className="select"
                        defaultValue={category[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-block form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        City <span className="text-primary">*</span>
                      </label>
                      <CommonSelect
                        options={city}
                        className="select"
                        defaultValue={city[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-block form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        State <span className="text-primary">*</span>
                      </label>
                      <CommonSelect
                        options={state}
                        className="select"
                        defaultValue={state[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-block form-wrap form-focus">
                      <label className="mb-1 fw-medium text-dark">
                        {" "}
                        Pincode <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="check-payment">
                  <h5> Payment </h5>
                  {/* tab */}
                  <ul className="nav payment-gateway">
                    <li>
                      <div
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target="#upload-img"
                      >
                        <label className="payment-card mb-0">
                          <input type="radio" name="payment" defaultChecked />
                          <span className="content">
                            <span className="radio-btn" />
                            <span className="payment-text">
                              Pay with Paypal
                            </span>
                            <ImageWithBasePath
                              src="assets/img/payment/gateway-01.png"
                              alt=""
                            />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div data-bs-toggle="tab" data-bs-target="#upload-video">
                        <label className="payment-card mb-0">
                          <input type="radio" name="payment" defaultChecked />
                          <span className="content">
                            <span className="radio-btn" />
                            <span className="payment-text">
                              Pay with Stripe
                            </span>
                            <ImageWithBasePath
                              src="assets/img/payment/gateway-02.png"
                              alt=""
                              className="img-fluid img2"
                            />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div data-bs-toggle="tab" data-bs-target="#upload-link">
                        <label className="payment-card mb-0">
                          <input type="radio" name="payment" defaultChecked />
                          <span className="content">
                            <span className="radio-btn" />
                            <span className="payment-text">
                              Pay with Wallet
                            </span>
                            <ImageWithBasePath
                              src="assets/img/payment/gateway-03.png"
                              alt=""
                              className="img-fluid img3"
                            />
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="upload-img">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus mb-lg-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Email <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus m-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Password <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="upload-video">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus mb-lg-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Email <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus m-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Password <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="upload-link">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus mb-lg-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Email <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block form-wrap form-focus m-0">
                            <label className="mb-1 fw-medium text-dark">
                              {" "}
                              Password <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Order details */}
              <div className="service-widget member-widget mb-0">
                <h5 className="service-head d-flex align-items-center">
                  Order Details <span className="ms-3"> #OR4478 </span>{" "}
                </h5>
                <div className="user-details bg-light p-3 mb-16">
                  <div className="user-img">
                    <ImageWithBasePath
                      src="assets/img/checkout-image.png"
                      alt="img"
                    />
                  </div>
                  <div className="user-info">
                    <h5>
                      <span className="me-2">
                        I will design, redesign wordpress website using
                        elementor pro
                      </span>{" "}
                    </h5>
                    <p>Delivery : Jan 29 2025</p>
                  </div>
                </div>
                <ul className="member-info">
                  <li>
                    Gigs Price
                    <span>$45</span>
                  </li>
                  <li>
                    Gig's Quantity × 3<span>$105</span>
                  </li>
                  <li>
                    Extra Services
                    <span>$98</span>
                  </li>
                  <li>
                    Processing Fees
                    <span>$4</span>
                  </li>
                  <li>
                    Tax (15%)
                    <span>$18</span>
                  </li>
                </ul>
                <div className="about-me ">
                  <h6 className="d-flex justify-content-between align-items-center">
                    Total <span> $298</span>
                  </h6>
                </div>
                <Link
                  to={all_routes.gigsorderSuccessful}
                  className="btn btn-primary mb-0 w-100"
                >
                  Pay $298
                </Link>
              </div>
              {/* Order details */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default CheckoutGigs;

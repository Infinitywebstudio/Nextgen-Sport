import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../../core/img";
import Slider from "react-slick";
type PasswordField = "password" | "confirmPassword";

const ChangePassword = () => {
  const loginslideroption = {
    dots: true,
    nav: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    tochMove: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
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
  
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const routes = all_routes;
  return (
    <div>
      <>
        {/* Change Password */}
        <div className="row gx-0">
          {/* Banner Content */}
          <div className="col-lg-6">
            <div className="authentication-wrapper">
              <div className="authentication-content">
                <div className="login-carousel">
                  <Slider {...loginslideroption}>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-01.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Looking to Buy a service?</h2>
                      <p>Browse Listing &amp; More 900 Services </p>
                    </div>
                    <div className="login-slider">
                      <ImageWithBasePath
                        src="assets/img/login-card-02.svg"
                        className="img-fluid"
                        alt="img"
                      />
                      <h2>Looking to Sell a service?</h2>
                      <p>Browse Listing &amp; More 900 Services </p>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="login-bg">
                <ImageWithBasePath
                  src="assets/img/bg/shape-01.png"
                  alt="img"
                  className="shape-01"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-02.png"
                  alt="img"
                  className="shape-02"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-03.png"
                  alt="img"
                  className="shape-03"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-04.png"
                  alt="img"
                  className="shape-04"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-05.png"
                  alt="img"
                  className="shape-05"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-06.png"
                  alt="img"
                  className="shape-06"
                />
                <ImageWithBasePath
                  src="assets/img/bg/shape-07.png"
                  alt="img"
                  className="shape-07"
                />
              </div>
            </div>
          </div>
          {/* /Banner Content */}
         
            {/* Change Password Content */}
            <div className="col-lg-6">
              <div className="login-wrapper">
                <div className="login-content">
                  <form>
                    <div className="login-userset">
                      <div className="login-logo">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="img" />
                      </div>
                      <div className="login-card">
                        <div className="login-heading text-start">
                          <h3>Change Password</h3>
                          <p>
                            Your new password must be different from the
                            previous.
                          </p>
                        </div>
                        <div>
                          <label className="form-label">Password</label>
                          <div className="form-wrap form-focus pass-group">
                            <span className="form-icon">
                            <i
                            className={`ti toggle-passwords ${passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("password")
                            }
                          ></i>
                            </span>
                         
                        <input
                            type={
                              passwordVisibility.password
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                         
                        </div>
                        </div>
                        <div>
                          <label className="form-label">Confirm Password</label>
                          <div className="form-wrap form-focus pass-group">
                            <span className="form-icon">
                            <i
                            className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("confirmPassword")
                            }
                          ></i>
                            </span>
                         
                        <input
                            type={
                              passwordVisibility.confirmPassword
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                         
                        </div>
                        </div>
                        <div className="form-wrap mantadory-info d-none">
                          <p>
                            <i className="feather-alert-triangle" />
                            Enter Same Value
                          </p>
                        </div>
                        <Link to={routes.signIn} className="btn btn-primary">
                          Update Password
                        </Link>
                      </div>
                      <div className="acc-in">
                        <p>
                          Remember Password? <Link to={routes.signIn}>Sign in</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Change Password Content */}
   
        </div>
        {/* /Change Password */}
      </>
    </div>
  );
};

export default ChangePassword;

import { useState } from 'react'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
type PasswordField = "password" ;

const LockScreen = () => {


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

  return (
    <>
    {/* Page Content */}
    <div className="row">
      <div className="col-lg-12 mx-auto">
        <div className="error-wrapper lock-screen">
          {/* Lock Screen */}
          <div className="error-item p-0">
            <div className="coming-soon text-center">
              <div className="header-logo">
                <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="img" />
              </div>
              <div className="login-card">
                <form >
                  <div className="login-heading">
                    <h3>Welcome Back</h3>
                    <div className="lock-user">
                      <ImageWithBasePath src="assets/img/user/user-05.jpg" alt="img" />
                      <p>John Doe</p>
                    </div>
                  </div>
                  <div className="text-start">
                    <label className="form-label">Enter Password</label>
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
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Continue <i className="feather icon-chevron-right ms-2" />
                  </button>
                </form>
              </div>
              <div className="social-footer">
                <p className="mb-3">Copyright 2025 © DreamGigs</p>
                <ul className="social-icon">
                  <li>
                    <Link to="#">
                      <i className="feather icon-facebook hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather icon-linkedin hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather icon-twitter hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather icon-instagram hi-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Lock Screen */}
        </div>
        {/* Background Img */}
        <div className="error-imgs count-imgs">
          <ImageWithBasePath
            src="assets/img/bg/error-01.png"
            alt="img"
            className="error-01 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-01.png"
            alt="img"
            className="error-05 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-02.png"
            alt="img"
            className="error-02 error-bg"
          />
          <ImageWithBasePath
            src="assets/img/bg/error-04.png"
            alt="img"
            className="error-04 error-bg"
          />
        </div>
        {/* /Background Img */}
      </div>
    </div>
    {/* /Page Content */}
  </>
  
  )
}

export default LockScreen 
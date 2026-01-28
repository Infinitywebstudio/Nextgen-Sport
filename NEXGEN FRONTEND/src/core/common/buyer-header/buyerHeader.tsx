import { useEffect } from "react";
import ImageWithBasePath from "../../img";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataTheme } from "../../redux/themeSettingSlice";
import { all_routes } from "../../../feature-module/router/all_routes";

const BuyerHeader = () => {
  const dispatch = useDispatch();
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDataTheme(theme));
  };

  useEffect(() => {
    const theme = localStorage.getItem("dataTheme");
    dispatch(setDataTheme(theme));
  }, [dispatch]);
  const onHandleMobileMenu = () => {
    // Toggle class on <html>
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("menu-opened");

    // Toggle class on .main-wrapper
    const mainWrapper = document.querySelector(".main-wrapper");
    if (mainWrapper) {
      mainWrapper.classList.toggle("slide-nav");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="header dashboard-header">
        <div className="header-user">
          <div className="header-left-mob">
            <Link to={all_routes.buyerDashboard} className="logo">
              <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
            </Link>
          </div>
          <Link id="mobile_btn" className="mobile_btn" to="#sidebar" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <i className="ti ti-baseline-density-medium" />
            </span>
          </Link>
          <div className="nav user-menu nav-list">
          </div>
          <div className="header-right d-flex align-items-center ms-auto">
            <Link to={all_routes.home} className="btn btn-light fs-14 rounded-pill">
              <i className="ti ti-world me-1" />
              Website
            </Link>
            <div className="dashboard-link">
              <ul className="d-inline-flex align-items-center p-1 rounded-pill">
                <li>
                  <Link to={all_routes.buyerDashboard} className="active">
                    Client
                  </Link>
                </li>
                <li>
                  <Link to={all_routes.SellerDashboard}>Prestataire</Link>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown dropdown-menu-end flag-nav nav-item-box">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
              >
                <ImageWithBasePath
                  src="assets/img/flags/us.svg"
                  alt="Language"
                  className="img-fluid"
                />
              </Link>
              <ul className="dropdown-menu p-2">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item justify-content-start"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/us.svg"
                      alt=""
                      height={16}
                      className="me-2"
                    />{" "}
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item justify-content-start"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/de.svg"
                      alt=""
                      height={16}
                      className="me-2"
                    />{" "}
                    German
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item justify-content-start"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/fr.svg"
                      alt=""
                      height={16}
                      className="me-2"
                    />{" "}
                    French
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item justify-content-start"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/ae.svg"
                      alt=""
                      height={16}
                      className="me-2"
                    />{" "}
                    Arabic
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown flag-nav nav-item-box">
            <Link
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
            >
              <i
                className={`ti  ${
                  dataTheme === "light" ? "ti-sun-high" : "ti-moon"
                }`}
              />
              </Link>
              <ul className="dropdown-menu p-2">
                <li className="mb-1">
                <Link
                  to="#"
                  className={`dropdown-item theme-toggle ${
                    dataTheme === "light" && "active"
                  }`}
                  id="light-mode-toggle"
                  onClick={() => handleDataThemeChange("light")}
                >
                  <i className="ti ti-sun-high me-2" />
                  Light Mode
                </Link>

                </li>
                <li>
                <Link
                  to="#"
                  className={`dropdown-item theme-toggle rounded-2 ${
                    dataTheme === "dark" && "active"
                  }`}
                  id="dark-mode-toggle"
                  onClick={() => handleDataThemeChange("dark")}
                >
                  <i className="ti ti-moon me-2" />
                  Dark Mode
                </Link>

                </li>
              </ul>
            </div>
            <div className="nav-item dropdown nav-item-box">
              <Link
                className="nav-link dropdown-toggle"
                to={all_routes.buyerNotification}
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-bell" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end noti-blk">
                <div className="topnav-dropdown-header border-bottom">
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0">Notifications</h6>
                    <div className="count ms-1">2</div>
                  </div>
                  <Link to="javascript:void(0)" className="mark-all-noti">
                    {" "}
                    Mark all as read <i className="feather-check-square" />
                  </Link>
                </div>
                <ul>
                  <li className="notification-message">
                    <div className="media noti-img d-flex">
                      <Link
                        to={all_routes.buyerNotification}
                        className="active-noti"
                      >
                        <span className="avatar avatar-sm flex-shrink-0">
                          <ImageWithBasePath
                            className="avatar-img rounded-circle img-fluid"
                            alt="User Image"
                            src="assets/img/user/user-01.jpg"
                          />
                        </span>
                      </Link>
                      <div className="media-body flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h6 className="noti-details">
                            <Link to={all_routes.buyerNotification}>Lex Murphy</Link>
                          </h6>
                          <p className="mb-0">45 mins ago</p>
                        </div>
                        <p className="mb-2">
                          Notifications alert you to new messages in your Gigs
                          inbox.
                        </p>
                        <div className="notify-btns">
                          <button className="btn btn-sm btn-primary">
                            Accept
                          </button>
                          <button className="btn btn-sm btn-light">
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="notification-message">
                    <div className="media noti-img d-flex">
                      <Link
                        to={all_routes.buyerNotification}
                        className="active-noti"
                      >
                        <span className="avatar avatar-sm flex-shrink-0">
                          <ImageWithBasePath
                            className="avatar-img rounded-circle img-fluid"
                            alt="User Image"
                            src="assets/img/user/user-02.jpg"
                          />
                        </span>
                      </Link>
                      <div className="media-body flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h6 className="noti-details">
                            <Link to={all_routes.buyerNotification}>Ray Arnold</Link>
                          </h6>
                          <p className="mb-0">17 mins ago</p>
                        </div>
                        <p className="mb-0">
                          Notifications inform you when someone likes, reacts
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="notification-message">
                    <div className="media noti-img d-flex">
                      <Link to={all_routes.buyerNotification}>
                        <span className="avatar avatar-sm flex-shrink-0">
                          <ImageWithBasePath
                            className="avatar-img rounded-circle img-fluid"
                            alt="User Image"
                            src="assets/img/user/user-03.jpg"
                          />
                        </span>
                      </Link>
                      <div className="media-body flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h6 className="noti-details">
                            <Link to={all_routes.buyerNotification}>Dennis Nedry</Link>
                          </h6>
                          <p className="mb-0">1 Day Ago</p>
                        </div>
                        <p>Added a comment to Dennis Nedry</p>
                        <p className="noti-reply-msg">
                          “Oh, I finished de-bugging the phones, but the
                          system's compiling for eighteen minutes, or twenty.
                          So, some minor systems may go on and off for a while.”
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="notification-message">
                    <div className="media noti-img d-flex">
                      <Link to={all_routes.buyerNotification}>
                        <span className="avatar avatar-sm flex-shrink-0">
                          <ImageWithBasePath
                            className="avatar-img rounded-circle img-fluid"
                            alt="User Image"
                            src="assets/img/user/user-04.jpg"
                          />
                        </span>
                      </Link>
                      <div className="media-body flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h6 className="noti-details">
                            <Link to={all_routes.buyerNotification}>John Hammond</Link>
                          </h6>
                          <p className="mb-0">45 mins ago</p>
                        </div>
                        <p className="mb-0">
                          Got Message for Project “Service Management”
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="clear-all-noti">
                  <Link
                    className="clear-notification"
                    to={all_routes.buyerNotification}
                  >
                    {" "}
                    View all{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown nav-item-box">
              <Link
                to={all_routes.buyerProfile}
                className="dropdown-toggle d-flex align-items-center nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="avatar online avatar-sm">
                  <ImageWithBasePath
                    src="assets/img/user/user-05.jpg"
                    alt="Img"
                    className="img-fluid rounded-circle"
                  />
                </span>
              </Link>
              <div className="dropdown-menu p-0 dropdown-profile">
                <div className="d-flex align-items-center border-bottom p-2 mb-0">
                  <span className="avatar avatar-lg me-2">
                    <ImageWithBasePath
                      src="assets/img/user/user-05.jpg"
                      alt="img"
                      className="rounded-circle"
                    />
                  </span>
                  <div>
                    <h6 className="fs-14 fw-medium mb-1">Noah Pate</h6>
                    <p className="fs-13 mb-0">Joined On : 14 Jan 2024</p>
                  </div>
                </div>
                <div className="p-2">
                  {/* Mon compte */}
                  <Link
                    className="dropdown-item d-flex align-items-center mb-1"
                    to={all_routes.buyerSettings}
                  >
                    <i className="ti ti-user-cog me-2" />
                    Mon compte
                  </Link>
                  {/* Paramètres */}
                  <Link
                    className="dropdown-item d-flex align-items-center mb-1"
                    to={all_routes.buyerSettings}
                  >
                    <i className="ti ti-settings-cog me-2" />
                    Paramètres
                  </Link>
                </div>
                <div className="border-top p-3">
                  <Link
                    to={all_routes.signIn}
                    className="btn btn-light btn-md w-100 border-0"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-user-menu">
            <Link
              to={all_routes.buyerProfile}
              className="dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <span className="avatar online avatar-sm">
                <ImageWithBasePath
                  src="assets/img/user/user-05.jpg"
                  alt="Img"
                  className="img-fluid rounded-circle"
                />
              </span>
            </Link>
            <div className="dropdown-menu p-0 dropdown-profile">
              <div className="d-flex align-items-center border-bottom p-2 mb-0">
                <span className="avatar avatar-lg me-2">
                  <ImageWithBasePath
                    src="assets/img/user/user-05.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </span>
                <div>
                  <h6 className="fs-14 fw-medium mb-1">Noah Pate</h6>
                  <p className="fs-13 mb-0">Joined On : 14 Jan 2024</p>
                </div>
              </div>
              <div className="p-2">
                {/* Mon compte */}
                <Link
                  className="dropdown-item d-flex align-items-center mb-1"
                  to={all_routes.buyerSettings}
                >
                  <i className="ti ti-user-cog me-2" />
                  Mon compte
                </Link>
                {/* Paramètres */}
                <Link
                  className="dropdown-item d-flex align-items-center mb-1"
                  to={all_routes.buyerSettings}
                >
                  <i className="ti ti-settings-cog me-2" />
                  Paramètres
                </Link>
              </div>
              <div className="border-top p-3">
                <Link
                  to={all_routes.signIn}
                  className="btn btn-light btn-md w-100 border-0"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default BuyerHeader;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../core/common/header";
import { Outlet } from "react-router-dom";
import Footer from "../core/common/footer";
import Cursor from "../core/common/cursor";
import BackToTop from "../core/common/backToTop";
import { all_routes } from "./router/all_routes";

const FeatureApp = () => {
  const routes = all_routes;
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const isHomePage = location.pathname === "/index";

  useEffect(() => {
    const isHomeRoute = location.pathname === routes.home;
    const isChatPage = location.pathname === "/user-dashboard/user-message";

    setShowLoader(isHomeRoute);

    if (isChatPage) {
      document.body.classList.add("chat-page", "main-chat-blk");
    } else {
      document.body.classList.remove("chat-page", "main-chat-blk");
    }

    if (isHomeRoute) {
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
        document.body.classList.remove("chat-page", "main-chat-blk");
      };
    }

    window.scrollTo(0, 0);
  }, [location.pathname, routes.home]);

  const Preloader = () => (
    <div className="loader-main">
      <span className="page-loader"></span>
    </div>
  );

  const [showAlert ,setShowAlert] = useState(true);
  const handleClose=() =>{
    setShowAlert(false) // Change to setShowAlert(false) to hide the alert
  }

  return (
    <div>
      {showLoader ? (
        <div
          className={`main-wrapper ${
            location.pathname.includes("user-message") ? "chat-wrapper" : ""
          }`}
        >
          <Preloader />
          <Header />
          <Outlet />
          <Footer />
          <Cursor />
          <BackToTop />
        </div>
      ) : (
        <div
          className={`main-wrapper ${
            location.pathname.includes("user-message") ? "chat-wrapper" : ""
          }`}
        >
          {isHomePage && showAlert && (
            <div className="top-header">
              Find the Best Instant Services Marketplace
              <Link to="#" className="close-btn" onClick={handleClose}>
                <i className="ti ti-xbox-x" /> 
              </Link>
            </div>
          )}
          <Header />
          <Outlet />
          <Footer />
          <Cursor />
          <BackToTop />
        </div>
      )}
    </div>
  );
};

export default FeatureApp;

import { useEffect } from "react";
import ImageWithBasePath from "../../img";
import { Link, useLocation } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { all_routes } from "../../../feature-module/router/all_routes";

const BuyerSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Forcer la sidebar toujours ouverte
  useEffect(() => {
    const body = document.body;
    body.classList.remove("mini-sidebar");
    body.classList.add("expand-menu");
  }, []);

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <div className="d-flex align-items-center justify-content-between">
          <Link to={all_routes.home} className="logo logo-normal">
            <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to={all_routes.home} className="dark-logo">
            <ImageWithBasePath
              src="assets/img/dark-logo.svg"
              alt="Logo"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
      <div className="sidebar-inner slimscroll">
       <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "scroll",
              autoHideDelay: 1000,
              theme: "os-theme-dark"
            },
            overflow: {
              x: "hidden",
              y: "scroll"
            }
          }}
          style={{ height: "95vh", top: "50px" }}
        >
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <ul>
                  <li>
                    <Link
                      to={all_routes.buyerRequests}
                      className={
                        isActive(all_routes.buyerRequests) ? "active" : ""
                      }
                    >
                      <i className="ti ti-file-text me-2" />
                      <span>Mes demandes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.buyerOrders}
                      className={
                        isActive(all_routes.buyerOrders) ? "active" : ""
                      }
                    >
                      <i className="ti ti-shopping-cart me-2" />
                      <span>Commandes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.buyerMessages}
                      className={
                        isActive(all_routes.buyerMessages) ? "active" : ""
                      }
                    >
                      <i className="ti ti-message me-2" />
                      <span>Messagerie</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.buyerFavourites}
                      className={
                        isActive(all_routes.buyerFavourites) ? "active" : ""
                      }
                    >
                      <i className="ti ti-heart me-2" />
                      <span>Favoris</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.buyerPayments}
                      className={
                        isActive(all_routes.buyerPayments) ? "active" : ""
                      }
                    >
                      <i className="ti ti-credit-card me-2" />
                      <span>Paiements</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="sidebar-footer">
              <Link to={all_routes.signIn}>
                <i className="ti ti-logout me-2" />
                <span>Déconnexion</span>
              </Link>
            </div>
          </div>
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};

export default BuyerSidebar;

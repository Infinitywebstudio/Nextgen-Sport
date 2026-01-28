import { useEffect } from "react";
import ImageWithBasePath from "../../img";
import { Link, useLocation } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { all_routes } from "../../../feature-module/router/all_routes";

const SellerSidebar = () => {
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
          <Link to={all_routes.SellerDashboard} className="logo logo-normal">
            <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to={all_routes.SellerDashboard} className="dark-logo">
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
                      to={all_routes.SellerDashboard}
                      className={
                        isActive(all_routes.SellerDashboard) ? "active" : ""
                      }
                    >
                      <i className="ti ti-layout-grid me-2" />
                      <span>Tableau de bord</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.sellerRequests}
                      className={
                        isActive(all_routes.sellerRequests) ? "active" : ""
                      }
                    >
                      <i className="ti ti-file-text me-2" />
                      <span>Mes demandes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.sellerOrders}
                      className={
                        isActive(all_routes.sellerOrders) ? "active" : ""
                      }
                    >
                      <i className="ti ti-shopping-cart me-2" />
                      <span>Commandes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.sellerMessage}
                      className={
                        isActive(all_routes.sellerMessage) ? "active" : ""
                      }
                    >
                      <i className="ti ti-message me-2" />
                      <span>Messagerie</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.sellerTransactions}
                      className={
                        isActive(all_routes.sellerTransactions) ? "active" : ""
                      }
                    >
                      <i className="ti ti-transition-top me-2" />
                      <span>Transactions</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.sellerPayouts}
                      className={
                        isActive(all_routes.sellerPayouts) ? "active" : ""
                      }
                    >
                      <i className="ti ti-pennant me-2" />
                      <span>Virements</span>
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

export default SellerSidebar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import { header } from "./headerData";

const Header = () => {
  const routes = all_routes;
  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubopen] = useState<string>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [subsidebar2, setSubsidebar2] = useState("");
  const location = useLocation();

  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const toggleSidebar = (title: string) => {
    localStorage.setItem("menuOpened", title);
    setSubopen(title === subOpen ? "" : title);
  };
  const toggleSubsidebar = (subitem: string) => {
    setSubsidebar(subitem === subsidebar ? "" : subitem);
  };
  const toggleSubsidebar2 = (subitem: string) => {
    setSubsidebar2(subitem === subsidebar2 ? "" : subitem);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header nex-header ${scrolled ? "fixed" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav p-0">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to={routes.home} className="navbar-brand logo">
              <span className="nex-header-logo">NEXTGEN</span>
            </Link>
            <Link to={routes.home} className="navbar-brand logo-small">
              <span className="nex-header-logo">NEXTGEN</span>
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to={routes.home} className="menu-logo">
                <span className="nex-header-logo">NEXTGEN</span>
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="#"
                onClick={() => onhandleCloseMenu()}
              >
                {" "}
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav navbar-nav">
              {header.map((mainMenus: any, mainIndex) => (
                <React.Fragment key={mainIndex}>
                  {mainMenus.separateRoute ? (
                    <li
                      className={
                        location.pathname === "/" ||
                        location.pathname === mainMenus.route
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={mainMenus.route || "/"}>
                        {mainMenus.tittle}
                      </Link>
                    </li>
                  ) : (
                    <li
                      className={`has-submenu ${
                        mainMenus?.menu?.some(
                          (item: any) =>
                            item?.route === location.pathname ||
                            item?.subMenus?.some(
                              (subItem: any) =>
                                subItem?.route === location.pathname
                            )
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        to="#"
                        onClick={() => toggleSidebar(mainMenus.tittle)}
                      >
                        {mainMenus.tittle}{" "}
                        <i className="fas fa-chevron-down"></i>
                      </Link>
                      <ul
                        className={`submenu ${
                          subOpen === mainMenus.tittle ? "d-block" : ""
                        }`}
                      >
                        {mainMenus.menu?.map((menu: any, menuIndex: number) => (
                          <React.Fragment key={`${mainIndex}-${menuIndex}`}>
                            {menu.hasSubRoute ? (
                              <li
                                className={`has-submenu ${
                                  menu?.subMenus?.some(
                                    (item: any) =>
                                      location.pathname === item?.route
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <Link
                                  to="#"
                                  className="hideonmob"
                                  onClick={() =>
                                    toggleSubsidebar(menu.menuValue)
                                  }
                                >
                                  {menu.menuValue}
                                </Link>
                                <ul
                                  className={`submenu showonmob ${
                                    subsidebar === menu.menuValue
                                      ? "d-block"
                                      : ""
                                  }`}
                                >
                                  {menu.subMenus?.map(
                                    (subMenu: any, subMenuIndex: number) => (
                                      <React.Fragment
                                        key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}
                                      >
                                        {subMenu.hasSubRoute ? (
                                          <li
                                            className={
                                              subMenu?.subMenus?.some(
                                                (item: any) =>
                                                  location.pathname ===
                                                  item?.route
                                              )
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            <Link
                                              to="#"
                                              onClick={() =>
                                                toggleSubsidebar2(
                                                  subMenu.menuValue
                                                )
                                              }
                                            >
                                              {subMenu.menuValue}
                                            </Link>
                                            <ul
                                              className={`submenu ${
                                                subsidebar2 ===
                                                subMenu.menuValue
                                                  ? "d-block"
                                                  : ""
                                              }`}
                                            >
                                              {subMenu.subMenus?.map(
                                                (
                                                  item: any,
                                                  itemIndex: number
                                                ) => (
                                                  <li
                                                    key={itemIndex}
                                                    className={
                                                      location.pathname ===
                                                      item.route
                                                        ? "active"
                                                        : ""
                                                    }
                                                  >
                                                    <Link to={item.route}>
                                                      {item.menuValue}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </li>
                                        ) : (
                                          <li
                                            className={
                                              location.pathname ===
                                              subMenu.route
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            <Link to={subMenu.route}>
                                              {subMenu.menuValue}
                                            </Link>
                                          </li>
                                        )}
                                      </React.Fragment>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li
                                className={
                                  location.pathname === menu.route
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to={menu.route}>{menu.menuValue}</Link>
                              </li>
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nex-header-btn nex-header-btn--outline" to={routes.signIn}>
                Connexion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nex-header-btn nex-header-btn--primary" to={routes.signUp}>
                Inscription
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

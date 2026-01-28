import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../img";
import { all_routes } from "../../../feature-module/router/all_routes";
import { header } from "./headerData";
import { setDataTheme } from "../../redux/themeSettingSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const routes = all_routes;
  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [subsidebar2, setSubsidebar2] = useState("");
  const [basePath, setBasePath] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDataTheme(theme));
  };
  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };
  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const toggleSubsidebar2 = (subitem: any) => {
    if (subitem === subsidebar2) {
      setSubsidebar2("");
    } else {
      setSubsidebar2(subitem);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const path = location.pathname;
    const pathArray = path.split("/").filter(Boolean); // Removes empty strings from the split result
    setBasePath(pathArray[0]);
  }, [location.pathname]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dataTheme);
  }, [dataTheme]);
  return (
    <header className={`header ${scrolled ? "fixed" : ""}`}>
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
              <span className="text-dark fw-bold fs-3">NEXTGEN</span>
            </Link>
            <Link to={routes.home} className="dark-logo">
              <span className="text-dark fw-bold fs-3">NEXTGEN</span>
            </Link>
            <Link to={routes.home} className="navbar-brand logo-small">
              <span className="text-dark fw-bold fs-3">NEXTGEN</span>
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to={routes.home} className="menu-logo">
                <span className="text-dark fw-bold fs-3">NEXTGEN</span>
              </Link>
              <Link to={routes.home} className="menu-logo dark-logo">
                <span className="text-dark fw-bold fs-3">NEXTGEN</span>
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
            <ul className={`main-nav  navbar-nav`}>
              {header.map((mainMenus: any, mainIndex) => (
                <React.Fragment key={mainIndex}>
                  {mainMenus.separateRoute ? (
                    <li
                      key={mainIndex}
                      className={`${
                        location.pathname === '/' || location.pathname === mainMenus.route
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to={mainMenus.route || '/'}>
                        {mainMenus.tittle}
                      </Link>
                    </li>
                  ) : (
                    <li
                      className={`has-submenu ${
                        mainMenus?.menu?.some((item: any) =>
                          item?.route === location.pathname ||
                          item?.subMenus?.some(
                            (subItem: any) => subItem?.route === location.pathname
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
                        <i
                          className={` ${
                            basePath === "instructor" || basePath === "student"
                              ? "isax isax-add"
                              : "fas fa-chevron-down"
                          }`}
                        ></i>
                      </Link>
                      <ul
                        className={`submenu ${
                          subOpen === mainMenus.tittle ? "d-block" : ""
                        }`}
                      >
                        {mainMenus.menu?.map((menu: any, menuIndex: any) => (
                          <React.Fragment key={`${mainIndex}-${menuIndex}`}>
                            {menu.hasSubRoute ? (
                              <li
                                key={`${mainIndex}-${menuIndex}`}
                                className={`${
                                  menu.hasSubRoute ? "has-submenu" : ""
                                } ${
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
                                  className={`hideonmob`}
                                  onClick={() => {
                                    toggleSubsidebar(menu.menuValue);
                                  }}
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
                                    (subMenu: any, subMenuIndex: any) => (
                                      <React.Fragment
                                        key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}
                                      >
                                        {subMenu.hasSubRoute ? (
                                          <li
                                            className={`${
                                              subMenu?.subMenus?.some(
                                                (item: any) =>
                                                  location.pathname ===
                                                  item?.route
                                              )
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            <Link
                                              to="#"
                                              onClick={() => {
                                                toggleSubsidebar2(
                                                  subMenu.menuValue
                                                );
                                              }}
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
                                                  menu: any,
                                                  menuIndex2: any
                                                ) => (
                                                  <li
                                                    key={menuIndex2}
                                                    className={
                                                      location.pathname ===
                                                      menu.route
                                                        ? "active"
                                                        : ""
                                                    }
                                                  >
                                                    <Link to={menu.route}>
                                                      {menu.menuValue}
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
                                            key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}
                                          >
                                            <Link
                                              to={subMenu.route}
                                              target={`${
                                                subMenu.admin
                                                  ? "_blank"
                                                  : "_self"
                                              }`}
                                            >
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
                                key={`${mainIndex}-${menuIndex}`}
                                className={
                                  location.pathname === menu.route ? "active" : ""
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
          <div className="d-flex align-items-center">
            <div className="nav-item dropdown flag-nav nav-item-box nav-item-box-home me-2">
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
                <li className="mb-1">
                  <Link
                    to="#"
                    className="dropdown-item rounded-2 d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/us.svg"
                      alt=""
                      height={16}
                      className="img-fluid me-2"
                    />
                    English
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="#"
                    className="dropdown-item rounded-2 d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/de.svg"
                      alt=""
                      height={16}
                      className="img-fluid me-2"
                    />
                    German
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="#"
                    className="dropdown-item rounded-2 d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/fr.svg"
                      alt=""
                      height={16}
                      className="img-fluid me-2"
                    />
                    French
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-2 d-flex align-items-center"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/ae.svg"
                      alt=""
                      height={16}
                      className="img-fluid me-2"
                    />
                    Arabic
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item dropdown flag-nav nav-item-box nav-item-box-home me-3">
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
                    className={`dropdown-item theme-toggle rounded-2 ${
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
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link
                  className="btn btn-light d-inline-flex align-items-center"
                  to={routes.signIn}
                >
                  <i className="ti ti-lock me-1" />
                  Connexion
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-primary d-inline-flex align-items-center"
                  to={routes.signUp}
                >
                  <i className="ti ti-user me-1" />
                  Inscription
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

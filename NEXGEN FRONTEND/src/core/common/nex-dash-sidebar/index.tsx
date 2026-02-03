import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import authService from "../../../services/auth.service";

export interface SidebarItem {
  label: string;
  icon: string;
  path: string;
}

interface NexDashSidebarProps {
  title: string;
  items: SidebarItem[];
}

const NexDashSidebar = ({ title, items }: NexDashSidebarProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="nex-sidebar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <i className={`ti ${open ? "ti-x" : "ti-menu-2"}`} />
      </button>

      {/* Overlay for mobile */}
      <div
        className={`nex-sidebar__overlay ${open ? "nex-sidebar__overlay--visible" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <nav className={`nex-sidebar ${open ? "nex-sidebar--open" : ""}`}>
        <div className="nex-sidebar__header">
          <h2 className="nex-sidebar__title">{title}</h2>
          <p className="nex-sidebar__subtitle">NEXTGEN Sport</p>
        </div>

        <ul className="nex-sidebar__nav">
          {items.map((item) => (
            <li key={item.path} className="nex-sidebar__item">
              <Link
                to={item.path}
                className={`nex-sidebar__link ${
                  isActive(item.path) ? "nex-sidebar__link--active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <i className={`ti ${item.icon}`} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nex-sidebar__footer">
          <Link
            to={all_routes.home}
            className="nex-sidebar__footer-link"
            onClick={() => setOpen(false)}
          >
            <i className="ti ti-arrow-left" />
            <span>Retour au site</span>
          </Link>
          <button
            className="nex-sidebar__footer-link nex-sidebar__footer-link--danger"
            onClick={handleLogout}
          >
            <i className="ti ti-logout" />
            <span>Déconnexion</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NexDashSidebar;

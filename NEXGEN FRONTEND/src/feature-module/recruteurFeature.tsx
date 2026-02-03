import { Outlet } from "react-router-dom";
import NexDashSidebar from "../core/common/nex-dash-sidebar";
import type { SidebarItem } from "../core/common/nex-dash-sidebar";
import { all_routes } from "./router/all_routes";

const recruteurItems: SidebarItem[] = [
  {
    label: "Talents visités",
    icon: "ti-users",
    path: all_routes.recruteurTalents,
  },
  {
    label: "Messagerie",
    icon: "ti-message",
    path: all_routes.recruteurMessages,
  },
  {
    label: "Mon compte",
    icon: "ti-settings",
    path: all_routes.recruteurAccount,
  },
  {
    label: "Paiement",
    icon: "ti-credit-card",
    path: all_routes.recruteurPayment,
  },
];

const RecruteurFeature = () => {
  return (
    <div className="nex-dash-layout">
      <NexDashSidebar title="Espace Recruteur" items={recruteurItems} />
      <div className="nex-dash-layout__content">
        <Outlet />
      </div>
    </div>
  );
};

export default RecruteurFeature;

import { Outlet } from "react-router-dom";
import NexDashSidebar from "../core/common/nex-dash-sidebar";
import type { SidebarItem } from "../core/common/nex-dash-sidebar";
import { all_routes } from "./router/all_routes";
import TrialBanner from "../components/TrialBanner";

const talentItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: "ti-layout-dashboard",
    path: all_routes.talentDashboard,
  },
  {
    label: "Mon Profil",
    icon: "ti-user",
    path: all_routes.talentMyProfile,
  },
  {
    label: "Demandes",
    icon: "ti-mail",
    path: all_routes.talentRequests,
  },
  {
    label: "Messagerie",
    icon: "ti-message",
    path: all_routes.talentMessages,
  },
];

const TalentFeature = () => {
  return (
    <div className="nex-dash-layout">
      <NexDashSidebar title="Espace Talent" items={talentItems} />
      <div className="nex-dash-layout__content">
        <TrialBanner />
        <Outlet />
      </div>
    </div>
  );
};

export default TalentFeature;

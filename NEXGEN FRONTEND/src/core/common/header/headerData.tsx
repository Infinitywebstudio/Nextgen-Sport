import { all_routes } from "../../../feature-module/router/all_routes";

export const header = [
  {
    tittle: "Accueil",
    base: "home",
    showAsTab: false,
    separateRoute: true,
    route: all_routes.home,
    menu: [],
  },
  {
    tittle: "Talents",
    base: "search",
    showAsTab: false,
    separateRoute: true,
    route: all_routes.searchTalents,
    menu: [],
  },
  {
    tittle: "Compte", // New top-level item with submenu
    base: "compte",
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Acheteur",
        route: all_routes.buyerDashboard, // Link to buyer dashboard
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        menuValue: "Prestataire",
        route: all_routes.SellerDashboard, // Link to seller dashboard
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
    ],
  },
];

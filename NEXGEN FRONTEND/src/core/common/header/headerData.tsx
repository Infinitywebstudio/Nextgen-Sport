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
    tittle: "Prestataires", // New top-level item
    base: "prestataires",
    showAsTab: false,
    separateRoute: true,
    route: all_routes.service, // Linking to general service listing page
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

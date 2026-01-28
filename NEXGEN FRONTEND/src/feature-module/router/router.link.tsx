import { Route } from 'react-router-dom';
import { all_routes } from './all_routes';
import Error404 from '../pages/error/error404';
import AboutUs from '../pages/about_us';

import BlogGrid from '../blog/blog_grid';
import Blog2Grid from '../blog/blog_2_grid';
import ContactUs from '../contact/contact_us';
import ContactUsV2 from '../contact/contact_us_v2';
import ContactUsV3 from '../contact/contact_us_v3';
import ComingSoon from '../pages/comingSoon';
import AddGigs from '../gigs/add-gigs';
import Faq from '../pages/faq';
import Portfolio from '../pages/portfolio';
import PortfolioDetails from '../pages/portfolio-details';
import Pricing from '../pages/pricing';
import PrivacyPolicy from '../pages/privacy-policy';
import TermCondition from '../pages/termcondition';
import UnderCondition from '../pages/under-condition';
import Categories from '../gigs/categories';
import Categories2 from '../gigs/categories-2';
import Service from '../gigs/service';  // Page services connectée à WordPress
import ServiceDetails from '../gigs/service-details';
import ServiceGridSidebar from '../gigs/service-grid-sidebar';
import ServiceSubCategory from '../gigs/service-sub-category';
import Error500 from '../pages/error/error500';
import EditGigs from '../gigs/edit-gigs';
import BlogCarousel from '../blog/blog-carousel';
import BlogDetails from '../blog/blog-details';
import BlogDetailsRightSidebar from '../blog/blog-details-right-sidebar';
import BlogList from '../blog/blog-list';
import BlogMansory from '../blog/blog-mansory';
import BlogRightSidebar from '../blog/blog-right-sidebar';
import BlogDetailsSidebar from '../blog/blog-details-sidebar';
import BlogSidebar from '../blog/blog-sidebar';
import SignIn from '../pages/auth/signin';
import SignUp from '../pages/auth/signup';
import ForgotPassword from '../pages/auth/forgot-password';
import ChangePassword from '../pages/auth/change-password';
import LockScreen from '../pages/auth/lock-screen';
import Team from '../pages/our-team/team';
import TeamCarousel from '../pages/our-team/teamCarousel';
import TeamDetails from '../pages/our-team/teamDetails';
import BuyerDashboard from '../buyer-module/dashboard/buyerDashboard';
import Home from '../home-3';
import ServiceDetailsTwo from '../gigs/service-details-two';
import CheckoutGigs from '../gigs/checkout-gigs';
import GigsOrderSuccessful from '../gigs/gigs-order-successful';
import Portfolio2 from '../pages/portfolio-2';
import Portfolio3 from '../pages/portfolio-3';
import Portfolio4 from '../pages/portfolio-4';
import Testimonials from '../pages/testimonials';
import TestimonialsCarousel from '../pages/testimonials-carousel';
import BuyerRequests from '../buyer-module/buyer-requests';
import BuyerOrders from '../buyer-module/buyer-orders';
import BuyerMessage from '../buyer-module/buyer-messages';
import BuyerFavourites from '../buyer-module/buyer-favourites';
import BuyerTransactions from '../buyer-module/buyer-transactions';
import BuyerProfile from '../buyer-module/buyer-profile';
import BuyerSettings from '../buyer-module/buyer-settings';
import SellerDashboard from '../seller-module/seller-dashboard';
import SellerMessage from '../seller-module/seller-messages';
import SellerNotifications from '../seller-module/seller-notifications';
import SellerTransactions from '../seller-module/seller-transactions';
import SellerPayouts from '../seller-module/seller-payouts';
import SellerEarnings from '../seller-module/seller-earnings';
import SellerGigs from '../seller-module/seller-gigs';
import SellerBuyer from '../seller-module/seller-my-buyer';
import SellerWallets from '../seller-module/seller-wallet';
import SellerFiles from '../seller-module/seller-files';
import SellerReviews from '../seller-module/seller-reviews';
import SellerSettings from '../seller-module/seller-settings';
import SellerOrders from '../seller-module/seller-orders';
import SellerRequests from '../seller-module/seller-requests';
import TalentDashboardPage from '../pages/talent-dashboard';

// Test pages imports
import ApiTest from '../../components/ApiTest';
import TestNextgen from '../pages/test-nextgen/layout';
import WelcomePage from '../pages/test-nextgen/pages/welcome';
import ButtonPage from '../pages/test-nextgen/pages/button-page';
import CategoryCardPage from '../pages/test-nextgen/pages/category-card-page';
import UserProfilePage from '../pages/test-nextgen/pages/user-profile-page';
import ReviewsCarouselPage from '../pages/test-nextgen/pages/reviews-carousel-page';
import ServiceCardPage from '../pages/test-nextgen/pages/placeholder-page';
import ProviderCardPage from '../pages/test-nextgen/pages/placeholder-page';
import OrderStatsCardPage from '../pages/test-nextgen/pages/placeholder-page';
import StatsCardPage from '../pages/test-nextgen/pages/stats-card-page';
import CategoryFilterPage from '../pages/test-nextgen/pages/category-filter-page';
import ModulationShowcase from '../pages/modulation-showcase';
import ProviderProfile from '../gigs/provider-profile';

const routes = all_routes;

export const publicRoutes = [
      {
        path: routes.home,
        element: <Home />,
        route: Route,
      },
      {
        path: routes.apiTest,
        element: <ApiTest />,
        route: Route,
      },
      {
        path: routes.testNextgen,
        element: <TestNextgen><WelcomePage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenButton,
        element: <TestNextgen><ButtonPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenCategoryCard,
        element: <TestNextgen><CategoryCardPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenUserProfile,
        element: <TestNextgen><UserProfilePage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenReviewsCarousel,
        element: <TestNextgen><ReviewsCarouselPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenServiceCard,
        element: <TestNextgen><ServiceCardPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenProviderCard,
        element: <TestNextgen><ProviderCardPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenOrderStatsCard,
        element: <TestNextgen><OrderStatsCardPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenStatsCard,
        element: <TestNextgen><StatsCardPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenCategoryFilter,
        element: <TestNextgen><CategoryFilterPage /></TestNextgen>,
        route: Route,
      },
      {
        path: routes.testNextgenProviderCard,
        element: <TestNextgen><ProviderCardPage /></TestNextgen>,
        route: Route,
      },


      //pages route
      {
        path: routes.aboutUs,
        element: <AboutUs />,
        route: Route,
      },
     
      {
        path: routes.faq,
        element: <Faq  />,
        route: Route,
      },
      {
        path: routes.portfolio,
        element: <Portfolio/>,
        route: Route,
      },
      {
        path: routes.portfolioDetails,
        element: <PortfolioDetails/>,
        route: Route,
      },
      {
        path: routes.pricing,
        element: <Pricing />,
        route: Route,
      },
      {
        path: routes.privacyPolicy,
        element: <PrivacyPolicy />,
        route: Route,
      },
      {
        path: routes.termCondition,
        element: <TermCondition />,
        route: Route,
      },
     
      {
        path: routes.portfolio2,
        element: <Portfolio2/>,
        route: Route,
      },
      {
        path: routes.portfolio3,
        element: <Portfolio3/>,
        route: Route,
      },
      {
        path: routes.portfolio4,
        element: <Portfolio4/>,
        route: Route,
      },
      {
        path: routes.testimonials,
        element: <Testimonials/>,
        route: Route,
      },
      {
        path: routes.testimonialsCarousel,
        element: <TestimonialsCarousel/>,
        route: Route,
      },
      {
        path: routes.modulationComponents,
        element: <ModulationShowcase/>,
        route: Route,
      },


      //gigs route
      {
        path: routes.addGigs,
        element: <AddGigs />,
        route: Route,
      },
      {
        path: routes.categories,
        element: <Categories />,
        route: Route,
      },
      {
        path: routes.categories2,
        element: <Categories2 />,
        route: Route,
      },
      {
        path: routes.service,
        element: <Service />,
        route: Route,
      },
      {
        path: routes.serviceDetails,
        element: <ServiceDetails/>,
        route: Route,
      },
      {
        path: routes.ServiceDetailsTwo,
        element: <ServiceDetailsTwo/>,
        route: Route,
      },
      {
        path: routes.serviceGridSidebar,
        element: <ServiceGridSidebar/>,
        route: Route,
      },
      {
        path: routes.serviceSubCategory,
        element: <ServiceSubCategory/>,
        route: Route,
      },
      {
        path: routes.providerProfile,
        element: <ProviderProfile/>,
        route: Route,
      },
      {
        path: routes.checkoutgigs,
        element: <CheckoutGigs/>,
        route: Route,
      },
      {
        path: routes.gigsorderSuccessful,
        element: <GigsOrderSuccessful/>,
        route: Route,
      },


      //blog grid
      {
        path: routes.blogGrid,
        element: <BlogGrid />,
        route: Route,
      },
      {
        path: routes.blog2Grid,
        element: <Blog2Grid />,
        route: Route,
      },
      {
        path: routes.blogCarousel,
        element: <BlogCarousel />,
        route: Route,
      },
      {
        path: routes.blogDetails,
        element: <BlogDetails />,
        route: Route,
      },
      {
        path: routes.blogDetailsRightSidebar,
        element: <BlogDetailsRightSidebar />,
        route: Route,
      },
      {
        path: routes.blogList,
        element: <BlogList />,
        route: Route,
      },
      {
        path: routes.blogMansory,
        element: <BlogMansory />,
        route: Route,
      },
      {
        path: routes.blogRightSidebar,
        element: <BlogRightSidebar />,
        route: Route,
      },
      {
        path: routes.blogDetailsSidebar,
        element: <BlogDetailsSidebar />,
        route: Route,
      },
      {
        path: routes.blogSidebar,
        element: <BlogSidebar />,
        route: Route,
      },

      //contact
      {
        path: routes.contactUs,
        element: <ContactUs />,
        route: Route,
      },
      {
        path: routes.contactUsV2,
        element: <ContactUsV2 />,
        route: Route,
      },
      {
        path: routes.contactUsV3,
        element: < ContactUsV3 />,
        route: Route,
      },

      //user Dashboard
      {
        path: routes.editGigs,
        element: <EditGigs />,
        route: Route,
      },
      {
        path: routes.team,
        element: <Team />,
        route: Route,
      },
      {
        path: routes.teamCarousel,
        element: <TeamCarousel />,
        route: Route,
      },
      {
        path: routes.teamDetails,
        element: <TeamDetails />,
        route: Route,
      },
];

export const authRoutes = [
  {
    path: routes.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    element: <Error500/>,
    route: Route,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon/>,
    route: Route,
  },
  {
    path: routes.underCondition,
    element: <UnderCondition />,
    route: Route,
  },
  {
    path: routes.signIn,
    element: <SignIn />,
    route: Route,
  },
  {
    path: routes.signUp,
    element: <SignUp />,
    route: Route,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.changePassword,
    element: <ChangePassword />,
    route: Route,
  },
  {
    path: routes.lockScreen,
    element: <LockScreen/>,
    route: Route,
  },
  
]
export const buyerRoutes = [
  {
    path: routes.buyerDashboard,
    element: <BuyerRequests />,
    route: Route,
  },
  {
    path: routes.buyerRequests,
    element: <BuyerRequests />,
    route: Route,
  },
  {
    path: routes.buyerOrders,
    element: <BuyerOrders />,
    route: Route,
  },
  {
    path: routes.buyerMessages,
    element: <BuyerMessage />,
    route: Route,
  },
  {
    path: routes.buyerFavourites,
    element: <BuyerFavourites />,
    route: Route,
  },
  {
    path: routes.buyerPayments,
    element: <BuyerTransactions />,
    route: Route,
  },
  {
    path: routes.buyerProfile,
    element: <BuyerProfile />,
    route: Route,
  },
  {
    path: routes.buyerSettings,
    element: <BuyerSettings />,
    route: Route,
  },
]
export const sellerRoutes = [
  {
    path: routes.talentDashboard,
    element: <TalentDashboardPage />,
    route: Route,
  },
  {
    path: routes.SellerDashboard,
    element: <SellerDashboard />,
    route: Route,
  },
  {
    path: routes.sellerMessage,
    element: <SellerMessage />,
    route: Route,
  },
  {
    path: routes.sellerNotifications,
    element: <SellerNotifications />,
    route: Route,
  },
  {
    path: routes.sellerTransactions,
    element: <SellerTransactions />,
    route: Route,
  },
  {
    path: routes.sellerPayouts,
    element: <SellerPayouts />,
    route: Route,
  },
  {
    path: routes.sellerEarnings,
    element: <SellerEarnings />,
    route: Route,
  },
  {
    path: routes.sellerGigs,
    element: <SellerGigs />,
    route: Route,
  },
  {
    path: routes.sellerBuyers,
    element: <SellerBuyer />,
    route: Route,
  },
  {
    path: routes.sellerWallets,
    element: <SellerWallets />,
    route: Route,
  },
  {
    path: routes.sellerFiles,
    element: <SellerFiles />,
    route: Route,
  },
  {
    path: routes.sellerReviews,
    element: <SellerReviews />,
    route: Route,
  },
  {
    path: routes.sellerSettings,
    element: <SellerSettings />,
    route: Route,
  },
  {
    path: routes.sellerOrders,
    element: <SellerOrders />,
    route: Route,
  },
  {
    path: routes.sellerRequests,
    element: <SellerRequests />,
    route: Route,
  },

]
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
import PricingTalent from '../pages/pricing/pricing-talent';
import PricingRecruteur from '../pages/pricing/pricing-recruteur';
import PrivacyPolicy from '../pages/privacy-policy';
import TermCondition from '../pages/termcondition';
import UnderCondition from '../pages/under-condition';
import Categories from '../gigs/categories';
import Categories2 from '../gigs/categories-2';
import ServiceDetails from '../gigs/service-details';
import ServiceGridSidebar from '../gigs/service-grid-sidebar';
import ServiceSubCategory from '../gigs/service-sub-category';
import Error403 from '../pages/error/error403';
import Error500 from '../pages/error/error500';
import AccountSuspended from '../pages/error/account-suspended';
import ProfileIncomplete from '../pages/error/profile-incomplete';
import UpgradeRequired from '../pages/error/upgrade-required';
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
import Home from '../home-3';
import ServiceDetailsTwo from '../gigs/service-details-two';
import CheckoutGigs from '../gigs/checkout-gigs';
import GigsOrderSuccessful from '../gigs/gigs-order-successful';
import Portfolio2 from '../pages/portfolio-2';
import Portfolio3 from '../pages/portfolio-3';
import Portfolio4 from '../pages/portfolio-4';
import Testimonials from '../pages/testimonials';
import TestimonialsCarousel from '../pages/testimonials-carousel';
import TalentDashboard from '../pages/talent-dashboard';
import TalentMyProfile from '../pages/talent-my-profile';
import TalentRequests from '../pages/talent-requests';
import RecruteurVisited from '../pages/recruteur-visited';
import RecruteurMessages from '../pages/recruteur-messages';
import RecruteurAccount from '../pages/recruteur-account';
import RecruteurPayment from '../pages/recruteur-payment';

import ModulationShowcase from '../pages/modulation-showcase';
import ProviderProfile from '../gigs/provider-profile';
import TalentProfile from '../pages/talent-profile';
import SearchTalentsPage from '../pages/search-talents';
import OnboardingPage from '../pages/onboarding';
import RecruteurRequests from '../pages/recruteur-requests';
import TalentMessages from '../pages/talent-messages';
import CheckoutSuccess from '../pages/checkout/checkout-success';
import CheckoutCancelled from '../pages/checkout/checkout-cancelled';

const routes = all_routes;

export const publicRoutes = [
      {
        path: routes.home,
        element: <Home />,
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
        path: routes.pricingTalent,
        element: <PricingTalent />,
        route: Route,
      },
      {
        path: routes.pricingRecruteur,
        element: <PricingRecruteur />,
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
        path: routes.searchTalents,
        element: <SearchTalentsPage />,
        route: Route,
      },
      {
        path: routes.talentProfile,
        element: <TalentProfile />,
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
        path: routes.onboarding,
        element: <OnboardingPage />,
        route: Route,
      },
      {
        path: routes.checkoutSuccess,
        element: <CheckoutSuccess />,
        route: Route,
      },
      {
        path: routes.checkoutCancelled,
        element: <CheckoutCancelled />,
        route: Route,
      },
];

export const authRoutes = [
  {
    path: routes.error403,
    element: <Error403 />,
    route: Route,
  },
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
    path: routes.accountSuspended,
    element: <AccountSuspended />,
    route: Route,
  },
  {
    path: routes.profileIncomplete,
    element: <ProfileIncomplete />,
    route: Route,
  },
  {
    path: routes.upgradeRequired,
    element: <UpgradeRequired />,
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
export const talentRoutes = [
  {
    path: routes.talentDashboard,
    element: <TalentDashboard />,
    route: Route,
  },
  {
    path: routes.talentMyProfile,
    element: <TalentMyProfile />,
    route: Route,
  },
  {
    path: routes.talentRequests,
    element: <TalentRequests />,
    route: Route,
  },
  {
    path: routes.talentMessages,
    element: <TalentMessages />,
    route: Route,
  },
]

export const recruteurRoutes = [
  {
    path: routes.recruteurTalents,
    element: <RecruteurVisited />,
    route: Route,
  },
  {
    path: routes.recruteurRequests,
    element: <RecruteurRequests />,
    route: Route,
  },
  {
    path: routes.recruteurMessages,
    element: <RecruteurMessages />,
    route: Route,
  },
  {
    path: routes.recruteurAccount,
    element: <RecruteurAccount />,
    route: Route,
  },
  {
    path: routes.recruteurPayment,
    element: <RecruteurPayment />,
    route: Route,
  },
]
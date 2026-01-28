import { Route, Routes } from 'react-router'
import { authRoutes, buyerRoutes, publicRoutes, sellerRoutes } from './router.link';
// import AuthFeature from '../authFeature';
import AuthApp from '../authApp';
import FeatureApp from '../featureApp';
import BuyerFeature from '../buyerFeature';
import SellerFeature from '../sellerFeature';

const ALLRoutes: React.FC = () => {

  return (
    <>
      <Routes>
        <Route element={<FeatureApp />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route  element={<AuthApp />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route  element={<BuyerFeature />}>
          {buyerRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route  element={<SellerFeature />}>
          {sellerRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default ALLRoutes

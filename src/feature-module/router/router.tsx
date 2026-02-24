import { Route, Routes } from 'react-router'
import { authRoutes, buyerRoutes, publicRoutes, sellerRoutes, talentRoutes, recruteurRoutes } from './router.link';
import AuthApp from '../authApp';
import FeatureApp from '../featureApp';
import BuyerFeature from '../buyerFeature';
import SellerFeature from '../sellerFeature';
import TalentFeature from '../talentFeature';
import RecruteurFeature from '../recruteurFeature';
import ProtectedRoute from '../../components/ProtectedRoute';

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
        {/* Talent routes - protégées par authentification + rôle + statut abonnement */}
        <Route element={<ProtectedRoute requiredRole="prestataire" requiredStatus={['active', 'trialing']} />}>
          <Route element={<TalentFeature />}>
            {talentRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route>
        </Route>
        {/* Recruteur routes - protégées par authentification + rôle + statut abonnement */}
        <Route element={<ProtectedRoute requiredRole="client" requiredStatus={['active', 'trialing']} />}>
          <Route element={<RecruteurFeature />}>
            {recruteurRoutes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default ALLRoutes

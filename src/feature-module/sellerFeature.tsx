import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Cursor from '../core/common/cursor'
import BackToTop from '../core/common/backToTop'
import { all_routes } from './router/all_routes'
import SellerHeader from '../core/common/seller-header/sellerHeader'
import SellerSidebar from '../core/common/seller-sidebar/sellerSidebar'

const SellerFeature = () => {
  const routes = all_routes;
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (location.pathname === all_routes.sellerMessage) {
      body.classList.add('chat-page', 'main-chat-blk');
    } else {
      body.classList.remove('chat-page', 'main-chat-blk');
    }
  }, [location.pathname]);
  console.log("Seller Messages Route:", routes.sellerMessage);
  return (
    <>
      <div className={`main-wrapper  ${location.pathname === '/seller/seller-message' ? 'chat-wrapper' : ''}`}>
        <SellerHeader/>
        <SellerSidebar/>
        <Outlet />
        <Cursor />
        <BackToTop />
      </div>
    </>
  )
}

export default SellerFeature
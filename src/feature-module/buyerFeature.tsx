import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BuyerSidebar from '../core/common/buyer-sidebar/buyerSidebar'
import BuyerHeader from '../core/common/buyer-header/buyerHeader'
import Cursor from '../core/common/cursor'
import BackToTop from '../core/common/backToTop'
import { all_routes } from './router/all_routes'

const BuyerFeature = () => {
  const routes = all_routes;
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (location.pathname === all_routes.buyerMessages) {
      body.classList.add('chat-page', 'main-chat-blk');
    } else {
      body.classList.remove('chat-page', 'main-chat-blk');
    }
  }, [location.pathname]);
  console.log("Buyer Messages Route:", routes.buyerMessages);
  return (
    <>
      <div className={`main-wrapper  ${location.pathname === '/buyer/buyer-messages' ? 'chat-wrapper' : ''}`}>
        <BuyerHeader />
        <BuyerSidebar />
        <Outlet />
        <Cursor />
        <BackToTop />
      </div>
    </>
  )
}

export default BuyerFeature
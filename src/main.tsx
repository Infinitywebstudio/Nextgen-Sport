import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import './style/icons/tabler-icons/tabler-icons.css'
import '../src/style/scss/main.scss'
import './style/icons/feather/css/iconfont.css';
import "./style/icons/boxicons/css/boxicons.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { base_path } from './environment';
import AllRoutes from './feature-module/router/router';
import { Provider } from 'react-redux';
import store from './core/redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthGuard from './components/AuthGuard';

// Google OAuth Client ID - À configurer dans .env
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <AuthGuard>
            <AllRoutes />
          </AuthGuard>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

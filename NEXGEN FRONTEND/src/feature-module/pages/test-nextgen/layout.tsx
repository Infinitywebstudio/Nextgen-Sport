import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';

interface TestNextgenLayoutProps {
  children: ReactNode;
}

const TestNextgenLayout = ({ children }: TestNextgenLayoutProps) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();
  const routes = all_routes;

  const components = [
    { id: 'welcome', name: 'Bienvenue', path: routes.testNextgen },
    { id: 'button', name: 'Button', path: routes.testNextgenButton },
    { id: 'category-card', name: 'Category Card', path: routes.testNextgenCategoryCard },
    { id: 'user-profile', name: 'User Profile', path: routes.testNextgenUserProfile },
    { id: 'reviews-carousel', name: 'Reviews Carousel', path: routes.testNextgenReviewsCarousel },
    { id: 'service-card', name: 'Service Card', path: routes.testNextgenServiceCard },
    { id: 'provider-card', name: 'Provider Card', path: routes.testNextgenProviderCard },
    { id: 'order-stats-card', name: 'Order Stats Card', path: routes.testNextgenOrderStatsCard },
    { id: 'stats-card', name: 'Stats Card', path: routes.testNextgenStatsCard },
    { id: 'category-filter', name: 'Category Filter', path: routes.testNextgenCategoryFilter },
    { id: 'provider-card', name: 'Provider Card', path: routes.testNextgenProviderCard },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-dark text-white border-bottom border-secondary">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-sm btn-outline-light d-lg-none"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <i className="ti ti-menu-2" />
              </button>
              <h4 className="mb-0 text-primary">
                <i className="ti ti-components me-2" />
                NEXTGEN Components Lab
              </h4>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-success">Bootstrap 5</span>
              <span className="badge bg-info">React 19</span>
            </div>
          </div>
        </div>
      </header>

      <div className="d-flex">
        {/* Sidebar */}
        <aside
          className={`bg-white border-end ${sidebarVisible ? '' : 'd-none'} d-lg-block`}
          style={{ width: '280px', minHeight: 'calc(100vh - 73px)' }}
        >
          <div className="p-4">
            <h6 className="text-muted text-uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '1px' }}>
              Composants
            </h6>
            <nav>
              <ul className="nav flex-column gap-1">
                {components.map((component) => (
                  <li key={component.id} className="nav-item">
                    <Link
                      to={component.path}
                      className={`nav-link rounded ${
                        isActive(component.path)
                          ? 'bg-primary text-white'
                          : 'text-dark hover-bg-light'
                      }`}
                      style={{
                        padding: '10px 12px',
                        transition: 'all 0.2s',
                      }}
                    >
                      <i
                        className={`ti ti-${
                          component.id === 'welcome'
                            ? 'home'
                            : component.id === 'button'
                            ? 'square-rounded'
                            : component.id === 'category-card'
                            ? 'category'
                            : component.id === 'user-profile'
                            ? 'user'
                            : component.id === 'reviews-carousel'
                            ? 'message-star'
                            : component.id === 'service-card'
                            ? 'briefcase'
                            : component.id === 'provider-card'
                            ? 'id-badge'
                            : component.id === 'order-stats-card'
                            ? 'chart-bar'
                            : component.id === 'stats-card'
                            ? 'chart-line'
                            : 'filter'
                        } me-2`}
                      />
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <hr className="my-4" />

            <div className="p-3 bg-light rounded">
              <h6 className="mb-2" style={{ fontSize: '13px' }}>
                <i className="ti ti-info-circle me-1" />
                Info
              </h6>
              <p className="mb-0 text-muted small">
                Environnement de développement pour les composants NEXTGEN.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4" style={{ minHeight: 'calc(100vh - 73px)' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default TestNextgenLayout;

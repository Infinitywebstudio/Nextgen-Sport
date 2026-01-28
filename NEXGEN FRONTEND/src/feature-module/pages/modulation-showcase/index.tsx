import { Eye, ShoppingCart, TrendingUp, Star, FileText, Package, XCircle } from 'lucide-react';

// Composants MODULATION
import CategoryCard from '../../../../MODULATION/src/components/CategoryCard';
import ReviewCard from '../../../../MODULATION/src/components/ReviewCard';
import ServiceCard from '../../../../MODULATION/src/components/ServiceCard';
import StatsCard from '../../../../MODULATION/src/components/StatsCard';
import OrderStatsCard from '../../../../MODULATION/src/components/OrderStatsCard';

// Données mockées
import { mockCategoryCards } from '../../../../MODULATION/src/components/CategoryCard.data';
import { mockReviews } from '../../../../MODULATION/src/components/ReviewCard.data';
import { mockServices } from '../../../../MODULATION/src/components/ServiceCard.data';
import { mockStats, statsIcons } from '../../../../MODULATION/src/components/StatsCard.data';
import { mockOrderStats, orderStatsIcons } from '../../../../MODULATION/src/components/OrderStatsCard.data';

const ModulationShowcase = () => {
  // Map des icônes pour StatsCard
  const statsIconsArray = [Eye, ShoppingCart, TrendingUp, Star];

  // Map des icônes pour OrderStatsCard
  const orderIconsArray = [FileText, ShoppingCart, Package, XCircle];

  return (
    <div className="content" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '40px', paddingBottom: '60px' }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span
              className="badge mb-3"
              style={{
                backgroundColor: '#ff6961',
                color: '#fff',
                fontSize: '14px',
                padding: '8px 16px',
                borderRadius: '20px'
              }}
            >
              5 Composants
            </span>
            <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
              MODULATION Components
            </h1>
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Bibliothèque de composants React réutilisables pour le projet NEXTGEN.
              Chaque composant est conçu pour être flexible et personnalisable.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Section 1: CategoryCard */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom" style={{ padding: '24px' }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    CategoryCard
                  </h2>
                  <p className="mb-0" style={{ color: '#6b7280' }}>
                    Carte de catégorie avec icône et compteur de services
                  </p>
                </div>
                <span className="badge bg-primary">{mockCategoryCards.length} exemples</span>
              </div>
            </div>
            <div className="card-body" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
              <div className="row g-4">
                {mockCategoryCards.slice(0, 6).map((category) => (
                  <div key={category.id} className="col-lg-4 col-md-6">
                    <CategoryCard
                      id={category.id}
                      name={category.name}
                      serviceCount={category.serviceCount}
                      icon={category.icon}
                      onClick={(id) => console.log('Category clicked:', id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white" style={{ padding: '20px 24px' }}>
              <code style={{ fontSize: '13px', color: '#6366f1' }}>
                {'<CategoryCard id="1" name="Plomberie" serviceCount={156} icon={<Wrench />} />'}
              </code>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Section 2: ServiceCard */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom" style={{ padding: '24px' }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    ServiceCard
                  </h2>
                  <p className="mb-0" style={{ color: '#6b7280' }}>
                    Carte de prestataire avec photo, note, prix et actions
                  </p>
                </div>
                <span className="badge bg-success">{mockServices.length} exemples</span>
              </div>
            </div>
            <div className="card-body" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
              <div className="row g-4">
                {mockServices.slice(0, 4).map((service) => (
                  <div key={service.id} className="col-lg-3 col-md-6">
                    <ServiceCard
                      id={service.id}
                      category={service.category}
                      rating={service.rating}
                      reviewCount={service.reviewCount}
                      seller={service.seller}
                      price={service.price}
                      onClick={(id) => console.log('Service clicked:', id)}
                      onFavorite={(id) => console.log('Favorite:', id)}
                      onRequestService={(id) => console.log('Request service:', id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white" style={{ padding: '20px 24px' }}>
              <code style={{ fontSize: '13px', color: '#6366f1' }}>
                {'<ServiceCard id={1} category="Plomberie" rating={4.8} seller={{name: "Marc", avatar: "...", location: "Luxembourg"}} price="35€" />'}
              </code>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Section 3: ReviewCard */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom" style={{ padding: '24px' }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    ReviewCard
                  </h2>
                  <p className="mb-0" style={{ color: '#6b7280' }}>
                    Carte d'avis client avec avatar, note et commentaire
                  </p>
                </div>
                <span className="badge bg-warning text-dark">{mockReviews.length} exemples</span>
              </div>
            </div>
            <div className="card-body" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
              <div className="row g-4">
                {mockReviews.slice(0, 3).map((review, index) => (
                  <div key={index} className="col-lg-4">
                    <ReviewCard
                      id={index}
                      reviewer={review.reviewer}
                      rating={review.rating}
                      date={review.date}
                      comment={review.comment}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white" style={{ padding: '20px 24px' }}>
              <code style={{ fontSize: '13px', color: '#6366f1' }}>
                {'<ReviewCard reviewer={{name: "Sophie", avatar: "..."}} rating={5} date="2 jours" comment="..." />'}
              </code>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Section 4: StatsCard */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom" style={{ padding: '24px' }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    StatsCard
                  </h2>
                  <p className="mb-0" style={{ color: '#6b7280' }}>
                    Carte de statistiques avec tendance et icône colorée
                  </p>
                </div>
                <span className="badge bg-info">{mockStats.length} exemples</span>
              </div>
            </div>
            <div className="card-body" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
              <div className="row g-4">
                {mockStats.map((stat, index) => (
                  <div key={index} className="col-lg-3 col-md-6">
                    <StatsCard
                      title={stat.title}
                      value={stat.value}
                      icon={statsIconsArray[index]}
                      trend={stat.trend}
                      subtitle={stat.subtitle}
                      color={stat.color}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white" style={{ padding: '20px 24px' }}>
              <code style={{ fontSize: '13px', color: '#6366f1' }}>
                {'<StatsCard title="Vues totales" value="2,847" icon={Eye} trend={{value: 12.5, isPositive: true}} color="blue" />'}
              </code>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Section 5: OrderStatsCard */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom" style={{ padding: '24px' }}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    OrderStatsCard
                  </h2>
                  <p className="mb-0" style={{ color: '#6b7280' }}>
                    Carte de statistiques de commandes avec couleurs personnalisées
                  </p>
                </div>
                <span className="badge bg-secondary">{mockOrderStats.length} exemples</span>
              </div>
            </div>
            <div className="card-body" style={{ padding: '32px', backgroundColor: '#f9fafb' }}>
              <div className="row g-4">
                {mockOrderStats.map((stat, index) => (
                  <div key={index} className="col-lg-3 col-md-6">
                    <OrderStatsCard
                      title={stat.title}
                      value={stat.value}
                      icon={orderIconsArray[index]}
                      iconColor={stat.iconColor}
                      iconBgColor={stat.iconBgColor}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-white" style={{ padding: '20px 24px' }}>
              <code style={{ fontSize: '13px', color: '#6366f1' }}>
                {'<OrderStatsCard title="Commandes Actives" value={454} icon={FileText} iconColor="#22c55e" iconBgColor="#dcfce7" />'}
              </code>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* Footer Info */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="text-center mt-5">
          <div className="alert alert-light border" style={{ display: 'inline-block', padding: '20px 40px' }}>
            <p className="mb-2" style={{ color: '#6b7280' }}>
              <i className="ti ti-folder me-2"></i>
              Dossier des composants: <strong>MODULATION/src/components/</strong>
            </p>
            <p className="mb-0" style={{ color: '#6b7280' }}>
              <i className="ti ti-code me-2"></i>
              Chaque composant a sa documentation: <strong>*.README.md</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulationShowcase;

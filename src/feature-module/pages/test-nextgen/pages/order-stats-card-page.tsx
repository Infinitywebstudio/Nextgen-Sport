import OrderStatsCard from '../../../../../MODULATION/src/components/OrderStatsCard';
import { mockOrderStats, orderStatsIcons } from '../../../../../MODULATION/src/components/OrderStatsCard.data';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const OrderStatsCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>OrderStatsCard</h2>
        <p className="text-muted">
          Carte de statistique pour afficher des métriques avec icône colorée et support du dark mode.
        </p>
      </div>

      {/* Stats de commandes */}
      <div className="mb-5">
        <h4 className="mb-3">Statistiques de Commandes</h4>
        <p className="text-muted small mb-3">
          Dashboard de suivi des commandes avec icônes Lucide
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              {...mockOrderStats[0]}
              icon={orderStatsIcons.active}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              {...mockOrderStats[1]}
              icon={orderStatsIcons.inProgress}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              {...mockOrderStats[2]}
              icon={orderStatsIcons.completed}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              {...mockOrderStats[3]}
              icon={orderStatsIcons.cancelled}
            />
          </div>
        </div>
      </div>

      {/* Stats personnalisées */}
      <div className="mb-5">
        <h4 className="mb-3">Statistiques Personnalisées</h4>
        <p className="text-muted small mb-3">
          Exemples avec différentes icônes et couleurs
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Croissance"
              value="+23%"
              icon={TrendingUp}
              iconColor="#10b981"
              iconBgColor="#d1fae5"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Utilisateurs"
              value="2,543"
              icon={Users}
              iconColor="#6366f1"
              iconBgColor="#e0e7ff"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Revenus"
              value="45,320€"
              icon={DollarSign}
              iconColor="#f59e0b"
              iconBgColor="#fef3c7"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Note Moyenne"
              value="4.8/5"
              icon={Star}
              iconColor="#eab308"
              iconBgColor="#fef9c3"
            />
          </div>
        </div>
      </div>

      {/* Variations de valeurs */}
      <div className="mb-5">
        <h4 className="mb-3">Types de Valeurs</h4>
        <p className="text-muted small mb-3">
          Le composant accepte des strings ou des numbers
        </p>
        <div className="row g-4">
          <div className="col-lg-4">
            <OrderStatsCard
              title="Nombre (number)"
              value={1234}
              icon={orderStatsIcons.active}
              iconColor="#22c55e"
              iconBgColor="#dcfce7"
            />
          </div>
          <div className="col-lg-4">
            <OrderStatsCard
              title="Texte simple (string)"
              value="En cours"
              icon={orderStatsIcons.inProgress}
              iconColor="#f59e0b"
              iconBgColor="#fef3c7"
            />
          </div>
          <div className="col-lg-4">
            <OrderStatsCard
              title="Avec symboles"
              value="+125€"
              icon={DollarSign}
              iconColor="#3b82f6"
              iconBgColor="#dbeafe"
            />
          </div>
        </div>
      </div>

      {/* Palette de couleurs */}
      <div className="mb-5">
        <h4 className="mb-3">Palette de Couleurs</h4>
        <p className="text-muted small mb-3">
          Différentes combinaisons de couleurs pour les icônes
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Vert (Succès)"
              value="Actif"
              icon={orderStatsIcons.completed}
              iconColor="#22c55e"
              iconBgColor="#dcfce7"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Orange (Attention)"
              value="En attente"
              icon={orderStatsIcons.inProgress}
              iconColor="#f97316"
              iconBgColor="#ffedd5"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Bleu (Info)"
              value="Nouveau"
              icon={orderStatsIcons.active}
              iconColor="#3b82f6"
              iconBgColor="#dbeafe"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <OrderStatsCard
              title="Rouge (Erreur)"
              value="Annulé"
              icon={orderStatsIcons.cancelled}
              iconColor="#ef4444"
              iconBgColor="#fee2e2"
            />
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-3">
          {`import OrderStatsCard from '@/components/OrderStatsCard';
import { ShoppingCart } from 'lucide-react';

<OrderStatsCard
  title="Commandes Actives"
  value={454}
  icon={ShoppingCart}
  iconColor="#22c55e"
  iconBgColor="#dcfce7"
/>`}
        </code>

        <div className="mt-3">
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>title</code> (string, requis) - Titre de la statistique</li>
            <li><code>value</code> (string | number, requis) - Valeur à afficher</li>
            <li><code>icon</code> (LucideIcon, requis) - Icône Lucide React</li>
            <li><code>iconColor</code> (string, requis) - Couleur de l'icône (hex)</li>
            <li><code>iconBgColor</code> (string, requis) - Couleur de fond de l'icône (hex)</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Caractéristiques :</strong>
          <ul className="mb-0 mt-2">
            <li>✅ Support du dark mode (Tailwind CSS)</li>
            <li>✅ Hover effect avec transition</li>
            <li>✅ Icônes personnalisables (Lucide React)</li>
            <li>✅ Couleurs personnalisables</li>
            <li>✅ Accepte strings et numbers comme valeur</li>
            <li>✅ Responsive</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Palette de couleurs recommandée :</strong>
          <pre className="mb-0 mt-2 p-2 bg-light rounded small">
{`// Vert (Succès)
iconColor: "#22c55e"
iconBgColor: "#dcfce7"

// Orange (Attention)
iconColor: "#f59e0b"
iconBgColor: "#fef3c7"

// Bleu (Info)
iconColor: "#3b82f6"
iconBgColor: "#dbeafe"

// Rouge (Erreur)
iconColor: "#ef4444"
iconBgColor: "#fee2e2"`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default OrderStatsCardPage;

import StatsCard from '../../../../../MODULATION/src/components/StatsCard';
import { mockStats, statsIcons } from '../../../../../MODULATION/src/components/StatsCard.data';
import { Users, DollarSign, Package, Award } from 'lucide-react';

const StatsCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>StatsCard</h2>
        <p className="text-muted">
          Carte de statistique avancée avec tendance (trend), sous-titre et système de couleurs prédéfinies.
        </p>
      </div>

      {/* Stats complètes avec tendances */}
      <div className="mb-5">
        <h4 className="mb-3">Statistiques Complètes (avec tendances)</h4>
        <p className="text-muted small mb-3">
          Affichage complet avec valeur, tendance et sous-titre
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <StatsCard
              {...mockStats[0]}
              icon={statsIcons.views}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              {...mockStats[1]}
              icon={statsIcons.orders}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              {...mockStats[2]}
              icon={statsIcons.revenue}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              {...mockStats[3]}
              icon={statsIcons.rating}
            />
          </div>
        </div>
      </div>

      {/* Sans tendances */}
      <div className="mb-5">
        <h4 className="mb-3">Statistiques Simples (sans tendances)</h4>
        <p className="text-muted small mb-3">
          Affichage simplifié sans trend ni subtitle
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Utilisateurs Actifs"
              value="1,234"
              icon={Users}
              color="blue"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Solde Total"
              value="25,600€"
              icon={DollarSign}
              color="green"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Produits"
              value={87}
              icon={Package}
              color="orange"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Badges"
              value={12}
              icon={Award}
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Tendances positives et négatives */}
      <div className="mb-5">
        <h4 className="mb-3">Tendances Positives et Négatives</h4>
        <p className="text-muted small mb-3">
          Comparaison des tendances à la hausse et à la baisse
        </p>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Ventes"
              value="1,845"
              icon={statsIcons.orders}
              trend={{ value: 23.5, isPositive: true }}
              subtitle="vs mois dernier"
              color="green"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Retours"
              value={45}
              icon={Package}
              trend={{ value: 8.3, isPositive: false }}
              subtitle="vs mois dernier"
              color="red"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Nouveaux Clients"
              value={238}
              icon={Users}
              trend={{ value: 15.7, isPositive: true }}
              subtitle="cette semaine"
              color="blue"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsCard
              title="Churn Rate"
              value="3.2%"
              icon={TrendingUp}
              trend={{ value: 1.5, isPositive: false }}
              subtitle="ce trimestre"
              color="orange"
            />
          </div>
        </div>
      </div>

      {/* Palette de couleurs */}
      <div className="mb-5">
        <h4 className="mb-3">Palette de Couleurs Prédéfinies</h4>
        <p className="text-muted small mb-3">
          5 couleurs disponibles : blue, green, orange, red, purple
        </p>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <StatsCard
              title="Bleu (blue)"
              value="Default"
              icon={statsIcons.views}
              color="blue"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <StatsCard
              title="Vert (green)"
              value="Succès"
              icon={statsIcons.orders}
              color="green"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <StatsCard
              title="Orange (orange)"
              value="Attention"
              icon={statsIcons.revenue}
              color="orange"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <StatsCard
              title="Rouge (red)"
              value="Erreur"
              icon={Package}
              color="red"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <StatsCard
              title="Violet (purple)"
              value="Premium"
              icon={Award}
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Comparaison OrderStatsCard vs StatsCard */}
      <div className="mb-5">
        <div className="alert alert-warning">
          <h6 className="mb-2">
            <i className="ti ti-alert-triangle me-1" />
            Différence : OrderStatsCard vs StatsCard
          </h6>
          <div className="row">
            <div className="col-md-6">
              <strong>OrderStatsCard :</strong>
              <ul className="mb-0 mt-2 small">
                <li>Couleurs personnalisables (hex)</li>
                <li>Simple : titre + valeur + icône</li>
                <li>Pas de tendance</li>
                <li>Plus de flexibilité sur les couleurs</li>
              </ul>
            </div>
            <div className="col-md-6">
              <strong>StatsCard :</strong>
              <ul className="mb-0 mt-2 small">
                <li>Couleurs prédéfinies (5 options)</li>
                <li>Complet : titre + valeur + icône + tendance + sous-titre</li>
                <li>Affiche les tendances (+/-)</li>
                <li>Plus adapté pour dashboards</li>
              </ul>
            </div>
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
          {`import StatsCard from '@/components/StatsCard';
import { TrendingUp } from 'lucide-react';

// Statistique simple
<StatsCard
  title="Revenus"
  value="5,460€"
  icon={TrendingUp}
  color="green"
/>

// Avec tendance et sous-titre
<StatsCard
  title="Revenus"
  value="5,460€"
  icon={TrendingUp}
  trend={{ value: 15.3, isPositive: true }}
  subtitle="ce mois"
  color="green"
/>`}
        </code>

        <div className="mt-3">
          <strong>Props disponibles :</strong>
          <ul className="mb-0 mt-2">
            <li><code>title</code> (string, requis) - Titre de la statistique</li>
            <li><code>value</code> (string | number, requis) - Valeur à afficher</li>
            <li><code>icon</code> (LucideIcon, requis) - Icône Lucide React</li>
            <li><code>trend</code> (object, optionnel) - Tendance avec value (number) et isPositive (boolean)</li>
            <li><code>subtitle</code> (string, optionnel) - Sous-titre (ex: "vs mois dernier")</li>
            <li><code>color</code> (string, optionnel) - "blue" | "green" | "orange" | "red" | "purple" (défaut: "blue")</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Caractéristiques :</strong>
          <ul className="mb-0 mt-2">
            <li>✅ Support du dark mode (Tailwind CSS)</li>
            <li>✅ Tendances positives/négatives</li>
            <li>✅ Sous-titre optionnel</li>
            <li>✅ 5 couleurs prédéfinies</li>
            <li>✅ Hover effect avec transition</li>
            <li>✅ Responsive</li>
          </ul>
        </div>

        <div className="mt-3">
          <strong>Tendances :</strong>
          <pre className="mb-0 mt-2 p-2 bg-light rounded small">
{`// Tendance positive (vert)
trend: {
  value: 15.3,
  isPositive: true
}

// Tendance négative (rouge)
trend: {
  value: 8.2,
  isPositive: false
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default StatsCardPage;

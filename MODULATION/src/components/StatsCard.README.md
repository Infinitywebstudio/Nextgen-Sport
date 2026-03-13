# StatsCard Component

Composant de carte statistique pour le tableau de bord du prestataire sur ELOO.

## 📦 Installation

```tsx
import StatsCard from './components/StatsCard';
import { Eye } from 'lucide-react';
```

## 🎯 Usage

### Exemple basique

```tsx
<StatsCard
  title="Vues totales"
  value="2,847"
  icon={Eye}
  color="blue"
/>
```

### Exemple avec tendance

```tsx
<StatsCard
  title="Commandes"
  value={156}
  icon={ShoppingCart}
  trend={{
    value: 8.2,
    isPositive: true,
  }}
  subtitle="ce mois"
  color="green"
/>
```

### Exemple avec tendance négative

```tsx
<StatsCard
  title="Taux de conversion"
  value="12.3%"
  icon={TrendingDown}
  trend={{
    value: 3.5,
    isPositive: false,
  }}
  subtitle="vs mois dernier"
  color="red"
/>
```

### Grille de statistiques (Dashboard)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <StatsCard
    title="Vues totales"
    value="2,847"
    icon={Eye}
    trend={{ value: 12.5, isPositive: true }}
    subtitle="vs mois dernier"
    color="blue"
  />
  <StatsCard
    title="Commandes"
    value={156}
    icon={ShoppingCart}
    trend={{ value: 8.2, isPositive: true }}
    subtitle="ce mois"
    color="green"
  />
  <StatsCard
    title="Revenus"
    value="5,460€"
    icon={TrendingUp}
    trend={{ value: 15.3, isPositive: true }}
    subtitle="ce mois"
    color="orange"
  />
  <StatsCard
    title="Note moyenne"
    value="4.8"
    icon={Star}
    trend={{ value: 2.1, isPositive: true }}
    subtitle="sur 127 avis"
    color="purple"
  />
</div>
```

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Titre de la statistique |
| `value` | `string \| number` | ✅ | - | Valeur de la statistique |
| `icon` | `LucideIcon` | ✅ | - | Icône Lucide React |
| `trend` | `{ value: number; isPositive: boolean }` | ❌ | - | Tendance en pourcentage |
| `subtitle` | `string` | ❌ | - | Sous-titre descriptif |
| `color` | `'blue' \| 'green' \| 'orange' \| 'red' \| 'purple'` | ❌ | `'blue'` | Couleur thématique |

## 🎨 Features

- ✅ **5 couleurs thématiques** - Bleu, Vert, Orange, Rouge, Violet
- ✅ **Icône personnalisable** - Compatible Lucide React
- ✅ **Tendance optionnelle** - Affichage +/- en pourcentage
- ✅ **Sous-titre optionnel** - Contexte supplémentaire
- ✅ **Responsive** - Adapté mobile, tablette, desktop
- ✅ **Dark mode** - Support thème sombre
- ✅ **Hover effect** - Ombre au survol
- ✅ **TypeScript** - Typage strict

## 🎨 Couleurs disponibles

| Couleur | Usage recommandé | Exemple |
|---------|------------------|---------|
| `blue` | Vues, visites, impressions | Nombre de vues du profil |
| `green` | Commandes, conversions, succès | Nombre de commandes |
| `orange` | Revenus, finances, budget | Revenus mensuels |
| `red` | Alertes, erreurs, déclin | Taux de refus |
| `purple` | Notes, satisfaction, qualité | Note moyenne |

## 🎨 Design

### Layout
```
┌─────────────────────────────────┐
│  Titre de la stat     [Icône]  │
│  2,847                          │
│  +12.5%  vs mois dernier        │
└─────────────────────────────────┘
```

### Couleurs ELOO
- **Tendance positive**: Vert (#10b981)
- **Tendance négative**: Rouge (#ef4444)
- **Background**: Blanc / bg-secondary (dark)
- **Border**: Gris #e5e7eb / border (dark)

## 🔗 Intégration Lucide React

```tsx
import {
  Eye,           // Vues
  ShoppingCart,  // Commandes
  TrendingUp,    // Revenus
  Star,          // Notes
  Users,         // Clients
  DollarSign,    // Prix
  Clock,         // Temps
  CheckCircle,   // Succès
} from 'lucide-react';
```

## 📁 Fichiers

- `StatsCard.tsx` - Composant principal
- `StatsCard.data.ts` - Données de test
- `StatsCard.README.md` - Documentation

## 🚀 Migration vers eloo-frontend

Une fois validé, copier dans le projet principal :

```bash
# Depuis MODULATION/
cp src/components/StatsCard.tsx ../../src/components/
cp src/components/StatsCard.data.ts ../../src/components/
```

## 🎯 Cas d'usage

### Dashboard Prestataire
```tsx
// Affichage des statistiques clés
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {mockStats.map((stat, index) => (
    <StatsCard
      key={index}
      {...stat}
      icon={statsIcons[Object.keys(statsIcons)[index]]}
    />
  ))}
</div>
```

### Comparaison de périodes
```tsx
<StatsCard
  title="Revenus"
  value="5,460€"
  icon={TrendingUp}
  trend={{ value: 15.3, isPositive: true }}
  subtitle="vs mois dernier (+840€)"
  color="orange"
/>
```

### Sans tendance
```tsx
<StatsCard
  title="Services proposés"
  value={1}
  icon={Briefcase}
  subtitle="Plomberie"
  color="blue"
/>
```

## 📝 Notes

- Compatible React 19.2+
- Utilise Tailwind CSS
- Icônes Lucide React
- TypeScript strict mode
- Trend automatiquement formaté avec signe +/-
- Valeur accepte string ou number
- Arrondi automatique du nombre de trend

## 🔄 Évolutions futures

- Graphique sparkline dans la carte
- Click pour afficher détails
- Animation au chargement
- Export des données
- Tooltip avec infos supplémentaires

# OrderStatsCard Component

Composant de carte statistique de commandes pour la plateforme ELOO.

## 📦 Installation

```tsx
import OrderStatsCard from './components/OrderStatsCard';
import { FileText } from 'lucide-react';
```

## 🎯 Usage

### Exemple basique

```tsx
<OrderStatsCard
  title="Commandes Actives"
  value={454}
  icon={FileText}
  iconColor="#22c55e"
  iconBgColor="#dcfce7"
/>
```

### Exemple complet avec les 4 types de commandes

```tsx
import { FileText, ShoppingCart, Package, XCircle } from 'lucide-react';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <OrderStatsCard
    title="Commandes Actives"
    value={454}
    icon={FileText}
    iconColor="#22c55e"
    iconBgColor="#dcfce7"
  />
  <OrderStatsCard
    title="Commande en cours"
    value={47}
    icon={ShoppingCart}
    iconColor="#f59e0b"
    iconBgColor="#fef3c7"
  />
  <OrderStatsCard
    title="Commandes terminées"
    value={25}
    icon={Package}
    iconColor="#3b82f6"
    iconBgColor="#dbeafe"
  />
  <OrderStatsCard
    title="Commandes Annulées"
    value={632}
    icon={XCircle}
    iconColor="#ef4444"
    iconBgColor="#fee2e2"
  />
</div>
```

### Utilisation avec les données de test

```tsx
import { mockOrderStats, orderStatsIcons } from './OrderStatsCard.data';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <OrderStatsCard
    {...mockOrderStats[0]}
    icon={orderStatsIcons.active}
  />
  <OrderStatsCard
    {...mockOrderStats[1]}
    icon={orderStatsIcons.inProgress}
  />
  <OrderStatsCard
    {...mockOrderStats[2]}
    icon={orderStatsIcons.completed}
  />
  <OrderStatsCard
    {...mockOrderStats[3]}
    icon={orderStatsIcons.cancelled}
  />
</div>
```

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Titre de la statistique (ex: "Commandes Actives") |
| `value` | `string \| number` | ✅ | - | Valeur numérique de la statistique |
| `icon` | `LucideIcon` | ✅ | - | Icône Lucide React |
| `iconColor` | `string` | ✅ | - | Couleur de l'icône (format hex: "#22c55e") |
| `iconBgColor` | `string` | ✅ | - | Couleur de fond de l'icône (format hex: "#dcfce7") |

## 🎨 Features

- ✅ **Icône personnalisable** - Couleur et fond d'icône configurables
- ✅ **Design ELOO** - Adapté à la charte graphique ELOO
- ✅ **Layout horizontal** - Texte à gauche, icône à droite
- ✅ **Responsive** - Adapté mobile, tablette, desktop
- ✅ **Dark mode** - Support thème sombre
- ✅ **Hover effect** - Ombre au survol
- ✅ **TypeScript** - Typage strict

## 🎨 Combinaisons de couleurs recommandées

### Commandes Actives (Vert)
```tsx
iconColor="#22c55e"      // Green-500
iconBgColor="#dcfce7"    // Green-100
```

### Commandes en cours (Orange)
```tsx
iconColor="#f59e0b"      // Amber-500
iconBgColor="#fef3c7"    // Amber-100
```

### Commandes terminées (Bleu)
```tsx
iconColor="#3b82f6"      // Blue-500
iconBgColor="#dbeafe"    // Blue-100
```

### Commandes annulées (Rouge)
```tsx
iconColor="#ef4444"      // Red-500
iconBgColor="#fee2e2"    // Red-100
```

### Autres couleurs utiles

**Violet** (Satisfaction, Qualité)
```tsx
iconColor="#a855f7"      // Purple-500
iconBgColor="#f3e8ff"    // Purple-100
```

**Cyan** (Vues, Trafic)
```tsx
iconColor="#06b6d4"      // Cyan-500
iconBgColor="#cffafe"    // Cyan-100
```

## 🎨 Design

### Layout
```
┌─────────────────────────────────┐
│  Commandes Actives    [🟢 Icon] │
│  454                            │
└─────────────────────────────────┘
```

### Différences avec StatsCard
| Feature | StatsCard | OrderStatsCard |
|---------|-----------|----------------|
| **Tendance** | ✅ Trend +/- % | ❌ Non |
| **Sous-titre** | ✅ Subtitle | ❌ Non |
| **Couleur icône** | Prédéfinie (5 thèmes) | Personnalisable (hex) |
| **Usage** | Stats générales | Stats de commandes |

## 🔗 Intégration Lucide React

Icônes recommandées pour les commandes:

```tsx
import {
  FileText,      // Commandes actives
  ShoppingCart,  // Commandes en cours
  Package,       // Commandes terminées
  XCircle,       // Commandes annulées
  Clock,         // Commandes en attente
  CheckCircle,   // Commandes validées
  TrendingUp,    // Commandes croissantes
  AlertCircle,   // Commandes problématiques
} from 'lucide-react';
```

## 📁 Fichiers

- `OrderStatsCard.tsx` - Composant principal
- `OrderStatsCard.data.ts` - Données de test (4 types de commandes)
- `OrderStatsCard.README.md` - Documentation

## 🚀 Migration vers eloo-frontend

Une fois validé, copier dans le projet principal :

```bash
# Depuis MODULATION/
cp src/components/OrderStatsCard.tsx ../../src/components/
cp src/components/OrderStatsCard.data.ts ../../src/components/
```

## 🎯 Cas d'usage

### Dashboard Prestataire - Aperçu des commandes
```tsx
<section className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Mes Commandes</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {mockOrderStats.map((stat, index) => (
      <OrderStatsCard
        key={index}
        {...stat}
        icon={Object.values(orderStatsIcons)[index]}
      />
    ))}
  </div>
</section>
```

### Dashboard Admin - Vue globale
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <OrderStatsCard
    title="Total Commandes"
    value={1158}
    icon={FileText}
    iconColor="#6366f1"
    iconBgColor="#e0e7ff"
  />
  {/* ... autres statistiques admin */}
</div>
```

## 📝 Notes

- Compatible React 19.2+
- Utilise Tailwind CSS
- Icônes Lucide React
- TypeScript strict mode
- Couleurs en format hex (#rrggbb)
- Background icône plus clair que la couleur principale
- Taille icône: 28px (size={28})
- Padding icône: p-4 (16px)

## 🔄 Évolutions futures

- Click pour voir détails des commandes
- Animation au chargement
- Badge de notification sur l'icône
- Graphique sparkline en arrière-plan
- Export des données

# ReviewCard Component

Composant de carte d'avis/review client pour ELOO.

## 📦 Installation

```tsx
import ReviewCard from './components/ReviewCard';
```

## 🎯 Usage

### Exemple basique

```tsx
<ReviewCard
  id={1}
  reviewer={{
    name: 'Amina Touré',
    avatar: 'https://i.pravatar.cc/150?img=5',
  }}
  rating={5}
  date="2 jours"
  comment="Excellent travail, je recommande!"
/>
```

### Exemple avec titre et service

```tsx
<ReviewCard
  id={1}
  reviewer={{
    name: 'Kofi Mensah',
    avatar: 'https://i.pravatar.cc/150?img=12',
  }}
  rating={5}
  date="1 semaine"
  title="Très professionnel et ponctuel"
  comment="Un service impeccable du début à la fin."
  serviceTitle="Services de plomberie professionnels"
/>
```

### Exemple avec note moyenne

```tsx
<ReviewCard
  id={3}
  reviewer={{
    name: 'Marie Kouassi',
    avatar: 'https://i.pravatar.cc/150?img=9',
  }}
  rating={3.5}
  date="3 jours"
  comment="Bon travail dans l'ensemble. Quelques petits détails à améliorer."
/>
```

### Liste d'avis

```tsx
import { mockReviews } from './ReviewCard.data';

<div className="space-y-4">
  {mockReviews.map((review, index) => (
    <ReviewCard
      key={index}
      id={index}
      {...review}
    />
  ))}
</div>
```

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `number` | ✅ | - | Identifiant unique de l'avis |
| `reviewer` | `{ name: string; avatar: string }` | ✅ | - | Informations du reviewer |
| `reviewer.name` | `string` | ✅ | - | Nom du reviewer |
| `reviewer.avatar` | `string` | ✅ | - | URL de l'avatar |
| `rating` | `number` | ✅ | - | Note de 1 à 5 (accepte décimales: 3.5, 4.5) |
| `date` | `string` | ✅ | - | Date relative (ex: "2 jours", "1 semaine") |
| `comment` | `string` | ✅ | - | Texte de l'avis |
| `title` | `string` | ❌ | - | Titre de l'avis (optionnel) |
| `serviceTitle` | `string` | ❌ | - | Titre du service concerné (optionnel) |

## 🎨 Features

- ✅ **Avatar du reviewer** - Image ronde 48px
- ✅ **Nom du reviewer** - Texte en gras
- ✅ **Note en étoiles** - Affichage visuel 1-5 étoiles (Lucide React)
- ✅ **Score numérique** - Note affichée (ex: 5.0, 3.5)
- ✅ **Date relative** - "Il y a X jours/semaines/mois"
- ✅ **Titre optionnel** - Titre de l'avis
- ✅ **Service concerné** - Nom du service (optionnel)
- ✅ **Commentaire** - Texte de l'avis
- ✅ **Responsive** - Adapté mobile, tablette, desktop
- ✅ **Dark mode** - Support thème sombre
- ✅ **Hover effect** - Ombre au survol
- ✅ **TypeScript** - Typage strict

## 🎨 Design

### Layout
```
┌─────────────────────────────────────────────┐
│  [Avatar]  Amina Touré              2 jours │
│            ⭐⭐⭐⭐⭐ 5.0                     │
│            Service: Plomberie               │
│            Excellent travail de plomberie   │
│                                             │
│            J'ai fait appel à ce plombier... │
└─────────────────────────────────────────────┘
```

### Étoiles
- **Note 5**: 5 étoiles remplies (jaune)
- **Note 4**: 4 étoiles remplies + 1 vide (gris)
- **Note 3**: 3 étoiles remplies + 2 vides
- **Note décimale** (3.5, 4.5): Gérée automatiquement par arrondi

### Couleurs
- **Étoiles remplies**: `fill-yellow-400 text-yellow-400`
- **Étoiles vides**: `text-gray-300 dark:text-gray-600`
- **Avatar**: 48px (w-12 h-12), arrondi, object-cover

## 🔗 Intégration Lucide React

```tsx
import { Star } from 'lucide-react';

// Étoile remplie
<Star size={16} className="fill-yellow-400 text-yellow-400" />

// Étoile vide
<Star size={16} className="text-gray-300 dark:text-gray-600" />
```

## 📁 Fichiers

- `ReviewCard.tsx` - Composant principal
- `ReviewCard.data.ts` - Données de test (6 avis)
- `ReviewCard.README.md` - Documentation

## 🚀 Migration vers eloo-frontend

Une fois validé, copier dans le projet principal :

```bash
# Depuis MODULATION/
cp src/components/ReviewCard.tsx ../../src/components/
cp src/components/ReviewCard.data.ts ../../src/components/
```

## 🎯 Cas d'usage

### Profil prestataire - Liste d'avis

```tsx
<section className="mt-8">
  <h2 className="text-2xl font-bold mb-4">Avis clients</h2>
  <div className="space-y-4">
    {mockReviews.map((review, index) => (
      <ReviewCard
        key={index}
        id={index}
        {...review}
      />
    ))}
  </div>
</section>
```

### Dashboard prestataire - Derniers avis

```tsx
<div className="bg-white dark:bg-bg-secondary rounded-lg p-6">
  <h3 className="text-lg font-semibold mb-4">Derniers avis reçus</h3>
  <div className="space-y-4">
    {mockReviews.slice(0, 3).map((review, index) => (
      <ReviewCard
        key={index}
        id={index}
        {...review}
      />
    ))}
  </div>
</div>
```

### Page de service - Avis du prestataire

```tsx
<section className="mt-8">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-bold">Avis clients (127)</h3>
    <div className="flex items-center gap-2">
      <Star size={20} className="fill-yellow-400 text-yellow-400" />
      <span className="font-semibold">4.8</span>
      <span className="text-gray-500">(127 avis)</span>
    </div>
  </div>
  <div className="space-y-4">
    {mockReviews.map((review, index) => (
      <ReviewCard
        key={index}
        id={index}
        {...review}
      />
    ))}
  </div>
</section>
```

## 📝 Notes

- Compatible React 19.2+
- Utilise Tailwind CSS
- Icône Star de Lucide React
- TypeScript strict mode
- Avatar 48px (w-12 h-12)
- Étoiles 16px (size={16})
- Support notes décimales (3.5, 4.5)
- Date relative formatée automatiquement

## 🔄 Évolutions futures

- Bouton "Répondre" (pour prestataire)
- Bouton "Utile" / "Signaler"
- Affichage des réponses du prestataire
- Pagination / Load more
- Filtres (note, date)
- Tri (plus récents, mieux notés)
- Images dans les avis
- Vérification "Achat vérifié"
- Statistiques de notes (graphique)

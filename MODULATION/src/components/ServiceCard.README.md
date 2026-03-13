# ServiceCard Component

Composant de carte pour afficher un service de la marketplace ELOO.

## 📦 Installation

```tsx
import ServiceCard from './components/ServiceCard';
```

## 🎯 Usage

### Exemple basique

```tsx
<ServiceCard
  id={1}
  title="Je vais créer un site web professionnel"
  image="https://example.com/image.jpg"
  category="Développement Web"
  rating={4.8}
  reviewCount={127}
  seller={{
    name: "Jean Dupont",
    avatar: "https://example.com/avatar.jpg",
    location: "Cotonou, Bénin"
  }}
  price="75€"
  deliveryTime="3 jours"
/>
```

### Exemple avec callbacks

```tsx
<ServiceCard
  {...serviceData}
  isFeatured={true}
  isHot={false}
  onFavorite={(id) => console.log('Service favori:', id)}
  onClick={(id) => navigate(`/service/${id}`)}
/>
```

### Exemple avec grille

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => (
    <ServiceCard
      key={service.id}
      {...service}
      onFavorite={handleFavorite}
      onClick={handleCardClick}
    />
  ))}
</div>
```

## 📋 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `number` | ✅ | - | Identifiant unique du service |
| `title` | `string` | ✅ | - | Titre du service |
| `image` | `string` | ✅ | - | URL de l'image principale |
| `category` | `string` | ✅ | - | Catégorie du service |
| `rating` | `number` | ✅ | - | Note moyenne (0-5) |
| `reviewCount` | `number` | ✅ | - | Nombre total d'avis |
| `seller` | `object` | ✅ | - | Informations du vendeur |
| `seller.name` | `string` | ✅ | - | Nom du vendeur |
| `seller.avatar` | `string` | ✅ | - | Avatar du vendeur |
| `seller.location` | `string` | ✅ | - | Localisation du vendeur |
| `price` | `string` | ✅ | - | Prix formaté (ex: "75€") |
| `deliveryTime` | `string` | ✅ | - | Délai de livraison (ex: "3 jours") |
| `isFeatured` | `boolean` | ❌ | `false` | Afficher badge "Featured" |
| `isHot` | `boolean` | ❌ | `false` | Afficher badge "Hot" |
| `onFavorite` | `(id: number) => void` | ❌ | - | Callback au clic sur favori |
| `onClick` | `(id: number) => void` | ❌ | - | Callback au clic sur la carte |

## 🎨 Features

- ✅ **Responsive** - Adapté mobile, tablette, desktop
- ✅ **Dark mode** - Support thème sombre
- ✅ **Hover effects** - Animations au survol
- ✅ **Badges** - Featured, Hot
- ✅ **Favoris** - Bouton coeur interactif
- ✅ **Fallback images** - Images par défaut si erreur
- ✅ **Rating** - Affichage étoiles + nombre d'avis
- ✅ **Truncate text** - Titre limité à 2 lignes

## 🔗 Intégration WordPress

Pour connecter ce composant à l'API WordPress ELOO :

```tsx
import { Service } from '../services/service.service';

// Mapper les données WordPress vers ServiceCard
function mapServiceToCard(service: Service): ServiceCardProps {
  return {
    id: service.id,
    title: service.title.rendered,
    image: service._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
    category: service._embedded?.['wp:term']?.[0]?.[0]?.name || 'Service',
    rating: parseFloat(service.meta.rating || '0'),
    reviewCount: parseInt(service.meta.review_count || '0'),
    seller: {
      name: service._embedded?.author?.[0]?.name || 'Anonyme',
      avatar: service._embedded?.author?.[0]?.avatar_urls?.['96'] || '',
      location: service.meta.localisation || 'Non spécifié',
    },
    price: service.meta.prix || '0€',
    deliveryTime: service.meta.duree || 'À définir',
  };
}

// Utilisation
const serviceCardData = mapServiceToCard(wordpressService);
<ServiceCard {...serviceCardData} />
```

## 📁 Fichiers

- `ServiceCard.tsx` - Composant principal
- `ServiceCard.data.ts` - Données de test
- `ServiceCard.README.md` - Documentation

## 🚀 Migration vers eloo-frontend

Une fois validé, copier dans le projet principal :

```bash
# Depuis MODULATION/
cp src/components/ServiceCard.tsx ../../src/components/
cp src/components/ServiceCard.data.ts ../../src/components/
```

## 🎯 Todo

- [ ] Ajouter tests unitaires
- [ ] Ajouter Storybook
- [ ] Support multi-images (galerie)
- [ ] Animation skeleton loading
- [ ] Accessibilité ARIA labels

## 📝 Notes

- Compatible React 19.2+
- Utilise Tailwind CSS
- Icônes Lucide React
- TypeScript strict mode

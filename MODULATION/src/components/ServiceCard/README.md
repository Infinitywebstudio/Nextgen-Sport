# ServiceCard - Variantes

Ce dossier contient 3 variantes visuelles du composant ServiceCard pour afficher les profils de prestataires.

## Variantes disponibles

### 1. TailwindVariant (ServiceCardTailwind)
**Style:** Tailwind CSS avec classes utilitaires
**Bouton:** "Demander un service" (sans icône)
**Callback:** `onRequestService`
**Usage recommandé:** Projets utilisant Tailwind CSS, design moderne et responsive

```tsx
import { ServiceCardTailwind } from './ServiceCard/variants';

<ServiceCardTailwind
  id={1}
  category="Plomberie"
  rating={4.8}
  reviewCount={45}
  seller={{
    name: "Jean Dupont",
    avatar: "/avatar.jpg",
    location: "Paris, France",
    isTopPrestataire: true
  }}
  price="45€"
  onRequestService={(id) => console.log('Service demandé:', id)}
/>
```

### 2. InlineWithIconVariant (ServiceCardInline)
**Style:** Styles inline
**Bouton:** "Demander un service" avec icône MessageCircle
**Callback:** `onContact`
**Usage recommandé:** Projets sans Tailwind, design avec icônes expressives

```tsx
import { ServiceCardInline } from './ServiceCard/variants';

<ServiceCardInline
  id={1}
  category="Électricité"
  rating={4.9}
  reviewCount={67}
  seller={{
    name: "Marie Martin",
    avatar: "/avatar2.jpg",
    location: "Lyon, France"
  }}
  price="50€"
  onContact={(id) => console.log('Contact:', id)}
/>
```

### 3. ContactVariant (ServiceCardContact)
**Style:** Styles inline
**Bouton:** "Contacter" (version courte) avec icône MessageCircle
**Callback:** `onContact`
**Usage recommandé:** Interface compacte, accent sur l'action de contact

```tsx
import { ServiceCardContact } from './ServiceCard/variants';

<ServiceCardContact
  id={1}
  category="Jardinage"
  rating={4.7}
  reviewCount={32}
  seller={{
    name: "Pierre Dubois",
    avatar: "/avatar3.jpg",
    location: "Marseille, France",
    isTopPrestataire: true
  }}
  price="35€"
  onContact={(id) => console.log('Contacter:', id)}
/>
```

## Interface commune

Toutes les variantes utilisent la même interface `ServiceCardProps` :

```tsx
interface ServiceCardProps {
  id: number;
  category: string;
  rating: number;
  reviewCount: number;
  seller: {
    name: string;
    avatar: string;
    location: string;
    isTopPrestataire?: boolean;
  };
  price: string;
  onFavorite?: (id: number) => void;
  onClick?: (id: number) => void;
  onContact?: (id: number) => void;      // Pour Inline et Contact variants
  onRequestService?: (id: number) => void; // Pour Tailwind variant
}
```

## Différences principales

| Caractéristique | TailwindVariant | InlineWithIconVariant | ContactVariant |
|-----------------|-----------------|----------------------|----------------|
| **Style** | Tailwind CSS | Inline styles | Inline styles |
| **Bouton** | "Demander un service" | "Demander un service" + icône | "Contacter" + icône |
| **Callback** | `onRequestService` | `onContact` | `onContact` |
| **Icône bouton** | ❌ | ✅ MessageCircle | ✅ MessageCircle |
| **Dark mode** | ✅ (via Tailwind) | ❌ | ❌ |

## Choisir la bonne variante

- **TailwindVariant** si vous utilisez Tailwind CSS et voulez un design moderne avec support du dark mode
- **InlineWithIconVariant** si vous préférez les styles inline et voulez une icône expressive sur le bouton
- **ContactVariant** si vous voulez une interface plus compacte avec un bouton d'action court

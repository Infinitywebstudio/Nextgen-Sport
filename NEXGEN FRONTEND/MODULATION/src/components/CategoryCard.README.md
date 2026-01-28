# CategoryCard Component

Composant de carte de catégorie avec animation de survol noir et icône orange ELOO.

## Interface

```typescript
export interface CategoryCardProps {
  id: string;                              // ID unique de la catégorie
  name: string;                            // Nom de la catégorie
  serviceCount: number;                    // Nombre de services dans cette catégorie
  icon: React.ReactNode;                   // Icône Lucide (outline style)
  onClick?: (categoryId: string) => void;  // Callback au clic
}
```

## Utilisation

### Exemple Basique (1 carte)

```tsx
import CategoryCard from './components/CategoryCard';
import { Wrench } from 'lucide-react';

function App() {
  return (
    <CategoryCard
      id="1"
      name="Plomberie"
      serviceCount={156}
      icon={<Wrench size={40} strokeWidth={1.5} />}
      onClick={(id) => console.log('Catégorie:', id)}
    />
  );
}
```

### Exemple Grille (plusieurs cartes)

```tsx
import CategoryCard from './components/CategoryCard';
import { mockCategoryCards } from './components/CategoryCard.data';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {mockCategoryCards.map((category) => (
        <CategoryCard
          key={category.id}
          {...category}
          onClick={(id) => {
            console.log('Catégorie cliquée:', id);
          }}
        />
      ))}
    </div>
  );
}
```

## Design

### Couleurs ELOO

- **Couleur de base**: Blanc / dark:bg-secondary
- **Couleur hover**: Noir (#000000)
- **Bordure**: Gris clair → Noir au survol
- **Texte hover**: Blanc
- **Icône hover**: Orange ELOO (#ff6961)

### Effets d'Animation

- **Transition**: 300ms (smooth)
- **Hover background**: Change en noir
- **Hover icône**: Change en orange ELOO (#ff6961)
- **Cercle icône**: Fond orange semi-transparent au survol (bg-[#ff6961]/20)
- **Texte**: Blanc au survol
- **Alignement**: Centré

### Responsive

- **Mobile** (< 768px): 1 colonne
- **Tablet** (≥ 768px): 3 colonnes
- **Desktop** (≥ 1024px): 5 colonnes

## Dark Mode

Le composant supporte automatiquement le dark mode avec:
- Background: `dark:bg-bg-secondary`
- Border: `dark:border-border`
- Text: `dark:text-text-primary` / `dark:text-text-muted`
- Icône background: `dark:bg-bg-tertiary`

## Props

| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `id` | `string` | ✅ | ID unique de la catégorie |
| `name` | `string` | ✅ | Nom affiché (ex: "Plomberie") |
| `serviceCount` | `number` | ✅ | Nombre de services |
| `icon` | `React.ReactNode` | ✅ | Icône Lucide (ex: `<Wrench size={40} strokeWidth={1.5} />`) |
| `onClick` | `(id: string) => void` | ❌ | Callback au clic |

## Icônes Lucide Disponibles

Le composant utilise des icônes **Lucide React** avec style outline (strokeWidth: 1.5, size: 40):

```tsx
import { Wrench, Zap, Sparkles, Baby, Leaf, Paintbrush, Package, Hammer, ChefHat, Laptop } from 'lucide-react';

<CategoryCard
  icon={<Wrench size={40} strokeWidth={1.5} />}
  // ...autres props
/>
```

**Icônes recommandées par catégorie:**
- Plomberie: `<Wrench />`
- Électricité: `<Zap />`
- Ménage: `<Sparkles />`
- Baby-sitting: `<Baby />`
- Jardinage: `<Leaf />`
- Peinture: `<Paintbrush />`
- Déménagement: `<Package />`
- Réparation: `<Hammer />`
- Cuisine: `<ChefHat />`
- Informatique: `<Laptop />`

## Données de Test

Voir [CategoryCard.data.ts](./CategoryCard.data.ts) pour 10 catégories de test avec icônes Lucide.

## Notes

- Le composant utilise `type="button"` pour éviter les comportements de formulaire par défaut
- Le callback `onClick` est optionnel
- Le pluriel du mot "Service" est géré automatiquement
- Les transitions sont fluides (300ms)
- La carte est entièrement accessible au clavier
- Les icônes sont centrées et changent de couleur au survol (gris → orange ELOO)

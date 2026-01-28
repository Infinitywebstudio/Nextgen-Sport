# AdvancedSearchFilter Component

Composant de filtre de recherche avancé pour la plateforme ELOO Luxembourg.

## Description

Filtre complet avec accordéon permettant aux utilisateurs de rechercher des prestataires selon plusieurs critères : catégories, localisation, note, budget, délai de disponibilité et niveau du prestataire.

## Props

```typescript
interface FilterCriteria {
  categories: string[];
  locations: string[];
  minRating: number;
  minBudget: number;
  maxBudget: number;
  deliveryTime: string[];
  sellerLevel: string[];
}

interface AdvancedSearchFilterProps {
  onFilterChange: (criteria: FilterCriteria) => void;
  onReset: () => void;
}
```

## Fonctionnalités

### 1. **Catégories**
- Recherche textuelle pour filtrer les catégories
- 10 catégories luxembourgeoises prédéfinies
- Sélection multiple par checkboxes
- Icône: Search (Lucide)

### 2. **Localisation**
- 10 villes luxembourgeoises
- Sélection multiple
- Liste scrollable
- Icône: MapPin (Lucide)

### 3. **Note minimale**
- Slider de 0 à 5 étoiles (pas de 0.5)
- Affichage en temps réel de la valeur
- Icône: Star (Lucide)

### 4. **Budget (€/h)**
- Champs min et max
- Affichage de la plage sélectionnée
- Icône: DollarSign (Lucide)

### 5. **Délai de disponibilité**
- 4 options: Immédiat (24h), 2-3 jours, Une semaine, Plus d'une semaine
- Sélection multiple
- Icône: Clock (Lucide)

### 6. **Niveau du prestataire**
- 3 niveaux: Top prestataire, Prestataire vérifié, Nouveau prestataire
- Sélection multiple
- Icône: User (Lucide)

## Données luxembourgeoises

### Catégories
```typescript
[
  'Plomberie',
  'Électricité',
  'Ménage',
  'Baby-sitting',
  'Jardinage',
  'Coiffure à domicile',
  'Dépannage informatique',
  'Cours de soutien',
  'Réparation',
  'Déménagement'
]
```

### Villes
```typescript
[
  'Luxembourg-Ville',
  'Esch-sur-Alzette',
  'Differdange',
  'Dudelange',
  'Ettelbruck',
  'Pétange',
  'Schifflange',
  'Wiltz',
  'Diekirch',
  'Mersch'
]
```

## Utilisation

```tsx
import AdvancedSearchFilter from './components/AdvancedSearchFilter';

function ServicePage() {
  const handleFilterChange = (criteria: FilterCriteria) => {
    console.log('Critères de filtre:', criteria);
    // Appliquer les filtres aux résultats de recherche
  };

  const handleReset = () => {
    console.log('Filtres réinitialisés');
    // Réinitialiser les résultats de recherche
  };

  return (
    <AdvancedSearchFilter
      onFilterChange={handleFilterChange}
      onReset={handleReset}
    />
  );
}
```

## Design

- **Couleur principale**: #ff6961 (rouge ELOO)
- **Accordéon**: Sections repliables avec icônes + et −
- **Responsive**: Largeur 100% dans sidebar
- **Scrollable**: Listes avec max-height pour catégories et localisations
- **Hover effects**: Sur boutons d'action

## Boutons d'action

1. **Réinitialiser**: Blanc avec bordure grise
2. **Appliquer les filtres**: Rouge ELOO (#ff6961)

## État initial

- **Catégories**: Section ouverte par défaut
- **Autres sections**: Fermées par défaut
- **Tous les filtres**: Vides

## Intégration dans la page Service

Ce composant sera intégré dans une sidebar (col-lg-3) à gauche de la grille de ServiceCards sur la page `/gigs/service`.

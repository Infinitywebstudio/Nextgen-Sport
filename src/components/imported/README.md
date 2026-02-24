# Composants Importés depuis la branche Modulation

Ce dossier contient tous les composants récupérés depuis la branche `modulation` du projet ELOO pour être réutilisés et adaptés.

## 📦 Liste des Composants

### 1. **AdvancedSearchFilter**
**Fichiers:**
- `AdvancedSearchFilter.tsx` (19KB)
- `AdvancedSearchFilter.README.md`

**Description:**
Filtre de recherche avancé avec accordéon pour rechercher des prestataires selon plusieurs critères : catégories, localisation, note, budget, délai de disponibilité et niveau du prestataire.

**Fonctionnalités:**
- Recherche textuelle pour filtrer les catégories
- Sélection de villes luxembourgeoises
- Slider de note minimale (0-5 étoiles)
- Plage de budget (€/h)
- Délai de disponibilité (24h, 2-3 jours, 1 semaine, etc.)
- Niveau du prestataire (Top, Vérifié, Nouveau)

**Props:**
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

---

### 2. **ReviewStatsCard**
**Fichiers:**
- `ReviewStatsCard.tsx` (4KB)
- `ReviewStatsCard.data.ts`

**Description:**
Carte affichant les statistiques d'avis avec note moyenne, distribution des notes (barres de progression) et total d'avis.

**Props:**
```typescript
interface ReviewStatsCardProps {
  averageRating: number;        // ex: 4.8
  totalReviews: number;         // ex: 127
  ratingDistribution: RatingDistribution[];
}

interface RatingDistribution {
  rating: number;       // 1-5
  count: number;
  percentage: number;   // 0-100
}
```

**Design:**
- Note moyenne grande (56px) avec étoiles
- Barres de progression pour chaque niveau (5★ à 1★)
- Couleur: Jaune (#fbbf24) pour les étoiles
- Responsive avec grid layout

---

### 3. **ReviewCard**
**Fichiers:**
- `ReviewCard.tsx` (3KB)
- `ReviewCard.README.md`
- `ReviewCard.data.ts`

**Description:**
Carte d'avis individuel avec avatar, nom, date, note étoilée et commentaire.

**Props:**
```typescript
interface ReviewCardProps {
  authorName: string;
  authorAvatar: string;
  rating: number;           // 1-5
  date: string;             // Format ISO ou "il y a X jours"
  comment: string;
  helpful?: number;         // Nombre de "utile"
  onHelpful?: () => void;
}
```

---

### 4. **ServiceCard**
**Fichiers:**
- `ServiceCard.tsx` (6KB)
- `ServiceCard.README.md`
- `ServiceCard.data.ts`

**Description:**
Carte de service/gig avec image, titre, prestataire, note, prix et badges.

**Props:**
```typescript
interface ServiceCardProps {
  id: number;
  title: string;
  providerName: string;
  providerAvatar: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;              // Prix de départ
  isFeatured?: boolean;
  isTopProvider?: boolean;
  image: string;
  onFavorite?: () => void;
}
```

---

### 5. **OrderStatsCard**
**Fichiers:**
- `OrderStatsCard.tsx` (1.5KB)
- `OrderStatsCard.README.md`
- `OrderStatsCard.data.ts`

**Description:**
Carte de statistiques pour le dashboard prestataire (commandes en cours, complétées, annulées, revenus).

**Props:**
```typescript
interface OrderStatsCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  trendValue?: string;
  color?: string;           // ex: '#10b981' (green)
}
```

---

### 6. **StatsCard**
**Fichiers:**
- `StatsCard.tsx` (2.5KB)
- `StatsCard.README.md`
- `StatsCard.data.ts`

**Description:**
Carte de statistiques générique réutilisable pour afficher KPIs, métriques, etc.

**Props:**
```typescript
interface StatsCardProps {
  icon?: ReactNode;
  iconBgColor?: string;
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
}
```

---

### 7. **ProviderProfileDemo**
**Fichiers:**
- `ProviderProfileDemo.tsx` (18KB)
- `PROVIDER-PROFILE-COMPLETE.md`
- `PROVIDER-PROFILE-UPDATES.md`

**Description:**
Page de démonstration complète d'un profil prestataire avec toutes les sections : header, stats, onglets (À propos, Avis, Réalisations), sidebar de contact.

**Sections incluses:**
1. **Header Hero:**
   - Avatar avec badge vérifié
   - Nom, titre, localisation
   - Note moyenne et nombre d'avis
   - Badge "Top prestataire"
   - Stats rapides (missions, temps de réponse, tarif horaire)

2. **Onglets:**
   - À propos (bio, compétences, langues)
   - Avis (avec ReviewStatsCard et liste de ReviewCard)
   - Portfolio/Réalisations (galerie d'images)

3. **Sidebar:**
   - Bouton "Envoyer un message"
   - Membre depuis
   - Astuce temps de réponse

4. **Boutons d'action:**
   - Favoris (cœur)
   - Partage

**Données mockées incluses:**
- Prestataire: Marc Weber (Plombier Expert)
- 5 avis de test
- 4 images de portfolio Unsplash
- Stats complètes

---

## 🎨 Palette de couleurs commune

- **Rouge ELOO**: `#FF6900` ou `#ff6961`
- **Jaune étoiles**: `#fbbf24`
- **Vert badges**: `#10b981`
- **Bleu info**: `#3b82f6`
- **Gris texte**: `#6b7280`
- **Gris fond**: `#f3f4f6`

---

## 📚 Documentation

Chaque composant possède :
- ✅ Un fichier TypeScript avec types définis
- ✅ Un fichier `.data.ts` avec des données de test
- ✅ Un fichier `.README.md` avec documentation complète (si applicable)

---

## 🚀 Prochaines étapes

1. **Adapter les composants** au style ELOO actuel
2. **Intégrer avec l'API WordPress** (remplacer données mockées)
3. **Créer des pages de test** dans `/dev/test-eloo/`
4. **Harmoniser les couleurs** avec la charte graphique ELOO
5. **Rendre responsive** (mobile-first)

---

## 📁 Structure recommandée pour l'intégration

```
eloo-frontend/src/components/eloo/
├── cards/
│   ├── ServiceCard.tsx
│   ├── ReviewCard.tsx
│   ├── ReviewStatsCard.tsx
│   ├── OrderStatsCard.tsx
│   └── StatsCard.tsx
├── filters/
│   └── AdvancedSearchFilter.tsx
└── profiles/
    └── ProviderProfile.tsx (adapté de ProviderProfileDemo)
```

---

## ⚠️ Notes importantes

- **Lucide React icons**: Tous les composants utilisent `lucide-react` pour les icônes
- **Tailwind CSS**: Certains composants utilisent Tailwind, à adapter en SCSS si nécessaire
- **Responsive**: Vérifier et améliorer le responsive design
- **Accessibilité**: Ajouter les attributs ARIA manquants
- **i18n**: Prévoir l'internationalisation (FR/EN/LU/DE)

---

Généré le: 2026-01-13
Importé depuis: branche `modulation`

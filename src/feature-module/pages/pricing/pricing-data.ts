import dotCircle1 from '../../../assets/img/homepage/dot-circle-1.svg';
import dotCircle2 from '../../../assets/img/homepage/dot-circle-2.svg';
import dotCircleBullet from '../../../assets/img/homepage/dot-circle-2-1.svg';

// ============================================
// TYPES
// ============================================
export interface Plan {
  name: string;
  slug: string;
  price: string;
  priceNum: number;
  color: 'blue' | 'yellow' | 'red';
  icon: string;
  features: string[];
  bulletIcon: string;
  trialDays: number;
}

export interface ComparisonFeature {
  label: string;
  tier1: boolean | string;
  tier2: boolean | string;
  tier3: boolean | string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ============================================
// PLANS TALENT
// (Source: Création des offre.pdf)
// ============================================
export const talentPlans: Plan[] = [
  {
    name: 'Starter',
    slug: 'talent_starter',
    price: '4,99',
    priceNum: 4.99,
    trialDays: 7,
    color: 'blue',
    icon: dotCircle2,
    bulletIcon: dotCircleBullet,
    features: [
      'Création d\'un profil talent',
      'Ajout de photos + 1 vidéo highlight',
      'Apparition dans le fil des talents',
      'Possibilité d\'être contacté par agents & clubs',
      'Accès à la note publique',
      'Visibilité France / DOM-TOM / Afrique francophone',
    ],
  },
  {
    name: 'Ambition',
    slug: 'talent_ambition',
    price: '9,99',
    priceNum: 9.99,
    trialDays: 7,
    color: 'yellow',
    icon: dotCircle1,
    bulletIcon: dotCircle1,
    features: [
      'Tout le Starter',
      'Ajout illimité de photos',
      'Jusqu\'à 5 vidéos highlights',
      'Priorité dans les recherches recruteurs',
      'Badge Ambition',
      'Statistiques de profil (vues, votes, recherches)',
      'Mise en avant régionale',
    ],
  },
  {
    name: 'Élite',
    slug: 'talent_elite',
    price: '19,99',
    priceNum: 19.99,
    trialDays: 7,
    color: 'red',
    icon: dotCircle2,
    bulletIcon: dotCircleBullet,
    features: [
      'Tout le Ambition',
      'Vidéos illimitées',
      'Mise en avant nationale',
      'Badge Élite + encadré doré',
      'Mise en avant auprès des recruteurs Premium & Illimités',
      'Accès prioritaire aux opportunités (tests, détections, trials)',
      'Support prioritaire',
    ],
  },
];

// ============================================
// PLANS RECRUTEUR
// (Source: Création des offre.pdf)
// ============================================
export const recruteurPlans: Plan[] = [
  {
    name: 'Accès Sélectif',
    slug: 'recruteur_selectif',
    price: '14,99',
    priceNum: 14.99,
    trialDays: 7,
    color: 'blue',
    icon: dotCircle2,
    bulletIcon: dotCircleBullet,
    features: [
      'Recherche par âge, position, sport',
      'Accès aux profils Starter & Ambition',
      '20 consultations de profils / mois',
      'Possibilité de sauvegarder des favoris',
      'Contact direct talent/parent (messagerie interne)',
    ],
  },
  {
    name: 'Accès Premium',
    slug: 'recruteur_premium',
    price: '29,99',
    priceNum: 29.99,
    trialDays: 7,
    color: 'yellow',
    icon: dotCircle1,
    bulletIcon: dotCircle1,
    features: [
      'Tout le Sélectif',
      'Accès illimité aux profils talents',
      'Accès aux profils Élite',
      'Recherche avancée (statistiques, vidéos, filtres détaillés)',
      'Contact direct & illimité',
      'Accès aux favoris illimités',
      'Notifications "Nouveaux talents"',
    ],
  },
  {
    name: 'Accès Illimité',
    slug: 'recruteur_illimite',
    price: '59,99',
    priceNum: 59.99,
    trialDays: 7,
    color: 'red',
    icon: dotCircle2,
    bulletIcon: dotCircleBullet,
    features: [
      'Tout le Premium',
      'Mise en avant prioritaire dans les recherches des talents',
      'Tableau de bord professionnel',
      'Alertes automatiques (nouveaux profils selon critères)',
      'Accès "Top Talent de la semaine"',
      'Accès anticipé aux profils avant publication (pré-accès 24h)',
      'Support prioritaire "ligne pro"',
    ],
  },
];

// ============================================
// NOMS DES TIERS (pour les headers du tableau comparatif)
// ============================================
export const talentTierNames = ['Starter', 'Ambition', 'Élite'] as const;
export const recruteurTierNames = ['Sélectif', 'Premium', 'Illimité'] as const;

// ============================================
// TABLEAU COMPARATIF TALENT
// ============================================
export const talentComparison: ComparisonFeature[] = [
  { label: 'Profil sur la plateforme', tier1: true, tier2: true, tier3: true },
  { label: 'Photos', tier1: true, tier2: 'Illimitées', tier3: 'Illimitées' },
  { label: 'Vidéos highlight', tier1: '1', tier2: '5', tier3: 'Illimitées' },
  { label: 'Apparition dans le fil des talents', tier1: true, tier2: true, tier3: true },
  { label: 'Contacté par agents & clubs', tier1: true, tier2: true, tier3: true },
  { label: 'Note publique', tier1: true, tier2: true, tier3: true },
  { label: 'Visibilité France / DOM-TOM / Afrique', tier1: true, tier2: true, tier3: true },
  { label: 'Priorité dans les recherches recruteurs', tier1: false, tier2: true, tier3: true },
  { label: 'Badge profil', tier1: false, tier2: 'Ambition', tier3: 'Élite + encadré doré' },
  { label: 'Statistiques de profil (vues, votes, recherches)', tier1: false, tier2: true, tier3: true },
  { label: 'Mise en avant', tier1: false, tier2: 'Régionale', tier3: 'Nationale' },
  { label: 'Mise en avant auprès recruteurs Premium & Illimités', tier1: false, tier2: false, tier3: true },
  { label: 'Accès prioritaire aux opportunités (tests, détections, trials)', tier1: false, tier2: false, tier3: true },
  { label: 'Support prioritaire', tier1: false, tier2: false, tier3: true },
];

// ============================================
// TABLEAU COMPARATIF RECRUTEUR
// ============================================
export const recruteurComparison: ComparisonFeature[] = [
  { label: 'Recherche par âge, position, sport', tier1: true, tier2: true, tier3: true },
  { label: 'Accès aux profils talents', tier1: 'Starter & Ambition', tier2: 'Tous', tier3: 'Tous' },
  { label: 'Consultations de profils / mois', tier1: '20', tier2: 'Illimité', tier3: 'Illimité' },
  { label: 'Sauvegarde de favoris', tier1: true, tier2: 'Illimitée', tier3: 'Illimitée' },
  { label: 'Contact direct talent/parent', tier1: true, tier2: 'Illimité', tier3: 'Illimité' },
  { label: 'Accès aux profils Élite', tier1: false, tier2: true, tier3: true },
  { label: 'Recherche avancée (stats, vidéos, filtres)', tier1: false, tier2: true, tier3: true },
  { label: 'Notifications "Nouveaux talents"', tier1: false, tier2: true, tier3: true },
  { label: 'Mise en avant dans les recherches talents', tier1: false, tier2: false, tier3: true },
  { label: 'Tableau de bord professionnel', tier1: false, tier2: false, tier3: true },
  { label: 'Alertes automatiques (profils selon critères)', tier1: false, tier2: false, tier3: true },
  { label: 'Accès "Top Talent de la semaine"', tier1: false, tier2: false, tier3: true },
  { label: 'Pré-accès 24h aux nouveaux profils', tier1: false, tier2: false, tier3: true },
  { label: 'Support prioritaire "ligne pro"', tier1: false, tier2: false, tier3: true },
];

// ============================================
// FAQ TALENT
// ============================================
export const talentFaq: FaqItem[] = [
  {
    question: 'Comment créer mon profil talent ?',
    answer: 'Inscrivez-vous sur la plateforme en choisissant le profil "Talent", puis complétez votre fiche avec vos informations sportives, vos photos et vidéos highlight. Votre profil sera visible par les recruteurs dès validation.',
  },
  {
    question: 'Puis-je changer de pack à tout moment ?',
    answer: 'Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment depuis votre espace personnel. Le changement prend effet immédiatement et le montant est ajusté au prorata. Le renouvellement est automatique chaque mois.',
  },
  {
    question: 'Comment sont utilisées mes vidéos highlight ?',
    answer: 'Vos vidéos sont hébergées sur la plateforme et visibles par les recruteurs qui consultent votre profil. Elles permettent de mettre en avant vos performances et votre potentiel sportif auprès des agents et clubs.',
  },
  {
    question: 'Qui peut voir mon profil ?',
    answer: 'Votre profil est visible par les recruteurs inscrits sur la plateforme. Avec le pack Ambition, vous bénéficiez d\'une mise en avant régionale. Avec le pack Élite, vous êtes mis en avant au niveau national et auprès des recruteurs Premium & Illimités.',
  },
  {
    question: 'Comment fonctionne le badge Élite ?',
    answer: 'Le badge Élite avec encadré doré est affiché sur votre profil et signale aux recruteurs que vous êtes un talent premium. Il vous donne accès à la mise en avant nationale, l\'accès prioritaire aux opportunités (tests, détections, trials) et le support prioritaire.',
  },
  {
    question: 'Dans quelles zones géographiques suis-je visible ?',
    answer: 'NexGen Sport couvre la France métropolitaine, les DOM-TOM, l\'Afrique francophone (Côte d\'Ivoire, Sénégal, Cameroun, etc.), l\'Europe francophone (Belgique, Suisse romande, Luxembourg) et le Canada francophone (Québec).',
  },
];

// ============================================
// FAQ RECRUTEUR
// ============================================
export const recruteurFaq: FaqItem[] = [
  {
    question: 'Comment contacter un talent ?',
    answer: 'Tous les packs incluent le contact direct avec les talents et leurs parents via la messagerie interne. Avec l\'Accès Sélectif, vous avez 20 consultations de profils par mois. Les packs Premium et Illimité offrent un accès et contact illimité.',
  },
  {
    question: 'Puis-je changer de pack à tout moment ?',
    answer: 'Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment depuis votre espace personnel. Le changement prend effet immédiatement et le montant est ajusté au prorata. Le renouvellement est automatique chaque mois.',
  },
  {
    question: 'Quelle est la différence entre Sélectif et Premium ?',
    answer: 'Le pack Sélectif donne accès aux profils Starter & Ambition avec 20 consultations/mois. Le pack Premium offre un accès illimité à tous les profils (y compris Élite), la recherche avancée avec filtres détaillés, et les notifications de nouveaux talents.',
  },
  {
    question: 'Qu\'offre l\'Accès Illimité en plus du Premium ?',
    answer: 'L\'Accès Illimité ajoute la mise en avant prioritaire, un tableau de bord professionnel, les alertes automatiques selon vos critères, l\'accès au "Top Talent de la semaine", le pré-accès 24h aux nouveaux profils, et un support prioritaire "ligne pro".',
  },
  {
    question: 'Comment fonctionne la recherche avancée ?',
    answer: 'Disponible avec les packs Premium et Illimité, la recherche avancée permet de filtrer les talents par statistiques, vidéos et filtres détaillés (âge, position, sport, localisation). Vous pouvez sauvegarder vos recherches et recevoir des alertes.',
  },
  {
    question: 'Dans quelles zones puis-je recruter ?',
    answer: 'NexGen Sport couvre la France métropolitaine, les DOM-TOM, l\'Afrique francophone, l\'Europe francophone (Belgique, Suisse, Luxembourg) et le Canada francophone (Québec). Tous les talents de ces zones sont accessibles.',
  },
];

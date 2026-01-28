// Export des différentes variantes du composant ServiceCard

export { default as ServiceCardTailwind } from './TailwindVariant';
export { default as ServiceCardInline } from './InlineWithIconVariant';
export { default as ServiceCardContact } from './ContactVariant';

// Export des types (tous les variants partagent la même interface)
export type { ServiceCardProps } from './TailwindVariant';

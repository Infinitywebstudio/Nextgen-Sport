// Adaptateur pour transformer les données Provider en ServiceCardProps

import type { ServiceCardProps } from '../components/ServiceCard';
import type { Provider } from './providerService';

/**
 * Transforme un Provider en ServiceCardProps
 */
export function providerToServiceCard(provider: Provider): Omit<ServiceCardProps, 'onFavorite' | 'onClick' | 'onContact'> {
  return {
    id: provider.id,
    category: provider.category,
    rating: provider.rating,
    reviewCount: provider.reviewCount,
    seller: {
      name: provider.name,
      avatar: provider.avatar,
      location: provider.location,
      isTopPrestataire: provider.isTopPrestataire,
    },
    price: `${provider.price}€`,
  };
}

/**
 * Transforme une liste de Providers en ServiceCardProps
 */
export function providersToServiceCards(providers: Provider[]): Omit<ServiceCardProps, 'onFavorite' | 'onClick' | 'onContact'>[] {
  return providers.map(providerToServiceCard);
}

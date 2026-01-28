// src/services/category.service.ts
import { API_CONFIG } from '../config/api.config';

/**
 * Récupère la liste hiérarchique des catégories de services depuis l'API NEXTGEN.
 *
 * @returns {Promise<Array<Object>>} Une promesse qui résout avec un tableau de catégories.
 * Chaque catégorie parente contient un tableau 'children' avec ses sous-catégories.
 */
export const getHierarchicalCategories = async () => {
    try {
        const url = `${API_CONFIG.WP_API_URL}/${API_CONFIG.NEXTGEN_NAMESPACE}/service-categories`;
        const response = await fetch(url);
        
        if (!response.ok) {
            // Essayer de lire le corps de la réponse pour obtenir plus de détails sur l'erreur
            const errorBody = await response.text();
            console.error("API Response Error Body:", errorBody);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch hierarchical categories:", error);
        // Retourner un tableau vide en cas d'erreur pour éviter que l'UI ne plante
        return []; 
    }
};

// Vous pouvez ajouter ici d'autres fonctions liées aux catégories si nécessaire

import { useState, useEffect } from 'react';
import CategoryCard from '../../../components/nextgen/CategoryCard';
import { getHierarchicalCategories } from '../../../services/category.service';

interface Category {
  id: number;
  name: string;
  slug: string;
  // Les autres propriétés peuvent être ajoutées ici si nécessaire
}

const CategoriesSection = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getHierarchicalCategories();
      // Pour cette section, nous n'affichons que les catégories parentes (Rubriques)
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories-section-home3">
      <div className="categories-container">
        <h2 className="categories-heading">Choisissez selon vos besoins</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <CategoryCard
                title={category.name}
                // La logique d'image suppose que les images sont nommées comme les catégories.
                // Exemple: "Bricolage" -> "/Bricolage.png"
                image={`/${category.name}.png`}
                imageAlt={`Catégorie ${category.name}`}
                buttonText="Découvrir"
                href={`/category/${category.slug}`} // Ajout d'un lien vers la page de la catégorie
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

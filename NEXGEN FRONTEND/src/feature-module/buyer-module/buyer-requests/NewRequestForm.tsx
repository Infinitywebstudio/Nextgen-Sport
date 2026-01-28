import React, { useState, useEffect } from 'react'; // Added useEffect
import Button from '../../../components/nextgen/Button';
import { getHierarchicalCategories } from '../../../services/category.service'; // New import

// Interface for categories (assuming basic structure for now)
interface Category {
  id: number;
  name: string;
  // Potentially more fields like 'slug', 'description', 'count' if needed
}

interface NewRequestFormProps {
  onClose: () => void;
  onSubmit: (formData: any) => void; // Remplacez 'any' par un type plus spécifique si nécessaire
}

const NewRequestForm: React.FC<NewRequestFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '', // Changed to empty string to match select
    location: '', // New field for location
    budget: '',
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      setCategoriesError(null);
      try {
        const data = await getHierarchicalCategories(); // Use the service function
        setCategories(data);
      } catch (error: any) {
        console.error("Failed to fetch categories:", error);
        setCategoriesError("Erreur lors du chargement des catégories: " + error.message);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []); // Run only once on component mount

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div className="modal-content" style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        width: '500px',
        maxWidth: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        <h5 className="mb-4">Créer une nouvelle demande de service</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titre de la demande</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description détaillée</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Catégorie</label>
            {loadingCategories ? (
              <p>Chargement des catégories...</p>
            ) : categoriesError ? (
              <p className="text-danger">{categoriesError}</p>
            ) : (
              <select
                className="form-select" // Using Bootstrap form-select class
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          {/* New field for Localisation */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Localisation</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="budget" className="form-label">Budget (ex: 50-100€)</label>
            <input
              type="text"
              className="form-control"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="ghost" type="button" onClick={onClose}>Annuler</Button>
            <Button variant="primary" type="submit">Envoyer la demande</Button>
          </div>
        </form>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        ></button>
      </div>
    </div>
  );
};

export default NewRequestForm;

/**
 * Composant de test pour vérifier la connexion WordPress API
 * À utiliser pendant le développement uniquement
 */

import { useEffect, useState } from 'react';
import wordPressService from '../services/wordpress.service';
import type { ApiResponse } from '../services/wordpress.service';

interface StatusData {
  success: boolean;
  message: string;
  version: string;
  timestamp: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const ApiTest = () => {
  const [statusData, setStatusData] = useState<ApiResponse<StatusData> | null>(null);
  const [categories, setCategories] = useState<ApiResponse<Category[]> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testApiConnection();
  }, []);

  const testApiConnection = async () => {
    setLoading(true);

    // Test 1: Vérifier le statut de l'API
    console.log('🔍 Test 1: Vérification du statut de l\'API NEXTGEN...');
    const statusResponse = await wordPressService.checkStatus();
    setStatusData(statusResponse);

    if (statusResponse.success) {
      console.log('✅ API Status OK:', statusResponse.data);
    } else {
      console.error('❌ Erreur API Status:', statusResponse.error);
    }

    // Test 2: Récupérer les catégories
    console.log('🔍 Test 2: Récupération des catégories de services...');
    const categoriesResponse = await wordPressService.getServiceCategories();
    setCategories(categoriesResponse);

    if (categoriesResponse.success) {
      console.log('✅ Catégories récupérées:', categoriesResponse.data?.length, 'catégories');
    } else {
      console.error('❌ Erreur catégories:', categoriesResponse.error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>🔄 Test de connexion API WordPress...</h2>
        <p>Chargement en cours...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🧪 Test de connexion API WordPress - NEXTGEN</h1>

      {/* Test 1: API Status */}
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: statusData?.success ? '#f0f9ff' : '#fff5f5'
      }}>
        <h2>
          {statusData?.success ? '✅' : '❌'} Test 1: Statut de l'API
        </h2>
        {statusData?.success ? (
          <div>
            <p><strong>Message:</strong> {statusData.data?.message}</p>
            <p><strong>Version:</strong> {statusData.data?.version}</p>
            <p><strong>Timestamp:</strong> {statusData.data?.timestamp}</p>
            <p style={{ color: 'green' }}>✅ Connexion WordPress réussie !</p>
          </div>
        ) : (
          <div>
            <p style={{ color: 'red' }}>❌ Erreur: {statusData?.error}</p>
            <p><strong>Vérifier:</strong></p>
            <ul>
              <li>WordPress est bien démarré sur http://nextgen.local</li>
              <li>Le fichier .env contient la bonne URL</li>
              <li>CORS est configuré dans .htaccess</li>
            </ul>
          </div>
        )}
      </div>

      {/* Test 2: Service Categories */}
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: categories?.success ? '#f0f9ff' : '#fff5f5'
      }}>
        <h2>
          {categories?.success ? '✅' : '❌'} Test 2: Catégories de services
        </h2>
        {categories?.success ? (
          <div>
            <p><strong>Nombre de catégories:</strong> {categories.data?.length}</p>
            <div style={{ marginTop: '15px' }}>
              <h3>Liste des catégories:</h3>
              <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                listStyle: 'none',
                padding: 0
              }}>
                {categories.data?.map((cat) => (
                  <li key={cat.id} style={{
                    padding: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <strong>{cat.name}</strong>
                    <br />
                    <small style={{ color: '#666' }}>
                      slug: {cat.slug} | services: {cat.count}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ color: 'green', marginTop: '15px' }}>
              ✅ Les catégories sont correctement récupérées depuis WordPress !
            </p>
          </div>
        ) : (
          <div>
            <p style={{ color: 'red' }}>❌ Erreur: {categories?.error}</p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div style={{
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f1f8f4'
      }}>
        <h2>📊 Résumé des tests</h2>
        <ul>
          <li>
            <strong>API Status:</strong> {statusData?.success ? '✅ OK' : '❌ Échec'}
          </li>
          <li>
            <strong>Catégories:</strong> {categories?.success ? '✅ OK' : '❌ Échec'}
          </li>
        </ul>
        {statusData?.success && categories?.success ? (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '4px' }}>
            <strong>🎉 Tous les tests sont passés avec succès !</strong>
            <p style={{ margin: '10px 0 0 0' }}>
              La connexion React → WordPress API fonctionne parfaitement.
              Vous pouvez maintenant passer à l'implémentation de l'authentification JWT.
            </p>
          </div>
        ) : (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f44336', color: 'white', borderRadius: '4px' }}>
            <strong>⚠️ Certains tests ont échoué</strong>
            <p style={{ margin: '10px 0 0 0' }}>
              Vérifiez la console pour plus de détails et corrigez les erreurs avant de continuer.
            </p>
          </div>
        )}
      </div>

      {/* Button to retest */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={testApiConnection}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🔄 Relancer les tests
        </button>
      </div>
    </div>
  );
};

export default ApiTest;

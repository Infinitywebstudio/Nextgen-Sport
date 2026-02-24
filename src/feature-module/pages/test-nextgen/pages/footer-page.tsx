import Footer from '../../../../components/nextgen/Footer';

const FooterPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="mb-3">Footer Component</h2>
        <p className="text-muted">
          Footer NEXTGEN avec 3 colonnes de liens et logo en bas
        </p>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Footer Default</h5>
        </div>
        <div className="card-body p-0">
          <Footer variant="default" />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Footer Dark (variant par défaut)</h5>
        </div>
        <div className="card-body p-0">
          <Footer variant="dark" />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Propriétés</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Défaut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>variant</code></td>
                <td><code>'default' | 'dark'</code></td>
                <td><code>'dark'</code></td>
                <td>Variant du footer</td>
              </tr>
              <tr>
                <td><code>className</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Classes CSS additionnelles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

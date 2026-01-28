import ReviewCard from '../../../../components/ReviewCard';
import { mockReviews } from '../../../../components/ReviewCard.data';

const ReviewCardPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h2>ReviewCard Component</h2>
        <p className="text-muted">
          Carte d'avis client avec avatar, note et commentaire
        </p>
      </div>

      {/* Grille de ReviewCards */}
      <div className="mb-5">
        <h4 className="mb-3">Exemples d'avis clients</h4>
        <div className="row g-4">
          {mockReviews.map((review, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ReviewCard
                id={index}
                reviewer={review.reviewer}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Différentes notes */}
      <div className="mb-5">
        <h4 className="mb-3">Exemples par note</h4>
        <div className="row g-4">
          <div className="col-lg-4">
            <ReviewCard
              id={100}
              reviewer={{
                name: "5 étoiles",
                avatar: "https://i.pravatar.cc/150?img=1"
              }}
              rating={5}
              date="1 jour"
              comment="Excellent service, je recommande vivement !"
            />
          </div>
          <div className="col-lg-4">
            <ReviewCard
              id={101}
              reviewer={{
                name: "4 étoiles",
                avatar: "https://i.pravatar.cc/150?img=2"
              }}
              rating={4}
              date="3 jours"
              comment="Très bon travail, quelques petits détails à améliorer."
            />
          </div>
          <div className="col-lg-4">
            <ReviewCard
              id={102}
              reviewer={{
                name: "3 étoiles",
                avatar: "https://i.pravatar.cc/150?img=3"
              }}
              rating={3}
              date="1 semaine"
              comment="Correct mais peut mieux faire."
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="alert alert-info">
        <h6 className="mb-2">
          <i className="ti ti-info-circle me-1" />
          Utilisation
        </h6>
        <code className="d-block mb-2">
          {'<ReviewCard id={1} reviewer={{name: "Sophie", avatar: "..."}} rating={5} date="2 jours" comment="..." />'}
        </code>
        <small>
          Le composant affiche automatiquement les étoiles en fonction de la note (1-5).
        </small>
      </div>

      {/* Props */}
      <div className="card mt-4">
        <div className="card-header">
          <h5 className="mb-0">Props</h5>
        </div>
        <div className="card-body">
          <table className="table table-bordered mb-0">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>id</code></td>
                <td>number</td>
                <td>Identifiant unique de l'avis</td>
              </tr>
              <tr>
                <td><code>reviewer</code></td>
                <td>{"{ name: string, avatar: string }"}</td>
                <td>Informations sur l'auteur de l'avis</td>
              </tr>
              <tr>
                <td><code>rating</code></td>
                <td>number (1-5)</td>
                <td>Note sur 5 étoiles</td>
              </tr>
              <tr>
                <td><code>date</code></td>
                <td>string</td>
                <td>Date relative (ex: "2 jours", "1 semaine")</td>
              </tr>
              <tr>
                <td><code>comment</code></td>
                <td>string</td>
                <td>Texte du commentaire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardPage;

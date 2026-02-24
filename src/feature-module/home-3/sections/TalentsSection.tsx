import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import talentImg from '../../../assets/img/homepage/talent-placeholder.webp';
import arrowIcon from '../../../assets/img/homepage/right-arrow.svg';
import { API_ENDPOINTS } from '../../../config/api.config';

interface TalentAPI {
  id: number;
  title?: { rendered?: string };
  acf?: {
    sport?: string;
    first_name?: string;
    last_name?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
  };
  featured_media_url?: string;
}

interface TalentDisplay {
  id: number;
  name: string;
  sport: string;
  image: string;
}

const fallbackTalents: TalentDisplay[] = [
  { id: 1, name: 'Talent', sport: 'Football', image: talentImg },
  { id: 2, name: 'Talent', sport: 'Handball', image: talentImg },
  { id: 3, name: 'Talent', sport: 'Basketball', image: talentImg },
  { id: 4, name: 'Talent', sport: 'Boxe', image: talentImg },
];

const TalentsSection = () => {
  const [talents, setTalents] = useState<TalentDisplay[]>(fallbackTalents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINTS.SERVICES.LIST}?per_page=4&_embed`,
        );
        if (!response.ok) throw new Error('API error');
        const data: TalentAPI[] = await response.json();

        if (data.length > 0) {
          const mapped: TalentDisplay[] = data.map((t) => {
            const name =
              t.acf?.first_name && t.acf?.last_name
                ? `${t.acf.first_name} ${t.acf.last_name}`
                : t.title?.rendered || 'Talent';
            const sport = t.acf?.sport || 'Sport';
            const image =
              t.featured_media_url ||
              t._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              talentImg;

            return { id: t.id, name, sport, image };
          });
          setTalents(mapped);
        }
      } catch {
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, []);

  return (
    <section className="nex-talents">
      <div className="nex-talents__container">
        <h2 className="nex-talents__title nex-title">
          Talents de la semaine
        </h2>
        <div className="nex-talents__grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="nex-talent-card">
                  <div className="nex-talent-card__image">
                    <div
                      className="placeholder-glow"
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#e9ecef',
                        borderRadius: 12,
                      }}
                    />
                  </div>
                  <h3 className="nex-talent-card__name nex-title">
                    <span className="placeholder col-6" />
                  </h3>
                  <div className="nex-talent-card__footer">
                    <h4 className="nex-talent-card__sport nex-title">
                      <span className="placeholder col-4" />
                    </h4>
                  </div>
                </div>
              ))
            : talents.map((talent) => (
                <Link
                  to={`/talent/${talent.id}`}
                  key={talent.id}
                  className="nex-talent-card"
                >
                  <div className="nex-talent-card__image">
                    <img src={talent.image} alt={talent.name} />
                  </div>
                  <h3 className="nex-talent-card__name nex-title">
                    {talent.name}
                  </h3>
                  <div className="nex-talent-card__footer">
                    <h4 className="nex-talent-card__sport nex-title">
                      {talent.sport}
                    </h4>
                    <span className="nex-talent-card__arrow">
                      <img src={arrowIcon} alt="" />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TalentsSection;

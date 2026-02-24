import { IconPlayerPlayFilled } from '@tabler/icons-react';

interface Podcast {
  id: string;
  title: string;
  date: string;
}

const podcasts: Podcast[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Comment se faire repérer par un recruteur ?',
    date: '12 Fév 2026',
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Les clés de la préparation mentale',
    date: '28 Jan 2026',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Parcours inspirant : du quartier au pro',
    date: '15 Jan 2026',
  },
];

const PodcastSection = () => (
  <section className="nex-podcast">
    <div className="nex-podcast__container">
      <h2 className="nex-podcast__title nex-title">NOS PODCASTS</h2>
      <p className="nex-podcast__subtitle">
        Retrouvez nos échanges avec des talents, recruteurs et experts du sport.
      </p>
      <div className="nex-podcast__grid">
        {podcasts.map((p) => (
          <a
            key={p.id}
            href={`https://www.youtube.com/watch?v=${p.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nex-podcast__card"
          >
            <div className="nex-podcast__thumb">
              <img
                src={`https://img.youtube.com/vi/${p.id}/maxresdefault.jpg`}
                alt={p.title}
                loading="lazy"
              />
              <span className="nex-podcast__play">
                <IconPlayerPlayFilled size={28} />
              </span>
            </div>
            <div className="nex-podcast__info">
              <h3 className="nex-podcast__card-title">{p.title}</h3>
              <span className="nex-podcast__date">{p.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default PodcastSection;

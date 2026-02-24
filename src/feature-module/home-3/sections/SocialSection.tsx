import facebookIcon from '../../../assets/img/homepage/facebook.svg';
import instaIcon from '../../../assets/img/homepage/insta.svg';
import twitterIcon from '../../../assets/img/homepage/twitter-stroke-12.svg';
import tiktokIcon from '../../../assets/img/homepage/tiktok.svg';

const socials = [
  { name: 'Facebook', icon: facebookIcon, url: 'https://facebook.com/nextgensport' },
  { name: 'Instagram', icon: instaIcon, url: 'https://instagram.com/nextgensport' },
  { name: 'X', icon: twitterIcon, url: 'https://x.com/nextgensport' },
  { name: 'TikTok', icon: tiktokIcon, url: 'https://tiktok.com/@nextgensport' },
];

const SocialSection = () => {
  return (
    <section className="nex-social">
      <div className="nex-social__container">
        <h2 className="nex-social__title nex-title">Suivez-nous</h2>
        <div className="nex-social__icons">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nex-social__link"
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

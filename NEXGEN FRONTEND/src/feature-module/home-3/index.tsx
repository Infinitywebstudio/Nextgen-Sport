import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import CategoriesSection from './sections/CategoriesSection';
import TalentsSection from './sections/TalentsSection';
import CtaBannerSection from './sections/CtaBannerSection';
import PassionSection from './sections/PassionSection';
import PricingSection from './sections/PricingSection';
import MarqueeSection from './sections/MarqueeSection';
import BrandStatementSection from './sections/BrandStatementSection';
import SocialSection from './sections/SocialSection';

const Home3 = () => {
  useEffect(() => {
    document.body.classList.add('nex-home-page');
    return () => {
      document.body.classList.remove('nex-home-page');
    };
  }, []);

  return (
    <div className="home-3">
      <HeroSection />
      <CategoriesSection />
      <TalentsSection />
      <CtaBannerSection />
      <PassionSection />
      <PricingSection />
      <MarqueeSection />
      <BrandStatementSection />
      <SocialSection />
    </div>
  );
};

export default Home3;

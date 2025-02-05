import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import SocialBanner from "./SocialBanner/SocialBanner";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <ServicesSection></ServicesSection>
      <SocialBanner></SocialBanner>
    </div>
  );
};

export default Home;

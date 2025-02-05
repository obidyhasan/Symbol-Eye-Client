import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <ServicesSection></ServicesSection>
    </div>
  );
};

export default Home;

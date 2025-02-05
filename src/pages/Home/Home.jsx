import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FAQSection from "./FAQSection/FAQSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import GallerySection from "./GallerySection/GallerySection";
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
      <CategoriesSection></CategoriesSection>
      <GallerySection></GallerySection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;

import Headline from "../../../components/Headline";
import ProductCard from "../../../components/ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="max-width pt-16 pb-10">
      <Headline
        headline={"Our Featured Products"}
        subHeadline={
          "Explore our top picks loved by our customers – stylish, versatile, and trendy."
        }
      ></Headline>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

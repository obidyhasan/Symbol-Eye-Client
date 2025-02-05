import Headline from "../../../components/Headline";
import ProductCard from "../../../components/ProductCard";

const CategoriesSection = () => {
  return (
    <div className="max-width pb-10 pt-16">
      <Headline
        headline={"Shop by Category"}
        subHeadline={
          "Find the perfect fit for every occasion – Men, Women, Kids, and Accessories."
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

export default CategoriesSection;

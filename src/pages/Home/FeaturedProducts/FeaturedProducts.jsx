import Headline from "../../../components/Headline";
import ProductCard from "../../../components/ProductCard";
import useFeatured from "../../../hooks/useFeatured";

const FeaturedProducts = () => {
  const { featuredProduct, isPending } = useFeatured();

  return (
    <div className="max-width pt-16 pb-10">
      <Headline
        headline={"Our Featured Products"}
        subHeadline={
          "Explore our top picks loved by our customers – stylish, versatile, and trendy."
        }
      ></Headline>
      <div className="mt-10">
        {isPending ? (
          <div className="flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {featuredProduct.length ? (
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {featuredProduct.map((product) => (
                  <ProductCard
                    key={product?._id}
                    product={product}
                    isAdmin={false}
                  ></ProductCard>
                ))}
              </div>
            ) : (
              <div>
                <p className="p-5 rounded text-center font-medium border border-base-200">
                  Featured Product Not Found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

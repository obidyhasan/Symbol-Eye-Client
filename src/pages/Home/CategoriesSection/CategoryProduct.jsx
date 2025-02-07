import ProductCard from "../../../components/ProductCard";
import PropTypes from "prop-types";
import useProduct from "../../../hooks/useProduct";

const CategoryProduct = ({ category }) => {
  const { products } = useProduct();
  const categoryProducts = products.filter(
    (product) => product?.category === category
  );
  console.log(categoryProducts);

  return (
    <div>
      {categoryProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product?._id}
              product={product}
              isAdmin={false}
            ></ProductCard>
          ))}
        </div>
      ) : (
        <div className="my-10">
          <p className="p-5 border border-base-300 text-center font-semibold rounded">
            Product Not Available
          </p>
        </div>
      )}
    </div>
  );
};

CategoryProduct.propTypes = {
  category: PropTypes.string,
};

export default CategoryProduct;

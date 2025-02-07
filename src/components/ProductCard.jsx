import PropTypes from "prop-types";

const ProductCard = ({ product, isAdmin }) => {
  return (
    <div className="bg-white flex flex-col gap-3 border border-base-200 p-4 rounded">
      <div className="flex-auto">
        <img
          src={product?.image}
          className="w-full h-[220px] object-cover rounded"
          alt=""
        />
        <div className="flex flex-col gap-1 mt-3">
          <div className="badge badge-outline rounded-full badge-sm">
            {product?.category}
          </div>
          <h2 className="font-semibold text-lg">{product?.name}</h2>
          <p className="font-medium text-orange-400 line-clamp-2">
            ৳ {product?.price}
          </p>
          <p>{product?.description}</p>
        </div>
      </div>

      {isAdmin && (
        <div className="flex gap-3 w-full">
          <button className="btn flex-auto">Update</button>
          <button className="btn btn-error flex-auto">Delete</button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  isAdmin: PropTypes.bool,
};

export default ProductCard;

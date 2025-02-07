import PropTypes from "prop-types";
import { showConfirmAlert } from "../utility/sweetAlert";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../utility/toastify";
import useProduct from "../hooks/useProduct";

const ProductCard = ({ product, isAdmin }) => {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useProduct();

  function handelProductDelete(id) {
    showConfirmAlert()
      .then((res) => {
        if (res.isConfirmed) {
          axiosSecure.delete(`/api/products/${id}`).then((res) => {
            if (res.data.deletedCount) {
              showSuccessToast("Image Deleted Successfully");
              refetch();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error.message);
      });
  }

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
          <button
            onClick={() => handelProductDelete(product?._id)}
            className="btn btn-error flex-auto"
          >
            Delete
          </button>
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

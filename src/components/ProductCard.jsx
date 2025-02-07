import PropTypes from "prop-types";
import { showConfirmAlert } from "../utility/sweetAlert";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../utility/toastify";
import useProduct from "../hooks/useProduct";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useCategory from "../hooks/useCategory";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ProductCard = ({ product, isAdmin }) => {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useProduct();
  const updateModalRef = useRef();
  const { categories } = useCategory();
  const axiosPublic = useAxiosPublic();
  const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
  const [btnLoading, setBtnLoading] = useState();
  const [isImgChange, setIsImgChange] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name,
      price: product?.price,
      category: product?.category,
      isFeatured: product?.isFeatured,
      description: product?.description,
    },
  });

  const onSubmit = async (data) => {
    setBtnLoading(true);
    let image_url;
    if (isImgChange) {
      try {
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const result = await axiosPublic.post(
          `https://api.imgbb.com/1/upload?key=${API_KEY}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        image_url = result.data?.data?.display_url;
      } catch (error) {
        console.log(error);
        showErrorToast(error?.message);
        setBtnLoading(false);
      }
    } else {
      image_url = product?.image;
    }

    data.image = image_url;
    axiosSecure
      .patch(`/api/products/${product?._id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          setBtnLoading(false);
          showSuccessToast("Product update successfully");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error?.message);
        setBtnLoading(false);
      });
  };

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
    <div>
      <>
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
              <button
                onClick={() => updateModalRef.current.show()}
                className="btn flex-auto"
              >
                Update
              </button>
              <button
                onClick={() => handelProductDelete(product?._id)}
                className="btn btn-error flex-auto"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </>
      {/* Modal */}
      <dialog ref={updateModalRef} className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Update Product</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="w-full">
                    <label className="fieldset-label mb-1">Product Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      className="input w-full"
                      placeholder="name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="fieldset-label mb-1">Product Price</label>
                    <input
                      {...register("price")}
                      type="number"
                      className="input w-full"
                      placeholder="price"
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="w-full">
                    <label className="fieldset-label mb-1">Product Image</label>
                    <input
                      {...register("image")}
                      type="file"
                      onChange={() => setIsImgChange(true)}
                      className="file-input file-input-bordered w-full"
                    />
                  </div>
                  <div className="w-full">
                    <label className="fieldset-label mb-1">
                      Product Category
                    </label>
                    <select
                      {...register("category")}
                      className="select select-bordered w-full max-w-xs"
                    >
                      {categories.map((category) => (
                        <option key={category?._id}>
                          {category?.category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-1 gap-5">
                  <div className="w-full">
                    <label className="fieldset-label mb-1">
                      Product Featured
                    </label>
                    <select
                      {...register("isFeatured")}
                      defaultValue={"None"}
                      className="select select-bordered w-full "
                    >
                      <option>None</option>
                      <option>Featured</option>
                    </select>
                  </div>
                  {/* <div className="w-full">
                    <label className="fieldset-label mb-1">Product Price</label>
                    <input
                      {...register("price")}
                      type="number"
                      className="input w-full"
                      placeholder="price"
                      required
                    />
                  </div> */}
                </div>
                <div className="w-full">
                  <label className="fieldset-label mb-1">
                    Product Description
                  </label>
                  <textarea
                    {...register("description")}
                    className="textarea textarea-bordered w-full"
                    placeholder="description"
                    required
                  ></textarea>
                </div>

                {btnLoading ? (
                  <button className="btn btn-neutral mt-4">
                    <span className="loading loading-spinner"></span> Add
                    Product
                  </button>
                ) : (
                  <button className="btn btn-neutral mt-4">
                    Update Product
                  </button>
                )}
              </fieldset>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  isAdmin: PropTypes.bool,
};

export default ProductCard;

import { useRef, useState } from "react";
import Titles from "../../../../components/Titles";
import { useForm } from "react-hook-form";
import useCategory from "../../../../hooks/useCategory";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../../../../utility/toastify";
import useProduct from "../../../../hooks/useProduct";
import ProductCard from "../../../../components/ProductCard";

const AdminProducts = () => {
  const addModalRef = useRef();
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { categories } = useCategory();
  const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { products, isPending, refetch } = useProduct();

  const onSubmit = (data) => {
    setBtnLoading(true);
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    axiosPublic
      .post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        if (result.data.success) {
          const image_url = result.data?.data?.display_url;

          data.image = image_url;
          axiosSecure
            .post("/api/products", data)
            .then((res) => {
              if (res.data.insertedId) {
                showSuccessToast("Product added successfully");
                addModalRef.current.close();
                setBtnLoading(false);
                refetch();
              }
            })
            .catch((error) => {
              console.log(error);
              showErrorToast("Something went wrong");
              setBtnLoading(false);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast("Something went wrong!");
        setBtnLoading(false);
      });
  };

  return (
    <div>
      <Titles
        title={"Product Management"}
        description={
          "Easily add, Delete, and organize products to keep your store fresh and engaging."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => addModalRef.current.showModal()}
            className="btn"
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="my-10">
        {isPending ? (
          <div className="py-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product?._id}
                isAdmin={true}
                product={product}
              ></ProductCard>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <dialog ref={addModalRef} className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Add Product</h3>
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
                      required
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
                  <button className="btn btn-neutral mt-4">Add Product</button>
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

export default AdminProducts;

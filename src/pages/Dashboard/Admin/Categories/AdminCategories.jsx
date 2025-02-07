import { useRef } from "react";
import Titles from "../../../../components/Titles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../../../../utility/toastify";
import useCategory from "../../../../hooks/useCategory";
import { showConfirmAlert } from "../../../../utility/sweetAlert";

const AdminCategories = () => {
  const addModalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const { categories, isPending, refetch } = useCategory();

  function handelOnSubmit(e) {
    e.preventDefault();
    const category = e.target.category.value;

    axiosSecure
      .post("/api/category", { category })
      .then((res) => {
        if (res.data.insertedId) {
          showSuccessToast("Category Added Successfully");
          addModalRef.current.close();
          refetch();
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast("Somethings went wrong!");
      });
  }

  function handelCategoryDelete(id) {
    showConfirmAlert().then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/category/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              showSuccessToast("Category Deleted Successfully");
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
            showErrorToast(error.message);
          });
      }
    });
  }

  return (
    <div>
      <Titles
        title={"Manage Categories"}
        description={
          "Add, Delete, and remove categories to keep your store organized and up to date."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => addModalRef.current.showModal()}
            className="btn btn-neutral"
          >
            Add Category
          </button>
        </div>
        <div>
          {isPending ? (
            <div className="py-10 flex items-center justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          ) : (
            <div>
              {categories.length ? (
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Category</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, idx) => (
                        <tr key={category?._id}>
                          <th>{idx + 1}</th>
                          <td className="font-medium">{category?.category}</td>
                          <td className="text-right">
                            <button
                              onClick={() => handelCategoryDelete(category._id)}
                              className="btn"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-10 text-center">
                  <p className="border p-3 rounded border-base-300">
                    Categories empty
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <dialog ref={addModalRef} className="modal">
        <div className="modal-box max-w-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Add Category</h3>
            <form onSubmit={handelOnSubmit}>
              <input
                type="text"
                name="category"
                placeholder="enter category"
                className="input w-full my-5"
                required
              />
              <div className="text-center">
                <button className="btn">Add Category</button>
              </div>
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

export default AdminCategories;

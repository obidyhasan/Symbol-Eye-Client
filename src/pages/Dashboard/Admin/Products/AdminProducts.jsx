import { useRef } from "react";
import Titles from "../../../../components/Titles";

const AdminProducts = () => {
  const addModalRef = useRef();

  function handelOnSubmit() {}

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

export default AdminProducts;

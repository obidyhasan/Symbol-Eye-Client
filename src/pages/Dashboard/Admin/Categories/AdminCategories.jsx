import { useRef } from "react";
import Titles from "../../../../components/Titles";

const AdminCategories = () => {
  const addModalRef = useRef();

  return (
    <div>
      <Titles
        title={"Manage Categories"}
        description={
          "Add, edit, and remove categories to keep your store organized and up to date."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => addModalRef.current.showModal()}
            className="btn"
          >
            Add Category
          </button>
        </div>
        <div>
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
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td className="font-medium">Cy Ganderton</td>
                  <td className="text-right">
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <form>
              <input
                type="text"
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

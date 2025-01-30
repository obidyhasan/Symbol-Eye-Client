import { useRef } from "react";
import Titles from "../../../../components/Titles";

const AdminServices = () => {
  const serviceModalRef = useRef();

  return (
    <div>
      <Titles
        title={"Manage Services Efficiently"}
        description={
          "Add, update, and remove services to keep your offerings up to date and relevant."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => serviceModalRef.current.showModal()}
            className="btn"
          >
            Add Services
          </button>
        </div>
      </div>
      <div></div>
      {/* Modal */}
      <dialog ref={serviceModalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Add Service</h3>
            <form>
              <div className="my-5">
                <label className="text-sm font-semibold">Title</label>
                <input
                  type="text"
                  placeholder="enter title"
                  className="input w-full mb-2"
                  required
                />

                <div className="flex flex-col gap-0.5">
                  <label className="text-sm font-semibold">Description</label>
                  <textarea
                    className="textarea w-full"
                    placeholder="enter description"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className="btn w-full">Add Service</button>
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

export default AdminServices;

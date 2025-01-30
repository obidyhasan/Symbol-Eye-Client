import { useRef } from "react";
import Titles from "../../../../components/Titles";

const AdminFAQ = () => {
  const faqModalRef = useRef();

  return (
    <div>
      <Titles
        title={"FAQ Management"}
        description={
          "Add, edit, and organize frequently asked questions to help customers find quick answers."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => faqModalRef.current.showModal()}
            className="btn"
          >
            Add FAQ
          </button>
        </div>
      </div>
      <div></div>
      {/* Modal */}
      <dialog ref={faqModalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Add FAQ</h3>
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
                <button className="btn w-full">Add FAQ</button>
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

export default AdminFAQ;

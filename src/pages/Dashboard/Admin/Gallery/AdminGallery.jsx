import { useRef } from "react";
import Titles from "../../../../components/Titles";

const AdminGallery = () => {
  const galleryModalRef = useRef();

  return (
    <div>
      <Titles
        title={"Gallery Management"}
        description={
          "Add, update, and organize images to showcase your brand’s style and collections."
        }
      ></Titles>

      <div className="my-5">
        <div className="text-center my-5">
          <button
            onClick={() => galleryModalRef.current.showModal()}
            className="btn"
          >
            Add Image
          </button>
        </div>
      </div>
      <div></div>
      {/* Modal */}
      <dialog ref={galleryModalRef} className="modal">
        <div className="modal-box max-w-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">Add Image</h3>
            <form>
              <input type="file" className="file-input my-5 w-full" required />
              <div className="text-center">
                <button className="btn">Add Image</button>
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

export default AdminGallery;

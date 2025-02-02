import { useEffect, useRef } from "react";
import Titles from "../../../../components/Titles";
import useImageUpload from "../../../../hooks/useImageUpload";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../../../../utility/toastify";
import useGallery from "../../../../hooks/useGallery";
import { showConfirmAlert } from "../../../../utility/sweetAlert";

const AdminGallery = () => {
  const galleryModalRef = useRef();
  const formRef = useRef();
  const { imageUrl, loading, uploadImage } = useImageUpload();
  const axiosSecure = useAxiosSecure();
  const { gallery, isPending, refetch } = useGallery();

  useEffect(() => {
    if (imageUrl) {
      axiosSecure
        .post(`/api/gallery`, { image: imageUrl })
        .then((res) => {
          if (res.data.insertedId) {
            formRef.current.reset();
            galleryModalRef.current.close();
            showSuccessToast("Image added successfully");
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
          showErrorToast(error.message);
        });
    }
  }, [imageUrl, axiosSecure, refetch]);

  function handelOnSubmit(e) {
    e.preventDefault();
    const imageFile = e.target.image.files[0];
    uploadImage(imageFile);
  }

  function handelGalleryDelete(id) {
    showConfirmAlert()
      .then((res) => {
        if (res.isConfirmed) {
          axiosSecure.delete(`/api/gallery/${id}`).then((res) => {
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
      <div className="my-10">
        {isPending ? (
          <div className="py-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div
                className="flex flex-col gap-5 border border-base-300 rounded p-4"
                key={image._id}
              >
                <div className="flex-1">
                  <img
                    src={image?.image}
                    className="w-full h-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
                <div>
                  <button
                    onClick={() => handelGalleryDelete(image?._id)}
                    className="btn btn-error w-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
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
            <form ref={formRef} onSubmit={handelOnSubmit}>
              <input
                name="image"
                type="file"
                className="file-input my-5 w-full"
                required
              />
              <div className="text-center">
                {loading ? (
                  <button className="btn">
                    <span className="loading loading-spinner"></span>
                    Add Image
                  </button>
                ) : (
                  <button className="btn">Add Image</button>
                )}
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

import { useRef } from "react";
import Titles from "../../../../components/Titles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { showErrorToast, showSuccessToast } from "../../../../utility/toastify";
import useService from "../../../../hooks/useService";
import { showConfirmAlert } from "../../../../utility/sweetAlert";

const AdminServices = () => {
  const serviceModalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const { services, isPending, refetch } = useService();
  console.log(services);

  function handelOnSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    axiosSecure
      .post("/api/services", { title, description })
      .then((res) => {
        if (res.data.insertedId) {
          showSuccessToast("Service Added Successfully");
          refetch();
          serviceModalRef.current.close();
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error.message);
      });
  }

  function handelServiceDelete(id) {
    showConfirmAlert()
      .then((res) => {
        if (res.isConfirmed) {
          axiosSecure.delete(`/api/services/${id}`).then((res) => {
            if (res.data.deletedCount) {
              showSuccessToast("Service Deleted Successfully");
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
      <div className="my-10">
        {isPending ? (
          <div className="py-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                className="flex flex-col gap-5 border border-base-300 rounded p-4"
                key={service._id}
              >
                <div className="flex-1">
                  <p className="font-medium">{service?.title}</p>
                  <p className="text-sm mt-4 text-gray-600">
                    {service?.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handelServiceDelete(service?._id)}
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
            <form onSubmit={handelOnSubmit}>
              <div className="my-5">
                <label className="text-sm font-semibold">Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="enter title"
                  className="input w-full mb-2"
                  required
                />

                <div className="flex flex-col gap-0.5">
                  <label className="text-sm font-semibold">Description</label>
                  <textarea
                    name="description"
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

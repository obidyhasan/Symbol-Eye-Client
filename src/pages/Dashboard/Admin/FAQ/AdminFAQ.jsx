import { useRef } from "react";
import Titles from "../../../../components/Titles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useFAQ from "../../../../hooks/useFAQ";
import { showErrorToast, showSuccessToast } from "../../../../utility/toastify";
import { showConfirmAlert } from "../../../../utility/sweetAlert";

const AdminFAQ = () => {
  const faqModalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const { faqs, isPending, refetch } = useFAQ();

  function handelOnSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    axiosSecure
      .post("/api/faq", { title, description })
      .then((res) => {
        if (res.data.insertedId) {
          showSuccessToast("FAQ Added Successfully");
          refetch();
          faqModalRef.current.close();
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error.message);
      });
  }

  function handelFAQDelete(id) {
    showConfirmAlert()
      .then((res) => {
        if (res.isConfirmed) {
          axiosSecure.delete(`/api/faq/${id}`).then((res) => {
            if (res.data.deletedCount) {
              showSuccessToast("FAQ Deleted Successfully");
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
      <div className="my-10">
        {isPending ? (
          <div className="py-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div
                className="flex flex-col gap-5 border border-base-300 rounded p-4"
                key={faq._id}
              >
                <div className="flex-1">
                  <p className="font-medium">{faq?.title}</p>
                  <p className="text-sm mt-4 text-gray-600">
                    {faq?.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handelFAQDelete(faq?._id)}
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

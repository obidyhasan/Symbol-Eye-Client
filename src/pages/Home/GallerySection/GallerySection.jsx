import Headline from "../../../components/Headline";
import useGallery from "../../../hooks/useGallery";

const GallerySection = () => {
  const { gallery, isPending } = useGallery();

  return (
    <div id="gallery" className="max-width pb-10 pt-10">
      <Headline
        headline={"Our Fashion in Focus"}
        subHeadline={
          "Explore our curated gallery to see how Symbol Eye brings style to life through every collection."
        }
      ></Headline>

      <div className="mt-10">
        {isPending ? (
          <div className="flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {gallery.length ? (
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {gallery.map((img) => (
                  <div
                    className="transform duration-300 hover:-translate-y-1.5"
                    key={img?._id}
                  >
                    <img
                      src={img?.image}
                      className="w-full h-[300px] object-cover bg-base-300"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="p-5 rounded text-center font-medium border border-base-200">
                  Images Not Found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;

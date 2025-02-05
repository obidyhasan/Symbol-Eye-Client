import Headline from "../../../components/Headline";

const GallerySection = () => {
  return (
    <div className="max-width pb-10 pt-10">
      <Headline
        headline={"Our Fashion in Focus"}
        subHeadline={
          "Explore our curated gallery to see how Symbol Eye brings style to life through every collection."
        }
      ></Headline>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
          <div>
            <img src="" className="w-full h-[300px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

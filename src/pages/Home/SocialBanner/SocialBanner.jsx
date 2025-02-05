import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Headline from "../../../components/Headline";

const SocialBanner = () => {
  return (
    <div className="w-full h-[350px] relative">
      <div className="bg-black w-full h-full ">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co.com/1fXxZvLc/pngtree-atmospheric-blue-cloth-silk-texture-banner-background-image-924711.jpg"
          alt=""
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-width w-full h-full flex items-center justify-center text-white">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <Headline
              headline={"Stay Connected with Us!"}
              subHeadline={
                "Follow us on social media for the latest trends, exclusive offers, and behind-the-scenes looks."
              }
            ></Headline>
            <div className="flex gap-3 mt-5">
              <div className="btn btn-outline">
                <FaFacebookF className="text-lg" />
              </div>
              <div className="btn btn-outline">
                <FaInstagram className="text-xl" />
              </div>
              <div className="btn btn-outline">
                <FaWhatsapp className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;

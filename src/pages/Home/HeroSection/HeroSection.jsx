import { FaFacebookF } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="home" className="relative">
      <div>
        <img
          src={
            "https://i.ibb.co.com/PZFmT28C/keagan-henman-x-PJYL0l5-Ii8sds-unspladfdsh.jpg"
          }
          className="w-full h-[500px] object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-full bg-[#0000003d] absolute top-0 left-0">
        <div className="max-width h-full flex flex-col items-center justify-center text-white gap-3">
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
            Define Your Style, Elevate Your Look
          </h1>
          <p className="max-w-3xl text-center text-sm sm:text-base">
            Discover carefully curated collections designed to inspire
            confidence and celebrate individuality. Shop the latest trends
            today!
          </p>
          <div className="flex gap-3 mt-2">
            <button className="btn btn-outline ">Explore Collections</button>
            <div className="btn btn-outline">
              <FaFacebookF className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

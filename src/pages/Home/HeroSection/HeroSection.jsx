import bannerImg from "./../../../assets/banner-img.jpg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div>
        <img src={bannerImg} className="w-full h-[500px] object-cover" alt="" />
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
          <button className="btn btn-outline mt-2">Explore Collections</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import Headline from "../../../components/Headline";
import ServiceCard from "../../../components/ServiceCard";
import useService from "../../../hooks/useService";

const ServicesSection = () => {
  const { services, isPending } = useService();

  return (
    <div id="service" className="max-width pt-10 pb-16">
      <Headline
        headline={"Our Services, Your Style"}
        subHeadline={
          "Experience personalized fashion, seamless shopping, and top-notch customer support."
        }
      ></Headline>
      <div className="mt-10">
        {isPending ? (
          <div className="flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {services.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {services.map((service) => (
                  <ServiceCard
                    key={service?._id}
                    service={service}
                  ></ServiceCard>
                ))}
              </div>
            ) : (
              <div>
                <p className="p-5 rounded text-center font-medium border border-base-200">
                  Services Not Found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;

import Headline from "../../../components/Headline";
import ServiceCard from "../../../components/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="max-width pt-10 pb-16">
      <Headline
        headline={"Our Services, Your Style"}
        subHeadline={
          "Discover personalized fashion solutions, seamless shopping experiences, and exceptional customer support tailored just for you."
        }
      ></Headline>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

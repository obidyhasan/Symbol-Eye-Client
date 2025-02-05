import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="border border-base-200 p-4 rounded flex flex-col gap-3">
      <h1 className="font-semibold">{service?.title}</h1>
      <p className="text-sm text-justify">{service?.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;

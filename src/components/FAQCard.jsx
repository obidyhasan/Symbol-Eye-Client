import PropTypes from "prop-types";

const FAQCard = ({ idx, faq }) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 rounded">
      <input type="radio" name="my-accordion-2" defaultChecked={idx === 0} />
      <div className="collapse-title text-lg font-medium">{faq?.title}</div>
      <div className="collapse-content">
        <p className="text-sm">{faq?.description}</p>
      </div>
    </div>
  );
};

FAQCard.propTypes = {
  faq: PropTypes.object,
  idx: PropTypes.number,
};

export default FAQCard;

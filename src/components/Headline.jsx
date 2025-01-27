import PropTypes from "prop-types";

const Headline = ({ headline, subHeadline }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold">{headline}</h1>
      <p className="text-sm max-w-2xl">{subHeadline}</p>
    </div>
  );
};

Headline.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
};

export default Headline;

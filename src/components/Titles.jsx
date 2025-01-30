import PropTypes from "prop-types";

const Titles = ({ title, description }) => {
  return (
    <div className="w-full my-4 flex flex-col justify-center items-center gap-2 text-center">
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      <p className="text-sm max-w-xl text-gray-500">{description}</p>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Titles;

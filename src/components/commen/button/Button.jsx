import clsx from "clsx";
import PropTypes from "prop-types";
const Button = ({ icon="", title, onClick, disable, type, varient, optional }) => {
  return (
    <button
      className={clsx(
        "font-medium leading-5 py-2 px-4 rounded-md text-center",
        varient === "primary"
          ? "bg-white text-green-950 border border-green-950"
          : "bg-green-950 text-white",
        optional
      )}
      onClick={onClick}
      disabled={disable}
      type={type}
    >
      {icon}
      {title}
    </button>
  );
};
Button.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  type: PropTypes.string,
  varient: PropTypes.string,
  optional: PropTypes.string,
};

export default Button;

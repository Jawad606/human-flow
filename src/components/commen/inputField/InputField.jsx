import  { useState } from "react";
import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputField = ({
  id,
  label,
  showLabel = false,
  type = "text",
  disabled,
  register,
  required,
  placeholder,
  errors,
  options,
  rows,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-0 relative text-start p-1">
      {showLabel && (
        <label
          htmlFor={id}
          className="text-base px-1 text-start font-medium text-gray-600"
        >
          {label}
        </label>
      )}
      {type === "select" ? (
        <select
          id={id}
          disabled={disabled}
          {...register(id, required)}
          className={`
            peer font-light
            outline-none transition disabled:opacity-70
            disabled:cursor-not-allowed
            block w-full px-5 h-[56px] text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"}
          `}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          disabled={disabled}
          {...register(id, required)}
          placeholder={placeholder}
          rows={rows || 3}
          className={`
            peer font-light
            outline-none transition disabled:opacity-70
            disabled:cursor-not-allowed
            block w-full p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"}
            overflow-y-hidden
            h-[101px]
          `}
        />
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, required)}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          className={`
            peer font-light
            outline-none transition disabled:opacity-70
            disabled:cursor-not-allowed
            block w-full p-5 h-[56px] text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"}
          `}
        />
      )}
      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 cursor-pointer focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <FaRegEye className="h-6 w-6" />
          ) : (
            <FaRegEyeSlash className="h-6 w-6" />
          )}
        </button>
      )}
      {errors[id] && (
        <p className="text-rose-500 text-xs" role="alert">
          {errors[id].message}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "select", "email", "textarea"]),
  disabled: PropTypes.bool,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.number,
};

export default InputField;

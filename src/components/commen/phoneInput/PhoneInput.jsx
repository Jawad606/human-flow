import { useState } from "react";
import PropTypes from "prop-types";

// Import flag icons or images
import CustomDropdown from "../socialMediaInput/CustomDropDown";

const PhoneInput = ({ id, disabled, register, placeholder, errors }) => {
  const [, setCountry] = useState("");

  // Replace social media options with country code and flag
  const countryOptions = [
    {
      label: "United States",
      value: "US",
      code: "+1",
      icon: (
        <div className="text-green-600 mr-2" size={"20px"}>
          🇺🇸
        </div>
      ),
    },
    {
      label: "United Kingdom",
      value: "UK",
      code: "+44",
      icon: (
        <div className="text-green-600 mr-2" size={"20px"}>
          🇬🇧
        </div>
      ),
    },
    {
      label: "Pakistan",
      value: "PK",
      code: "+92",
      icon: (
        <div className="text-green-600 mr-2" size={"20px"}>
          🇵🇰
        </div>
      ),
    },
    {
      label: "India",
      value: "IN",
      code: "+91",
      icon: (
        <div className="text-green-600 mr-2" size={"20px"}>
          🇮🇳
        </div>
      ),
    },
    {
      label: "Bangladesh",
      value: "BD",
      code: "+880",
      icon: (
        <div className="text-green-600 mr-2" size={"20px"}>
          🇧🇩
        </div>
      ),
    },
    // Add more countries as needed
  ];

  // Modify handlePlatformSelect to handle country selection
  const handleCountrySelect = (country) => {
    setCountry(country);
  };

  return (
    <div className="grid grid-cols-6 rounded-lg border border-gray-300 p-1">
      {/* Update CustomDropdown to display country flags */}
      <CustomDropdown options={countryOptions} onSelect={handleCountrySelect} />

      <input
        type="text"
        id={`${id}-url`}
        disabled={disabled}
        {...register(`${id}-url`)}
        placeholder={placeholder}
        className={`
          peer font-light
          outline-none transition disabled:opacity-70
          disabled:cursor-not-allowed
          block w-full p-5 h-[56px] text-gray-900  rounded-lg bg-white sm:text-md
          ${errors[`${id}-url`] ? "border-rose-500" : "border-neutral-300"}
          ${
            errors[`${id}-url`]
              ? "focus:border-rose-500"
              : "focus:border-neutral-300"
          }
        `}
      />
    </div>
  );
};

PhoneInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
};

export default PhoneInput;

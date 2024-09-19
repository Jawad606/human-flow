import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomDropdown from "./CustomDropDown";

const SocialMediaInput = ({ id, disabled, register, placeholder, errors }) => {
  const [, setPlatform] = useState("");

  const socialMediaOptions = [
    {
      label: "Facebook",
      value: "facebook",
      icon: <FaFacebook className="text-blue-600 mr-2" size={"20px"} />,
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: <FaTwitter className="text-blue-400 mr-2" size={"20px"} />,
    },
    {
      label: "Instagram",
      value: "instagram",
      icon: <FaInstagram className="text-pink-500 mr-2" size={"20px"} />,
    },
    {
      label: "LinkedIn",
      value: "linkedin",
      icon: <FaLinkedin className="text-blue-700 mr-2" size={"20px"} />,
    },
    {
      label: "YouTube",
      value: "youtube",
      icon: <FaYoutube className="text-red-600 mr-2" size={"20px"} />,
    },
  ];
  const handlePlatformSelect = (platform) => {
    setPlatform(platform);
  };
  return (
    <div className="grid grid-cols-6 rounded-lg border border-gray-300 p-1">
      <CustomDropdown
        options={socialMediaOptions}
        onSelect={handlePlatformSelect}
      />

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
SocialMediaInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string, // Add placeholder to the PropTypes validation
  errors: PropTypes.object.isRequired,
};

export default SocialMediaInput;

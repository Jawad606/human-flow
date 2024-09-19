import { useState } from "react";
import PropTypes from "prop-types";

const CustomDropdown = ({ options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center  border-e rounded-lg bg-white px-3 py-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption && selectedOption.icon}{" "}
        {/* Display selected option icon */}
        <span className="ml-2">
          {selectedOption ? selectedOption.label : "Select Platform"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 110 2 1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white  rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
CustomDropdown.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};

export default CustomDropdown;

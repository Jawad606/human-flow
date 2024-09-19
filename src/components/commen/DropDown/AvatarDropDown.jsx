import { useState } from "react";
import PropTypes from 'prop-types';

const AvatarDropDown = ({ img, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm  relative font-medium text-white border px-2 rounded-full hover:text-green-100  md:me-0 focus:ring-2 focus:ring-gray-100  "
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 me-2 rounded-full" src={img} alt="user photo" />
        {name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownAvatarName"
        className={`z-10 ${
          isOpen ? "block" : "hidden"
        } absolute right-20 top-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
      >
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};
AvatarDropDown.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
export default AvatarDropDown;

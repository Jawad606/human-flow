
import { Outlet } from "react-router-dom";
import logo from "../../../assets/svg/Human.svg";
import Info from "./Info";
/**
 * SignUp Layout component
 *
 * This component is responsible for rendering the SignUp page.
 * It renders the form and the info components in a grid of 2 columns.
 *
 * @param {JSX.Element} children - The form component to be rendered
 * @returns {JSX.Element} The SignUp Layout component
 */
const Layout = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Render the form component */}
      <div className="p-8">
        <img src={logo} alt="" />
        <div className=" flex justify-center">
          <div className="mt-20 w-[528px]"><Outlet/></div>
        </div>
      </div>
      {/* Render the info component */}
      <Info />
    </div>
  );
};

export default Layout;

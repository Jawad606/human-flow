import Layout from "../components/layout/Sign";
import Form from "./Components/Form";
import MoreOptions from "./Components/MoreOptions";

/**
 * SignUp index component
 *
 * This component is responsible for rendering the SignUp page
 * It renders the form and the info components in a grid of 2 columns
 *
 * @returns {JSX.Element} The SignUp index component
 */
const index = ({ children }) => {
  return (
    <>
      <Form />
      <MoreOptions />
    </>
  );
};

export default index;

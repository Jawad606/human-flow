import SignUp from "./SignUp/index";
import Signin from "./SignIn/index";
import { Route, Routes, useLocation } from "react-router-dom";
import VerificationAccount from "./SignUp/VerifyCode/VerificationAccount";
import ForgetPassword from "./SignIn/forgetPassword/ForgetPassword";
import VerifyCodeFP from "./SignIn/forgetPassword/VerifyCode";
import Layout from "./components/layout/Sign";
import NewPassword from "./SignIn/ChangePassword/ChangePassword";
import Home from "./Home/index";
import Navbar from "./components/commen/navbar/Navbar";
import Footer from "./components/commen/footer/Footer";
import Candidate from "./Candidate/index";
import Resume from "./Candidate/components/Resume/Resume";
import Recuiter from './recruiter/Index'
import CompleteApplication from "./Candidate/components/Resume/CompleteApplication";
/**
 * This component renders the main app.
 * It has a Route component that renders the Layout component
 * It also has nested routes for the different pages like signup, signin, verify and newpassword
 * @returns {JSX.Element} The App component
 */
const App = () => {
  const location = useLocation();

  // Define an array of paths where Navbar should be rendered
  const navbarPaths = ["/","/candidate",'/resume','/congrate',"/recuiter"];
  const FooterPath = ["/"];

  // Check if the current path requires the Navbar
  const shouldRenderNavbar = navbarPaths.includes(location.pathname);
  const shouldRenderFooter = FooterPath.includes(location.pathname);

  return (
    <>
      {shouldRenderNavbar && <Navbar auth={true} />}
      <Routes>
        {/* This Route component renders the Layout component */}
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/recuiter" element={<Recuiter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/congrate" element={<CompleteApplication />} />
        <Route path="/auth/*" element={<Layout />}>
          {/* These Routes render the different pages */}
          <Route path="signup" element={<SignUp />} />
          <Route path="verify" element={<VerificationAccount />} />
          <Route path="signin" element={<Signin />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="verifycode" element={<VerifyCodeFP />} />
          <Route path="newpassword" element={<NewPassword />} />
        </Route>
      </Routes>
      {shouldRenderFooter && <Footer />}
    </>
  );
};

export default App;

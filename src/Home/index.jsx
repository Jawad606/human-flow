/* eslint-disable react-refresh/only-export-components */
import withDefaultPadding from "../components/layout/commen/Index";
import HeroSection from "./components/HeroSection";
import AiProfileSection from "./components/AiProfileSection";
import ApplyJobSection from "./components/ApplyJobSection";
import BlogSection from "./components/BlogSection";
import TestomonialSection from "./components/TestomonialSection";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AiProfileSection />
      <ApplyJobSection />
      <BlogSection />
      <TestomonialSection />
    </div>
  );
};

// Wrap the LandingPage component with the HOC
const index = withDefaultPadding(LandingPage);
export default index;

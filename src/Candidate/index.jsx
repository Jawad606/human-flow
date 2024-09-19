/* eslint-disable react-refresh/only-export-components */
import { LiaUserCircle } from "react-icons/lia";
import { Tab, Tabs } from "../components/commen/tabs/Tabs";
import withDefaultPadding from "../components/layout/commen/Index";
import Basic from "./components/Basic/Basic";
import { LiaBookSolid } from "react-icons/lia";
import Profile from "./components/Profile/Profile";
import { CiUser } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
const Index = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      term: false,
    },
  });
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    // navigate("/auth/verify");
  };
  return (
    <div className="flex justify-center bg-[#f1f2f4] -mx-24 ">
      <div className="shadow-2xl px-24 border rounded-xl my-20 bg-white w-[1400px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
            <Tab icon={<LiaUserCircle size={"26px"} />} label="Profile">
              <Profile
                register={register}
                errors={errors}
                setActiveTab={setActiveTab}
              />
            </Tab>
            <Tab icon={<CiUser size={"26px"} />} label="Basic">
              <Basic
                register={register}
                errors={errors}
                setActiveTab={setActiveTab}
              />
            </Tab>
            <Tab icon={<LiaBookSolid size={"26px"} />} label="Education">
              <Education
                register={register}
                errors={errors}
                setActiveTab={setActiveTab}
              />
            </Tab>
            <Tab icon={<TfiWorld size={"26px"} />} label="Experience">
              <Experience
                register={register}
                errors={errors}
                setActiveTab={setActiveTab}
              />
            </Tab>
          </Tabs>
        </form>
      </div>
    </div>
  );
};
const withPading = withDefaultPadding(Index);
export default withPading;

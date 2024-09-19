/* eslint-disable react-refresh/only-export-components */
import { LiaUserCircle } from "react-icons/lia";
import { Tab, Tabs } from "../components/commen/tabs/Tabs";
import withDefaultPadding from "../components/layout/commen/Index";
import { LiaAtSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import FoundingInfo from "./components/FoundingInfo/FoundingInfo";
import SocialMediaProfile from "./components/SocialMediaProfile/SocialMediaProfile";
import User from "./components/User/User";
const Index = () => {
  const [activeTab, setActiveTab] = useState("Company Info");

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
    <div className="h-v bg-[#f1f2f4">
      <div className="flex justify-center ] -mx-24 ">
        <div className="shadow-2xl px-24 border rounded-xl my-20 bg-white w-[1400px] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
              <Tab icon={<CiUser size={"26px"} />} label="Company Info">
                <CompanyInfo
                  register={register}
                  errors={errors}
                  setActiveTab={setActiveTab}
                />
              </Tab>
              <Tab icon={<LiaUserCircle size={"26px"} />} label="Founding Info">
                <FoundingInfo
                  register={register}
                  errors={errors}
                  setActiveTab={setActiveTab}
                />
              </Tab>
              <Tab
                icon={<TfiWorld size={"26px"} />}
                label="Social Media Profile"
              >
                <SocialMediaProfile
                  register={register}
                  errors={errors}
                  setActiveTab={setActiveTab}
                />
              </Tab>
              <Tab icon={<LiaAtSolid size={"26px"} />} label="User">
                <User
                  register={register}
                  errors={errors}
                  setActiveTab={setActiveTab}
                />
              </Tab>
            </Tabs>
          </form>
        </div>
      </div>
    </div>
  );
};
const index = withDefaultPadding(Index);
export default index;

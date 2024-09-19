import withDefaultPadding from "../../layout/commen/Index";
import HumanSvg from "../../../assets/svg/Human.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import InputField from "../inputField/InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const FooterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    navigate("/");
  };
  return (
    <>
    <div className="grid grid-cols-4 gap-8 py-8 mt-20">
      <div className=" grid gap-8">
        <div>
          <img src={HumanSvg} alt="Logo" />
        </div>
        <div className="text-lg text-[#65667] font-medium">
          Now you are able to find your dream job from home. Search and connect
          with job vacation around the world.
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <span className="text-white bg-green-950 p-4 rounded-full text-xl">
              <FaYoutube />
            </span>
            <span className="text-white bg-green-950 p-4 rounded-full text-xl">
              <FaTwitter />
            </span>
            <span className="text-white bg-green-950 p-4 rounded-full text-xl">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className=" flex gap-4 flex-col">
        <h4 className="text-green-950 text-3xl font-bold">Company</h4>
        <p className="text-gray-600 text-xl">About Us</p>
        <p className="text-gray-600 text-xl">Feature</p>
        <p className="text-gray-600 text-xl">Career</p>
        <p className="text-gray-600 text-xl">NOw</p>
      </div>
      <div className=" flex gap-4 flex-col">
        <h4 className="text-green-950 text-3xl font-bold">Support</h4>
        <p className="text-gray-600 text-xl">Account</p>
        <p className="text-gray-600 text-xl">Support Center</p>
        <p className="text-gray-600 text-xl">Feedback</p>
        <p className="text-gray-600 text-xl">Contact Us</p>
      </div>
      <div className=" flex gap-4 flex-col">
        <h4 className="text-green-950 text-3xl font-bold">Get in Touch</h4>
        <p className="text-gray-600 text-xl">
          Have some question or want to say something?
        </p>
        <InputField
          errors={errors}
          type="email"
          id={"email"}
          required={{
            required: {
              value: true,
              message: "Email is requied",
            },
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          }}
          register={register}
          label={"Email"}
        />
      </div>
    </div>
          <hr />
    <div className="py-8 text-center">
    Humad Resouces 2022©, All rights reserved.
    </div>
    
    </>
  );
};
const Footer = withDefaultPadding(FooterComponent);
export default Footer;

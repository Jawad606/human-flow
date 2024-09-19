import LineSvg from "../../assets/svg/Line.svg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
const MoreOptions = () => {
  return (
    <div>
      <p className="flex gap-6 my-4">
        <img src={LineSvg} alt="" /> <span className="text-2xl">OR</span>
        <img src={LineSvg} alt="" />
      </p>
      <div className="flex justify-between gap-4">
        <button className="text-green-950 w-full flex items-center text-md border border-[#D9D9D9] gap-4 justify-center font-medium leading-5 p-4 rounded-sm text-center">
          <FaLinkedin color="#0077B7" size={"20px"} /> Continue with Linkedin
        </button>
        <button className="text-green-950 w-full text-md items-center border border-[#D9D9D9] flex gap-4 justify-center font-medium leading-5 p-4 rounded-sm text-center">
          <FcGoogle size={"20px"} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default MoreOptions;

import CandiateSvg from '../../assets/svg/Candidate.svg'
import EmployerSvg from '../../assets/svg/Employer.svg'
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
const Form = () => {
 
  return (
    <div className=" flex justify-center">
      <div>
        <div className="mb-5">
          <h1 className="text-3xl font-medium">Create an account</h1>
          <h5 className="text-gray-500">
            Already have an account? <Link to="/signin" className="underline">Sign in</Link>
          </h5>
        </div>
        <div className="text-center p-4 bg-[#F1F2F4] rounded-md ">
          <p className="text-[#7D7D7D] py-2"> CREATE ACCOUNT AS A</p>
          <div className="grid grid-col-2 grid-flow-col">
            <button className="bg-green-950 flex justify-center gap-5 text-white font-medium leading-5 p-3 rounded-sm text-center">
              <img src={CandiateSvg} alt="" />
              Candidate
            </button>
            <button className="text-green-950 flex gap-4 justify-center font-medium leading-5 p-3 rounded-sm text-center">
            <img src={EmployerSvg} alt="" />

              Company
            </button>
          </div>
        </div>
     <FormInput/>
      </div>
    </div>
  );
};

export default Form;

import { useForm } from "react-hook-form";

import Button from "../../components/commen/button/Button";
import InputField from "../../components/commen/inputField/InputField";
import { useState } from "react";
import CandiateSvg from "../../assets/svg/Candidate.svg";
import EmployerSvg from "../../assets/svg/Employer.svg";
import FormInput from "./FormInput";
const Form = () => {
  return (
    <div className="mt-28">
      <div>
        <div className="mb-5">
          <h1 className="text-3xl font-medium">Sign In</h1>
          <h5 className="text-gray-500">
            Don't have an account?{" "}
            <span className="text-green-950">Create Account</span>
          </h5>
        </div>
        <FormInput />
      </div>
    </div>
  );
};

export default Form;

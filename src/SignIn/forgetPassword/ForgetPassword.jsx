import React, { useState } from "react";
import InputField from "../../components/commen/inputField/InputField";
import Layout from "../../components/layout/Sign";
import { useForm } from "react-hook-form";
import Button from "../../components/commen/button/Button";
import MoreOptions from "../components/MoreOptions";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const nevigate=useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    nevigate('/auth/verifyCode')
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex gap-4 flex-col mt-[30%] w-full">
          <div className="mb-5 flex gap-8 flex-col">
            <h1 className="text-3xl font-medium">Forget Password</h1>
            <div>
              <h5 className="text-gray-500">
                Go back to <span className="text-green-950">Sign In</span>
              </h5>
              <h5 className="text-gray-500">
                Don't have an account?{" "}
                <span className="text-green-950">Create Account</span>
              </h5>
            </div>
            <div className="flex gap-8 flex-col">
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
                label={"Email Address"}
              />
              <Button submit={true} type={"submit"} title={"Send Code"} />
            </div>
          </div>
        </div>
      </form>
      <MoreOptions />
    </>
  );
};

export default ForgetPassword;

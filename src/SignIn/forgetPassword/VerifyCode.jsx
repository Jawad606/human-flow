import React, { useState } from "react";
import InputField from "../../components/commen/inputField/InputField";
import Layout from "../../components/layout/Sign";
import { useForm } from "react-hook-form";
import Button from "../../components/commen/button/Button";
import { useNavigate } from "react-router-dom";

const VerifyCodeFP = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      verifyCode: "",
    },
  });
  const nevigate=useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    nevigate('/auth/newpassword')
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
                type="text"
                id={"verifyCode"}
                register={register}
                required={{
                  required: {
                    value: true,
                    message: "Code is  is requied",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Full name can only contains numbers",
                  },
                }}
                label={"Verify Code"}
              />
              <Button
                submit={true}
                type={"submit"}
                title={"Countinue"}
              />

              <p>
                Didn't recieve any code!{" "}
                <span className="text-green-950">Resends</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default VerifyCodeFP;

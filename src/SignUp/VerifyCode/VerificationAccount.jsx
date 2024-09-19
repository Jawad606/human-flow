import React, { useState } from "react";
import InputField from "../../components/commen/inputField/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/commen/button/Button";

const VerificationAccount = () => {
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex gap-4 flex-col mt-[30%] w-full">
          <div className="mb-5 flex gap-8 flex-col">
            <h1 className="text-3xl font-medium">Create an account</h1>
            <h5 className="text-black">
              We've sent an verification to emailaddress@gmail.com to verify
              your email address and activate your account.{" "}
            </h5>

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
                title={"Verify My Account"}
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

export default VerificationAccount;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/commen/inputField/InputField";
import Button from "../../components/commen/button/Button";
import CheckBox from "../../components/commen/checkbox/CheckBox";
import { Link, useNavigate } from "react-router-dom";

const FormInput = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setisLoading] = useState(false);
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
  const passwordRules = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    },
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gril-col-2 gap-4 my-6"
    >
      <div className="col-span-2 gap-4 flex flex-1  flex-col">
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
        <InputField
          errors={errors}
          type="password"
          id={"password"}
          register={register}
          required={passwordRules}
          label={"Password"}
        />
        <div className="flex justify-between">
          <CheckBox
            id={"term"}
            register={register}
            required={true}
            label={"Reminder Me"}
          />

          <Link to={"/auth/forgetpassword"} className="text-green-950 font-medium">
            Forget Password
          </Link>
        </div>
        <Button submit={true} type={"submit"} title={"Sign In"} />
      </div>
    </form>
  );
};

export default FormInput;

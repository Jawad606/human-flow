import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/commen/inputField/InputField";
import Button from "../../components/commen/button/Button";
import {  useNavigate } from "react-router-dom";

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
    navigate("/auth/verify");
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
          type="password"
          id={"password"}
          register={register}
          required={passwordRules}
          label={"Password"}
        />
        <InputField
          errors={errors}
          type="password"
          id={"confirmPassword"}
          register={register}
          required={{
            validate: (value) => value === watch("password") || "Passwords do not match",
          }}
          label={"Confirm Password"}
        />
    
        <Button submit={true} type={"submit"} title={"Create Password"} />
      </div>
    </form>
  );
};

export default FormInput;

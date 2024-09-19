import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../components/commen/inputField/InputField";
import Button from "../../components/commen/button/Button";
import CheckBox from "../../components/commen/checkbox/CheckBox";
import { useNavigate } from "react-router-dom";

const FormInput = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
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
const navigate=useNavigate()
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    navigate('/auth/verify')
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
      <InputField
        errors={errors}
        type="text"
        id={"fullname"}
        register={register}
        required={{
          required: {
            value: true,
            message: "Full Name is requied",
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Full name can only contains letters",
          },
        }}
        label={"Full Name"}
      />
      <InputField
        errors={errors}
        type="text"
        id={"username"}
        register={register}
        label={"Username"}
        required={{
          required: {
            value: true,
            message: "Username is requied",
          },
        }}
      />
      <div className="col-span-2 gap-4 flex flex-col">
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
        <CheckBox
          id={"term"}
          register={register}
          required={true}
          label={"I've read and agree with your Terms of Services"}
        />
        <Button submit={true} type={"submit"} title={"Create an Account"} />
      </div>
    </form>
  );
};

export default FormInput;

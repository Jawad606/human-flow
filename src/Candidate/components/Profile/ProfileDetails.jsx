import PropTypes from "prop-types";
import InputField from "../../../components/commen/inputField/InputField";
const ProfileDetails = ({register,errors}) => {
  return (
    <div className="col-span-2 col-start-2 grid grid-cols-2 gap-4 ">
    <InputField
      errors={errors}
      type="text"
      id={"firstname"}
      placeholder={"John"}
      showLabel={true}
      register={register}
      required={{
        required: {
          value: true,
          message: "First Name is requied",
        },
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "First name can only contains letters",
        },
      }}
      label={"First Name"}
    />
    <InputField
      errors={errors}
      type="text"
      id={"lastname"}
      showLabel={true}
      placeholder={"Deo"}
      register={register}
      required={{
        required: {
          value: true,
          message: "Last Name is requied",
        },
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Last name can only contains letters",
        },
      }}
      label={"Last Name"}
    />

    <InputField
      errors={errors}
      type="select"
      id={"genter"}
      placeholder={"John"}
      options={[
        { label: "Select", value: "" },
        { label: "Male", value: "mail" },
        { label: "Female", value: "female" },
      ]}
      showLabel={true}
      register={register}
      required={{
        required: {
          value: true,
          message: "Gender is requied",
        },
      }}
      label={"Gender"}
    />
     <InputField
      errors={errors}
      type="select"
      id={"genter"}
      placeholder={"Marital Status"}
      options={[
        { label: "Select", value: "" },
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ]}
      showLabel={true}
      register={register}
      required={{
        required: {
          value: true,
          message: "Gender is requied",
        },
      }}
      label={"Marital Status"}
    />
    <InputField
      errors={errors}
      type="email"
      id={"email"}
      showLabel={true}
      placeholder={"example@info.com"}
      register={register}
      required={{
        required: {
          value: true,
          message: "Email is requied",
        },
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      }}
      label={"Email Address"}
    />
    <InputField
      errors={errors}
      type="text"
      id={"phonenumber"}
      showLabel={true}
      placeholder={"+91 1234567890"}
      register={register}
      required={{
        required: {
          value: true,
          message: "Phone number is requied",
        },
      }}
      label={"Phone Number"}
    />

    <InputField
      errors={errors}
      type="text"
      id={"country"}
      showLabel={true}
      placeholder={"USA"}
      register={register}
      required={{
        required: {
          value: true,
          message: "Country is requied",
        },
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      }}
      label={"Country"}
    />
    <InputField
      errors={errors}
      type="text"
      id={"city"}
      showLabel={true}
      placeholder={"New York"}
      register={register}
      required={{
        required: {
          value: true,
          message: "City is requied",
        },
      }}
      label={"City"}
    />
  </div>
  )
}

ProfileDetails.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };
export default ProfileDetails
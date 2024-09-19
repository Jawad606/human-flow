import PropTypes from "prop-types";
import InputField from "../../../components/commen/inputField/InputField";
import PhoneInput from "../../../components/commen/phoneInput/PhoneInput";

const UserDetails = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full text-start text-black">
      <div className="col-span-4">
        <InputField
          errors={errors}
          type="text"
          id={`username`}
          placeholder={"Enter your User full name"}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "Username is requied",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name  can only contains letters",
            },
          }}
          label={"Name"}
        />
      </div>
      <div className="col-span-4">
      <PhoneInput
            errors={errors}
            type="text"
            showLabel={true}
            placeholder="032323423"
            register={register}
            required={{
              required: {
                value: true,
                message: "URL is required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone Number can only contains numbers",
              },
            }}
            label={`Phone Number`}
          />
      </div>
      <div className="col-span-4">
        <InputField
          errors={errors}
          type="email"
          id={`email`}
          placeholder={"Enter your User full name"}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "Username is requied",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\s]+$/,
              message: "Email  can only contains letters",
            },
          }}
          label={"Email"}
        />
      </div>
      <div className="col-span-4">
        <InputField
          errors={errors}
          type="select"
          id={`levelofauthority`}
          options={[
            { label: "Select", value: "" },
            { label: "0-100", value: "0-100" },
            { label: "100-200", value: "100-200" },
            { label: "300-400", value: "300-400" },
            { label: "400-500", value: "400-500" },
          ]}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "No of Employees is requied",
            },
          }}
          label={"No of Employees"}
        />
      </div>
      
    </div>
  );
};

UserDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default UserDetails;

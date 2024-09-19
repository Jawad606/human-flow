import PropTypes from "prop-types";
import InputField from "../../../components/commen/inputField/InputField";

const FoundingDetails = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full text-start text-black">
  
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="select"
          id={`organizationtype`}
          options={[
            { label: "Select", value: "" },
            { label: "PTV Ltd", value: "pvtltd" },
            { label: "Public", value: "public" },
            { label: "Govt", value: "govt" },
            { label: "Semi Govt", value: "semigovt" },
            { label: "Parnership", value: "parnership" },
          ]}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "Organization Type is requied",
            },
          }}
          label={"Organization Type"}
        />
      </div>
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="select"
          id={`sector`}
          options={[
            { label: "Select", value: "" },
            { label: "Private", value: "private" },
            { label: "Public", value: "public" },
          ]}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "Sector is requied",
            },
          }}
          label={"Sector"}
        />
      </div>
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="select"
          id={`noofemployee`}
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
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="text"
          id={`year`}
          showLabel={true}
          placeholder={"dd/mm/yyyy"}
          register={register}
          required={{
            required: {
              value: true,
              message: "Incorporation Date is requied",
            },
          }}
          label={"Year of Incorporation"}
        />
      </div>
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="text"
          id={`website`}
          showLabel={true}
          placeholder={"google.com"}
          register={register}
          required={{
            required: {
              value: true,
              message: "Website is requied",
            },
          }}
          label={"Website"}
        />
      </div>
      <div className="col-span-1">
        <InputField
          errors={errors}
          type="text"
          id={`location`}
          showLabel={true}
          placeholder={"USA"}
          register={register}
          required={{
            required: {
              value: true,
              message: "Location is requied",
            },
          }}
          label={"Location"}
        />
      </div>
      <div className="col-span-3">
        <InputField
          errors={errors}
          type="textarea"
          rows={5}
          id={"aboutus"}
          showLabel={true}
          placeholder={"Write about your company here"}
          register={register}
          required={{
            required: {
              value: true,
              message: "City is requied",
            },
          }}
          label={"About Us"}
        />
      </div>
    </div>
  );
};

FoundingDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FoundingDetails;

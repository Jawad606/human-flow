import InputField from "../../../components/commen/inputField/InputField";
import PropTypes from "prop-types";
const BasicDetails = ({ register, errors }) => {
  return (
    <div className="col-span-2 col-start-2 grid grid-cols-2 gap-4 ">
      <InputField
        errors={errors}
        type="text"
        id={"recentjob"}
        placeholder={"Ui/Ux Desinger"}
        showLabel={true}
        register={register}
        required={{
          required: {
            value: true,
            message: "Job is requied",
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Job can only contains letters",
          },
        }}
        label={"Most Recent Job Title"}
      />
      <InputField
        errors={errors}
        type="select"
        id={"employmenttype"}
        placeholder={"John"}
        options={[
          { label: "Select", value: "" },
          { label: "Full Time", value: "fulltime" },
          { label: "Part Time", value: "parttime" },
        ]}
        showLabel={true}
        register={register}
        required={{
          required: {
            value: true,
            message: "Employment Type is requied",
          },
        }}
        label={"Employment Type"}
      />
      <InputField
        errors={errors}
        type="text"
        id={"startdate"}
        showLabel={true}
        placeholder={"15/01/20023"}
        register={register}
        required={{
          required: {
            value: true,
            message: "Start Date is requied",
          },
        }}
        label={"Start Date"}
      />
      <InputField
        errors={errors}
        type="text"
        id={"enddate"}
        showLabel={true}
        placeholder={"13/02/2023"}
        register={register}
        required={{
          required: {
            value: true,
            message: "End Date is requied",
          },
        }}
        label={"End Date"}
      />
      <div className="col-span-2">
        <InputField
          errors={errors}
          type="text"
          id={"details"}
          showLabel={true}
          placeholder={"XYZ"}
          register={register}
          required={{
            required: {
              value: true,
              message: "Detailed and Resposibility is requied",
            },
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          }}
          label={"Detailed and Resposibility"}
        />
        <InputField
          errors={errors}
          type="textarea"
          rows={5}
          id={"value"}
          showLabel={true}
          placeholder={
            "Consequuntur molestiae rerum aut iusto saepe. Aliquid architecto autem sit placeat totam magni eos. Perferendis animi expedita. Consequatur perferendis quidem aperiam maiores quibusdam qui. Perspiciatis velit et praesentium ab id."
          }
          register={register}
          required={{
            required: {
              value: true,
              message: "City is requied",
            },
          }}
          label={"How did you add Value to Company"}
        />
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default BasicDetails;

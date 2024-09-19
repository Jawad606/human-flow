import PropTypes from "prop-types";
import { IoCloudUploadOutline } from "react-icons/io5";
import InputField from "../../../components/commen/inputField/InputField";

const CompanyDetails = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full text-start text-black">
      <div className="col-span-4">
        <h1 className="text-xl  py-2 ">Logo & Banner Image</h1>
      </div>
      <div className="col-span-1">
        <p className="text-start text-base px-1 py-2 text">Upload Logo *</p>
        <div className="border-dashed border-2 flex flex-col items-center rounded-lg gap-4 py-8 relative">
          <input
            type="file"
            id={`uploadlogo`}
            className=" absolute top-0 left-0 w-full h-full opacity-0"
            {...register(`uploadlogo`)}
          />
          <IoCloudUploadOutline size={"40px"} />
          <p className="text-base font-bold">
            Browse Certificate or <span className="font-normal">drop here</span>{" "}
          </p>
          <p className="text-[#7D7D7D] w-3/4 text-center">
            A photo larger than 400 pixels work best. Max photo size 5 MB.
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <p className="text-start text-base px-1 py-2 text">Banner Image</p>
        <div className="border-dashed border-2 flex flex-col items-center rounded-lg gap-4 py-10 relative">
          <input
            type="file"
            id={`bannerlogo`}
            className=" absolute top-0 left-0 w-full h-full opacity-0"
            {...register(`bannerlogo`)}
          />
          <IoCloudUploadOutline size={"40px"} />
          <p className="text-lg font-bold">
            Browse Certificate or <span className="font-normal">drop here</span>{" "}
          </p>
          <p className="text-[#7D7D7D] w-1/2 text-center">
            Banner images optical dimention 1520x400 Supported format JPEG, PNG.
            Max photo size 5 MB.
          </p>
        </div>
      </div>
      <div className="col-span-4">
        <InputField
          errors={errors}
          type="text"
          id={`companyname`}
          placeholder={"Enter your company full name"}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "compnay name is requied",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Compnay name  can only contains letters",
            },
          }}
          label={"Company Name"}
        />
      </div>
      <div className="col-span-4">
        <InputField
          errors={errors}
          type="text"
          id={`identificationnumber`}
          placeholder={"Identification Number"}
          showLabel={true}
          register={register}
          required={{
            required: {
              value: true,
              message: "identification number is requied",
            },
            pattern: {
              value: /^[0-9\s]+$/,
              message: "Identification number  can only contains number",
            },
          }}
          label={"Company Identification Number"}
        />
      </div>
      <div className="col-span-4">
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

CompanyDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CompanyDetails;

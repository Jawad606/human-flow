import { IoCloudUploadOutline } from "react-icons/io5";
import InputField from "../../../components/commen/inputField/InputField";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const EducationDetails = ({ register, errors }) => {
  const [Educations, setEducations] = useState([{ id: 1 }]); // Initial state with one Education

  const addEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      { id: prevEducations[prevEducations.length - 1].id + 1 },
    ]);
  };

  const removeEducation = (idToRemove) => {
    const filteredEducations = Educations.filter(
      (exp) => exp.id !== idToRemove
    );
    setEducations(filteredEducations);
  };

  return (
    <>
      {Educations.map((Education) => (
        <div
          key={Education.id}
          className="col-span-2 col-start-2 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <InputField
              errors={errors}
              type="select"
              id={`education-${Education.id}`}
              placeholder={"John"}
              options={[
                { label: "Select", value: "" },
                { label: "Bachelor", value: "bachelor" },
                { label: "Master", value: "Master" },
                { label: "Phd", value: "Phd" },
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
          </div>
          <InputField
            errors={errors}
            type="text"
            id={`startyear-${Education.id}`}
            showLabel={true}
            placeholder={"2020"}
            register={register}
            required={{
              required: {
                value: true,
                message: "Start Year is required",
              },
            }}
            label={"Start Year "}
          />
          <InputField
            errors={errors}
            type="text"
            id={`endyear-${Education.id}`}
            showLabel={true}
            placeholder={"2023"}
            register={register}
            required={{
              required: {
                value: true,
                message: "End Year is required",
              },
            }}
            label={"End Year "}
          />
          <InputField
            errors={errors}
            type="text"
            id={`grade-${Education.id}`}
            placeholder={"3.41"}
            showLabel={true}
            register={register}
            required={{
              required: {
                value: true,
                message: "grade is requied",
              },
              pattern: {
                value: /^[0-9.\s]+$/,
                message: "Job can only contains letters",
              },
            }}
            label={"Most Recent Job Title"}
          />
          <div className="col-span-1">
            <p className="text-start text-base px-1 py-1 text">Certificate</p>

            <div className="border-dashed border-2 flex  items-center rounded-lg px-4 py-1 relative bg-[#F5F5F5]">
              <input
                type="file"
                id={`certificate-upload-${Education.id}`}
                className=" absolute top-0 left-0 w-full h-full opacity-0"
                {...register(`certificate-upload-${Education.id}`)}
              />
              <div className="bg-green-950 text-white p-2 rounded-lg">
                <IoCloudUploadOutline size={"30px"} />
              </div>
              <div className="text-start px-4">
                <p className="text-md text-[#7D7D7D]">Upload file </p>
                <p className="text-md text-[#7D7D7D]">PDF, DOC, JPG, PNG </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <InputField
              errors={errors}
              type="text"
              id={"acheivement"}
              showLabel={true}
              placeholder={"XYZ"}
              register={register}
              required={{
                required: {
                  value: true,
                  message: "Acheivement and Resposibility is requied",
                },
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              }}
              label={"Acheivement"}
            />
            <InputField
              errors={errors}
              type="textarea"
              rows={5}
              id={"value"}
              showLabel={true}
              placeholder={"SXDC"}
              register={register}
              required={{
                required: {
                  value: true,
                  message: "Description is requied",
                },
              }}
              label={"Description"}
            />
          </div>
          <div className="flex justify-between w-[587px]">
            <button
              className="flex items-center gap-2 text-lg"
              onClick={addEducation}
            >
              <FaPlusCircle className="text-green-950" /> Add Education
            </button>
            {Educations.length > 1 && (
              <button
                className="flex items-center gap-2 text-lg"
                onClick={() => removeEducation(Education.id)}
              >
                <FaMinusCircle className="text-green-950" /> Remove Education
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

EducationDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EducationDetails;

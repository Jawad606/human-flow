import { IoCloudUploadOutline } from "react-icons/io5";
import InputField from "../../../components/commen/inputField/InputField";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const ExperienceDetails = ({ register, errors }) => {
  const [experiences, setExperiences] = useState([{ id: 1 }]); // Initial state with one experience

  const addExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      { id: prevExperiences[prevExperiences.length - 1].id + 1 },
    ]);
  };

  const removeExperience = (idToRemove) => {
    const filteredExperiences = experiences.filter(
      (exp) => exp.id !== idToRemove
    );
    setExperiences(filteredExperiences);
  };

  return (
    <>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="col-span-2 col-start-2 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <InputField
              errors={errors}
              type="text"
              id={`certificatename-${experience.id}`}
              placeholder={"Web Development"}
              showLabel={true}
              register={register}
              required={{
                required: {
                  value: true,
                  message: "Job is required",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Job can only contain letters",
                },
              }}
              label={"Most Recent Job Title"}
            />
          </div>
          <InputField
            errors={errors}
            type="text"
            id={`startyear-${experience.id}`}
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
            id={`endyear-${experience.id}`}
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
          <div className="col-span-2">
            <p className="text-start text-base px-1 text">Certificate</p>
            <div className="border-dashed border-2 flex flex-col items-center rounded-lg gap-4 py-8 relative">
              <input
                type="file"
                id={`certificate-upload-${experience.id}`}
                className=" absolute top-0 left-0 w-full h-full opacity-0"
                {...register(`certificate-upload-${experience.id}`)}
              />
              <IoCloudUploadOutline size={"40px"} />
              <p className="text-lg font-bold">
                Browse Certificate or{" "}
                <span className="font-normal">drop here</span>{" "}
              </p>
              <p className="text-[#7D7D7D] w-3/4">
                Images optical dimension 1520x400 Supported format JPEG, PNG.
                Max photo size 5 MB.
              </p>
            </div>
          </div>
          <InputField
            errors={errors}
            type="text"
            id={`recentjob-${experience.id}`}
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
            id={`employmenttype-${experience.id}`}
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
            id={`startdate-${experience.id}`}
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
            id={`enddate-${experience.id}`}
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
          <div className="flex justify-between w-[587px]">
            <button
              className="flex items-center gap-2 text-lg"
              onClick={addExperience}
            >
              <FaPlusCircle className="text-green-950" /> Add Experience
            </button>
            {experiences.length > 1 && (
              <button
                className="flex items-center gap-2 text-lg"
                onClick={() => removeExperience(experience.id)}
              >
                <FaMinusCircle className="text-green-950" /> Remove Experience
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

ExperienceDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ExperienceDetails;

import Button from "../../../components/commen/button/Button";
import PropTypes from "prop-types";
import ExperienceDetails from "./ExperienceDetails";
import { useNavigate } from "react-router-dom";
const Experience = ({ register, errors, setActiveTab }) => {
  const nevigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4   gap-6 w-full">
          <ExperienceDetails register={register} errors={errors} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 my-8 w-full">
        <Button
          title={"Back"}
          type={"submit"}
          varient={"primary"}
          optional={"col-start-4"}
          onClick={() => setActiveTab("Education")}
        />
        <Button
          title={"Next"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-9"}
          onClick={() => nevigate("/resume")}
        />
      </div>
    </div>
  );
};

Experience.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Experience;

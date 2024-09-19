import Button from "../../../components/commen/button/Button";
import PropTypes from "prop-types";
import BasicDetails from "./BasicDetails";

const Basic = ({ register, errors, setActiveTab }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4   gap-6 w-full">
          <BasicDetails register={register} errors={errors} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 my-8 w-full">
      <Button
          title={"Back"}
          type={"button"}
          varient={"primary"}
          optional={"col-start-4"}
          onClick={() => setActiveTab("Profile")}
        />
        <Button
          title={"Next"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-9"}
          onClick={() => setActiveTab("Education")}
        />
      </div>
    </div>
  );
};

Basic.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Basic;

import Button from "../../../components/commen/button/Button";
import PropTypes from "prop-types";
import FoundingDetails from "./FoundingDetails";
const FoundingInfo = ({ register, errors, setActiveTab }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <div className="grid    gap-6 w-full">
          <FoundingDetails register={register} errors={errors} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 my-8 w-full">
        <Button
          title={"Back"}
          type={"submit"}
          varient={"primary"}
          optional={"col-start-1"}
          onClick={() => setActiveTab("Education")}
        />
        <Button
          title={"Next"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-12"}
          onClick={() => setActiveTab("Social Media Profile")}
        />
      </div>
    </div>
  );
};

FoundingInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default FoundingInfo;

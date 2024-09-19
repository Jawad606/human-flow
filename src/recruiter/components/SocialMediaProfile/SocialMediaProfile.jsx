import Button from "../../../components/commen/button/Button";
import PropTypes from "prop-types";
import SocialDetails from "./SocialDetails";
const SocialMediaProfile = ({ register, errors, setActiveTab }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <div className="grid    gap-6 w-full">
          <SocialDetails register={register} errors={errors} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 my-8 w-full">
        <Button
          title={"Back"}
          type={"submit"}
          varient={"primary"}
          optional={"col-start-1"}
          onClick={() => setActiveTab("Founding Info")}
        />
        <Button
          title={"Next"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-12"}
          onClick={() => setActiveTab("User")}
        />
      </div>
    </div>
  );
};

SocialMediaProfile.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default SocialMediaProfile;

import Button from "../../../components/commen/button/Button";
import Info from "../../../assets/images/info.png";
import PropTypes from "prop-types";
import ProfileDetails from "./ProfileDetails";

const Profile = ({ register, errors, setActiveTab }) => {
  return (
    <div className="">
      <div className="flex justify-end w-full">
        <Button title={"Skip"} type={"button"} varient={"primary"} />
      </div>
      <div className="flex justify-center flex-col items-center gap-8">
        <img src={Info} alt="Profile" className="rounded-full w-36 h-36" />
        <Button title={"Upload Photo"} type={"button"} varient={"primary"} />
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4   gap-6 w-full">
          <ProfileDetails register={register} errors={errors} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 my-8 w-full">
        <Button
          title={"Next"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-4"}
          onClick={() => setActiveTab("Basic")}
        />

      </div>
    </div>
  );
};

Profile.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Profile;

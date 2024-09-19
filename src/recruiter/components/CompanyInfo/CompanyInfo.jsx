import Button from "../../../components/commen/button/Button";
import PropTypes from "prop-types";
import CompanyDetails from "./CompanyDetails";

const CompanyInfo = ({ register, errors, setActiveTab }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <div className="grid gap-6 w-full">
          <CompanyDetails register={register} errors={errors} />
        </div>
      </div>


      <div className="grid grid-cols-12  my-8 w-full">
        <Button
          title={"Continue"}
          type={"button"}
          varient={"secondary"}
          optional={"col-start-1"}
          onClick={() => setActiveTab("Founding Info")}
        />
      </div>
    </div>
  );
};

CompanyInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default CompanyInfo;

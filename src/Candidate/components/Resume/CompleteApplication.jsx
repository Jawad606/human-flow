import Button from "../../../components/commen/button/Button";
import CongrateSvg from "../../../assets/svg/Congrate.svg";
const CompleteApplication = () => {
  return (
    <div className="flex justify-center items-center bg-[#f1f2f4] -mx-24 h-v">
      <div className="shadow-2xl px-8 border rounded-xl my-20 bg-white w-[600px] h-[500px] ">
        <div className="grid gap-4 px-4 my-8 w-full">
          <div className="flex gap-4 flex-col items-center mt-16">
            <img src={CongrateSvg} alt="" className="w-1/3"/>
            <h1 className="text-center mt-10 text-2xl font-medium w-3/4">Congratulations, Your Application has been submitted</h1>
            <div className="w-34">
              <Button title={"View Job"} type={"button"} varient={"primary"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteApplication;

import { MdOutlineUploadFile } from "react-icons/md";
import Button from "../../../components/commen/button/Button";
import LineSvg from "../../../assets/svg/Line.svg";
import {useNavigate} from 'react-router-dom'
const Resume = () => {
  const nevigate =useNavigate()
  return (
    <div className="flex justify-center items-center bg-[#f1f2f4] -mx-24 h-v">
      <div className="shadow-2xl px-8 border rounded-xl my-20 bg-white w-[600px] h-[500px] ">
        <div className="grid gap-4 px-4 my-8 w-full">
          <h1>Pease add you Resume</h1>
          <div className="flex gap-4 flex-col">
            <div className="border border-[#7D7D7D]  rounded-lg flex items-center gap-4 p-4">
              <div className="text-[#7D7D7D] ">
                <MdOutlineUploadFile size={"35px"} />
              </div>
              <div>
                <p className="text-green-950 text-lg ">Upload Resume</p>
                <p className="text-[#7D7D7D] text-sm">PDF file only</p>
              </div>
            </div>
            <div>
              <p className="flex  gap-3 justify-center my-4 ">
                <img src={LineSvg} alt="" /> <span className="text-xl">OR</span>
                <img src={LineSvg} alt="" />
              </p>
            </div>
            <div className="border border-[#7D7D7D]  rounded-lg flex items-center gap-4 p-4">
              <div className="text-[#7D7D7D] ">
                <MdOutlineUploadFile size={"35px"} />
              </div>
              <div>
                <p className="text-green-950 text-lg ">
                  Build with Human flow Ai
                </p>
                <p className="text-[#7D7D7D] text-sm">
                  We’ll guide you through it, there are only a few steps.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                title={"Next"}
                type={"button"}
                varient={"secondary"}
                optional={"w-[7rem]"}
                onClick={()=>nevigate('/congrate')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

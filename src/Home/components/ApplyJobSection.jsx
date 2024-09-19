import Button from "../../components/commen/button/Button"
import JobPostSvg from "../../assets/svg/PostJob.svg";
import ApplyJobSvg from "../../assets/svg/ApplyJob.svg";
const ApplyJobSection = () => {
  return (
    <section className="py-8 h-screen flex justify-center flex-col items-center gap-4">
    <div className="flex justify-center items-center flex-col gap-4 my-10">
      <h5 className="text-6xl font-semibold text-green-950 text-center">
        Post & Apply Jobs
      </h5>
      <p className="text-[#7D7D7D] w-2/3 text-center">
        {" "}
        We are the largest independent job board, register your CV to
        applying today. With simple search tool and instant job matches
        delivered to your inbox, it’s never been easear to land a new job
        with us.
      </p>
    </div>
    <div className="flex justify-center w-3/4 gap-10">
      <div className="flex flex-col gap-4 items-center w-[550px] rounded-lg border p-14 shadow-lg">
        <div>
          <img src={JobPostSvg} alt="JobPostSvg" />
        </div>
        <div>
          <p className="text-[#7D7D7D] text-center text-lg">
            See how your salary compares to others with the same job title
            in your area. Not only can you compare your salary, but you can
            also see what skills you are missing to earn more money.
          </p>
        </div>
        <div>
          <Button
            title={"Post a Job"}
            type={"button"}
            optional={"rounded-lg"}
            varient={"secondary"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center w-[550px] rounded-lg border p-14 shadow-lg">
        <div>
          <img src={ApplyJobSvg} alt="Apply Job" />
        </div>
        <div>
          <p className="text-[#7D7D7D] text-center text-lg">
            See how your salary compares to others with the same job title
            in your area. Not only can you compare your salary, but you can
            also see what skills you are missing to earn more money.
          </p>
        </div>
        <div>
          <Button
            title={"Apply for Job"}
            type={"button"}
            optional={"rounded-full"}
            varient={"secondary"}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ApplyJobSection
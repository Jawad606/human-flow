import { FaArrowRight } from "react-icons/fa";
import JobImg from "../../assets/images/info.png";
import JobCard from "../../components/commen/jobCard/JobCard";
const JobSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-8 -mx-24 ">
    <div className="px-24">
      <div className="flex justify-between my-10">
        <h5 className="text-3xl font-semibold">Jobs</h5>
        <h5 className="flex items-center gap-5 text-green-950">
          {" "}
          Show all Jobs <FaArrowRight />
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Array.from({ length: 6 }, (_, i) => (
          <JobCard
            key={i}
            title={"Junior UI/UX Designer"}
            company={"Slack Technologies, LLC"}
            description={
              "We are looking for a talented designer to help us create beautiful and functional interfaces for our company"
            }
            tags={["UI/UX", "Branding", "Design"]}
            salary={"$12K - 14K"}
            image={JobImg}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default JobSection
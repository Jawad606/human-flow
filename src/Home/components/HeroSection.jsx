import FindJob from "../../assets/images/FindJob.png";
import Searchbar from "../../assets/svg/Searchbar.svg";
const HeroSection = () => {
  return (
    <section className="bg-[rgba(243,243,243,0.2)] grid grid-cols-2  h-screen">
    <div className="flex flex-col gap-4 justify-center">
      <div>
        <h1 className="text-7xl font-semibold text-green-950">
          Find your Dream Job with us
        </h1>
      </div>
      <div>
        <p className="text-[24px] text-[#7D7D7D]">
          Find jobs on us, the job search app built to help you every step
          of the way. Get free access to millions of job postings
          personalize your search and submit job applications
        </p>
      </div>
      <div className="mt-8">
        <div>
          <h6>
            {" "}
            • Top keyword:{" "}
            <span className="text-[#7D7D7D]">
              UI/UX, Branding, Grapich designer
            </span>{" "}
          </h6>
        </div>
        <div className="py-4">
          <img src={Searchbar} alt="SearchBar" />
        </div>
      </div>
    </div>
    <div className="flex items-center">
      <img src={FindJob} alt="Fing JOb" />
    </div>
  </section>
  )
}

export default HeroSection
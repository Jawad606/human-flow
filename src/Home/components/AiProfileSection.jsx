import Button from "../../components/commen/button/Button"
import Employee from "../../assets/images/Employee.png";

const AiProfileSection = () => {
  return (
    <section className="grid grid-cols-12 h-screen items-center">
    <div className="col-span-6">
      <img src={Employee} alt="Employee" />
    </div>
    <div className="flex flex-col gap-4 justify-center col-start-7 col-span-4">
      <h1 className="text-6xl font-semibold text-green-950">
        Create Profile Using AI
      </h1>
      <p className="text-[15px] text-[#7D7D7D]">
        Search and connect with job vacation around the world. This gives
        you the opportunity to find your dream job
      </p>
      <div>
        <Button title={"Get Started"} optional={"mt-20 rounded-full"} />
      </div>
    </div>
  </section>
  )
}

export default AiProfileSection
import info from "../../../assets/images/info.png";
import InfoDetail from "./InfoDetail";

const Info = () => {
  return (
    <>
      <div className="custom relative">
        <div className="absolute bottom-36 left-28 w-[539px]">
          <h2 className="text-4xl font-bold text-white ">
            Over 1,75,324 candidates waiting for good employees.
          </h2>
          <div className="flex gap-4 my-4 justify-between pr-10">
            <InfoDetail />
            <InfoDetail />
            <InfoDetail />
          </div>
        </div>
      </div>

      <style>
        {`
        .custom {
          background-image: url(${info});
          width: 100%;
          height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
        }
        `}
      </style>
    </>
  );
};

export default Info;

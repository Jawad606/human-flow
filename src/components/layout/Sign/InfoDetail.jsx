import infoSvg from "../../../assets/svg/info.svg";
const InfoDetail = () => {
  return (
    <div className="flex gap-2 flex-col text-white">
      <div className="">
        <img src= {infoSvg}/>
      </div>
      <div className="font-semibold text-md">9700</div>
      <div className="font-mono text-xs">companies</div>
    </div>
  );
};

export default InfoDetail;

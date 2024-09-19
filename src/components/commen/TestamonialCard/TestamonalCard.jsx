import PropTypes from "prop-types";
const TestamonalCard = ({ img, name, designation, comment }) => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <div className="flex justify-between flex-col items-center gap-4">
        <div className="">
          <img
            className="rounded-full w-[130px] h-[130px]"
            src={img}
            alt={name}
          />
        </div>
        <div className="text-lg font-bold text-black text-center">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-[#7D7D7D] font-medium">{designation}</p>
        </div>
      </div>
      <div className="text-black w-3/4 mt-5 text-xl">
        <p>{comment}</p>
      </div>
    </div>
  );
};

TestamonalCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  comment: PropTypes.string.isRequired,
};

export default TestamonalCard;

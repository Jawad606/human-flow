import PropTypes from "prop-types";
import BookMarkSvg from "../../../assets/svg/BookMark.svg";
import DollarSvg from "../../../assets/svg/Dollar.svg";
import Button from "../button/Button";
const JobCard = ({ title, company, image, description, tags, salary }) => {
  return (
    <div className="p-8 rounded-lg w-[510px] bg-white">
      <div className="flex gap-4">
        <div className="rounded-lg">
          <img className="rounded-lg w-[80px] h-[80px]" src={image} alt={title} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-bold text-xl">{title}</div>
          <div className="text-[#7D7D7D]">{company}</div>
        </div>
        <div className="bg-[#F1F2F4] h-[40px] p-2">
          <img src={BookMarkSvg} alt="bookmark" />
        </div>
      </div>
      <div className="my-5">
        <p className="text-[#7D7D7D]">{description}</p>
      </div>
      <div className="flex gap-4 my-4">
        {tags.map((tag, index) => {
          return (
            <div className="bg-[#F1F2F4] px-4 py-2" key={index}>
              {tag}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-2">
          {" "}
          <img src={DollarSvg} alt="Dollar" />{" "}
          <span className="font-bold">{salary}</span> <span className="text-[#7D7D7D]">/Month</span>
        </div>
        <div>
            <Button title={'Apply Now'} type={'button'} varient={'secondary'}/>
        </div>
      </div>
    </div>
  );
};
JobCard.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  salary: PropTypes.string,
};

export default JobCard;

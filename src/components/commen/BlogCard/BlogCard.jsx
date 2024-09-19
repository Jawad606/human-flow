import PropTypes from "prop-types";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import Button from "../button/Button";

const BlogCard = ({ date, time, title, by, img }) => {
  return (
    <div className="rounded-lg w-[460px] border pb-4">
      <img className="rounded-lg" width={"100%"} src={img} alt={title} />
      <div className="flex gap-4 px-4">
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-[#7D7D7D] flex gap-8">
            <span className="flex items-center gap-4 text-lg">
              <CiCalendar color="black" /> {date}{" "}
            </span>
            <span className="flex items-center gap-4 text-lg">
              {" "}
              <CiClock1 color="black" /> {time}
            </span>
          </div>
          <div className="font-bold text-xl">{title}</div>
          <div className="flex justify-between items-center">
            <div>
              <Button varient={"primary"} type={"button"} title={"Read More"} />
            </div>
            <div className="text-lg">
              By <span className="text-[#7D7D7D]">{by}</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  by: PropTypes.string,
  img: PropTypes.string,
};
export default BlogCard;

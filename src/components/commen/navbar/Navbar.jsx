import HumanSvg from "../../../assets/svg/Human.svg";
import HumanWhiteSvg from "../../../assets/svg/HumanWhite.svg";
import withDefaultPadding from "../../layout/commen/Index";
import AvatarDropDown from "../DropDown/AvatarDropDown";
import Button from "../button/Button";
import Avatar from '../../../assets/images/info.png'
import PropTypes from 'prop-types';

const Nav = ({ auth }) => {
  return (
    <div className={`${auth ? "bg-green-950" : "bg-white"} -mx-24`}>
      <div className={` px-24 py-6 flex justify-between `}>
        <div>
          {auth ? (
            <img
              height={"42px"}
              width={"100%"}
              src={HumanWhiteSvg}
              alt="Human"
            />
          ) : (
            <img height={"42px"} width={"100%"} src={HumanSvg} alt="Human" />
          )}
        </div>
        {auth ? (
          <AvatarDropDown img={Avatar} name={'John Dow'}/>
        ) : (
          <div className="flex gap-4">
            <Button type={"button"} varient={"primary"} title={"Sign Up"} />
            <Button type={"button"} varient={"secondary"} title={"Login"} />
          </div>
        )}
      </div>
    </div>
  );
};
Nav.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const Navbar = withDefaultPadding(Nav);
export default Navbar;

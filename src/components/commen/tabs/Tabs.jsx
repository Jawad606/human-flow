import PropTypes from "prop-types";
import React from "react";
const Tab = ({ children }) => {
  return <div>{children}</div>;
};

const Tabs = ({ children,activeTab, setActiveTab }) => {

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500  py-8">
      <ul className="flex flex-wrap -mb-px border-b  justify-center gap-8 font-medium text-xl ">
        {React.Children.map(children, (child) => {
          const { label, icon } = child.props;
          return (
            <li key={label} className="me-2">
              <button
                onClick={() => handleTabClick(label)}
                className={` flex items-center gap-4 justify-center p-4 rounded-t-lg hover:text-gray-600  ${
                  activeTab === label
                    ? "text-green-950 border-green-950 border-b-2"
                    : ""
                }`}
              >
                {icon}
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="py-4">
        {React.Children.map(children, (child) => {
          if (child.props.label === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.object.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tab, Tabs };

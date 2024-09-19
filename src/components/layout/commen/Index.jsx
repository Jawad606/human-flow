/* eslint-disable react/prop-types */

/**
 * A higher-order component (HOC) that adds default padding to the wrapped component
 *
 * @param {React.Component} WrappedComponent The component to be wrapped
 * @returns {React.Component} The wrapped component with default padding
 */
// eslint-disable-next-line react/display-name
const withDefaultPadding = (WrappedComponent) => (props) =>
  (
    <div className="px-24 ">
      <WrappedComponent {...props} />
    </div>
  );

export default withDefaultPadding;

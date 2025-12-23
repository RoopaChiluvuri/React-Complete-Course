const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>No food items available.</h2>}</>;
};

export default ErrorMessage;

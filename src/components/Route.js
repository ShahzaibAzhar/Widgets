const Route = ({ route, children }) => {
  return window.location.pathname === route ? children : null;
};
export default Route;

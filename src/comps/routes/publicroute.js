import { Navigate, Route, useLocation } from "react-router-dom";
import { isLogin } from "../../contexts/auth";
const PublicRoute = ({ element, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLogin() && restricted ? <Navigate to="/home" /> : element}
    />
  );
};

export default PublicRoute;

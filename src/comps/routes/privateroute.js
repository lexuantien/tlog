import { Navigate, Route, useLocation } from "react-router-dom";
import { isLogin } from "../../contexts/auth";

const PrivateRoute = ({ element, ...rest }) => {
  return (
    <Route {...rest} element={isLogin() ? element : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;

import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateElement = ({ element, auth }) => {
  let location = useLocation();
  return !auth ? element : <Navigate to="/home" state={{ from: location }} />;
};

const LoginRoute = ({ element, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={<PrivateElement element={element} auth={auth} />}
    />
  );
};

export default LoginRoute;

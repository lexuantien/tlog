import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateElement = ({ element, auth }) => {
  let location = useLocation();
  return auth ? element : <Navigate to="/login" state={{ from: location }} />;
};

const PrivateRoute = ({ element, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={<PrivateElement element={element} auth={auth} />}
    />
  );
};

export default PrivateRoute;

import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/authen";

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      element={currentUser ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;

import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/authen";

const PublicRoute = ({ element, restricted, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      element={currentUser && restricted ? <Navigate to="/home" /> : element}
    />
  );
};

export default PublicRoute;

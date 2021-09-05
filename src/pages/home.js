import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authen";

const Home = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleOnClick = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <>
      <div>
        <h1>
          <strong>Email:</strong> {currentUser.email}
        </h1>
        <button onClick={handleOnClick}>Logout</button>
      </div>
    </>
  );
};

export default Home;

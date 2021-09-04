import { Navigate } from "react-router-dom";

// LOGOUT
export const logout = (navigate) => {
  localStorage.removeItem("auth");
  navigate("/login")
};

// LOGIN STATUS
export const isLogin = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};

export const login = (navigate) => {
  localStorage.setItem("auth", true);
  navigate("/home");
};

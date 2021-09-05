import { Navigate } from "react-router-dom";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from "../configs/firebase-config";

// LOGOUT
export const logout = (navigate) => {
  localStorage.removeItem("auth");
  navigate("/login");
};

// LOGIN STATUS
export const isLogin = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};

const fbProvider = new FacebookAuthProvider();
const auth = getAuth(app);

export const login = (type, navigate) => {
  let provider = null;

  switch (type) {
    case 1:
      provider = fbProvider;
      break;
    default:
      break;
  }

  return signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("auth", user);
      navigate("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};



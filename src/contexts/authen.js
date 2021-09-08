import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";

import { auth } from "../configs/firebase-config";

// import { desktop as isDekstop } from "../utils/is";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [existedUser, setExistedUser] = useState(false);

  const getProvider = (providerId) => {
    switch (providerId) {
      case GoogleAuthProvider.PROVIDER_ID:
        return new GoogleAuthProvider();
      case FacebookAuthProvider.PROVIDER_ID:
        return new FacebookAuthProvider();
      case GithubAuthProvider.PROVIDER_ID:
        return new GithubAuthProvider();
      default:
        throw new Error(`No provider implemented for ${providerId}`);
    }
  };

  const login = (providerId) => {
    const provider = getProvider(providerId);

    return signInWithPopup(auth, provider).catch((err) => {
      if (err.code === "auth/account-exists-with-different-credential") {
        setExistedUser(true);
      }
    });
  };

  const logout = () => {
    return auth.signOut().then(() => {
      setExistedUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    existedUser,
    currentUser,
    setCurrentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

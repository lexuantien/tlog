import { Navigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  linkWithPopup,
} from "firebase/auth";
import app from "../configs/firebase-config";

// LOGOUT
export const logout = (navigate) => {
  localStorage.removeItem("auth");
  auth.signOut().then(() => {
    navigate("/login");
  });
};

// LOGIN STATUS
export const isLogin = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};

const auth = getAuth(app);

const supportedPopupSignInMethods = [
  GoogleAuthProvider.PROVIDER_ID,
  FacebookAuthProvider.PROVIDER_ID,
  GithubAuthProvider.PROVIDER_ID,
];

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

export const OauthLogin = async (providerId, navigate) => {
  const provider = getProvider(providerId);

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    localStorage.setItem("auth", user);
    navigate("/home");
  } catch (err) {
    
    if (
      err.email &&
      err.credential &&
      err.code === "auth/account-exists-with-different-credential"
    ) {
      const providers = await fetchSignInMethodsForEmail(auth, err.email);
      const firstPopupProviderMethod = providers.find((p) =>
        supportedPopupSignInMethods.includes(p)
      );

      // Test: Could this happen with email link then trying social provider?
      if (!firstPopupProviderMethod) {
        throw new Error(
          `Your account is linked to a provider that isn't supported.`
        );
      }

      const linkedProvider = getProvider(firstPopupProviderMethod);
      linkedProvider.setCustomParameters({ login_hint: err.email });

      const result = await signInWithPopup(auth, linkedProvider);
      linkWithCredential(result.user, err.credential).then((val) => {
        localStorage.setItem("auth", result.user);
        navigate("/home");
      });
    }

    // Handle errors...
    // toast.error(err.message || err.toString());
  }
};

import { Link, useNavigate } from "react-router-dom";
import { styled } from "@linaria/react";
//
import Icon from "@comps/icons/icon";
//
import { Vars } from "@styles/variables";
import { useAuth } from "../contexts/authen";
import { useEffect, useState } from "react";
import { useLoading } from "../contexts/loading";

const SLoginContainer = styled.div`
  min-height: auto;
  min-width: 45vw;
  width: 100%;
  padding: 15px;
`;

const SLoginTitle = styled.div`
  margin-bottom: 19px;
  line-height: 27px;
  font-size: 20px;
  font-family: TLogChirpExtendedHeavy, Verdana, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  ${Vars((env) => ({
    color: env.textColor1,
  }))};
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0px;

  margin-top: 10px;
  span {
    font-family: inherit;
    overflow-wrap: break-word;
    min-width: 0px;
    color: inherit;
    font: inherit;
    white-space: inherit;
  }
`;

const SLoginButton = styled.div`
  flex-direction: column;
`;

//  border-color: rgb(61, 84, 102);
const SButton = styled.div`
  
  margin-bottom: 15px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-width: 34px;
  min-height: 34px;
  width: 300px;
  height: 38px;
  ${Vars((env) => ({
    "border-color": env.borderBottomHeaderColor,
  }))};
  background-color: rgba(255, 255, 255, 1);
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 auto;
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  cursor: pointer;
  /* pointer-events: auto; */

  // for loading state
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};


  &:hover {
    background-color: rgb(230, 230, 230);
  }

  div {
    color: rgb(15, 20, 25);
    font-weight: 700;
    font-size: 14px;
    font-family: TLogChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    line-height: 19px;
    overflow-wrap: break-word;
    min-width: 0px;

    display: flex;
    text-align: center;

    svg {
      color: rgb(15, 20, 25);
      margin-right: 4px;
      width: 19px;
      height: 19px;
      user-select: none;
      vertical-align: text-bottom;
      position: relative;
      max-width: 100%;
      fill: currentcolor;
      display: inline-block;
    }

    span {
      font-family: inherit;
      font-size: 14px;
      line-height: 19px;
      overflow-wrap: break-word;
      min-width: 0px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: inherit;
      font: inherit;
    }
  }
`;

const STermText = styled.div`
  margin-bottom: 15px;
  font-weight: 400;
  line-height: 15px;
  font-size: 12px;
  ${Vars((env) => ({
    color: env.textColor2,
  }))};
  font-family: TLogChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
  min-width: 0px;

  a {
    color: rgb(27, 149, 224);
    cursor: pointer;
    font-family: inherit;
    overflow-wrap: break-word;
    min-width: 0px;
    font: inherit;
    white-space: inherit;

    span {
      font-family: inherit;
      overflow-wrap: break-word;
      min-width: 0px;
      color: inherit;
      font: inherit;
      white-space: inherit;
    }
  }
`;

const SLogo = styled.div`
  line-height: 49px;
  letter-spacing: -0.8px;
  font-size: 44px;
  font-family: TLogChirpExtendedHeavy, Verdana, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  ${Vars((env) => ({
    color: env.textColor1,
  }))};

  span:first-child {
    text-decoration: underline;
    color: rgb(29, 161, 242);
  }
`;

const Login = () => {
  const { loading, show, hide } = useLoading();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, existedUser } = useAuth();

  useEffect(()=> {
    show()
  },[])

  const handleOnClick = async (providerId) => {
    try {
      setError("");
      show()
      await login(providerId);
      navigate("/home");
    } catch {
      setError("Failed to log in");
    }
    hide()
  };

  const SocialButton = ({ name, text, providerId }) => {
    return (
      <SButton
        className="css-div-common r-u-s-none"
        role="button"
        $disabled={loading}
        tabindex="0"
        onClick={() => handleOnClick(providerId)}
      >
        <div
          className="css-div-common r-a-center r-j-center r-f-g-1 r-f-d-row"
          dir="auto"
        >
          <Icon name={name} />
          <span className="css-text-common">{`Sign in with ${text}`}</span>
        </div>
      </SButton>
    );
  };

  return (
    <>
      <SLoginContainer className="css-div-common r-f-g-1 r-f-s-1 r-j-center r-a-center">
        <SLogo className="css-text-common r-u-s-none ">
          <span>T</span>
          <span>LOG</span>
        </SLogo>
        <SLoginTitle className="css-text-common r-u-s-none ">
          {!existedUser ? (
            <span>Join website today.</span>
          ) : (
            <span style={{ color: "red" }}>Email already used</span>
          )}
        </SLoginTitle>
        <SLoginButton className="css-div-common r-a-center r-j-center">
          <SocialButton providerId="google.com" name="google" text="Google" />
          <SocialButton
            providerId="facebook.com"
            name="facebook"
            text="Facebook"
          />
          <SocialButton providerId="github.com" name="github" text="Github" />

          <STermText>
            By signing in, you agree to the{" "}
            <Link className="css-text-common" to="/tos">
              <span className="css-text-common">Terms of Service</span>
            </Link>{" "}
            and{" "}
            <Link className="css-text-common" to="/privacy">
              <span className="css-text-common">Privacy Policy</span>
            </Link>
            {", "} including{" "}
            <Link className="css-text-common" to="/tbog-cookies">
              <span className="css-text-common">Cookie Use.</span>
            </Link>
          </STermText>
        </SLoginButton>
      </SLoginContainer>
    </>
  );
};

export default Login;

import { Link, useNavigate } from "react-router-dom";
import { styled } from "@linaria/react";
//
import {
  standardDiv,
  standard,
  userSelectNone,
  aCenter,
  jCenter,
  flexgrow,
  flexRow,
} from "@styles/clazz";
import Icon from "@comps/icons/icon";
//
import { login } from "../contexts/auth";
import { Vars } from "@styles/variables";
import { useContext } from "react";
import Cookies from "js-cookie";
import { cx, css } from "@linaria/core";

const SLoginContainer = styled.div`
  /*  */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /*  */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// color: rgb(255, 255, 255);
const SLogo = styled.div`
  ${standardDiv}
  line-height: 49px;
  letter-spacing: -0.8px;
  font-size: 44px;
  font-family: TlogChirpExtendedHeavy, Verdana, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  ${Vars((env) => ({
    color: env.textColor1,
  }))};
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0px;

  span {
    ${standardDiv}
    font-family: inherit;
    overflow-wrap: break-word;
    min-width: 0px;
    color: inherit;
    font: inherit;
    white-space: inherit;
  }
`;

const SLoginTitle = styled.div`
  ${standardDiv}
  margin-bottom: 19px;
  line-height: 27px;
  font-size: 20px;
  font-family: TlogChirpExtendedHeavy, Verdana, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  ${Vars((env) => ({
    color: env.textColor1,
  }))};
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0px;

  margin-top: 10px;
  > span {
    ${standardDiv}
    font-family: inherit;
    overflow-wrap: break-word;
    min-width: 0px;
    color: inherit;
    font: inherit;
    white-space: inherit;
  }
`;

const SLoginButton = styled.div`
  ${standard};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//  border-color: rgb(61, 84, 102);
const SButton = styled.div`
  ${standard};
  margin-bottom: 15px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-width: 34px;
  min-height: 34px;
  width: 300px;
  height: 38px;
  ${userSelectNone}
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
  pointer-events: auto;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  div {
    ${standard};
    color: rgb(15, 20, 25);
    font-weight: 700;
    font-size: 14px;
    font-family: TlogChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    line-height: 19px;
    overflow-wrap: break-word;
    min-width: 0px;

    ${aCenter};
    ${jCenter};
    ${flexgrow};
    ${flexRow};

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
      ${standardDiv}
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
  ${standardDiv}
  margin-bottom: 15px;
  font-weight: 400;
  line-height: 15px;
  font-size: 12px;
  ${Vars((env) => ({
    color: env.textColor2,
  }))};
  font-family: TlogChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
  min-width: 0px;

  a {
    ${standardDiv}
    color: rgb(27, 149, 224);
    cursor: pointer;
    font-family: inherit;
    overflow-wrap: break-word;
    min-width: 0px;
    font: inherit;
    white-space: inherit;

    span {
      ${standardDiv}
      font-family: inherit;
      overflow-wrap: break-word;
      min-width: 0px;
      color: inherit;
      font: inherit;
      white-space: inherit;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    login(navigate);
  };

  return (
    <>
      <SLoginContainer>
        <SLogo>
          <span style={{textDecoration:"underline", color:"rgb(29, 161, 242)"}}>T</span>
          <span>LOG</span>
        </SLogo>
        <SLoginTitle>
          <span>
            Log for hooman named <span style={{textDecoration:"underline", color:"rgb(29, 161, 242)"}}>T</span>
          </span>
        </SLoginTitle>
        <SLoginButton>
          <SButton role="button" tabindex="0" onClick={handleOnClick}>
            <div dir="auto">
              <Icon name="google" />
              <span>Sign up with Google</span>
            </div>
          </SButton>
          <SButton role="button" tabindex="0">
            <div dir="auto">
              <Icon name="facebook" />
              <span>Sign up with Facebook</span>
            </div>
          </SButton>
          <SButton role="button" tabindex="0">
            <div dir="auto">
              <Icon name="github" />
              <span>Sign up with Github</span>
            </div>
          </SButton>

          <STermText>
            By signing up, you agree to the{" "}
            <Link to="/tos">
              <span>Terms of Service</span>
            </Link>{" "}
            and{" "}
            <Link to="/privacy">
              <span>Privacy Policy</span>
            </Link>
            {", "} including{" "}
            <Link to="/tlog-cookies">
              <span>Cookie Use.</span>
            </Link>
          </STermText>
        </SLoginButton>
      </SLoginContainer>
    </>
  );
};

export default Login;

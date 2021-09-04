import { styled } from "@linaria/react";
import { standard, userSelectNone, mLRAuto, flexRow } from "@styles/clazz";
import { Vars } from "@styles/variables";
import Left from "./left";
import Center from "./center";
import Right from "./right";
import { useLocation } from "react-router-dom";
import { AuthContext } from "@contexts";
import { useContext } from "react";
import { isLogin } from "../../contexts/auth";

const SHeaderG = styled.header`
  ${standard};
  ${userSelectNone};
  z-index: 3;
`;

const SGap = styled.div`
  ${standard};
  height: 53.5px;
`;

const SHeaderM = styled.div`
  ${standard};
  ${mLRAuto}
  z-index: 2;

  transition-property: -webkit-transform, transform;
  transition-duration: 0.2s;

  height: 53px;

  top: -0.5px;
  right: 0px;
  left: 0px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  ${Vars((env) => ({
    "background-color": env.darkColor,
    "border-bottom-color": env.borderBottomHeaderColor,
  }))};

  position: fixed;
  padding-left: 16px;
  padding-right: 16px;
  ${flexRow};
`;

const hiddenHeaderRoutes = ["/compose/log"];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      {isLogin() && pathname != "/compose/log" && (
        <SHeaderG role="banner">
          <SGap />
          <SHeaderM>
            <Left />
            <Center />
            <Right />
          </SHeaderM>
        </SHeaderG>
      )}
    </>
  );
};

export default Header;

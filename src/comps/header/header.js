import { styled } from "@linaria/react";

import { Vars } from "@styles/variables";
import Left from "./left";
import Center from "./center";
import Right from "./right";
import { useLocation } from "react-router-dom";
import { isLogin } from "../../contexts/auth";

const SHeaderG = styled.header`
  z-index: 3;
`;

const SGap = styled.div`
  height: 53.5px;
`;

const SHeaderM = styled.div`
  margin-left: auto;
  margin-right: auto;

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
`;

const hiddenHeaderRoutes = ["/compose/log"];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      {isLogin() && pathname != "/compose/log" && (
        <SHeaderG className="css-div-common r-u-s-none" role="banner">
          <SGap className="css-div-common" />
          <SHeaderM className="css-div-common r-f-d-row">
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

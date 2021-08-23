import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@linaria/react";
//

import Icon from "@comps/icons/icon";
import Circle from "../core/circle";
//
import { simpleNavRoutes } from "@configs";
import { standard, aCenter, jCenter, flexend } from "@styles/clazz";
import { Vars } from "@styles/variables";

const SRight = styled.div`
  ${standard}
  ${jCenter}
  ${aCenter}
  ${flexend}
  min-width: 56px;
  min-height: 32px;
  align-self: stretch;

  svg {
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
    position: relative;
    max-width: 100%;
    ${Vars((env) => ({
      color: env.iconColor,
      // fill: env.iconColor,
    }))};
    display: inline-block;
    fill: currentColor;
  }
`;

const Right = () => {
  const [appendLoccation, setAppendLoccation] = useState("");
  const [hiddenSetting, setHiddenSetting] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const obj = simpleNavRoutes.find((e) => e === pathname);
    if (obj != undefined) {
      setHiddenSetting(false);
      obj === "/home" ? setAppendLoccation("") : setAppendLoccation(pathname);
    } else {
      setHiddenSetting(true);
    }
  }, [pathname]);

  return (
    <>
      {!hiddenSetting && (
        <SRight>
          <Circle
            style={{ marginRight: "calc(-9px)" }}
            btn={true}
            onClick={() => {
              navigate(`/settings${appendLoccation}`);
            }}
          >
            <Icon name="setting" />
          </Circle>
        </SRight>
      )}
    </>
  );
};

export default Right;

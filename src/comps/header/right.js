import { styled } from "@linaria/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  standard,
  basicInherit,
  userSelectNone,
  aCenter,
  mLRAuto,
  jCenter,
  flex,
  flexRow,
  flexColumn,
  flexstart,
  flexshirk,
  flexgrow,
  nowrap,
  flexend,
} from "@styles/clazz";
import { Vars } from "@styles/variables";
import Icon from "@comps/icons/icon";
import Circle from "../core/circle";
import React, { useEffect, useState } from "react";
import { simpleNavRoutes } from "@configs";

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
  const [appendLoc, setAppendLoc] = useState("");
  const [hidden, setHidden] = useState(false);

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const obj = simpleNavRoutes.find((e) => e == loc.pathname);
    if (obj != undefined) {
      setHidden(false);
      obj === "/home" ? setAppendLoc("") : setAppendLoc(loc.pathname);
    } else {
      setHidden(true);
    }
  }, [loc]);

  return (
    <>
      {!hidden && (
        <SRight>
          <Circle
            style={{ marginRight: "calc(-9px)" }}
            btn={true}
            onClick={() => {
              navigate(`/settings${appendLoc}`);
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

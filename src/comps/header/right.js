import { styled } from "@linaria/react";
import { Link } from "react-router-dom";
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
import React, { useEffect } from "react";

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
  return (
    <SRight>
      <Circle btn={false} style={{ marginRight: "calc(-9px)" }} to="/settings">
        <Icon name="setting" />
      </Circle>
    </SRight>
  );
};

export default Right;

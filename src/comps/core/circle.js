import PropTypes from "prop-types";

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
import { Vars, Vars2 } from "@styles/variables";
import { styled } from "@linaria/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { css } from "@linaria/core";

const SCircleL = styled(Link)`
  ${standard}
  ${userSelectNone}
  
  min-width: 36px;
  min-height: 36px;
  background-color: rgba(0, 0, 0, 0);
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;
`;

const SCircle = styled.div`
  ${standard}
  /* margin-top: -6px; */
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  max-width: 100%;
  padding: 8px;
  /* margin: -8px; */
  border-radius: 9999px;
  ${flex}
  ${flexgrow}
  ${jCenter}
  ${aCenter}
  ${flexRow}

  .theme-dark & {
    background-color: ${(props) =>
      props.$activebackground
        ? `${Vars2("dark").circleButtonColorClicked}`
        : `transparent`};
  }

  .theme-light & {
    background-color: ${(props) =>
      props.$activebackground
        ? `${Vars2("light").circleButtonColorClicked}`
        : "transparent"};
  }
`;

const Circle = ({ onClick, btn, to, style, ...rest }) => {
  const [backgroundActive, SetBackgroundActive] = useState(false);

  const timeout = setTimeout(() => {
    SetBackgroundActive(false);
  }, 180);

  const click = () => {
    SetBackgroundActive(true);
    setTimeout(() => {
      SetBackgroundActive(false);
      if (onClick != undefined) {
        onClick();
      }
    }, 180);
  };

  return (
    <>
      {!btn ? (
        <SCircleL
          onClick={() => {
            SetBackgroundActive(true);
            clearTimeout(timeout);
          }}
          to={to}
          style={style}
        >
          <SCircle $activebackground={backgroundActive} {...rest} />
        </SCircleL>
      ) : (
        <SCircleL as="button" style={style} onClick={click}>
          <SCircle $activebackground={backgroundActive} {...rest} />
        </SCircleL>
      )}
    </>
  );
};

export default Circle;

Circle.prototype = {
  to: PropTypes.string,
  btn: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

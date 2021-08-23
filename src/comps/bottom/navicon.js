import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@linaria/react";
import PropTypes from "prop-types";
//
import Icons from "@comps/icons/icon";
//
import { Vars } from "@styles/variables";
import {
  standard,
  basicInherit,
  userSelectNone,
  aCenter,
  jCenter,
  flex,
  flexColumn,
  flexgrow,
} from "@styles/clazz";

const SNavItem = styled(Link)`
  ${standard}
  ${basicInherit}
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  ${flexColumn}
  outline-style: none;
  cursor: pointer;
  ${flex}
  ${aCenter}
  ${jCenter}
  ${flexgrow}
  pointer-events: auto;
`;

const SNavCircleButton = styled.div`
  ${standard}
  margin-top: -6px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  max-width: 100%;
  padding: 8px;
  margin: -8px;
  border-radius: 9999px;

  /* background-color: ${(props) =>
    props.$activebackground ? "rgba(255, 255, 255, 0.2)" : "transparent"};  */

  .theme-dark & {
    background-color: ${(props) =>
      props.$activebackground ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  }

  .theme-light & {
    background-color: ${(props) =>
      props.$activebackground ? "rgba(15, 20, 25, 0.2)" : "transparent"};
  }

  svg {
    ${userSelectNone}
    height: 1.75rem;
    ${Vars((env) => ({
      color: env.iconColor,
      // fill: env.iconColor,
    }))};
    vertical-align: text-bottom;
    position: relative;
    max-width: 100%;
    display: inline-block;
    fill: currentColor;
  }
`;

const NavIcon = ({ selected, onChange, value, iconName, path, alabel }) => {
  const [backgroundActive, SetBackgroundActive] = useState(false);

  const timeout = setTimeout(() => {
    SetBackgroundActive(false);
  }, 180);

  return (
    <SNavItem
      onClick={() => {
        SetBackgroundActive(true);
        clearTimeout(timeout);
        onChange(value);
      }}
      to={path}
      role="link"
      aria-label={alabel}
    >
      <SNavCircleButton $activebackground={backgroundActive}>
        <Icons name={iconName} active={value === selected} />
      </SNavCircleButton>
    </SNavItem>
  );
};

NavIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  alabel: PropTypes.string.isRequired,
};

export default NavIcon;

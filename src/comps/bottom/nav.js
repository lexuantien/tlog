import { useEffect, useState } from "react";
import { styled } from "@linaria/react";
import { Vars } from "@styles/variables";
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
} from "@styles/clazz";
import NavIcon from "./navicon";
import { useWindowDimensions } from "@hooks";
import { useLocation } from "react-router-dom";
// import {} from "react-router-dom";

import { navRoutes } from "@configs";

const SNavGeneral = styled.div`
  ${standard};
  pointer-events: none !important;
  /*  */
  padding-bottom: env(safe-area-inset-bottom);
  border-top-width: 1px;
  border-top-style: solid;
  ${Vars((env) => ({
    "background-color": env.darkColor,
    "border-top-color": env.borderTopColor,
  }))};
  /*  */
  width: 100%;
  ${mLRAuto}
`;

const SNavContent = styled.nav`
  ${standard};
  max-height: 16vh;
  height: 3.5rem;
  ${flexRow};
  width: 100%;
  background-color: "inherit";
`;

const SHighlight = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: ${(props) => props.$widthItem + `px`};
  height: 3px;

  ${Vars((env) => ({
    background: env.iconColor,
  }))};

  border-radius: 4px;

  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  transform: translate(calc(${(props) => props.$activeLength}px));
`;

const Nav = () => {
  const loc = useLocation();
  const { width } = useWindowDimensions();
  const [selectedNavVal, setSelectedNavVal] = useState(-1);

  useEffect(() => {
    const obj = navRoutes.find(
      (el) => el.path === (loc.pathname === "/" ? "/home" : loc.pathname)
      // (el) => el.path === loc.pathname
    );
    if (obj != undefined) {
      setSelectedNavVal(obj.value);
    } else {
      setSelectedNavVal(-1);
    }
  }, [loc]);

  return (
    <SNavGeneral>
      <SNavContent role="navigation">
        {navRoutes.map(({ iconName, path, value, alabel }, i) => (
          <NavIcon
            key={i}
            iconName={iconName}
            path={path}
            value={value}
            selected={selectedNavVal}
            onChange={setSelectedNavVal}
            alabel={alabel}
          />
        ))}
      </SNavContent>
      <SHighlight
        $widthItem={width / navRoutes.length}
        $activeLength={selectedNavVal * (width / navRoutes.length)}
      />
    </SNavGeneral>
  );
};

export default Nav;

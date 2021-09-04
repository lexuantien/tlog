import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@linaria/react";
//
import NavIcon from "./navicon";
//
import { Vars } from "@styles/variables";
import { standard, mLRAuto, flexRow } from "@styles/clazz";
import { useWindowDimensions } from "@hooks";
import { tickNavRoutes } from "@configs";

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

const Nav = () => {
  const { pathname } = useLocation();
  const [selectedNavVal, setSelectedNavVal] = useState(-1);

  useEffect(() => {
    const obj = tickNavRoutes.find(
      (el) => el.path === (pathname === "/" ? "/home" : pathname)
    );
    if (obj != undefined) {
      setSelectedNavVal(obj.value);
    } else {
      setSelectedNavVal(-1);
    }
  }, [pathname]);

  return (
    <SNavGeneral>
      <SNavContent role="navigation">
        {tickNavRoutes.map(({ iconName, path, value, alabel }, i) => (
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
    </SNavGeneral>
  );
};

export default Nav;

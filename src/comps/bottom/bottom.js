import { useLocation } from "react-router-dom";
import { styled } from "@linaria/react";
//
import Tweet from "./tweet";
import Nav from "./nav";
//
import { standard } from "@styles/clazz";
import { excludeRoutes } from "@configs";

const SBottom = styled.div`
  ${standard};
  position: fixed;
  left: 0px;
  bottom: 0px;
  pointer-events: none !important;
  width: inherit;
`;

const Bottom = () => {
  const { pathname } = useLocation();
  return (
    <SBottom>
      {excludeRoutes.find((r) => r !== pathname) && (
        <>
          <Tweet />
          <Nav />
        </>
      )}
    </SBottom>
  );
};

export default Bottom;

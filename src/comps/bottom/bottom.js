import { useLocation } from "react-router-dom";
import { styled } from "@linaria/react";

import { standard } from "@styles/clazz";
import { excludeRoutes } from "@configs";
import Tweet from "./tweet";
import Nav from "./nav";

const SBottom = styled.div`
  ${standard};
  position: fixed;
  left: 0px;
  bottom: 0px;
  pointer-events: none !important;
  width: inherit;
`;

const Bottom = () => {
  const loc = useLocation();
  return (
    <SBottom>
      {excludeRoutes.find((r) => r !== loc.pathname) && (
        <>
          <Tweet />
          <Nav />
        </>
      )}
    </SBottom>
  );
};

export default Bottom;

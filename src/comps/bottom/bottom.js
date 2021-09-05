import { useLocation } from "react-router-dom";
import { styled } from "@linaria/react";
//
import Tweet from "./tweet";
import Nav from "./nav";
import { AuthContext } from "@contexts";
//
import { standard } from "@styles/clazz";
import { excludeBottomNavRoutes } from "@configs";
import { useAuth } from "../../contexts/authen";

const SBottom = styled.div`
  ${standard};
  position: fixed;
  left: 0px;
  bottom: 0px;
  backface-visibility: hidden;
  pointer-events: none !important;
  width: inherit;
  z-index: 1;
`;

const Bottom = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();
  return (
    <SBottom>
      {currentUser && excludeBottomNavRoutes.find((r) => r !== pathname) && (
        <>
          <Tweet />
          <Nav />
        </>
      )}
    </SBottom>
  );
};

export default Bottom;

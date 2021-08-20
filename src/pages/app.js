import { styled } from "@linaria/react";
import { useRoutes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Bottom } from "@comps/bottom";
import { Header } from "@comps/header";
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

const SContainer = styled.div`
  ${standard};
  /* min-height: 583px; */
  width: inherit;
  pointer-events: auto;
`;

const routes = [
  {
    path: "/home",
    element: <p>Home</p>,
  },
  {
    path: "/search",
    element: <p>Search</p>,
  },
  {
    path: "/bookmarks",
    element: <p>bookmark</p>,
  },
  {
    path: "/notifications",
    element: <p>notify</p>,
  },
  {
    path: "/compose/log",
    element: <p>create log</p>,
  },
];

const App = () => {
  let element = useRoutes(routes);
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <Bottom />
      <SContainer aria-hidden="false">
        <Header />
        {element}
      </SContainer>
    </>
  );
};

export default App;

import { styled } from "@linaria/react";
import { useRoutes, useNavigate, Navigate } from "react-router-dom";
import { Bottom } from "@comps/bottom";
import { Header } from "@comps/header";
import {
  standard,
} from "@styles/clazz";

const SContainer = styled.div`
  ${standard};
  /* min-height: 583px; */
  width: inherit;
  pointer-events: auto;
`;

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
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
  {
    path: "/settings",
    element: <p>settings</p>,
  },
];

const App = () => {
  let element = useRoutes(routes);

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

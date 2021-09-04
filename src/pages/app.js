import React, { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { styled } from "@linaria/react";
//
import { Bottom as BottomNav } from "@comps/bottom";
import { Header as TopHeader } from "@comps/header";
import { PrivateRoute, PublicRoute } from "../comps/routes";
//
import Login from "./login";
//
import { AuthContext } from "@contexts";
import { standard } from "@styles/clazz";
import { Vars } from "@styles/variables";
import { logout } from "../contexts/auth";

const SContainer = styled.div`
  ${standard};
  /* min-height: 731px; */
  z-index: 0;
  width: 100%;
  flex: inherit;
  pointer-events: auto;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
`;

const SMain = styled.main`
  ${standard};
  flex-shrink: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  backface-visibility: hidden;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
  /* background-color: rgba(0, 0, 0, 0); */
  /* -webkit-box-align: stretch; */
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  width: 100%;
  /* min-height: 100%; */
  margin-left: auto;
  margin-right: auto;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
`;

const SBackgroundColor = styled.div`
  ${standard};
  z-index: 1;
  border-right-width: 1px;
  border-left-width: 1px;
  width: 100%;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
  margin-left: auto;
  margin-right: auto;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;

  height: 100%;
`;
/* padding-bottom: ${(props) => (props.$auth ? `calc(104px)` : `auto`)}; */
/* padding-bottom: calc(104px); */
const SPadding = styled.div`
  ${standard};
  width: 100%;
  /* padding-bottom: calc(104px); */
  margin-left: auto;
  margin-right: auto;
`;

const SSection = styled.section`
  ${standard};
  position: relative;
  flex-direction: row;
  flex: 1;
  /* min-height: 100%; */
`;

const App = () => {
  const [auth, setAuth] = useState(null);
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <>
      <AuthContext.Provider value={value}>
        <BottomNav />
        <SContainer aria-hidden="false">
          <TopHeader />
          <SMain role="main">
            <SBackgroundColor>
              {/* <SPadding> */}
                <SSection aria-labelledby="accessible-list-5" role="region">
                  <RoutesConfig />
                </SSection>
              {/* </SPadding> */}
            </SBackgroundColor>
          </SMain>
        </SContainer>
      </AuthContext.Provider>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    logout(navigate);
  };
  return (
    <>
      <div>
        <button onClick={handleOnClick}>Logout</button>
      </div>
    </>
  );
};

const RoutesConfig = () => {
  return (
    <Routes>
      <PublicRoute path="/login" restricted={true} element={<Login />} />
      <PrivateRoute path="/" element={<Navigate to="/home" />} />
      <PrivateRoute path="/home" element={<Home />} />
      <PrivateRoute path="/search" element={<p>search</p>} />
      <PrivateRoute path="/bookmarks" element={<p>bookmarks</p>} />
      <PrivateRoute path="/notifications" element={<p>notifications</p>} />
      <PrivateRoute path="/compose/log" element={<p>compose/log</p>} />
      <PrivateRoute path="/settings" element={<p>settings</p>} />
    </Routes>
  );
};

export default App;

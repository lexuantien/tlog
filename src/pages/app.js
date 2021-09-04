import React, { useContext, useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { styled } from "@linaria/react";
//
import { Bottom as BottomNav } from "@comps/bottom";
import { Header as TopHeader } from "@comps/header";
import { PrivateRoute } from "../comps/core";
//
import Login from "./login";
//
import { AuthContext } from "@contexts";
import { standard } from "@styles/clazz";
import { Vars } from "@styles/variables";

const SContainer = styled.div`
  ${standard};
  /* min-height: 731px; */
  z-index: 0;
  width: 100%;
  pointer-events: auto;
`;

const SMain = styled.main`
  ${standard};
  flex-shrink: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  backface-visibility: hidden;

  background-color: rgba(0, 0, 0, 0);
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  width: 100%;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
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
`;

const SPadding = styled.div`
  ${standard};
  padding-bottom: ${(props) => (props.$auth ? `calc(104px)` : `auto`)};
  /* padding-bottom: calc(104px); */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const SSection = styled.section`
  ${standard};
  position: relative;
  /* min-height: 100%; */
`;

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <BottomNav />
        <SContainer aria-hidden="false">
          <TopHeader />
          <SMain role="main">
            <SBackgroundColor>
              <SPadding $auth={auth}>
                <SSection aria-labelledby="accessible-list-5" role="region">
                  <RoutesConfig />
                </SSection>
              </SPadding>
            </SBackgroundColor>
          </SMain>
        </SContainer>
      </AuthContext.Provider>
    </>
  );
};

const RoutesConfig = () => {
  const Auth = React.useContext(AuthContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <PrivateRoute
        path="/"
        auth={Auth.auth}
        element={<Navigate to="/home" />}
      />
      <PrivateRoute path="/home" auth={Auth.auth} element={<p>home</p>} />
      <PrivateRoute path="/search" auth={Auth.auth} element={<p>search</p>} />
      <PrivateRoute
        path="/bookmarks"
        auth={Auth.auth}
        element={<p>bookmarks</p>}
      />
      <PrivateRoute
        path="/notifications"
        auth={Auth.auth}
        element={<p>notifications</p>}
      />
      <PrivateRoute
        path="/compose/log"
        auth={Auth.auth}
        element={<p>compose/log</p>}
      />
      <PrivateRoute
        path="/settings"
        auth={Auth.auth}
        element={<p>settings</p>}
      />
    </Routes>
  );
};

export default App;

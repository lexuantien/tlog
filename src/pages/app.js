import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { styled } from "@linaria/react";
import loadable from "@loadable/component";

//
import { Bottom as BottomNav } from "@comps/bottom";
import { Header as TopHeader } from "@comps/header";
import { AppleHomeScreenModal } from "@comps/modals";
import { PrivateRoute, PublicRoute } from "../comps/routes";
//
// import Login from "./login";
// import Log from "./log";
//
import { Vars } from "@styles/variables";
import { AuthProvider, useAuth } from "../contexts/authen";
import Home from "./home";
import Search from "./search";
import Bookmark from "./bookmark";
import Setting from "./setting";
import Notification from "./notification";

//

const LoginPage = loadable(() => import("./login"));
const LogPage = loadable(() => import("./log"));

const SApp = styled.div`
  width: 100%;
  z-index: 0;
  pointer-events: auto;
`;

const SMain = styled.main`
  backface-visibility: hidden;
`;

const SDisplay = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;

  background-color: rgba(0, 0, 0, 0);

  margin-left: auto;
  margin-right: auto;

  min-height: 100%;

  width: 100%;
`;

const SBackgroundColor = styled.div`
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
/* padding-bottom: ${(props) => (props.$auth ? `calc(104px)` : `auto`)}; */
/* padding-bottom: calc(104px); */
const SPadding = styled.div`
  width: 100%;
  padding-bottom: calc(99px);
  margin-left: auto;
  margin-right: auto;
`;

const SSection = styled.section`
  position: relative;
  flex-direction: row;
  flex: 1;
  /* min-height: 100%; */
`;

const App = () => {
  return (
    <SApp aria-hidden="false" className="css-div-common r-flex-1">
      <AuthProvider>
        <TopHeader />
        <SMain role="main" className="css-div-common r-f-g-1 r-f-s-1 r-flex-1">
          <RoutesConfig />
        </SMain>
        <BottomNav />
        <AppleHomeScreenModal />
      </AuthProvider>
    </SApp>
  );
};

const RoutesConfig = () => {
  const { currentUser /*, setCurrentUser*/ } = useAuth();

  // useEffect(() => {
  //   setCurrentUser(true);
  // }, []);

  return (
    <>
      <Routes>
        <PublicRoute path="/login" restricted={true} element={<LoginPage />} />
      </Routes>
      <SDisplay
        style={{ display: currentUser ? "flex" : "contents" }}
        className="css-div-common r-f-d-row r-f-g-1"
      >
        <SBackgroundColor className="css-div-common">
          {/* <SPadding className="css-div-common"> */}
          <SSection
            className="css-div-common"
            aria-labelledby="accessible-list-1"
            role="region"
          >
            <Routes>
              <PrivateRoute path="/" element={<Navigate to="/home" />} />
              <PrivateRoute path="/home" element={<Home />} />
              <PrivateRoute path="/search" element={<Search />} />
              <PrivateRoute path="/bookmarks" element={<Bookmark />} />
              <PrivateRoute path="/notifications" element={<Notification />} />
              <PrivateRoute path="/compose/log" element={<LogPage />} />
              {/* <Route path="/compose/log" element={<LogPage />} /> */}
              <PrivateRoute path="/settings" element={<Setting />} />
            </Routes>
          </SSection>
          {/* </SPadding> */}
        </SBackgroundColor>
      </SDisplay>
    </>
  );
};

export default App;

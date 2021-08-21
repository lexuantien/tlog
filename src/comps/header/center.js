import { styled } from "@linaria/react";
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
  flexstart,
  flexshirk,
  flexgrow,
  nowrap,
} from "@styles/clazz";
import { Vars } from "@styles/variables";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SCenterG = styled.div`
  ${standard}
  ${jCenter}
  ${flexshirk}
  height: 100%;
  ${flexgrow}
  ${flexstart}

  h2 {
    ${basicInherit}
    font-size: 17px;
    font-weight: 700;
    ${Vars((env) => ({
      "font-family": env.fontFamily,
    }))};
    line-height: 20px;
    overflow-wrap: break-word;
    min-width: 0px;
    ${nowrap}

    span {
      ${basicInherit}
      font-family: inherit;
      overflow-wrap: break-word;
      min-width: 0px;
      color: inherit;
      font: inherit;
      white-space: inherit;
    }
  }

  div {
    ${basicInherit}
    font-weight: 400;
    line-height: 15px;
    font-size: 12px;
    overflow-wrap: break-word;
    min-width: 0px;
    ${nowrap}
    ${Vars((env) => ({
      "font-family": env.fontFamily,
      color: env.textColor2,
    }))};
    span {
      ${basicInherit}
      font-family: inherit;
      overflow-wrap: break-word;
      min-width: 0px;
      color: inherit;
      font: inherit;
      white-space: inherit;
    }
  }
`;

const titleRoutes = [
  {
    path: "/home",
    title: ["Home"],
  },
  {
    path: "/bookmarks",
    title: ["Bookmarks"],
  },
  {
    path: "/notifications",
    title: ["Notifications"],
  },
  {
    path: "/settings",
    title: ["Settings", true],
  },
  {
    path: "/settings/search",
    title: ["Search settings"],
  },
  {
    path: "/settings/bookmarks",
    title: ["Bookmarks", true],
  },
  {
    path: "/settings/notifications",
    title: ["Notifications", true],
  },
];

const Center = () => {
  const loc = useLocation();
  const [title, setTitle] = useState(null);
  useEffect(() => {
    const searchObj = loc.pathname === "/search";

    const titleObj = titleRoutes.find((e) => e.path === loc.pathname);
    if (titleObj != undefined) {
      setTitle(titleObj.title);
    } else {
      setTitle(null);
    }
  }, [loc]);

  return (
    <SCenterG>
      {title != null && (
        <>
          <h2 dir="auto" aria-level="2" role="heading">
            <span>{title[0]}</span>
          </h2>
          {title[1] != undefined && (
            <div>
              <span>@LeXuanTien1997</span>
            </div>
          )}
        </>
      )}
    </SCenterG>
  );
};

export default Center;

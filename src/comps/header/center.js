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

import Icon from "@comps/icons/icon";

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

const SSearchG = styled.div`
  ${standard}
  ${jCenter}
  ${aCenter}
  ${flexshirk}
  height: 100%;
  ${flexgrow}
  flex: 1;
`;

const SSearchForm = styled.form`
  min-height: 0px;
  box-sizing: border-box;
  -webkit-box-align: stretch;
  align-items: stretch;
  min-width: 0px;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
  z-index: 0;
  position: relative;
  padding: 0px;
  margin: 0px;
  border-width: 0px;
  border-style: solid;
  display: flex;
`;

const SSearchCircle = styled.div`
  ${standard}
  ${Vars((env) => ({
    "background-color": env.searchBackground,
  }))};
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  border-radius: 9999px;

  label {
    ${standard}
    cursor: text;
    flex-direction: row;
  }
`;

const SSearchIcon = styled.div`
  ${standard}
  cursor: default;
  justify-content: center;
  display: flex;
  svg {
    ${userSelectNone}
    min-width: 30px;
    vertical-align: text-bottom;
    position: relative;
    max-width: 100%;
    min-width: 30px;
    padding-left: 11px;
    height: 1.25em;
    fill: currentcolor;
    display: inline-block;
    ${Vars((env) => ({
      color: env.textColor2,
    }))};
  }
`;

const SSearchInput = styled.div`
  /* ${standard} */
  ${basicInherit}
  flex-shrink: 1;
  flex-grow: 1;
  font-weight: 400;
  font-size: 14px;
  ${Vars((env) => ({
    "font-family": env.fontFamily,
    color: env.textColor1,
  }))};
  line-height: 19px;
  overflow-wrap: break-word;
  min-width: 0px;
  display: flex;

  input {
    text-align: left;
    font-size: inherit;
    color: inherit;
    resize: none;
    appearance: none;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0);
    font-family: inherit;
    outline-style: none;
    width: 100%;
    height: 100%;
    padding-bottom: 4px;
    padding-top: 4px;
    border-radius: 0px;
    border-width: 0px;
    ::placeholder {
      ${Vars((env) => ({
        color: env.textColor2,
      }))};
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
  const [title, setTitle] = useState(null);
  const [search, setSearch] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const titleObj = titleRoutes.find((e) => e.path === loc.pathname);
    if (titleObj != undefined) {
      setTitle(titleObj.title);
    } else {
      setTitle(null);
    }
  }, [loc]);

  return (
    <>
      {title != null ? (
        <SCenterG>
          <h2 dir="auto" aria-level="2" role="heading">
            <span>{title[0]}</span>
          </h2>
          {title[1] != undefined && (
            <div>
              <span>@LeXuanTien1997</span>
            </div>
          )}
        </SCenterG>
      ) : (
        <>
          {loc.pathname == "/search" && (
            <SSearchG>
              <SSearchForm>
                <SSearchCircle>
                  <label>
                    <SSearchIcon>
                      <Icon name="search" active={false} />
                    </SSearchIcon>
                    <SSearchInput>
                      <input
                        aria-activedescendant="typeaheadFocus-0.4227914250557654"
                        aria-label="Search query"
                        aria-autocomplete="list"
                        aria-owns="typeaheadDropdown-1"
                        autocapitalize="sentences"
                        autocomplete="off"
                        autocorrect="off"
                        placeholder="Search Log"
                        role="combobox"
                        spellcheck="false"
                        enterkeyhint="search"
                        type="text"
                        dir="auto"
                        aria-expanded="true"
                        autofocus=""
                      />
                    </SSearchInput>
                  </label>
                </SSearchCircle>
              </SSearchForm>
            </SSearchG>
          )}
        </>
      )}
    </>
  );
};

export default Center;

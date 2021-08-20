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
} from "@styles/clazz";
import { Vars } from "@styles/variables";

const SHeaderGeneral = styled.header`
  ${standard};
  ${userSelectNone};
  z-index: 3;
`;

const SGap = styled.div`
  ${standard};
  height: 53.5px;
`;

const SHeaderMain = styled.div`
  ${standard};
  ${mLRAuto}
  z-index: 2;

  transition-property: -webkit-transform, transform;
  transition-duration: 0.2s;

  height: 53px;

  top: -0.5px;
  right: 0px;
  left: 0px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  ${Vars((env) => ({
    "background-color": env.darkColor,
    "border-bottom-color": env.borderBottomColor,
  }))};

  position: fixed;
  padding-left: 16px;
  padding-right: 16px;
  ${flexRow};
`;

const SAvatarGeneral = styled.div`
  ${standard};
  ${flexstart};
  ${jCenter};
  min-width: 56px;
  min-height: 32px;
  align-self: stretch;
`;

const SAvatarCore = styled.div`
  ${standard};
  ${flexRow};
  ${aCenter};
  transition-property: background-color, box-shadow;
  outline-style: none;
  transition-duration: 0.2s;
  max-width: 100%;
  border-radius: 9999px;
  cursor: pointer;

  width: 32px;
  height: 32px;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png");
`;

const Header = () => {
  return (
    <SHeaderGeneral role="banner">
      <SGap />
      <SHeaderMain>
        <SAvatarGeneral>
          <SAvatarCore
            aria-expanded="false"
            aria-label="Profile menu Le Xuan Tien"
            tabindex="0"
            role="button"
            aria-haspopup="menu"
          ></SAvatarCore>
        </SAvatarGeneral>
      </SHeaderMain>
    </SHeaderGeneral>
  );
};

export default Header;

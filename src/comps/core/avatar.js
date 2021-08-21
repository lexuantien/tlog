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

const SAvatarG = styled.div`
  ${standard};
  ${flexstart};
  ${jCenter};
  min-width: 56px;
  min-height: 32px;
  align-self: stretch;
`;

const SAvatarM = styled.div`
  ${standard};
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

const Avatar = () => {
  return (
    <SAvatarG>
      <SAvatarM
        aria-expanded="false"
        aria-haspopup="menu"
        role="button"
        tabIndex="0"
      >
      </SAvatarM>
    </SAvatarG>
  );
};

export default Avatar;

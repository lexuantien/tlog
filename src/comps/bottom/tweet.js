import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

import { Vars } from "@styles/variables";
import {
  standard,
  basicInherit,
  userSelectNone,
  aCenter,
  mLRAuto,
  jCenter,
  flex,
  flexgrow,
  flexRow,
} from "@styles/clazz";
import Icons from "@comps/icons/nav/icon";

const StyledTweet = styled.aside`
  ${standard};
  ${mLRAuto};
  pointer-events: none !important;
  width: inherit;

  div {
    ${standard};

    right: 20px;
    bottom: 20px;
    align-self: flex-end;
    pointer-events: auto;
  }
`;

const StyledLink = styled(Link)`
  ${standard};
  ${basicInherit};
  ${userSelectNone};
  width: 56px;
  height: 56px;
  box-shadow: rgb(136 153 166 / 20%) 0px 0px 10px,
    rgb(136 153 166 / 25%) 0px 1px 3px 1px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-height: 52px;
  min-width: 52px;
  cursor: pointer;
  border-color: rgb(255, 255, 255);
  border-width: 0px;
  border-style: solid;
  border-radius: 9999px;
  ${Vars((env) => ({
    "background-color": env.blue,
  }))};

  ${flex};
  ${aCenter};
  ${jCenter};
  /* 
  div {
    ${basicInherit};
    
    cursor: pointer;
    min-width: 0px;
    font-weight: 700;
    font-size: 15px;
    font-family: TlogChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
    line-height: 20px;
    overflow-wrap: break-word;
    text-align: center;

    ${flexgrow}
    ${jCenter};
    ${flexRow}
    ${aCenter};
    ${flex}; */

  svg {
    fill: rgb(255, 255, 255);
    width: 24px;
    height: 24px;
    ${userSelectNone};
    vertical-align: text-bottom;
    max-width: 100%;
    position: relative;
    display: inline-block;
  }
  /* } */
`;

const Tweet = () => {
  return (
    <StyledTweet role="complementary">
      <div>
        <StyledLink aria-label="Compose a log" role="link" to="/compose/log">
          {/* <div> */}
          <Icons name="tweet" />
          {/* <span /> */}
          {/* </div> */}
        </StyledLink>
      </div>
    </StyledTweet>
  );
};

export default Tweet;

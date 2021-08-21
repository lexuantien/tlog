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
import Avatar from "@comps/core/avatar";
import Icon from "@comps/icons/icon";
import Circle from "../core/circle";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { simpleNavRoutes } from "@configs";

const SLeft = styled.div`
  ${standard};
  ${flexstart};
  ${jCenter};
  min-width: 56px;
  min-height: 32px;
  align-self: stretch;

  svg {
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
    position: relative;
    max-width: 100%;
    ${Vars((env) => ({
      color: env.iconColor,
      // fill: env.iconColor,
    }))};
    display: inline-block;
    fill: currentColor;
  }
`;

export const Left = () => {
  const [avatar, setAvatar] = useState(true);
  const loc = useLocation();
  const navigate = useNavigate();
  //

  useEffect(() => {
    const obj = simpleNavRoutes.find((e) => e === loc.pathname);
    if (obj !== undefined && !avatar) {
      setAvatar(true);
    } else if (obj === undefined) {
      setAvatar(false);
    }
  }, [loc]);

  return (
    <SLeft>
      {avatar ? (
        <Avatar />
      ) : (
        <Circle
          onClick={() => {
            navigate(-1);
          }}
          styled={{ marginLeft: "calc(-5px" }}
          btn={true}
        >
          <Icon name="back" />
        </Circle>
      )}
    </SLeft>
  );
};

export default Left;

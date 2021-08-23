import { useState } from "react";
import { styled } from "@linaria/react";
//
import Avatar from "@comps/core/avatar";
import BackButton from "../core/backBtn";
//
import { useLocationChange } from "@hooks";
import { Vars } from "@styles/variables";
import { standard, jCenter, flexstart } from "@styles/clazz";
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

  useLocationChange((currLoc) => {
    const obj = simpleNavRoutes.find((e) => e === currLoc.pathname);
    if (obj !== undefined && !avatar) {
      setAvatar(true);
    } else if (obj === undefined) {
      setAvatar(false);
    }
  });

  return (
    <SLeft>
      {avatar ? (
        <Avatar />
      ) : (
        <BackButton style={{ marginLeft: "calc(-5px)" }} />
      )}
    </SLeft>
  );
};

export default Left;

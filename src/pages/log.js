import { styled } from "@linaria/react";
import { Vars } from "@styles/variables";

import Header from "../comps/editor/header";
import Main from "../comps/editor/main";

const SContainer = styled.div`
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
`;

const Log = () => {
  return (
    <SContainer className="css-div-common r-f-g-1 r-s-1">
      <Header />
      <Main />
    </SContainer>
  );
};

export default Log;

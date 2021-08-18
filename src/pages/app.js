
import { styled } from "@linaria/react";
import {Vars} from "@styles/variables"

const Container = styled.div`
 ${Vars(env => ({
   "background-color": env.themeColor,
}))};
`;

const Header = styled.h1`
  line-height: 24px;
  font-size: 20px;
  ${Vars(env => ({
    color: env.textColor1,
}))};
`;

const App = () => {
  return (
    <Container>
      <Header>Home</Header>
    </Container>
  )
}

export default App;
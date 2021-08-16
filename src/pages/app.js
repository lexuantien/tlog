
import { styled } from "@linaria/react";
import ThemeDetect from "@styles/theme"

const Container = styled.div`
 ${ThemeDetect(t => ({
  "background-color": t.background,
}))};
`;

const Header = styled.h1`
  text-transform: uppercase;

  ${ThemeDetect(t => ({
  color: t.text,
}))};
`;

const App = () => {
  return (
    <Container>
      <Header>Le Xuan Tien</Header>
    </Container>
  )
}

export default App;
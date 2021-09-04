import { styled } from "@linaria/react";

const SLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return(
    <>
      <SLogin>
        <p>Hello</p>
      </SLogin>
    </>
  )
};

export default Login;

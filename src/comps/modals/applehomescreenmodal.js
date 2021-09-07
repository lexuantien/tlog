import { styled } from "@linaria/react";
import { Vars } from "@styles/variables";
import Icon from "@comps/icons/icon";
import { useIosScreenModal } from "@hooks";

import Modal from "./modal";

const AppleAddToHomeScreenModal = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  height: fit-content;
  width: fit-content;
  margin: auto;
  z-index: 1000;
  ${Vars((env) => ({
    "background-color": env.darkColor,
  }))};
`;

const ModalWrapper = styled.div`
  box-shadow: 0px 0px 20px 0px #656565;
  margin: 30px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 21px;
  height: 21px;
  opacity: 0.3;

  :hover {
    opacity: 1;
  }

  :before,
  :after {
    position: absolute;
    left: 8px;
    content: " ";
    height: 22px;
    width: 2px;
    ${Vars((env) => ({
      "background-color": env.iconLogo,
    }))};
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`;

const MainContent = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 5px 0;
  text-align: center;
`;

const Description = styled.p`
  margin: 5px 0;
  text-align: center;
  font-family: TLogChirp, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
`;

const Fotter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${Vars((env) => ({
    color: env.textColor1,
  }))};
  font-family: TLogChirp, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  font-size: 12px;
  svg {
    margin: 0 5px;
    width: 22px;
    ${Vars((env) => ({
      "background-color": "transparent",
    }))};
  }
`;

const SLogo = styled.div`
  line-height: 49px;
  letter-spacing: -0.8px;
  font-size: 44px;
  font-family: TLogChirpExtendedHeavy, Verdana, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  ${Vars((env) => ({
    color: env.textColor1,
  }))};

  span {
    text-decoration: underline;
    color: rgb(29, 161, 242);
  }
`;

const AppleHomeScreenModal = () => {
  const { isShowing, closeAddToHomeScreenModalForApple } = useIosScreenModal();

  return (
    <>
      <Modal isShowing={isShowing}>
        <AppleAddToHomeScreenModal>
          <ModalWrapper>
            <Close onClick={closeAddToHomeScreenModalForApple} />
            <MainContent>
              {/* <img class="app-logo" src="@/assets/logo.png" /> */}
              <SLogo>
                <span>T</span>
              </SLogo>
              {/* <Title>Install TLog</Title> */}
              <Description>
                Install this application to your home screen for quickly and
                easy access.
              </Description>
            </MainContent>
            <Fotter>
              Just tap
              <Icon name="share" />
              then 'Add to Home Screen'
            </Fotter>
          </ModalWrapper>
        </AppleAddToHomeScreenModal>
      </Modal>
    </>
  );
};

export default AppleHomeScreenModal;

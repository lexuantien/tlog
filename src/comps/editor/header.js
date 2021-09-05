import { styled } from "@linaria/react";
import { Vars } from "@styles/variables";
import BackButton from "../core/backBtn";

const SHeader = styled.div`
  height: 53px;
  z-index: 2;
`;

const SHeaderPosition = styled.div`
  width: 100%;
`;

const SHeaderBorder = styled.div`
  height: 53px;
  ${Vars((env) => ({
    "background-color": env.darkColor,
    "border-bottom-color": env.borderColor,
  }))};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const SHeaderDisplay = styled.div`
  height: 53px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;

const SHeaderLeft = styled.div`
  min-width: 56px;
  min-height: 32px;
  align-self: stretch;

  -webkit-box-align: start;
  align-items: flex-start;
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

const SHeaderMid = styled.div`
  height: 100%;
`;

const SHeaderRight = styled.div`
  min-width: 56px;
  min-height: 32px;

  -webkit-box-align: end;
  align-items: flex-end;

  align-self: stretch;
`;

const SHeaderRightButton = styled.div`
  ${Vars((env) => ({
    "background-color": env.blurBlue,
  }))};
  opacity: 0.5;
  min-height: 32px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-width: 32px;

  padding-left: 16px;
  padding-right: 16px;

  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;

  div {
    font-weight: 700;
    font-size: 15px;
    ${Vars((env) => ({
      color: env.textColor1,
      "font-family": env.fontFamily,
    }))};
    line-height: 20px;
    overflow-wrap: break-word;
    min-width: 0px;
    text-align: center;
    display: flex;

    span {
      font-size: 14px;
      line-height: 16px;
      font-family: inherit;
      overflow-wrap: break-word;
      min-width: 0px;

      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      color: inherit;
      font: inherit;
      white-space: inherit;
    }
  }
`;

const Header = () => {
  return (
    <>
      <SHeader className="css-div-common">
        <SHeaderPosition className="css-div-common r-p-fix r-l-0 r-t-0">
          <SHeaderBorder className="css-div-common">
            <SHeaderDisplay className="css-div-common r-a-center r-j-center r-f-d-row r-m-lr-auto ">
              <SHeaderLeft className="css-div-common r-j-center ">
                <BackButton style={{ marginLeft: "calc(-5px)" }} />
              </SHeaderLeft>
              <SHeaderMid className="css-div-common r-f-g-1 r-f-s-1 r-j-center" />
              <SHeaderRight className="css-div-common r-j-center">
                <SHeaderRightButton
                  aria-disabled="true"
                  role="button"
                  className="css-div-common r-u-s-none "
                >
                  <div
                    dir="auto"
                    className="css-text-common r-a-center r-j-center r-f-g-1 r-f-d-row"
                  >
                    <span className="css-text-common">Log</span>
                  </div>
                </SHeaderRightButton>
              </SHeaderRight>
            </SHeaderDisplay>
          </SHeaderBorder>
        </SHeaderPosition>
      </SHeader>
    </>
  );
};

export default Header;

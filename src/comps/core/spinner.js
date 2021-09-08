import { cx } from "@linaria/core";
import { css } from "@linaria/core";
import { useLoading } from "../../contexts/loading";

const loader_1 = css`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 22px;
    height: 22px;
    border: 3px solid #163952;
    border-top-color: rgb(29, 161, 242);
    border-top-style: groove;
    /* border-top-right-radius: 50%; */
    /* border-bottom-color: #dddddd; */
    border-radius: 50%;
    animation: loading 1.25s ease infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;

const Spinner = () => {
  const { loading } = useLoading();
  return <>{loading && <div className={cx(loader_1)} />}</>;
};

export default Spinner;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
import Circle from "./circle";
import Icon from "@comps/icons/icon";
//
import { useLocationChange } from "@hooks";

const BackButton = ({ style }) => {
  const [preUrl, setPreUrl] = useState(null);
  const navigate = useNavigate();

  useLocationChange((currLoc, prevLoc) => {
    setPreUrl(prevLoc);
  });

  return (
    <Circle
      onClick={() => {
        preUrl === null ? navigate("/home") : navigate(-1);
      }}
      style={style}
      btn={true}
    >
      <Icon name="back" />
    </Circle>
  );
};

export default BackButton;

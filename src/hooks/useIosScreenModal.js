import { useEffect, useState } from "react";
import { isIosOnBrowser } from "../utils/iosOnBrowser";

const useIosScreenModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const closeAddToHomeScreenModalForApple = () => {
    localStorage.setItem("addToHomeIosPromptLastDate", Date.now());
    setIsShowing(false);
  };

  useEffect(() => {

    if (isIosOnBrowser) {
      const addToHomeIosPromptLastDate = localStorage.getItem(
        "addToHomeIosPromptLastDate"
      );

      if (addToHomeIosPromptLastDate == null) {
        setIsShowing(true);
      }
    }
  }, []);

  return {
    isShowing,
    closeAddToHomeScreenModalForApple,
  };
};

export default useIosScreenModal;

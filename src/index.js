import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeLSVal from "@utils/storage";
import registerServiceWorker from './serviceWorkerRegistration';

import { App } from '@pages'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}


ReactDOM.render(
  <BrowserRouter>
    <div className={`theme-${ThemeLSVal()}`}>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
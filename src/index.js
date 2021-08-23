import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeLSVal from "@utils/storage";
import registerServiceWorker from "./serviceWorkerRegistration";

import { App } from "@pages";
import { globalsClazz } from "@styles/globals";

import { createBrowserHistory } from "history";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

// '0' to assign the first (and only `HTML` tag)
var html = document.getElementsByTagName("html")[0];
html.setAttribute("class", `theme-${ThemeLSVal()} ${globalsClazz}`);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
// ,
//     "webpack-dev-server": "webpack-dev-server",
//     "serve": "yarn build && serve -s dist"
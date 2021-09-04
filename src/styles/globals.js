import { css } from "@linaria/core";

import { fonts } from "./fonts";
import { Vars } from "@styles/variables";
import { standard } from "@styles/clazz";

export const globalsClazz = css`
  :global() {
    ${fonts}

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    /* Scrollbar Styles */
    html {
      box-sizing: border-box;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.54);
      touch-action: manipulation;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overscroll-behavior-y: none;
      font-size: 15px;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body::-webkit-scrollbar {
      width: 12px;
    }

    body::-webkit-scrollbar-track {
      background: rgb(242, 242, 242);
    }

    body::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.54);
      border: 3px solid rgb(242, 242, 242);
      border-radius: 10px;
    }
    /* End Scrollbar Styles */

    svg:not(:root) {
      overflow: hidden;
    }

    body {
      margin: 0;
      /* padding: 0; */
      unicode-bidi: embed;
      ${Vars((env) => ({
        "background-color": env.themeColor,
      }))};
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
        constant(safe-area-inset-bottom) constant(safe-area-inset-left);
      padding: env(safe-area-inset-top) env(safe-area-inset-right)
        env(safe-area-inset-bottom) env(safe-area-inset-left);

      #root {
        ${standard}
        flex: 1;
        /* min-height: 603px; */
        height: 100vh;
        width: 100%;
        z-index: 0;
        pointer-events: none !important;
      }
    }

    form {
      margin: 0;
      padding: 0;
    }

    label {
      ${Vars((env) => ({
        color: env.textColor1,
      }))};
      cursor: default;
      font-weight: 600;
      vertical-align: middle;
    }

    body,
    button,
    input,
    label,
    select,
    textarea {
      font-family: "TlogChirp", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
      font-size: 12px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      ${Vars((env) => ({
        color: env.textColor1,
      }))};
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 14px;
    }

    h4,
    h5,
    h6 {
      font-size: 12px;
    }

    p {
      margin: 1em 0;
    }

    b,
    strong {
      font-weight: 600;
    }

    a {
      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      margin: 0;
    }

    img {
      border: 0;
    }

    hr {
      border-width: 0;
      height: 1px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
`;

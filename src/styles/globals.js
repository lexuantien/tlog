import { css } from "@linaria/core";

import { fonts } from "./fonts";
import { Vars } from "@styles/variables";

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
      direction: ltr;
      line-height: 1.34;
      margin: 0;
      padding: 0;
      unicode-bidi: embed;

      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
      }

    }

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      vertical-align: middle;
      transition-property: fill,stroke;
      ${Vars(env => ({
  "transition-duration": env.fdsFas,
  "transition-timing-function": env.fdsSoft,
  "fill": env.secondaryIcon,
}))};
      
    }

    form {
      margin: 0;
      padding: 0
    }

    label {
      cursor: default;
      font-weight: 600;
      vertical-align: middle
    }
 

    body,
    button,
    input,
    label,
    select,
    textarea {
      font-family: 'TlogChirp', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 12px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      margin: 0;
      padding: 0
    }

    h1 {
      font-size: 14px
    }

    h4,
    h5,
    h6 {
        font-size: 12px
    }

    p {
      margin: 1em 0
    }

    b,
    strong {
      font-weight: 600
    }

    a {
    cursor: pointer;
    text-decoration: none;

      &:hover {
        text-decoration: underline
      }
    }

    button {
      margin: 0
    }

    img {
      border: 0
    }

    hr {
      border-width: 0;
      height: 1px
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0
    }

  }
`;
import { css } from "@linaria/core";

// import { fonts } from "./fonts";
import { Vars } from "@styles/variables";

// padding: constant(safe-area-inset-top) constant(safe-area-inset-right)
// constant(safe-area-inset-bottom) constant(safe-area-inset-left);
// padding: env(safe-area-inset-top) env(safe-area-inset-right)
// env(safe-area-inset-bottom) env(safe-area-inset-left);

// ${fonts}
export const globalsClazz = css`
  :global() {
    svg:not(:root) {
      overflow: hidden;
    }

    body {
      ${Vars((env) => ({
        "background-color": env.themeColor,
      }))};
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
      font-family: "TLogChirp", -apple-system, BlinkMacSystemFont, "Segoe UI",
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

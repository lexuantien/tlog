import { css } from "@linaria/core";

import ChirpBold from "@fonts/chirp-bold.woff";
import ChirpHeavy from "@fonts/chirp-heavy.woff";
import ChirpMedium from "@fonts/chirp-medium.woff";
import ChirpRegular from "@fonts/chirp-regular.woff";

export const fonts = css`
  @font-face {
    font-family: 'TlogChirp' ;
    src: url(${ChirpRegular}) format("woff");
    font-weight: 400;
    font-style: 'normal';
    font-display: 'swap';
  }
  @font-face {
    font-family: 'TlogChirp' ;
    src: url(${ChirpMedium}) format("woff");
    font-weight: 500;
    font-style: 'normal';
    font-display: 'swap';
  }
  @font-face {
    font-family: 'TlogChirp' ;
    src: url(${ChirpBold}) format("woff");
    font-weight: 700;
    font-style: 'normal';
    font-display: 'swap';
  }
  @font-face {
    font-family: 'TlogChirp' ;
    src: url(${ChirpHeavy}) format("woff");
    font-weight: 800;
    font-style: 'normal';
    font-display: 'swap';
  }
`;
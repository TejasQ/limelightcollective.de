import { css } from "@emotion/core";

export default css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: body;
    background: black;
  }

  @font-face {
    font-family: heading;
    src: url("/fonts/headings.ttc");
  }

  @font-face {
    font-family: body;
    src: url("/fonts/body.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 200;
    font-style: italic;
    src: url("/fonts/body-thinitalic.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 200;
    src: url("/fonts/body-thin.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 600;
    font-style: italic;
    src: url("/fonts/body-semibolditalic.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 600;
    src: url("/fonts/body-semibold.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 300;
    font-style: italic;
    src: url("/fonts/body-lightitalic.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 300;
    src: url("/fonts/body-light.ttf");
  }

  @font-face {
    font-family: body;
    font-style: italic;
    src: url("/fonts/body-italic.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 700;
    src: url("/fonts/body-bold.ttf");
  }

  @font-face {
    font-family: body;
    font-weight: 700;
    font-style: italic;
    src: url("/fonts/body-bolditalic.ttf");
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  p {
    line-height: 32px;
    font-size: 17px;
  }
`;

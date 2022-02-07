import { createGlobalStyle } from "styled-components";
import KumbhSansRegularWoff2 from "../assets/fonts/KumbhSans-Regular.woff2";
import KumbhSansRegularWoff from "../assets/fonts/KumbhSans-Regular.woff";
import KumbhSansBoldWoff2 from "../assets/fonts/KumbhSans-Bold.woff2";
import KumbhSansBoldWoff from "../assets/fonts/KumbhSans-Bold.woff";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "KumbhSans";
    src: url(${KumbhSansRegularWoff2}) format("woff2"),
      url(${KumbhSansRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "KumbhSans";
    src: url(${KumbhSansBoldWoff2}) format("woff2"),
      url(${KumbhSansBoldWoff}) format("woff");
    font-weight: bold;
    font-style: normal;
  }

  html {
    --light-grey: #f4f6f8;
    --dark-grey: #6e8098;
    --light-gray: var(--light-grey);
    --dark-gray: var(--dark-grey);
    --near-black: #19202D;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: "KumbhSans";
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;

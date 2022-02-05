import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "KumbhSans";
    src: url("./assets/fonts/KumbhSans-Regular.woff2") format("woff2"),
      url("./assets/fonts/KumbhSans-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "KumbhSans";
    src: url("./assets/fonts/KumbhSans-Bold.woff2") format("woff2"),
      url("./assets/fonts/KumbhSans-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  html {
    --light-grey: #f4f6f8;
    --dark-grey: #6e8098;
    --light-gray: var(--light-grey);
    --dark-gray: var(--dark-grey);
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

  input[type="checkbox"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
    background-color: #efefef;
    margin-right: 1rem;
    &:hover {
      cursor: pointer;
    }
    &:checked {
      background-color: red;
    }
  }
`;

export default GlobalStyles;

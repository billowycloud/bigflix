import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background: rgba(20, 20, 20, 1);
    color: white;
  }
  html {
    height: 100%;
}
`;

export default GlobalStyles;

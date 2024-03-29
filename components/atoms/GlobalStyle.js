import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --internet: #029fed;
    --html: #ffa629;
    --css: #14ae5c;
    --javascript: #ffcd29;
  }
  html,
  body {
    color: #fff;
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: #0C091D;
    font-family: Inter, sans-serif;
  }
  #__next {
    height: 100%;
  }
  a {
    color: var(--primary);
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

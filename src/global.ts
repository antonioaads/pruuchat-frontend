import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-main-pruurple: #781EBE;
    --color-light-pruurple: #AF67E7;
    --color-light-gray: #F2F2F2;
    --color-milk-white: #FCFCFC;
    --color-chat-bubble: #F2F2F2;
    --color-input-bg: #FCFCFC;
    --color-input-font: #939393;
    --color-font-black: #000000;
    --color-font-white: #FFFFFF;
    --color-scrolltrack: #FCFCFC;
    --color-scrollbar: #F2F2F2;
  }

  @media (min-width: 768px)
  {
    :root {
      --header-height: 86px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #FFFFFF;
    color: #29292e;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

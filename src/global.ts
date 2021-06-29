import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    --primary-color: #781EBE;
    --light-gray: #F2F2F2;
  }

  body {
    background: #F8F8F8;
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

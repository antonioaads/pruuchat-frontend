import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-main-pruurple: #781EBE;
    --color-light-pruurple: #AF67E7;
    --color-secundary-pruurple: #AF67E7;
    --color-light-gray: #F2F2F2;
    --color-milk-white: #FCFCFC;
    --color-chat-bubble: #F2F2F2;
    --color-input-bg: #FCFCFC;
    --color-input-font: #939393;
    --color-font-black: #241d29;
    --color-font-white: #FFFFFF;
    --color-scrolltrack: #FCFCFC;
    --color-scrollbar: #F2F2F2;
    --color-background: #FFFFFF;
    --color-background-selected: #DED0F0;
    --color-background-hover: #f1e8fc;


    --first-media-query: 1041px;
  }

  @media (min-width: 768px)
  {
    :root {
      --header-height: 86px;
      --empty-purple-space-height: 70px;
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
    height: 100vh;
  }

  body {
    overflow: hidden;
    background: #FFFFFF;
    color: #29292e;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 16px 'Roboto', sans-serif;
  }

  .sideCard{
    z-index: 1000;
  }

  @media(max-width: 680px){
    body.menu-visivel .chat {
      // left: 200px;
      z-index: 10;
    }
    body.menu-visivel  .sideCard  {
      left: 10px;
      background-color: white;
    }
    body.menu-visivel {
      overflow-x: hidden;
    }
  }

  button {
    cursor: pointer;
  }

  /* Chrome, Edge, Safari */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-scrolltrack);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar);
    border: 3px solid var(--color-scrollbar);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-scrolltrack) var(--color-scrollbar);
`;

export default GlobalStyles;

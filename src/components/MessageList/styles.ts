import styled from "styled-components";

export const List = styled.ul`
  flex: 1;
  list-style-type: none;
  padding: 0px 5%;
  margin: 20px 0px;
  overflow-y: scroll;
  scrollbar-width: thin;

  * + * {
    margin-top: 10px;
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

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
`;

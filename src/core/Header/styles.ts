import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: var(--header-height);
  background-color: var(--color-main-pruurple);
  padding: 1em 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-logged-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5em;
  }

  .user-logged-container .fullname {
    color: var(--color-light-gray);
    font-weight: bold;
    font-size: 18px;
  }

  .logo {
    width: 150px;
  }
`;

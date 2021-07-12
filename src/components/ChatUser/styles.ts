import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1em;
  background-color: var(--color-main-pruurple); 
  padding: 10px;
  border-radius: 5px;

  .fullname {
    color: var(--color-light-gray);
    font-weight: bold;
    font-size: 18px;
  }

  .status {
    font-size: 12px;
    color: #fff;
  }
`;

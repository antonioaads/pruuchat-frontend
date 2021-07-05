import styled from "styled-components";

export const Container = styled.div`
  .avatar-initials,
  .avatar-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .avatar-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-gray);
    color: var(--primary-color);
    font-weight: bold;
  }
`;

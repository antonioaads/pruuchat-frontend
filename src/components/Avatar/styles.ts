import styled from "styled-components";

export const Container = styled.div`
  .avatar-initials,
  .avatar-img {
    border-radius: 50%;
  }

  .avatar-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light-gray);
    color: var(--color-main-pruurple);
    font-weight: bold;
  }

  .avatar-small {
    width: 50px;
    height: 50px;
  }

  .avatar-x-large {
    width: 300px;
    height: 300px;
    max-width: 300px;
    max-height: 300px;
    font-size: 70px;
  }

  @media (max-width: 1041px)
  {
    .avatar-x-large {
      width: 100%;
      height: 100%;
    
    }
  }
`;

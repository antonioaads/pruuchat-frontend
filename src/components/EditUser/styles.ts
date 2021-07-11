import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5em;

  .close-icon {
    align-self: flex-start;
    width: 22px;
    height: 22px;
    color: var(--color-font-black);

    :hover {
      cursor: pointer;
    }
  }

  .fullname {
    font-size: 24px;
    font-weight: 700;
    margin-top: 0.25em;
    color: var(--color-font-black);
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
      margin-top: 1.5em;
    }
  }

  .btn-save {
    display: block;
    margin: 2.5em auto 0 auto;
    width: 80%;
  }
`;

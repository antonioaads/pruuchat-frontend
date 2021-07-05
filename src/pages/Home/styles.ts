import styled from "styled-components";

export const Container = styled.div`
  height: inherit;
  .page-content {
    position: absolute;
    inset: var(--header-height) 0 0 0;
    display: flex;
    flex-direction: row;
    padding-left: 3em;
    padding-right: 5.5em;

    > *:not(:first-child) {
      flex: 1;
    }
  }
`;

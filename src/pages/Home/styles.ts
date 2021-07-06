import styled from "styled-components";

export const HomeContainer = styled.div`
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

  .empty-purple-space {
    position: absolute;
    background-color: var(--color-main-pruurple);
    height: calc(var(--empty-purple-space-height) + var(--header-height));
    width: 100%;
    top: 0;
    z-index: -1;
  }
`;

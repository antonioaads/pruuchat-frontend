import styled from "styled-components";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.5em;
  width: 100%;
  height: 77px;
  background-color: ${({ selected }) =>
    selected
      ? "var(--color-background-selected)"
      : "var(--color-background)"};
  ;
  cursor: pointer;
  border-bottom: solid 1px var(--color-light-gray);

  :hover {
    background-color: ${({ selected }) =>
      selected
        ? "var(--color-background-selected)"
        : "var(--color-background-hover)"};
    ;
  }

  .center-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.5em;
    width: calc(100% - 100px);


    h4 {
      font: 700 16px 'Montserrat', sans-serif;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    h5 {
      font: 400 14px 'Raleway', sans-serif;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .info-area {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    span {
      flex: 1;
      font: 400 14px 'Raleway', sans-serif;
    }
  }
`;

export const NotificationCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-font-white);
  background-color: var(--color-main-pruurple);
  width: 26px;
  height: 22px;
  border-radius: 50%;
  font: 300 14px 'Poppins', sans-serif;
`;

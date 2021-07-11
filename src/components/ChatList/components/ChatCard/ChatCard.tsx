import styled from "styled-components";
import Avatar from "../../../Avatar";

interface ContainerProps {
  selected?: boolean;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

  .initial-area {
    display: flex;
    max-width: 100%;

    .center-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1.5em;


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

const NotificationCount = styled.div`
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

interface ChatCardProps {
  selected?: boolean;
  name: string;
  lastMessage: string;
  timeLastMessage: string;
  notificationCount?: number;
}

const ChatCard = ({ selected, name, lastMessage, timeLastMessage, notificationCount }: ChatCardProps): React.ReactElement => (
  <Container selected={selected}>
    <div className="initial-area">
      <Avatar fullName={name} />
      <div className="center-area">
        <h4>{name}</h4>
        <h5>{lastMessage}</h5>
      </div>
    </div>
    <div className="info-area">
      <span>
        {timeLastMessage}
      </span>
      {notificationCount && (<NotificationCount>
        {notificationCount}
      </NotificationCount>)}
    </div>
  </Container>
)

export default ChatCard;

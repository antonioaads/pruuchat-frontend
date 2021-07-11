import Avatar from "../../../Avatar";
import { Container, NotificationCount } from "./styles";

interface ChatCardProps {
  selected?: boolean;
  name: string;
  lastMessage: string;
  timeLastMessage: string;
  notificationCount?: number;
}

const ChatCard = ({ selected, name, lastMessage, timeLastMessage, notificationCount }: ChatCardProps): React.ReactElement => (
  <Container selected={selected}>
    <Avatar fullName={name} />
    <div className="center-area">
      <h4>{name}</h4>
      <h5>{lastMessage}</h5>
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

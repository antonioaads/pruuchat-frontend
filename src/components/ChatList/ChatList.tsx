import { Container } from "./styles";
import { AddUserButton } from "../CircularButton/CircularButton";
import ChatCard from "./components/ChatCard";
import { UserInfo } from "../../pages/Home/Home";

interface ChatListProps {
  usersInfo?: Record<string, UserInfo>;
  setSelectedUser?: (id: number) => void;
}

const ChatList = ({ usersInfo, setSelectedUser }: ChatListProps): React.ReactElement => {

  return (
    <Container>
      {usersInfo
        ? Object.keys(usersInfo).map(k => {
          const userInfo = usersInfo[k];
          const lastMessage = userInfo.messages[userInfo.messages.length-1];
          const lastMessageDate = new Date(lastMessage?.timestamp);

          return (
            <ChatCard
              key={String(userInfo.user.id)}
              name={userInfo.user.name || ""}
              lastMessage={lastMessage?.content}
              timeLastMessage={
                lastMessage
                  ? `${`${lastMessageDate.getHours()}`.padStart(2, '0')}:${`${lastMessageDate.getMinutes()}`.padStart(2, '0')}`
                  : ""
              }
              notificationCount={userInfo.unreadCount}
              onClick={() => setSelectedUser && setSelectedUser(usersInfo[k].user.id)}
            />
          )
        })
        : null
      }

      <h4>
        Adicione mais amigos
      </h4>
      <AddUserButton />
    </Container>
  );
};

export default ChatList;

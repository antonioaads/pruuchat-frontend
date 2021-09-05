import { Container } from "./styles";
import { AddUserButton } from "../CircularButton/CircularButton";
import ChatCard from "./components/ChatCard";
import { Dispatch, SetStateAction } from "react";
import { UserInfo } from "../../pages/Home/Home";

interface ChatListProps {
  usersInfo?: Record<string, UserInfo>;
  setSelectedUser?: Dispatch<SetStateAction<number>>;
}

const ChatList = ({ usersInfo, setSelectedUser }: ChatListProps): React.ReactElement => {

  return (
    <Container>
      {usersInfo
        ? Object.keys(usersInfo).map(k => (
          <ChatCard
            key={String(usersInfo[k].user.id)}
            name={usersInfo[k].user.name || ""}
            lastMessage="Tô pilotando aqui agora texto texto texto texto"
            timeLastMessage="13:09"
            notificationCount={2}
            onClick={() => setSelectedUser && setSelectedUser(usersInfo[k].user.id)}
          />
        ))
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

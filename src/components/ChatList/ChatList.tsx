import { Container } from "./styles";
import { AddUserButton } from "../CircularButton/CircularButton";
import ChatCard from "./components/ChatCard";

const ChatList = (): React.ReactElement => {

  return (
    <Container>
      <ChatCard
        name="Antônio Tony"
        lastMessage="Tô pilotando aqui agora texto"
        timeLastMessage="13:09"
        notificationCount={2}
      />

      <ChatCard
        name="Guilherme GZ"
        lastMessage="Peguei 150 no supino"
        timeLastMessage="13:00"
        notificationCount={4}
      />

      <ChatCard
        selected
        name="Rodrigo God"
        lastMessage="Para de me encher o saco"
        timeLastMessage="13:05"
      />

      <h4>
        Adicione mais amigos
      </h4>
      <AddUserButton />
    </Container>
  );
};

export default ChatList;

import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Header from "../../core/Header";
import Chat from "../../core/Chat";
import { Message } from "../../components/MessageList/types";
import SideCard from "../../components/SideCard";
import EditUser from "../../components/EditUser";
import ChatList from "../../components/ChatList";
import { IUser, useUserContext } from "../../provider/UserProvider";
import api from "../../api";
import { useHistory } from "react-router";
import routersDefinitions from "../../utils/routersDefinitions";

type ChatState = {
  messageList: Array<Message>;
  currentMessage: Message | null;
};

export type UserInfo = {
  user: IUser;
  messages: Array<Message>
};

const Home = (): React.ReactElement => {
  const [chatState, setChatState] = useState<ChatState>({
    messageList: messages,
    currentMessage: null,
  });

  const [profileSelected, setProfileSelected] = useState<boolean>(false);

  const { user } = useUserContext();
  const history = useHistory();
  const [usersInfo, setUsersInfo] = useState<Record<string, UserInfo>>({});
  const [selectedUser, setSelectedUser] = useState<number>(0);
  useEffect(() => {
    let isMounted = true;
    if (user) {
      api.getUsers(user.token)
        .then(list => {
          if (isMounted) {
            const temp: Record<string, UserInfo> = {};
            list.forEach(u => temp[u.id] = {
              user: u,
              messages: []
            })
            setUsersInfo(temp);
          }
        });
    }
    return () => { isMounted = false };
  }, []);

  useEffect(() => {
    if (!user) history.push(routersDefinitions.login)
  }, [user]);

  const _onSendClick = (msg: string) => {
    if (msg === '' && !chatState.currentMessage) return
    setChatState(({ messageList, currentMessage }: ChatState) => ({
      messageList: messageList.concat(
        currentMessage
          ? { content: msg, owner: true, image: currentMessage.image }
          : { content: msg, owner: true }
      ),
      currentMessage: null,
    }));
  };

  const _handleImageFile = (file: File) => {
    // carregar para exibir imagem em um tag img
    // código apenas "placeholder" pra quando integrar com o back
    const reader = new FileReader();
    reader.onload = () => {
      setChatState((previousState: ChatState) => ({
        messageList: previousState.messageList,
        currentMessage: { content: "", owner: true, image: reader.result },
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <HomeContainer>
      <Header
        fullname="Guilherme Giacomin"
        profilePictureUrl="https://avatars.githubusercontent.com/u/54778237?v=4"
        avatarOnClick={() => setProfileSelected(true)}
      />
      <div className="empty-purple-space"></div>
      <div className="page-content">
        <SideCard
          content={profileSelected
            ? <EditUser closeCallback={() => setProfileSelected(false)}/>
            : <ChatList usersInfo={usersInfo} setSelectedUser={setSelectedUser} />
          }
        />
        <Chat
          messageList={usersInfo[selectedUser]?.messages}
          onSendClick={_onSendClick}
          handleImageFile={_handleImageFile}
          imageToBeSent={
            chatState.currentMessage && chatState.currentMessage.image
          }
        />
      </div>
    </HomeContainer>
  );
};

const messages: Array<Message> = [
  { content: "eae", owner: false },
  { content: "eae bro", owner: true },
  { content: "como vai?", owner: false },
  { content: "tudo bem e vc?", owner: true },
  { content: "suave na nave", owner: false },
  { content: "e o trabalho", owner: true },
  { content: "fluindo de boas?", owner: true },
  { content: "ta no papo mano", owner: false },
  { content: "olha só", owner: false },
  {
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis.",
    owner: false,
  },
  { content: "boa, to vendo 🙄", owner: true },
];

export default Home;

import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Header from "../../core/Header";
import Chat from "../../core/Chat";
import { Message } from "../../components/MessageList/types";
import SideCard from "../../components/SideCard";
import EditUser from "../../components/EditUser";
import ChatList from "../../components/ChatList";
import { IUser, useUser } from "../../provider/UserProvider";
import api from "../../api";
import { useHistory } from "react-router";
import routersDefinitions from "../../utils/routersDefinitions";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import deepCopy from "../../utils/deepCopy";


export type UserInfo = {
  user: IUser;
  messages: Array<Message>;
  unreadCount: number;
};

let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const Home = (): React.ReactElement => {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);

  const [profileSelected, setProfileSelected] = useState<boolean>(false);

  const { user } = useUser();
  const history = useHistory();
  const [usersInfo, setUsersInfo] = useState<Record<string, UserInfo>>({});
  const [selectedUser, setSelectedUser] = useState<number>(1);

  const updateSelectedUser = (id: number) => {
    setSelectedUser(id);
    setUsersInfo(prev => {
      const temp = deepCopy(prev);
      if (usersInfo[id]) {
        usersInfo[id].unreadCount = 0;
      }

      return temp;
    });
  };

  useEffect(() => {
    let isMounted = true;
    if (user) {
      api.getFriends(user.token)
        .then(list => {
          if (isMounted) {
            const temp: Record<string, UserInfo> = {};
            list.forEach(u => temp[u.id] = {
              user: u,
              messages: [],
              unreadCount: 0
            })
            setUsersInfo(temp);
          }
        });
    }
    return () => { isMounted = false };
  }, []);

  useEffect(() => {
    if (!user) return history.push(routersDefinitions.login);

    socket = io(`${process.env.REACT_APP_SOCKET_PATH}`, { query: {id: String(user.id)} });

    return () => { socket.disconnect() }
  }, [user]);

  useEffect(() => {
    if (!user) return history.push(routersDefinitions.login);

    socket.off("message");
    socket.on("message", ({ originId, destinationId, text, timestamp }) => {
      console.log(originId, destinationId, text);
      setUsersInfo(prev => {
        const owner = originId == user?.id;
        const chatId = owner ? destinationId : originId;

        const temp: Record<string, UserInfo> = deepCopy(prev);


        if (temp[chatId]) {
          temp[chatId].messages.push({
            content: text,
            owner,
            timestamp
          });

          console.log(selectedUser, chatId);
          if (selectedUser != chatId && !owner) {
            temp[chatId].unreadCount += 1;
          }
        }

        return temp;
      });
    });
  }, [user, selectedUser]);

  const _onSendClick = (msg: string) => {
    if (msg === '' && !currentMessage) return

    socket.emit("chat", {
      originId: user?.id,
      destinationId: selectedUser,
      text: msg
    })

    setCurrentMessage(null);

    // setChatState(({ messageList, currentMessage }: ChatState) => ({
    //   messageList: messageList.concat(
    //     currentMessage
    //       ? { content: msg, owner: true, image: currentMessage.image }
    //       : { content: msg, owner: true }
    //   ),
    //   currentMessage: null,
    // }));
  };

  // const _handleImageFile = (file: File) => {
  //   // carregar para exibir imagem em um tag img
  //   // código apenas "placeholder" pra quando integrar com o back
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setChatState((previousState: ChatState) => ({
  //       messageList: previousState.messageList,
  //       currentMessage: { content: "", owner: true, image: reader.result },
  //     }));
  //   };
  //   reader.readAsDataURL(file);
  // };

  return (
    <HomeContainer>
      <Header
        fullname={user?.name || ""}
        profilePictureUrl={user?.picture || ""}
        avatarOnClick={() => setProfileSelected(true)}
      />
      <div className="empty-purple-space"></div>
      <div className="page-content">
        <SideCard
          content={profileSelected
            ? <EditUser closeCallback={() => setProfileSelected(false)}/>
            : <ChatList
                usersInfo={usersInfo}
                setSelectedUser={updateSelectedUser}
              />
          }
        />
        <Chat
          selectedUser={usersInfo[selectedUser]?.user}
          messageList={usersInfo[selectedUser]?.messages}
          onSendClick={_onSendClick}
          // handleImageFile={_handleImageFile}
          // imageToBeSent={
          //   chatState.currentMessage && chatState.currentMessage.image
          // }
        />
      </div>
    </HomeContainer>
  );
};

export default Home;

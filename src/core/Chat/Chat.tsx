import React from "react";
import { ChatContainer } from "./styles";
import MessageList from "../../components/MessageList";
import ChatInput from "../../components/ChatInput";
import ChatUser from "../../components/ChatUser";
import { Message } from "../../components/MessageList/types";

type ChatProps = {
  messageList?: Array<Message>;
  onSendClick?: (message: string) => void;
};

const Chat = ({ messageList, onSendClick }: ChatProps): React.ReactElement => (
  <ChatContainer>
    <ChatUser />
    <MessageList messageList={messageList} />
    <ChatInput onSendClick={onSendClick} />
  </ChatContainer>
);

export default Chat;

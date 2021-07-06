import React from "react";
import { ChatContainer } from "./styles";
import MessageList from "../../components/MessageList";
import { Image, Message } from "../../components/MessageList/types";
import ChatInput from "../../components/ChatInput";
import { HandleImageFileType } from "../../components/DropZone/types";
import ChatUser from "../../components/ChatUser";

type ChatProps = {
  messageList?: Array<Message>;
  onSendClick?: (message: string) => void;
  handleImageFile?: HandleImageFileType;
  imageToBeSent?: Image;
};

const Chat = ({
  messageList,
  onSendClick,
  handleImageFile,
  imageToBeSent,
}: ChatProps): React.ReactElement => {
  return (
    <ChatContainer>
      <ChatUser />
      <MessageList messageList={messageList} />
      <ChatInput
        onSendClick={onSendClick}
        handleImageFile={handleImageFile}
        imageToBeSent={imageToBeSent}
      />
    </ChatContainer>
  );
};

export default Chat;

import React from 'react';
import { ChatContainer } from './styles';
import MessageList from '../../components/MessageList';
import { Message } from '../../components/MessageList/types';
import ChatInput from '../../components/ChatInput';
import { HandleImageFileType } from '../../components/DropZone/types';

type ChatProps = {
    messageList?: Array<Message>,
    onSendClick?: (message: string) => void,
    handleImageFile?: HandleImageFileType
};

const Chat = ({ messageList, onSendClick, handleImageFile }: ChatProps): React.ReactElement => {    
    return (
        <ChatContainer>
            <MessageList messageList={messageList} />
            <ChatInput onSendClick={onSendClick} handleImageFile={handleImageFile}/>
        </ChatContainer>
    );
};
  
export default Chat;

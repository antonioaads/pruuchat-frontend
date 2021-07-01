import React from 'react';
import { ChatContainer } from './styles';
import MessageList from '../../components/MessageList';
import TextInput from '../../components/TextInput';
import { Message } from '../../components/MessageList/types';

type ChatProps = {
    messageList?: Array<Message>,
    onSendClick?: (message: string) => void
};

const Chat = ({ messageList, onSendClick }: ChatProps): React.ReactElement => (
    <ChatContainer>
        <MessageList messageList={messageList} />
        <TextInput onSendClick={onSendClick}/>
    </ChatContainer>
);
  
export default Chat;

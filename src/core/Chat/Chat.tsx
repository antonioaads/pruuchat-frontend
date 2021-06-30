import React, { useRef, useEffect } from 'react';
import { ChatContainer, MessageList, MessageItem } from './styles';
import { default as TextInput } from '../../components/TextInput';
import { Message } from './types';

type ChatProps = {
    messageList?: Array<Message>,
    onSendClick?: (message: string) => void
};

const Chat = ({ messageList, onSendClick }: ChatProps): React.ReactElement => {
    const bottomRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        if(bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <ChatContainer>
            <MessageList>
                { messageList &&
                    messageList.map((msg, index) => (
                        <MessageItem
                            key={index}
                            owner={msg.owner}
                            last={messageList[index+1] && (messageList[index+1].owner !== msg.owner)}
                        >
                            {msg.content}
                        </MessageItem>
                    ))
                }
                <span ref={bottomRef}></span>
            </MessageList>
            <TextInput onSendClick={onSendClick}/>
        </ChatContainer>
    )
};
  
export default Chat;

import React, { useRef, useEffect } from 'react';
import MessageItem from '../MessageItem';
import { Message } from './types';
import { List } from './styles';

type MessageListProps = {
    messageList?: Array<Message>
};

const MessageList = ({ messageList }: MessageListProps): React.ReactElement => {
    const bottomRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        if(bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <List>
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
        </List>
    )
};
  
export default MessageList;

import React from 'react';
import { MessageContainer, MessageImage } from './styles'

type MessageItemProps = {
    owner?: boolean,
    last?: boolean,
    image?: boolean
};

const MessageItem = ({owner, last, image, ...props}: MessageItemProps & React.HTMLAttributes<HTMLLIElement>): React.ReactElement => (
    <MessageContainer owner={owner} last={last} image={image} {...props}>
        {image
            ? <MessageImage src={String(props.children)}/>
            : props.children
        }
    </MessageContainer>
)

export default MessageItem;

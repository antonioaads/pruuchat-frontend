import React from 'react';
import { Image } from '../MessageList/types';
import { MessageContainer, MessageImage, MessageText } from './styles'

type MessageItemProps = {
    owner?: boolean,
    last?: boolean,
    image?: Image
};

const MessageItem = ({owner, last, image, ...props}: MessageItemProps & React.HTMLAttributes<HTMLLIElement>): React.ReactElement => (
    <MessageContainer owner={owner} last={last} image={Boolean(image)} {...props}>
        {image
            && <MessageImage src={String(image)}/>
        }
        <MessageText image={Boolean(image)}>
            {
                props.children
            }
        </MessageText>
    </MessageContainer>
)

export default MessageItem;

import styled from "styled-components";

type MessageItemProps = {
    owner?: boolean,
    last?: boolean
};

const MessageItem = styled.li<MessageItemProps>`
    padding: 10px 20px;
    width: fit-content;
    max-width: 400px;
    word-break: break-word;
    margin-left: ${props => props.owner ? 'auto' : 'initial'};
    border-radius: ${
        props => props.last
            ? props.owner
                ? '10px 10px 0px 10px'
                : '10px 10px 10px 0px'
            : '10px'
    };

    background-color: ${props => props.owner ? 'var(--color-main-pruurple)' : 'var(--color-chat-bubble)'};
    color: ${props => props.owner ? 'var(--color-font-white)' : 'var(--color-font-black)'};
`;

export default MessageItem;

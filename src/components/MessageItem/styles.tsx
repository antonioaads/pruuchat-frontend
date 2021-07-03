import styled from 'styled-components';

type MessageContainerProps = {
    owner?: boolean,
    last?: boolean,
    image?: boolean
};

export const MessageContainer = styled.li<MessageContainerProps>`
    padding: ${props => props.image ? '15' : '10'}px 20px;
    width: fit-content;
    ${props => props.image? '' : 'max-width: 400px;'}
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

export const MessageImage = styled.img`
    max-width: 960px;
    max-height: 540px;
`

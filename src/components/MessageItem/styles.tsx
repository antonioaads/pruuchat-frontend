import styled from 'styled-components';

type MessageContainerProps = {
    owner?: boolean,
    last?: boolean,
    image?: boolean
};

export const MessageContainer = styled.li<MessageContainerProps>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    ${({ image }) => image? '' : 'max-width: 400px;'}
    
    padding: ${({ image }) => image ? '15' : '10'}px 20px;
    margin-left: ${({ owner }) => owner ? 'auto' : 'initial'};

    border-radius: ${
        ({ last, owner }) => last
            ? owner
                ? '10px 10px 0px 10px'
                : '10px 10px 10px 0px'
            : '10px'
    };

    word-break: break-word;

    background-color: ${({ owner }) => owner ? 'var(--color-main-pruurple)' : 'var(--color-chat-bubble)'};
    color: ${({ owner }) => owner ? 'var(--color-font-white)' : 'var(--color-font-black)'};
`;

export const MessageImage = styled.img`
    max-width: 960px;
    max-height: 540px;
`

type MessageTextProps = {
    image?: boolean
};

export const MessageText = styled.p<MessageTextProps>`
    margin-top: 5px;
    ${({ image }) => image ? 'margin-bottom: -5px;' : ''}
`

import styled from "styled-components";

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2% 5%;
`;

export const MessageList = styled.ul`
    flex: 1;
    list-style-type: none;
    padding: 0px 5%;
    margin: 15px 0px;
    overflow-y: scroll;
    scrollbar-width: thin;

    * + * {
        margin-top: 10px;
    }

    /* Chrome, Edge, Safari */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #fcfcfc;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #f2f2f2;
        border-radius: 20px;
        border: 3px solid #f2f2f2;
    }
    
    /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #f2f2f2 #fcfcfc;
`;

type MessageItemProps = {
    owner?: boolean,
    last?: boolean
};

export const MessageItem = styled.li<MessageItemProps>`
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

    background-color: ${props => props.owner ? '#781EBE' : '#F2F2F2'};
    color: ${props => props.owner ? '#FFFFFF' : '#000000'};
`;

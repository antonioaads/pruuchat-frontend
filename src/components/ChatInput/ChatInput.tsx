import React, { useState } from "react";
import { Container } from "./styles";
import TextInput from '../TextInput';
import { SendButton } from '../CircularButton';

type ChatInputProps = {
    type?: string,
    onSendClick?: (message: string) => void
};

const ChatInput = (props: ChatInputProps): React.ReactElement => {
    const [ text, setText ] = useState('');

    const sendMessage = () => {
        if(props.onSendClick && text !== '') props.onSendClick(text);
        setText('');
    };

    return (
        <Container>
            <TextInput
                type={props.type}
                placeholder='Mensagem'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <SendButton onClick={sendMessage}/>
        </Container>
    );
};

export default ChatInput;

import React, { useState } from "react";
import { Container } from "./styles";
import TextInput from '../TextInput';
import { SendButton } from '../CircularButton';
import { HandleImageFileType } from '../DropZone/types';
import { ImageZone } from '../DropZone';

type ChatInputProps = {
    type?: string,
    onSendClick?: (message: string) => void,
    handleImageFile?: HandleImageFileType
};

const ChatInput = ({ type, onSendClick, handleImageFile }: ChatInputProps): React.ReactElement => {
    const [ text, setText ] = useState('');

    const sendMessage = () => {
        if(onSendClick && text !== '') onSendClick(text);
        setText('');
    };

    return (
        <Container>
            <TextInput
                type={type}
                placeholder='Mensagem'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <ImageZone handleImageFile={handleImageFile}/>
            <SendButton onClick={sendMessage}/>
        </Container>
    );
};

export default ChatInput;

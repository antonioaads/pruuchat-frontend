import React, { useState } from "react";
import { Container } from "./styles";
import TextInput from '../TextInput';
import { SendButton } from '../CircularButton';
import { HandleImageFileType } from '../DropZone/types';
import { ImageZone } from '../DropZone';
import { Image } from "../MessageList/types";

type ChatInputProps = {
    type?: string,
    onSendClick?: (message: string) => void,
    handleImageFile?: HandleImageFileType,
    imageToBeSent?: Image
};

const ChatInput = ({ type, onSendClick, handleImageFile, imageToBeSent }: ChatInputProps): React.ReactElement => {
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
            <ImageZone handleImageFile={handleImageFile} backgroundImage={imageToBeSent}/>
            <SendButton onClick={sendMessage}/>
        </Container>
    );
};

export default ChatInput;

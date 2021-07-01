import React, { useState } from "react";
import styled from "styled-components";
import arrow from '../../assets/Arrow.svg';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0% 5%;
`;

const CoreInput = styled.input`
    flex: 4;
    padding: 0px 25px;
    margin: 0px 27px 0px 0px;
    border: none;
    height: 50px;
    border-radius: 25px;

    background-color: var(--color-input-bg);
    color: var(--color-input-font);
`;

const SendButton = styled.button`
    border: none;
    width: 58px;
    height: 58px;
    border-radius: 29px;
    padding: 20px 21px;

    background-color: var(--color-main-pruurple);
`;

type TextInputProps = {
    type?: string,
    onSendClick?: (message: string) => void
};

const TextInput = (props: TextInputProps): React.ReactElement => {
    const [ text, setText ] = useState('');

    const sendMessage = () => {
        if(props.onSendClick && text !== '') props.onSendClick(text);
        setText('');
    };

    return (
        <Container>
            <CoreInput
                type={props.type}
                placeholder='Mensagem'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />

            <SendButton onClick={sendMessage}>
                <img src={arrow} alt="Arrow" />
            </SendButton>
        </Container>
    );
};

export default TextInput;

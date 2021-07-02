import React from "react";
import styled from "styled-components";
import arrow from '../../assets/Arrow.svg';

type CircularButtonProps = {
    padding?: Array<number>
}

const CircularButton = styled.button<CircularButtonProps>`
    border: none;
    width: 58px;
    height: 58px;
    border-radius: 29px;
    padding: ${props => props.padding ? props.padding.join('px ') + 'px' : ''};

    background-color: var(--color-main-pruurple);
`;

export const SendButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props): React.ReactElement => (
    <CircularButton
        padding={[20,21]}
        {...props}
    >
        <img src={arrow} alt="Arrow" />
    </CircularButton>
)

export default CircularButton;

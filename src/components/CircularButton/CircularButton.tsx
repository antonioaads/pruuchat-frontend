import React, { ReactElement, FC } from "react";
import styled from "styled-components";
import arrow from '../../assets/Arrow.svg';
import addUserIcon from '../../assets/AddUser.svg';

const CircularButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: var(--color-main-pruurple);
`;

interface CircularButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  icon: string;
  iconAlt: string;
}

const CircularButton = ({icon, iconAlt,...rest}: CircularButtonProps): ReactElement => (
  <CircularButtonContainer {...rest}>
    <img src={icon} alt={iconAlt} />
  </CircularButtonContainer>
)

export const SendButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props): ReactElement => (
  <CircularButton {...props} icon={arrow} iconAlt="Enviar mensagem"/>
)

export const AddUserButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props): ReactElement => (
  <CircularButton {...props} icon={addUserIcon} iconAlt="Adicionar usuário"/>
)

export default CircularButton;

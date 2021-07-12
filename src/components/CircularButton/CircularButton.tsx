import React, { ReactElement, FC } from "react";
import arrow from '../../assets/Arrow.svg';
import addUserIcon from '../../assets/AddUser.svg';
import { Container } from "./styles";
interface CircularButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  icon: string;
  iconAlt: string;
}

const CircularButton = ({icon, iconAlt,...rest}: CircularButtonProps): ReactElement => (
  <Container {...rest}>
    <img src={icon} alt={iconAlt} />
  </Container>
)

export const SendButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props): ReactElement => (
  <CircularButton {...props} icon={arrow} iconAlt="Enviar mensagem"/>
)

export const AddUserButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props): ReactElement => (
  <CircularButton {...props} icon={addUserIcon} iconAlt="Adicionar usuário"/>
)

export default CircularButton;

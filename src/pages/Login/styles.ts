import styled, { css } from "styled-components";
import Poppins from "../../fonts/Poppins/Poppins-Medium.ttf";
import DefaultButton from "../../components/Button/index";
import DefaultInput from "../../components/Input/index";
import { ReactComponent as PruuIcon } from "../../assets/logo.svg";
import Eye from '../../assets/eye.svg'
import Person from "../../assets/person.svg";

export const fontFaces = css`
  @font-face {
    font-family: "Poppins";
    src: url(${Poppins}) format("ttf");
    font-weight: ${Poppins.bold};
    font-style: normal;
  }
`;

export const Container = styled.div`
  background-color: #af67e7;
  height: 100%;
  width: 100%;
  display: flex;
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: #781ebe;
  width: 500px;
  height: 700px;
  margin-right: 100px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-left:auto;
`;

export const Button = styled(DefaultButton)`
  margin: 20px;
  width: 230px;
  color: #fff;
  font-size: 14px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
`;

export const Input = styled(DefaultInput)`
  margin: 10px;
  width: 370px;
  color: #000;
  height: 50px;
  font-size: 14px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
`;

export const Logo = styled(PruuIcon)`
  margin-bottom: 100px;
`;

export const Eye = styled.div`

  margin-bottom: 100px;
  width: 70%;
`;

export const Person = styled.div`
  margin-bottom: 100px;
  width: 70%;
`;

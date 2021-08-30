import styled, { css } from "styled-components";
import Poppins from "../../fonts/Poppins/Poppins-Medium.ttf";
import DefaultButton from "../../components/Button/index";
import DefaultInput from "../../components/Input/index";
import { ReactComponent as PruuIcon } from "../../assets/logo.svg";

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
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  background-color: #781ebe;
  width: 500px;
  height: 700px;
  border-radius: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  color: #cf3232;
`;

export const Button = styled(DefaultButton)`
  margin: 15px;
  width: 230px;
  color: #fff;
  font-size: 14px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
`;

export const Input = styled(DefaultInput)`
  padding: 10px;
  width: 90%;
  color: #000;
  height: 50px;
  font-size: 14px;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  position: relative;
`;

export const Logo = styled(PruuIcon)`
  margin-right: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;

import { Label, InputStyled } from "./styles";

interface InputProps {
  label: string;
  defaultValue?: string;
  type?: string;
}

const Input: React.FC<InputProps & React.HTMLAttributes<HTMLInputElement>> = (
  props: InputProps & React.HTMLAttributes<HTMLInputElement>
) => {
  return (
    <>
      <Label>{props.label}</Label>
      <InputStyled defaultValue={props.defaultValue} {...props}></InputStyled>
    </>
  );
};

export default Input;

import { Label, Input } from "./styles";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLInputElement>> = (
  props: ButtonProps & React.HTMLAttributes<HTMLInputElement>
) => {
  return (
    <>
      <Label>{props.label}</Label>
      <Input {...props}></Input>
    </>
  );
};

export default Button;

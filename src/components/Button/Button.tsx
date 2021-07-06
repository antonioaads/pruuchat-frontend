import styled from "styled-components";

interface ButtonProps {
  color: "main" | "secundary";
}

const ButtonStyled = styled.button<ButtonProps>`
  padding: 12px 20px;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  background-color: ${({ color }) =>
    color === "main"
      ? "var(--color-main-pruurple)"
      : "var(--color-secundary-pruurple)"};
`;

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> =
  (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
    return <ButtonStyled {...props} color={props.color}></ButtonStyled>;
  };

export default Button;

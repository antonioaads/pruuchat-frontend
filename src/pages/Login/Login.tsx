import React from "react";
import { Container, Card, Button, Input, Logo } from "./styles";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

const Login = (): React.ReactElement => {
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClick = () => {
    alert("Hello! I am an alert box!!");
  };

  return (
    <Container>
      <Card>
        <Logo />
        <h1>Faça seu login</h1>
        <Input label="Usuári@" />
        <Input label="Senha" onChange={handleChange("password")}>
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        </Input>
        <Button color="secundary">Acessar</Button>
        <Button color="secundary">Cadastrar</Button>
      </Card>
    </Container>
  );
};

export default Login;

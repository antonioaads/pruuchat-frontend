import React from "react";
import {
  Container,
  Card,
  Button,
  Input,
  Logo,
  EyeIcon,
  PersonIcon,
  InputContainer,
} from "./styles";
import { useHistory } from "react-router-dom";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

const Login = (): React.ReactElement => {
  const history = useHistory();
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const login = () => {
    history.push("/");
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <Container>
      <Card>
        <Logo />
        <h1>Faça seu login</h1>
        <InputContainer>
          <Input label="" placeholder="E-mail" />
          <PersonIcon />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("password")}
            placeholder="Senha"
          />
          <EyeIcon />
        </InputContainer>
        <Button color="secundary" onClick={login}>
          Acessar
        </Button>
        <Button color="secundary" onClick={register}>
          Cadastrar
        </Button>
      </Card>
    </Container>
  );
};

export default Login;
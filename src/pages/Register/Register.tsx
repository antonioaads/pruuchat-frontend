import React from "react";
import { Container, Card, Button, Input, Logo, InputContainer } from "./styles";
import { useHistory } from "react-router-dom";
import routes from "../../utils/routersDefinitions";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

const Register = (): React.ReactElement => {
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
    history.push(routes.login);
  };

  const register = () => {
    history.push(routes.home);
  };

  return (
    <Container>
      <Card>
        <Logo />
        <h1>Faça seu Registro</h1>
        <InputContainer>
          <Input label="" placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("password")}
            placeholder="E-mail"
          />
        </InputContainer>
        <InputContainer>
          <Input label="" placeholder="Senha" />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("password")}
            placeholder="Confirmar Senha"
          />
        </InputContainer>

        <Button color="secundary" onClick={register}>
          Cadastrar
        </Button>
        <Button color="secundary" onClick={login}>
          Voltar
        </Button>
      </Card>
    </Container>
  );
};

export default Register;
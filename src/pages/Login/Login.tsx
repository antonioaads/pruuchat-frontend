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
  Label,
} from "./styles";
import { useHistory } from "react-router-dom";
import routes from "../../utils/routersDefinitions";
import axios from "axios";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login = (): React.ReactElement => {
  const history = useHistory();
  const [error, setError] = React.useState("");
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const login = async () => {
    await axios
      .post("http://localhost:4018/auth", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) console.log(response);
        else setError(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.message);
      });
  };

  const register = () => {
    history.push(routes.register);
  };

  return (
    <Container>
      <Card>
        <Logo />
        <h1>Faça seu login</h1>
        <InputContainer>
          <Input
            label=""
            placeholder="E-mail"
            onChange={handleChange("email")}
          />
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

        {error ? <Label>{error}</Label> : null}

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

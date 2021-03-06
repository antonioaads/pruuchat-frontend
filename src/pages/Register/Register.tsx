import React from "react";
import {
  Container,
  Card,
  Button,
  Input,
  Logo,
  InputContainer,
  Label,
} from "./styles";
import { useHistory } from "react-router-dom";
import routes from "../../utils/routersDefinitions";
import axios from "axios";
import { useUser } from "../../provider/UserProvider";

interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = (): React.ReactElement => {
  const history = useHistory();
  const { setUser } = useUser();
  const [error, setError] = React.useState("");
  const [values, setValues] = React.useState<State>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const login = () => {
    history.push(routes.home);
  };

  const register = async () => {
    if (values.password === values.confirmPassword)
      await axios
        .post(`${process.env.REACT_APP_BASE_PATH}/users`, {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          if (response.data.token) {
            setUser(response.data);
            history.push(routes.home);
          } else {
            setError(response.data.message);
          }
        })
        .catch(function (error) {
          setError(error.message);
        });
    else {
      setError("Password and Confirm Password must be the same!");
    }
  };

  return (
    <Container>
      <Card>
        <Logo />
        <h1>Faça seu Registro</h1>
        <InputContainer>
          <Input label="" onChange={handleChange("name")} placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("email")}
            placeholder="E-mail"
          />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("password")}
            placeholder="Senha"
          />
        </InputContainer>
        <InputContainer>
          <Input
            label=""
            onChange={handleChange("confirmPassword")}
            placeholder="Confirmar Senha"
          />
        </InputContainer>

        {error ? <Label>{error}</Label> : null}

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

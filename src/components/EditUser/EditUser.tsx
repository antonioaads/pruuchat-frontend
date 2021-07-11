import { Container } from "./styles";
import Avatar from "../Avatar";
import Button from "../Button";
import Input from "../Input";
import Close from "../../assets/close.svg";

interface EditUserProps {
  closeCallback: () => void;
}

const EditUser = ({closeCallback}: EditUserProps): React.ReactElement => {
  const fakeUser = {
    fullname: "Guilherme Giacomin",
    profilePictureUrl: "https://avatars.githubusercontent.com/u/54778237?v=4",
  };
  return (
    <Container>
      <img
        src={Close}
        alt="Close icon"
        className="close-icon"
        onClick={closeCallback}
      />
      <Avatar
        fullName={fakeUser.fullname}
        profilePictureUrl={fakeUser.profilePictureUrl}
        size="x-large"
      />
      <p className="fullname">{fakeUser.fullname}</p>

      <div className="form-container">
        <Input label="Apelido"></Input>
        <Input label="Email"></Input>
        <Input label="Telefone"></Input>
        <Input label="Status"></Input>
      </div>

      <Button className="btn-save" color="secundary">
        Salvar
      </Button>
    </Container>
  );
};

export default EditUser;

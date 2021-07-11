import { Container } from "./styles";
import Avatar from "../Avatar";
import Button from "../Button";
import Input from "../Input";
import Close from "../../assets/close.svg";
import { AddUserButton } from "../CircularButton/CircularButton";

const ChatList = (): React.ReactElement => {
  const fakeUser = {
    fullname: "Guilherme Giacomin",
    profilePictureUrl: "https://avatars.githubusercontent.com/u/54778237?v=4",
  };
  return (
    <Container>
      <AddUserButton >

      </AddUserButton>
    </Container>
  );
};

export default ChatList;

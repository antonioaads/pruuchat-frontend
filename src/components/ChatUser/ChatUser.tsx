import { Container } from "./styles";
import Avatar from "../Avatar";

const ChatUser = (): React.ReactElement => {
  return (
    <Container>
      <Avatar fullName="Rodrigo God" />
      <div>
        <p className="fullname">Rodrigo God</p>
        <p className="status">online</p>
      </div>
    </Container>
  );
};

export default ChatUser;

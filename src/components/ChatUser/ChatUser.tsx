import { Container } from "./styles";
import Avatar from "../Avatar";
import { IUser } from "../../provider/UserProvider";

type ChatUserProps = {
  user?: IUser;
}

const ChatUser = ({ user }: ChatUserProps): React.ReactElement => {
  return (
    <Container>
      <Avatar fullName={user?.name || ""} />
      <div>
        <p className="fullname">{user?.name}</p>
        {/* <p className="status">online</p> */}
      </div>
    </Container>
  );
};

export default ChatUser;

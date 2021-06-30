import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import Avatar from "../../components/Avatar";

const Header = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo PruuChat" className="logo" />
      <div className="user-logged-container">
        <span className="fullname">Guilherme Giacomin</span>
        <Avatar
          fullName="Guilherme Giacomin"
          profilePictureUrl="https://avatars.githubusercontent.com/u/54778237?v=4"
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;

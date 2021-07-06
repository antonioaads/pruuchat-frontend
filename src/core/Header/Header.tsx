import { HeaderContainer } from "./styles";
import logo from "../../assets/logo-com-texto.svg";
import Avatar from "../../components/Avatar";

interface HeaderProps {
  fullname: string;
  profilePictureUrl: string;
}

const Header = ({
  fullname,
  profilePictureUrl,
}: HeaderProps): React.ReactElement => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo PruuChat" className="logo" />
      <div className="user-logged-container">
        <span className="fullname">{fullname}</span>
        <Avatar fullName={fullname} profilePictureUrl={profilePictureUrl} />
      </div>
    </HeaderContainer>
  );
};

export default Header;

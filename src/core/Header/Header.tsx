import { HeaderContainer } from "./styles";
import logo from "../../assets/logo-com-texto.svg";
import Avatar from "../../components/Avatar";

interface HeaderProps {
  fullname: string;
  profilePictureUrl: string;
  avatarOnClick?: () => void;
}

const activateLasers = () => {
  document.body.classList.toggle("menu-visivel");
}

const Header = ({
  fullname,
  profilePictureUrl,
  avatarOnClick,
}: HeaderProps): React.ReactElement => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo PruuChat" className="logo" onClick={activateLasers} />
      <div className="user-logged-container">
        <span className="fullname">{fullname}</span>
        <Avatar
          fullName={fullname}
          profilePictureUrl={profilePictureUrl}
          callback={avatarOnClick}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;

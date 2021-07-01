import "./styles.css";
import logo from "../../assets/logo.svg";
import Avatar from "../../components/Avatar";

const Header = (): React.ReactElement => {
  return (
    <div className="header-container">
      <img src={logo} alt="Logo PruuChat" className="logo" />
      <div className="user-logged-container">
        <span className="fullname">Guilherme Giacomin</span>
        <Avatar
          fullName="Guilherme Giacomin"
          profilePictureUrl="https://avatars.githubusercontent.com/u/54778237?v=4"
        />
      </div>
    </div>
  );
};

export default Header;

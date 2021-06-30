import { Container } from "./styles";

interface AvatarProps {
  fullName: string;
  profilePictureUrl?: string;
}

const getInitials = (fullName: string): string => {
  const namesArray = fullName.trim().split(" ");
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
  else
    return `${namesArray[0].charAt(0)}${namesArray[
      namesArray.length - 1
    ].charAt(0)}`;
};

const Avatar = (props: AvatarProps): React.ReactElement => {
  return (
    <Container>
      {props.profilePictureUrl ? (
        <img
          src={props.profilePictureUrl}
          alt="Profile picture"
          className="avatar-img"
        ></img>
      ) : (
        <span className="avatar-initials">{getInitials(props.fullName)}</span>
      )}
    </Container>
  );
};

export default Avatar;

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

const Avatar = ({
  fullName,
  profilePictureUrl,
}: AvatarProps): React.ReactElement => {
  return (
    <Container>
      {profilePictureUrl ? (
        <img
          src={profilePictureUrl}
          alt="Profile picture"
          className="avatar-img"
        ></img>
      ) : (
        <span className="avatar-initials">{getInitials(fullName)}</span>
      )}
    </Container>
  );
};

export default Avatar;

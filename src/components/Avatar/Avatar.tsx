import { Container } from "./styles";

interface AvatarProps {
  fullName: string;
  profilePictureUrl?: string;
  size?: "small" | "x-large";
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
  size = "small",
}: AvatarProps): React.ReactElement => {
  const sizeClass = `avatar-${size}`;
  return (
    <Container>
      {profilePictureUrl ? (
        <img
          src={profilePictureUrl}
          alt="Profile picture"
          className={`avatar-img ${sizeClass}`}
        ></img>
      ) : (
        <span className={`avatar-initials ${sizeClass}`}>
          {getInitials(fullName)}
        </span>
      )}
    </Container>
  );
};

export default Avatar;

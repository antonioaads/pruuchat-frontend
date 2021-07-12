import { Container } from "./styles";

interface SideCardProps {
  content: React.ReactElement;
}

const SideCard = ({ content }: SideCardProps): React.ReactElement => {
  return <Container className="sideCard">{content}</Container>;
};

export default SideCard;

import { Container } from "./styles";

interface BlankCardProps {
  children: React.ReactNode;
}

const BlankCard = ({ children }: BlankCardProps) => {
  return <Container>{children}</Container>;
};

export default BlankCard;

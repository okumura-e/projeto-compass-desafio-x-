import BlankCard from "../BlankCard";
import { ImageContainer, Fullname, Details } from "./styles";
import { BiUser } from "react-icons/bi";

interface UserCardProps {
  fullname: string;
  location: string;
  maritalStatus: string;
}

const UserCard = ({ fullname, location, maritalStatus }: UserCardProps) => {
  return (
    <BlankCard>
      <ImageContainer>
        <BiUser />
      </ImageContainer>
      <Fullname>{fullname}</Fullname>
      <Details>
        {maritalStatus}, {location}
      </Details>
    </BlankCard>
  );
};

export default UserCard;

import BlankCard from "../BlankCard";
import { ImageContainer, IconHolder } from "./styles";
import { BiUser, BiSolidPencil } from "react-icons/bi";

const EditUserCard = () => {
  return (
    <BlankCard>
      <ImageContainer>
        <BiUser />
        <IconHolder>
          <BiSolidPencil />
        </IconHolder>
      </ImageContainer>
    </BlankCard>
  );
};

export default EditUserCard;

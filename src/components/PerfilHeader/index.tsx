import {
  Container,
  ContentContainer,
  LeftSection,
  RightSection,
  Logo,
  Navbar,
  LinksList,
  LinkHolder,
  LinkA,
  UserContainer,
  Username,
} from "./styles";

import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import SearchInput from "../SearchInput";
import { useEffect, useState } from "react";

interface PerfilHeaderProps {
  username: string;
  type?: "noSearch" | "full";
}

const PerfilHeader = ({ username, type = "full" }: PerfilHeaderProps) => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    async function getURL() {
      setPath(window.location.pathname);
    }
    getURL()
  }, [path]);

  return (
    <Container>
      <ContentContainer>
        <LeftSection>
          <Logo>UOLkut</Logo>
          <Navbar>
            <LinksList>
              <LinkHolder>
                <LinkA to="">Início</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA selected={path === '/profile'} to="/profile">Perfil</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA to="">Comunidades</LinkA>
              </LinkHolder>
              <LinkHolder>
                <LinkA to="">Jogos</LinkA>
              </LinkHolder>
            </LinksList>
          </Navbar>
        </LeftSection>
        <RightSection noSearch={type === "noSearch"}>
          {type !== "noSearch" && <SearchInput />}
          <UserContainer>
            <span>
              <AiOutlineUser />
            </span>
            <Username>{username}</Username>
            <IoIosArrowDown />
          </UserContainer>
        </RightSection>
      </ContentContainer>
    </Container>
  );
};

export default PerfilHeader;

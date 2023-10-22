import { Container, CardSection, PseudoSection } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import SearchInput from "../../components/SearchInput";
import { useKeepUser } from "../../hooks/useKeepUser";
import SearchCard from "../../components/cards/SearchCard";

const SearchPage = () => {
  const { user, navigate } = useKeepUser();

  if (!user) return <></>;

  return (
    <>
      <PerfilHeader username={user?.fullname} />
      <Container>
        <SearchInput />
        <CardSection>
        </CardSection>
        <PseudoSection>
          <SearchCard />
        </PseudoSection>
      </Container>
    </>
  );
};

export default SearchPage;

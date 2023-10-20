import { Container, CardSection, PseudoSection } from "./styles";
import EditPerfilButton from "../../components/EditPerfilButton";
import FeedSmallCard from "../../components/cards/FeedSmallCard";
import MainCard from "../../components/cards/MainCard";
import PerfilHeader from "../../components/PerfilHeader";
import UserCard from "../../components/cards/UserCard";
import SearchInput from "../../components/SearchInput";
import { formateDate } from "../../utils/formateDate";
import { useKeepUser } from "../../hooks/useKeepUser";

const mock = {
  trustable: 2,
  coolness: 3,
  attractive: 2,
  fansAmount: 85,
  thought: "Programar sem café é igual poeta sem poesia.",
  state: "Guarantã",
  categories: [
    { id: 1, name: "Músicas", tags: ["Trap", "Rap", "Indie"] },
    {
      id: 2,
      name: "Filmes",
      tags: ["A Rede Social", "Meu amigo tororo"],
    },
  ],
};

const PerfilPage = () => {
  const { user, navigate } = useKeepUser();

  if (!user) return <></>;

  return (
    <>
      <PerfilHeader username={user?.fullname} />
      <Container>
        <SearchInput />
        <CardSection>
          <UserCard {...user} location={user?.country} />
          <EditPerfilButton onClick={() => navigate("/edit-profile")} />
        </CardSection>
        <PseudoSection>
          <MainCard
            {...user}
            birthday={formateDate(user?.birthday)}
            age={
              new Date().getFullYear() - new Date(user?.birthday).getFullYear()
            }
            {...mock}
          />
          <FeedSmallCard title="Amigos(248)" type="friends" />
          <FeedSmallCard title="Comunidade(42)" type="community" />
        </PseudoSection>
      </Container>
    </>
  );
};

export default PerfilPage;

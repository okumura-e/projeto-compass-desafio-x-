import { Container, CardSection, PseudoSection } from "./styles";
import FeedSmallCard from "../../components/cards/FeedSmallCard";
import MainCard from "../../components/cards/MainCard";
import PerfilHeader from "../../components/PerfilHeader";
import UserCard from "../../components/cards/UserCard";
import SearchInput from "../../components/SearchInput";
import { formateDate } from "../../utils/formateDate";
import { useKeepUser } from "../../hooks/useKeepUser";
import { useState } from "react";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import FormButton from "../../components/FormButton";

const mock = {
  trustable: 3,
  coolness: 3,
  attractive: 2,
  fansAmount: 85,
  thought: "Vivendo a vida com um sorriso no rosto.",
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

const FriendPerfil = () => {
  const { user } = useKeepUser();
  const [message, setMessage] = useState("Adicionar");
  const location = useLocation();
  const userData = location.state.userData;

  console.log('data',userData);
  
  function handleAdd() {
    if (message === "Adicionar") {
      setMessage("Desfazer")
      toast.success('Solicitação enviada com sucesso')
    }else {
      setMessage("Adicionar")
      toast.success('Solicitação cancelada com sucesso')
    }
  }

  if (!user) return <></>;

  return (
    <>
      <Toaster />
      <PerfilHeader username={user?.fullname} />
      <Container>
        <SearchInput />
        <CardSection>
          <UserCard
            {...userData}
            location={userData.country || 'Não informado'}
            fullname={userData.fullname || 'Não informado'}
            maritalStatus={userData.maritalStatus || 'Não informado'}
          />
          <FormButton title={message} onClick={handleAdd} />
        </CardSection>
        <PseudoSection>
          <MainCard
            {...userData}
            birthday={formateDate(userData.birthday || 'Não informado')}
            age={
              new Date().getFullYear() - new Date(userData.birthday).getFullYear()
            }
            {...mock}
            fullname={userData.fullname || ""}
            maritalStatus={userData.maritalStatus || ""}
            job={userData.job }
            city={userData.city }
            country= {userData.country}
            />
          <FeedSmallCard title="Amigos(300)" type="friends" />
          <FeedSmallCard title="Comunidade(50)" type="community" />
        </PseudoSection>
      </Container>
    </>
  );
};

export default FriendPerfil;

import { Container } from "./styles";
import PerfilHeader from "../../components/PerfilHeader";
import EditUserCard from "../../components/cards/EditUserCard";
import EditInfoCard from "../../components/cards/EditInfoCard";
import { useKeepUser } from "../../hooks/useKeepUser";

const EditPerfilPage = () => {
  const { user } = useKeepUser();
  return (
    <>
      <PerfilHeader type="noSearch" username={user?.fullname || ""} />
      <Container>
        <EditUserCard />
        <EditInfoCard />
      </Container>
    </>
  );
};

export default EditPerfilPage;

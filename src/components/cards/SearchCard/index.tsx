import {
  Title,
  CardsContainer,
  Card,
  UserContainer,
  CardInfos,
  CardButton,
  CardContainer,
} from "./styles";
import BlankCard from "../BlankCard";
import { AiOutlineUser } from "react-icons/ai";
import FormButton from "../../FormButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from "../../../config/api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const SearchCard = () => {
  type User = {
    fullname: string;
    city: string;
    country: string;
    maritalStatus: string;
    id: string;
    birthday: string,
    job: string,
  };

  const [users, setUsers] = useState<User[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const token = Cookies.get('token');
        await api.get(`/users?fullname_like=${name}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch(() => {
          toast.error('Tente novamente mais tarde');
        })
      } catch (err) {
        toast.error('Tente novamente mais tarde');
      }
    }
    getUsers()
  }, [name]);
  return (
    <BlankCard>
      <Title>Pessoas</Title>

      <CardsContainer>

        {users.map((user, index) => (
          <Card key={index} onClick={() => navigate(`/profile/${user?.id}`, { state: { userData: user } })}>
            <CardContainer>
              <UserContainer>
                <span>
                  <AiOutlineUser />
                </span>
              </UserContainer>

              <CardInfos>
                <p>{user?.fullname}</p>
                <p>{user?.city} - {user?.country}</p>
                <p>{user?.maritalStatus}</p>
              </CardInfos>
            </CardContainer>

            <CardButton>
              <FormButton
                title="Adicionar"
              />
            </CardButton>
          </Card>))}

        {users.length === 0 && <p>Nenhum usuário encontrado</p>}

      </CardsContainer>

    </BlankCard>
  );
};

export default SearchCard;

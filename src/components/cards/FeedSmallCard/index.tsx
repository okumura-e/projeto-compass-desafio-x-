import BlankCard from "../BlankCard";
import {
  Title,
  SeeAll,
  Row,
  Grid,
  Icon,
  Profile,
  ProfilePhoto,
  Name,
  CommunityPhoto,
  CommunityIcon,
} from "./styles";

const users: string[] = [
  "Fernando",
  "Ana",
  "Carlos",
  "Vitor",
  "Matheus",
  "Ramos",
  "Eiji",
  "Julia",
  "Carol",
];
const comunities: string[] = [
  "Carros",
  "Desenhos",
  "Crazy",
  "Fofos",
  "Animes",
  "Leitura",
  "Meu ovo",
  "Books",
  "Cafeee",
];

interface FeedSmallCardProps {
  title: string;
  type: "friends" | "community";
}

function FeedSmallCard({ title, type }: FeedSmallCardProps) {
  return (
    <BlankCard>
      <Row>
        <Title>{title}</Title>
        <SeeAll>Ver todos</SeeAll>
      </Row>

      {type === "friends" && (
        <Grid>
          {users.map((user, index) => (
            <Profile key={index}>
              <ProfilePhoto>
                <Icon />
              </ProfilePhoto>
              <Name>{user}</Name>
            </Profile>
          ))}
        </Grid>
      )}

      {type === "community" && (
        <Grid>
          {comunities.map((comunities, index) => (
            <Profile key={index}>
              <CommunityPhoto>
                <CommunityIcon />
              </CommunityPhoto>
              <Name>{comunities}</Name>
            </Profile>
          ))}
        </Grid>
      )}
    </BlankCard>
  );
}

export default FeedSmallCard;

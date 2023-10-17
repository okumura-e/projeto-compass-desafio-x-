import { Button } from "./styles";

interface EditPerfilButtonProps {
  onClick: () => void;
}

const EditPerfilButton = ({ onClick }: EditPerfilButtonProps) => {
  return <Button onClick={onClick}>Editar meu perfil</Button>;
};

export default EditPerfilButton;

import Loader from "../Loader";
import { Button } from "./styles";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  alternative?: boolean | string | any;
  onClick?: () => void;
}

function FormButton({
  title,
  alternative,
  disabled,
  isLoading,
  onClick,
}: ButtonProps) {
  return (
    <>
      <Button disabled={disabled} onClick={onClick} alternative={alternative}>
        {isLoading ? <Loader /> : title}
      </Button>
    </>
  );
}

export default FormButton;

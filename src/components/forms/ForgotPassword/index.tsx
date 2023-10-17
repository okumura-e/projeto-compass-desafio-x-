import {
  Logo,
  Title,
  FormContainer,
  ButtonContainer,
  RememberPassword,
  RememberContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";

import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { useForm } from "react-hook-form";
// import FormCard from "../FormCard";
import BlankCard from "../../cards/BlankCard";

type FormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>();

  const onSubmit = () => {
    navigate("/new-password");
  };

  const navigate = useNavigate();
  return (
    <BlankCard>
      <Logo role="img" />
      <Title>Recupere sua senha</Title>

      <FormContainer
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <FormInput
          registerField={{
            ...register("email", {
              required: { value: true, message: "O email é obrigatório!" },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Formato inválido de email!",
              },
            }),
          }}
          error={errors?.email?.message}
          type="email"
          placeholder="E-mail cadastrado"
        />

        <ButtonContainer>
          <FormButton
            title="Enviar código"
            onClick={handleSubmit(onSubmit, () =>
              setTimeout(clearErrors, 2500),
            )}
          />
        </ButtonContainer>

        <RememberContainer>
          <RememberPassword>Lembrou sua Senha?</RememberPassword>
          <FormButton
            onClick={() => navigate("/")}
            alternative
            title="Entrar com as credenciais"
          />
        </RememberContainer>
      </FormContainer>
    </BlankCard>
  );
};

export default ForgotPasswordForm;

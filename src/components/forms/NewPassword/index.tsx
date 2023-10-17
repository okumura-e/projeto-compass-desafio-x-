import {
  Logo,
  Title,
  FormContainer,
  ButtonContainer,
  RememberPassword,
  RememberContainer,
  InputsContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";

import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { useForm } from "react-hook-form";
import BlankCard from "../../cards/BlankCard";

type FormValues = {
  code: string;
  password: string;
  confirmPassword: string;
};

const NewPasswordForm = () => {
  const navigate = useNavigate();

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormValues>();

  const checkPassword = watch("password");

  const onSubmit = () => {
    navigate("/");
  };
  return (
    <BlankCard>
      <Logo role="img" />
      <Title>Nova senha</Title>

      <FormContainer
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <InputsContainer>
          <FormInput
            type="text"
            placeholder="Informe o código"
            registerField={{
              ...register("code", {
                required: { value: true, message: "O código é obrigatório!" },
                minLength: {
                  value: 5,
                  message: "O código deve possuir 5 dígitos!",
                },
              }),
            }}
            error={errors?.code?.message}
          />
          <FormInput
            type="password"
            placeholder="Nova senha"
            registerField={{
              ...register("password", {
                required: { value: true, message: "A senha é obrigatória!" },
                minLength: {
                  value: 6,
                  message: "A senha deve conter pelo menos 6 dígitos!",
                },
              }),
            }}
            error={errors?.password?.message}
          />
          <FormInput
            type="password"
            placeholder="Confirmar a senha"
            registerField={{
              ...register("confirmPassword", {
                required: { value: true, message: "A senha é obrigatória!" },
                minLength: {
                  value: 6,
                  message: "A senha deve conter pelo menos 6 dígitos!",
                },
                validate: (value) =>
                  value === checkPassword || "As senhas devem ser iguais!",
              }),
            }}
            error={errors?.confirmPassword?.message}
          />
        </InputsContainer>

        <ButtonContainer>
          <FormButton
            onClick={handleSubmit(onSubmit, () =>
              setTimeout(clearErrors, 2500),
            )}
            title="Salvar"
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

export default NewPasswordForm;

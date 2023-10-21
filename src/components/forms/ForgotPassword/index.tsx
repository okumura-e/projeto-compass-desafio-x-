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
import { api } from "../../../config/api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

type FormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const { setUser } = useContext(UserContext);
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.get(`/users?email=${data.email}`)
      if (response.data.length !== 0) {
        toast.success("Código enviado com sucesso!");
        setUser(response.data[0])
        setTimeout(() => {
          navigate("/new-password");
        }, 1000);        
      }else {
        toast.error("Nenhum usuário encontrado!");
      }
    } catch (error) {
      toast.error("Erro de servidor, por favor, tente novamente!");
    }
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

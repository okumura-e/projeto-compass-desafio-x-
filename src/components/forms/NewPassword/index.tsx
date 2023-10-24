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
import { useKeepUser } from "../../../hooks/useKeepUser";
import { api } from "../../../config/api";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

type FormValues = {
  code: string;
  password: string;
  confirmPassword: string;
};

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { user } = useKeepUser();
  
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormValues>();

  interface UserData {
    code: string,
    password: string,
    confirmPassword: string,
  }

  const checkPassword = watch("password");

  const onSubmit = async (data: UserData) => {
    try {
      const response = await api.put(`/users/${user?.id}`, {
        ...user,
        password: data.password,  
      })

      if (response.status === 200) {
        toast.success("Senha alterada com sucesso!");
        setUser();
        setTimeout(() => {
          navigate("/");
        }, 1000);        
      }else {
        toast.error("Não foi possível alterar a senha!");
      }
    } catch (error) {
      toast.error("Erro de servidor, por favor, tente novamente!");
    }
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

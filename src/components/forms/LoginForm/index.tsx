import {
  Logo,
  Title,
  FormContainer,
  CheckBoxContainer,
  CheckBox,
  Label,
} from "./styles";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { useForm } from "react-hook-form";
import BlankCard from "../../cards/BlankCard";
import { api } from "../../../config/api";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    clearErrors,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await api.post(
        '/login', {"email": data.email, "password": data.password}
      ).then((response) => {
        setUser(response.data.user);
        sessionStorage.setItem("token", (response.data.accessToken));
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
        
    } catch (err) {
      toast.error("Erro ao efetuar login, tente novamente!");
    }
  };

  return (
    <BlankCard>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <FormInput
          type="email"
          placeholder="Email"
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
        />
        <FormInput
          type="password"
          placeholder="Senha"
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
        <CheckBoxContainer>
          <CheckBox />
          <Label htmlFor="rememberMe">Lembrar minha senha</Label>
        </CheckBoxContainer>
        <FormButton
          disabled={isSubmitting}
          isLoading={isSubmitting}
          title="Entrar"
        />
        <FormButton
          onClick={() => navigate("/register")}
          alternative
          title="Criar conta"
        />
      </FormContainer>
      <Link to="/forgot-password">Esqueci minha senha</Link>
    </BlankCard>
  );
};

export default LoginForm;

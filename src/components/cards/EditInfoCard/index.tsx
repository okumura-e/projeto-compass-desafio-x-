import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Form, Fieldset, ButtonHolder } from "./styles";
import CustomSelect from "../../CustomSelect";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import BlankCard from "../BlankCard";
import { useKeepUser } from "../../../hooks/useKeepUser";
import { api } from "../../../config/api";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Cookies from 'js-cookie';

const EditInfoCard = () => {
  const { setUser } = useContext(UserContext);
  const { user } = useKeepUser();
  const navigate = useNavigate();
  console.log(user);
  
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      email: user?.email,
      fullname: user?.fullname,
      password: user?.password,
      confirmPassword: "",
      job: user?.job,
      birthday: user?.birthday,
      city: user?.city,
      country: user?.country,
    },
  });
  const checkPassword = watch("password");

  const selectRef = useRef({
    value: user?.maritalStatus,
    hasError: false,
  } as { value: string; hasError: boolean });

  const onSubmit = async (data: any) => {
    console.log(user);
    
    try {
      const token = Cookies.get('token'); 
      const response = await api.put(`/users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.status === 200) {
        setUser({ ...user, ...data, maritalStatus: selectRef.current.value });
        toast.success('Perfil editado com sucesso');
        setTimeout(() => {
          navigate("/profile");
        }, 400);
      }else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error("Erro de servidor, por favor, tente novamente!");
    }
  };

  return (
    <BlankCard>
      <Toaster />
      <Title>Editar Informações</Title>
      <Form
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <Fieldset>
          <FormInput
            placeholder="Profissão"
            registerField={{
              ...register("job", {
                required: {
                  value: true,
                  message: "Profissão é obrigatório!",
                },
              }),
            }}
            error={errors.job?.message}
          />
          <CustomSelect
            onSelect={(text: string) => (selectRef.current.value = text)}
            options={[
              "Solteiro",
              "Casado",
              "Divorciado",
              "Namorando",
              "Preocupado",
            ]}
            selected={selectRef.current.value || user?.maritalStatus}
            placeholder="Relacionamento"
          />
        </Fieldset>
        <Fieldset>
          <FormInput
            placeholder="Nome"
            registerField={{
              ...register("fullname", {
                required: {
                  value: true,
                  message: "Nome é obrigatório!",
                },
              }),
            }}
            error={errors.fullname?.message}
          />
          <FormInput
            placeholder="Cidade"
            registerField={{
              ...register("city", {
                required: {
                  value: true,
                  message: "Cidade é obrigatório!",
                },
              }),
            }}
            error={errors.city?.message}
          />
        </Fieldset>
        <Fieldset>
          <FormInput
            placeholder="País"
            registerField={{
              ...register("country", {
                required: {
                  value: true,
                  message: "País é obrigatório!",
                },
              }),
            }}
            error={errors.country?.message}
          />
          <FormInput
            registerField={{
              ...register("birthday", {
                required: {
                  value: true,
                  message: "Aniversário é obrigatório!",
                },
              }),
            }}
            error={errors.birthday?.message}
            type="date"
            max={new Date().toISOString().split("T")[0]}
          />
        </Fieldset>
        <Fieldset>
          <FormInput
            registerField={{
              ...register("password", {
                required: {
                  value: true,
                  message: "Senha é obrigatório!",
                },
              }),
            }}
            error={errors.password?.message}
            placeholder="Senha"
            type="password"
          />
          <FormInput
            registerField={{
              ...register("confirmPassword", {
                required: { value: true, message: "Este campo é obrigatório!" },
                minLength: {
                  value: 6,
                  message: "A senha deve conter pelo menos 6 dígitos!",
                },
                validate: (value) =>
                value === checkPassword || "As senhas devem ser iguais!",
              }),
            }}
            error={errors.confirmPassword?.message}
            placeholder="Repetir senha"
            type="password"
          />
        </Fieldset>

        <ButtonHolder>
          <FormButton title="Salvar" />
        </ButtonHolder>
      </Form>
    </BlankCard>
  );
};

export default EditInfoCard;

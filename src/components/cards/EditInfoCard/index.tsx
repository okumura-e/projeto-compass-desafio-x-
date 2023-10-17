import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Title, Form, Fieldset, ButtonHolder } from "./styles";
import CustomSelect from "../../CustomSelect";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import BlankCard from "../BlankCard";
import { useKeepUser } from "../../../hooks/useKeepUser";

const EditInfoCard = () => {
  const { user } = useKeepUser();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    values: {
      email: user?.email,
      name: user?.fullname,
      password: user?.password,
      confirmPassword: "",
      job: user?.job,
      birthday: user?.birthday,
      city: user?.city,
      country: user?.country,
    },
  });

  const selectRef = useRef({
    value: user?.maritalStatus,
    hasError: false,
  } as { value: string; hasError: boolean });

  const onSubmit = (data: unknown) => {
    return data;
  };

  return (
    <BlankCard>
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
              ...register("name", {
                required: {
                  value: true,
                  message: "Nome é obrigatório!",
                },
              }),
            }}
            error={errors.name?.message}
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
              ...register("confirmPassword"),
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

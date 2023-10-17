import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { Container, FormContainer, Logo, Title, RowContainer } from "./styles";

const SecondStepForm = () => {
  return (
    <Container>
      <Logo role="img" />
      <Title>Se descreva um pouco pra te conhecerem</Title>
      <FormContainer>
        <FormInput placeholder="Autodescrição" />
        <FormInput type="password" placeholder="Senha" />
        <FormInput placeholder="Nome" />
        <RowContainer>
          <FormInput
            type="date"
            placeholder="DD/MM/AAAA"
            max={new Date().toISOString().split("T")[0]}
          />
          <FormInput placeholder="Profissão" />
        </RowContainer>
        <RowContainer>
          <FormInput placeholder="País" />
          <FormInput placeholder="Cidade" />
        </RowContainer>
        <FormButton title="Finalizar" />
      </FormContainer>
    </Container>
  );
};

export default SecondStepForm;

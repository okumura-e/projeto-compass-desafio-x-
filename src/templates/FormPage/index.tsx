import { Toaster } from "react-hot-toast";
import { Container, LeftSection, Text, Footer, FooterText } from "./styles";
import FormPageHeader from "../../components/FormPageHeader";
import { Outlet } from "react-router-dom";

function FormPage() {
  return (
    <>
      <FormPageHeader />
      <Toaster />
      <Container>
        <LeftSection>
          <Text>
            Conecta-se aos seus amigos e familiares usando recados e mensagens
            instantâneas
          </Text>
        </LeftSection>
        <Outlet />
      </Container>

      <Footer>
        <FooterText>Todos os direitos reservados</FooterText>
      </Footer>
    </>
  );
}

export default FormPage;

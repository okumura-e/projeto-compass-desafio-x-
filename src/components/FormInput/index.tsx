import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Container, Input, ErrorText } from "./styles";

interface InputProps {
  half?: boolean;
  error?: string | boolean ;
  registerField?: UseFormRegisterReturn;
}

function FormInput({
  half,
  error,
  registerField,
  ...attributes
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container half={half}>
      <Input error={!!error} {...attributes} {...registerField}></Input>
      <ErrorText>{error}</ErrorText>
    </Container>
  );
}

export default FormInput;

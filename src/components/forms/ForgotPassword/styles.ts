import styled, { css } from "styled-components";

export const Logo = styled.span`
  ${({ theme }) => {
    return css`
      height: 3.2rem;
      width: 3.2rem;

      border: 4px solid ${theme.colors.primary};
      border-radius: 50%;

      margin-bottom: 0.8rem;
    `;
  }}
`;

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: 2rem;
      font-weight: 800;
      color: ${theme.colors.primary};
      margin-bottom: 3.2rem;

      ${theme.medias.tablet} {
        font-size: 2.4rem;
        margin-bottom: 3.8rem;
      }
    `;
  }}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 3.8rem;
`;

export const RememberContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      margin-top: 10.9rem;
      ${theme.medias.desktop} {
        gap: 1.5rem;
      }
    `;
  }}
`;

export const RememberPassword = styled.p`
  ${({ theme }) => {
    return css`
      font-size: 1.4rem;
      font-weight: 400;
      font-family: "Roboto Flex", sans-serif;
      color: ${theme.colors.primary};
      text-align: center;
      ${theme.medias.desktop} {
        font-size: 1.8rem;
      }
    `;
  }}
`;

import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 2rem;

      & + a {
        font-size: 1.4rem;
        color: ${theme.colors.primary};
        text-decoration: underline;

        margin-top: 3.2rem;

        transition: color 0.2s ease-in-out;
      }

      & + a:hover {
        color: ${theme.colors.primaryHover};
      }
    `;
  }}
`;

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

      margin-bottom: 3.5rem;
    `;
  }}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  width: 100%;

  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const CheckBox = styled.input.attrs({
  type: "checkbox",
  id: "rememberMe",
  name: "rememberMe",
  value: 1,
})`
  ${({ theme }) => {
    return css`
      position: absolute;
      cursor: pointer;
      width: 0px;
      height: 0px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 4px;

        outline: 1px solid ${theme.colors.lightestGray};

        padding: 2px;

        top: 0.2rem;

        outline-offset: 0.2rem;

        transition: all 0.2s ease-in-out;
      }

      &:focus:not(:hover):before {
        outline-color: ${theme.colors.content};
      }

      &:checked::before {
        background-color: ${theme.colors.primary};
      }
      &:hover:not(:checked)::before {
        background-color: rgba(237, 109, 37, 0.4);
        filter: brightness(1.2);
        outline-color: ${theme.colors.content};
      }
    `;
  }}
`;
export const Label = styled.label`
  ${({ theme }) => {
    return css`
      padding-left: 2.4rem;
      color: ${theme.colors.placeholder};
      font-size: 1.3rem;

      cursor: pointer;
      ${theme.medias.tablet} {
        font-size: 1.6rem;
      }
    `;
  }}
`;
export const ForgotPassword = styled.a`
  ${({ theme }) => {
    return css`
      font-size: 1.4rem;
      color: ${theme.colors.primary};
      text-decoration: underline;

      margin-top: 7.7rem;
    `;
  }}
`;

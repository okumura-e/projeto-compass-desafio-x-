import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};
      font-weight: 600;
      font-size: 2rem;

      text-align: center;

      padding-bottom: 5rem;

      ${theme.medias.desktop} {
        padding-bottom: 8rem;
        font-size: 3.6rem;
      }
    `;
  }}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => {
    return css`
      border: none;
      display: flex;
      flex-direction: column;

      gap: 1.5rem;

      &:nth-child(3),
      &:nth-child(4) {
        flex-direction: row;
      }

      &:last-child {
        margin-bottom: 4rem;
      }

      ${theme.medias.desktop} {
        flex-direction: row;
      }
    `;
  }}
`;

export const ButtonHolder = styled.div`
  ${({ theme }) => {
    return css`
      grid-column-start: 1;
      grid-column-end: 3;
      max-width: 330px;
      width: 100%;

      margin: 0 auto;
      margin-top: 170px;
      ${theme.medias.desktop} {
        margin-top: 170px;
      }
    `;
  }}
`;

import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 320px;
      width: 100%;
      min-height: 50px;

      background: ${theme.colors.secondaryBg};

      border: none;
      border-radius: 16px;

      font-size: 1.8rem;
      color: ${theme.colors.primary};

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.98);
      }

      ${theme.medias.desktop} {
        min-height: 56px;
      }
    `;
  }}
`;

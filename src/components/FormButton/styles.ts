import { styled, css } from "styled-components";

interface ButtonProps {
  alternative?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, alternative }) => {
    return css`
      ${alternative
        ? css`
            background-color: ${theme.colors.lightGray};
            color: ${theme.colors.primary};
            &:not(:disabled):hover {
              filter: brightness(0.97);
            }
          `
        : css`
            background-color: ${theme.colors.primary};
            color: white;
            &:not(:disabled):hover {
              background-color: ${theme.colors.primaryHover};
            }
          `}

      &:disabled {
        background: ${theme.colors.primaryDisabled};
        cursor: not-allowed;
      }
      width: 100%;
      border-radius: 8px;
      height: 3.7rem;
      flex-shrink: 0;
      border: 0;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: "Roboto Flex", sans-serif;
      font-size: 1.4rem;

      transition: all 0.2s ease-in-out;

      ${theme.medias.desktop} {
        font-size: 1.8rem;
        height: 5.1rem;
      }
    `;
  }}
`;

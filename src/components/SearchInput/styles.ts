import styled, { css } from "styled-components";

interface ContainerProps {
  isHovering: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isHovering, isFocused }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.4rem;
      gap: 1.2rem;
      padding: 1rem 1.5rem;
      border-radius: 8px;

      max-width: 350px;
      width: 100%;

      background: ${theme.colors.lightGray};

      color: ${theme.colors.content};

      transition: all 0.2s ease-in-out;

      border: 1px solid transparent;

      ${isHovering && !isFocused
        ? () => css`
            border-color: rgba(0, 0, 0, 0.2);
          `
        : null}

      ${isFocused
        ? () => css`
            border-color: ${theme.colors.content};
          `
        : null}

        svg {
        width: 2rem;
        height: auto;

        fill: ${theme.colors.lightestGray};
      }
    `;
  }}
`;

export const Input = styled.input`
  ${({ theme }) => {
    return css`
      font-family: "Roboto Mono", sans-serif;
      border: none;
      background-color: transparent;

      width: 100%;

      outline: transparent;
      &::placeholder {
        color: ${theme.colors.lightestGray};
      }
    `;
  }}
`;

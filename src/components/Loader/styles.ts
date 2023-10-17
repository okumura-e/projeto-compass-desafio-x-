import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0);
    } to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.span`
  ${({ theme }) => {
    return css`
      display: block;
      animation: ${spin} 0.5s infinite ease-in-out;

      width: 24px;
      height: 24px;

      margin: 0 auto;

      align-self: center;

      border: 2px solid ${theme.colors.lightestGray};
      border-top-color: #fff;
      border-radius: 50%;
    `;
  }}
`;

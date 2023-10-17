import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.secondaryBg};
      display: flex;
      width: 100%;
      padding: 2.4rem;
      border-radius: 16px;
      flex-direction: column;

      height: 100%;
    `;
  }}
`;

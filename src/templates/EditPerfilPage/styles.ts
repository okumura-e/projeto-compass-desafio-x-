import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: minmax(300px, 460px);

      justify-content: center;

      max-width: 1200px;
      width: 100%;
      margin: 0 auto;

      gap: 3.2rem;

      padding-top: 9rem;
      padding-bottom: 4.6rem;

      & > section:nth-child(1) {
        display: none;
      }

      @media screen and (max-width: 1200px) {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }
      @media screen and (min-width: 1200px) {
        padding-left: 0;
        padding-right: 0;
      }

      & > section:nth-child(2) {
        min-height: 670px;
        padding-bottom: 5.4rem;
      }
      ${theme.medias.desktop} {
        grid-template-columns: minmax(160px, 280px) minmax(320px, 600px) 1fr;
        & > section:nth-child(1) {
          max-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        & > section:nth-child(2) {
          min-height: 850px;
          padding-bottom: 2.4rem;
        }
      }
    `;
  }}
`;

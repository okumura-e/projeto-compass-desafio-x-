import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => {
    return css`
      font-size: 2rem;
      font-weight: 400;

      margin-bottom: 2rem;

      ${theme.medias.tablet} {
        font-size: 2.6rem;
      }
    `;
  }}
`;

export const CardsContainer = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      color: ${theme.colors.lightestGray};
      font-size: 1.6rem;

      strong {
        color: ${theme.colors.content};
        font-weight: 400;
      }
    `;
  }}
`;

export const Card = styled.section`
  ${({ theme }) => {
    return css`
      cursor: pointer;
      display: flex;
      color: ${theme.colors.lightestGray};
      font-size: 1.6rem;
      width: 100%;
      justify-content: space-between;

      strong {
        color: ${theme.colors.content};
        font-weight: 400;
      }
    `;
  }}
`;

export const UserContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: none;

      align-items: center;
      justify-content: center;

      width: fit-content;
      @media (min-width: 1024px) {
        display: flex;
      }
      span {
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        align-items: center;

        height: 2.4rem;
        width: 2.4rem;

        border-radius: 50%;

        border: 1px solid ${theme.colors.primary};
        cursor: pointer;

        margin-right: 0.5rem;

        ${theme.medias.desktop} {
          font-size: 2.4rem;
          height: 5.5rem;
          width: 5.5rem;
          margin-right: 0;
        }
      }

      svg {
        fill: ${theme.colors.primary};

        width: 1.6rem;
        height: auto;

        flex-shrink: 0;
      }

      p + svg {
        width: 1.6rem;
        height: auto;
        cursor: pointer;
      }

      ${theme.medias.desktop} {
        svg {
          width: 2.4rem;
        }
      }
    `;
  }}
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

export const friendsName = styled.p`
  font-weight: bold;
`;

export const CardButton = styled.div`
  width: 10rem;
  display: flex;
  align-self: center;
`;

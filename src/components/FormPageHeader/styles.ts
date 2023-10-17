import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => {
    return css`
      background: ${theme.colors.secondaryBg};
      padding: 2.4rem 0;
    `;
  }}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      max-width: 1200px;

      padding: 0 2rem;

      margin: 0 auto;
      ${theme.medias.desktop} {
        padding: 0;
      }

      @media screen and (max-width: 1200px) {
        gap: 4.8rem;
        padding: 0 1.6rem;
      }

      ${theme.medias.desktop} {
        justify-content: space-between;
      }
    `;
  }}
`;

export const Logo = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};
      font-size: 2rem;
      font-weight: 800;

      cursor: pointer;

      ${theme.medias.desktop} {
        font-size: 3.6rem;
      }
    `;
  }}
`;

interface LinkProps {
  selected?: boolean;
}

export const Link = styled.a<LinkProps>`
  ${({ theme, selected }) => {
    return css`
      font-size: 1.8rem;
      color: ${theme.colors.content};
      align-self: center;
      display: none;
      transition: color 0.2s ease-in-out;

      cursor: pointer;

      ${theme.medias.desktop} {
        display: inline;
      }

      ${selected
        ? () => css`
            color: ${theme.colors.primary};
          `
        : () => css`
            &:hover {
              color: ${theme.colors.primary};
            }
          `}
    `;
  }}
`;

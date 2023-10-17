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
      justify-content: space-between;
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
    `;
  }}
`;

export const LeftSection = styled.section`
  display: flex;

  gap: 3.1rem;
`;

interface RightSectionProps {
  noSearch?: boolean;
}

export const RightSection = styled.section<RightSectionProps>`
  ${({ noSearch }) => {
    return css`
      display: flex;
      justify-content: flex-end;
      width: 100%;

      ${!noSearch &&
      css`
        @media screen and (max-width: 780px) {
          & div:nth-child(1) {
            display: none;
          }
        }
      `}
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
export const Navbar = styled.nav`
  ${({ theme }) => {
    return css`
      display: none;
      @media screen and (min-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.content};
      }
    `;
  }}
`;
export const LinksList = styled.ul`
  display: flex;
  list-style: none;

  gap: 3.7rem;
`;

export const LinkHolder = styled.li``;

interface LinkProps {
  selected?: boolean;
}

export const Link = styled.a<LinkProps>`
  ${({ theme, selected }) => {
    return css`
      font-size: 1.8rem;
      color: ${theme.colors.content};

      transition: color 0.2s ease-in-out;

      cursor: pointer;

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

export const UserContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;

      align-items: center;
      justify-content: center;

      width: fit-content;

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
          height: 4rem;
          width: 4rem;
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
    `;
  }}
`;
export const Username = styled.p`
  display: none;
  @media screen and (min-width: 780px) {
    display: block;
    margin-left: 1.4rem;
    margin-right: 0.4rem;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

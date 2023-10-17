import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface SelectProps {
  selected?: boolean;
  isHovering: boolean;
  isOpened: boolean;
  hasError: boolean;
}

export const Select = styled.button<SelectProps>`
  ${({ theme, selected, isHovering, isOpened, hasError }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      min-height: 37px;

      background: ${theme.colors.lightGray};
      border: 1px solid transparent;
      border-radius: 8px;

      padding: 1rem 0.6rem;

      width: 100%;

      cursor: pointer;

      transition: border-color 0.2s ease-in-out;

      color: ${selected ? theme.colors.content : theme.colors.placeholder};

      ${isHovering &&
      css`
        border-color: rgba(0, 0, 0, 0.2);
      `}

      svg {
        fill: ${theme.colors.primary};
        transition: transform 0.2s ease-in-out;
        width: 2rem;
        height: auto;
      }

      ${hasError &&
      !isOpened &&
      css`
        border-color: #ff0035;
      `}

      ${isOpened
        ? () => css`
            svg {
              transform: rotate(180deg);
            }
          `
        : () => css`
            svg {
              transform: rotate(0deg);
            }
          `}
      ${theme.medias.desktop} {
        min-height: 50px;
      }
    `;
  }}
`;

const fadeIn = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
        scale: 0;
    } to {
        transform: translateY(0);
        opacity: 1;
        scale: 1;
    }
`;

export const OptionsList = styled.ul`
  ${({ theme }) => {
    return css`
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      background: #fff;

      z-index: 10;

      max-height: 110px;

      overflow-y: auto;

      width: 100%;

      list-style: none;

      padding: 1.6rem 1rem 1.2rem 1rem;

      margin-top: 0.2rem;

      border-bottom-left-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;

      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      animation: ${fadeIn} 0.2s ease-in-out;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.primary};
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.primaryHover};
      }
    `;
  }}
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.li<OptionProps>`
  ${({ theme, selected }) => {
    return css`
      color: ${theme.colors.content};
      border-bottom: 1px solid ${theme.colors.primary};
      padding: 0.2rem 0.4rem;
      padding-bottom: 0.8rem;
      font-size: 1.4rem;

      background: #fff;

      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      ${selected
        ? () => css`
            filter: brightness(0.8);
          `
        : () => css`
            &:hover {
              filter: brightness(0.9);
            }
          `}
    `;
  }}
`;

export const ErrorText = styled.small`
  position: absolute;
  bottom: -1.6rem;
  left: 0.4rem;
  color: #ff0035;
  font-size: 1.2rem;
`;

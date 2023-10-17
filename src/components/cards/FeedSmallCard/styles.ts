import { styled, css } from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";

export const Row = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0px;
  text-align: center;
  color: #4b4b4b;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0px;
`;
export const SeeAll = styled.a`
  ${({ theme }) => {
    return css`
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      letter-spacing: 0px;
      color: #ed6d25;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        color: ${theme.colors.primaryHover};
        text-decoration: underline;
      }
    `;
  }}
`;
export const Grid = styled.section`
  ${({ theme }) => {
    return css`
      margin-top: 3.2rem;
      display: grid;
      max-height: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 80px);
      gap: 3.6rem;

      @media screen and (min-width: 800px) {
        overflow-y: auto;
        grid-template-columns: repeat(auto-fit, minmax(40px, 56px));
        gap: 3rem;

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
      }
    `;
  }}
`;
export const Profile = styled.section`
  max-width: 56px;
  max-height: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.section`
  height: auto;
  max-width: 56px;
  min-width: 40px;
  border: 1px solid #4b4b4b;
  border-radius: 100%;
  display: flex;
`;
export const CommunityPhoto = styled.section`
  height: 56px;
  width: 56px;
  border: 1px solid #4b4b4b;
  border-radius: 12px;
  display: flex;
`;

export const Icon = styled(AiOutlineUser)`
  width: 100%;
  height: 70%;
  align-self: center;
`;
export const CommunityIcon = styled(GrGroup)`
  width: 100%;
  height: 50%;
  align-self: center;
`;

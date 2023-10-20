import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;

  align-items: center;

  max-width: 1200px;

  width: 100%;

  margin: 0 auto;
  margin-top: 2.4rem;

  padding-bottom: 3.2rem;

  gap: 2.8rem;

  @media screen and (max-width: 1200px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 800px) {
    gap: 2.8rem;
    flex-direction: row;

    align-items: flex-start;

    margin-top: 8rem;
  }

  & > div {
    max-width: 320px;
    margin: 0;
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;

  width: 100%;
  max-width: 320px;

  @media screen and (min-width: 800px) {
    order: initial;
    max-width: 280px;
  }
`;
export const PseudoSection = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 320px);
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  justify-content: center;
  flex-shrink: 1;

  width: 100%;
  max-width: 320px;

  & > section:nth-child(1) {
    order: 2;

    min-height: 900px;
  }

  & > section:nth-child(2) {
    order: 1;
  }

  & > section:nth-child(3) {
    order: 3;
  }

  @media screen and (min-width: 800px) {
    max-width: initial;
    grid-template-columns: minmax(320px, 600px) minmax(160px, 280px);
    grid-template-rows: 400px 400px;

    & > section:nth-child(1) {
      order: initial;
      grid-row-start: 1;
      grid-row-end: 3;

      min-height: initial;
    }

    & > section:nth-child(2) {
      order: initial;
    }

    & > section:nth-child(3) {
      order: initial;
    }
  }
`;

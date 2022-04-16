import styled from "styled-components";
import { Container } from "../../../App.style";

export const HeroImage = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 8px 10px;
  border-radius: 12px;
  background-image: linear-gradient(to right, #3a3a3a, black);
  margin-top: 1.75rem;
  position: relative;
  margin-bottom: 4.5rem;
  grid-area: image;

  &::before {
    content: "";
    background-color: var(--soft-blue);
    width: 100%;
    height: 90%;
    position: absolute;
    top: 22%;
    left: 10%;
    border-radius: 20rem 0 0 20rem;
    z-index: -10;
  }

  img {
    width: 100%;
    border-radius: 8px;
    position: relative;
  }

  @media (min-width: 768px) {
    & {
      margin: 0;

      ::before {
        width: 100%;
        top: 32%;
        left: 20%;
      }
    }
  }
`;

export const HeroText = styled.div`
  grid-area: text;

  p {
    width: 90%;
    margin: 0 auto;
    line-height: 1.5;
    margin-bottom: 1.8rem;
    font-size: 0.9rem;
  }

  .buttons {
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 340px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      max-width: 350px;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    & {
      text-align: left;
      padding-right: 2.5rem;
    }

    p {
      width: auto;
    }
  }

  @media (min-width: 992px) {
    & {
      padding-right: 10%;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    & {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 992px) {
    font-size: 2.7rem;
  }
`;

export const HeroWrapper = styled(Container)`
  text-align: center;
  margin-bottom: 7.875rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: "text image";
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

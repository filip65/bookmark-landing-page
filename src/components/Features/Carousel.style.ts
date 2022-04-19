import styled, { css, keyframes } from "styled-components";
import { Container } from "../../App.style";

export const CarouselContainer = styled(Container)``;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 99%;
`;

export const Content = styled.div`
  text-align: center;
  overflow: hidden;
  margin: 0 1px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 6rem;
  }
`;

export const ContentText = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5;
    margin-bottom: 1.2rem;
    max-width: 500px;
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    text-align: left;

    h3 {
      font-size: 1.6rem;
    }

    p {
      margin-bottom: 1.5rem;
    }
  }
`;

export const ContentImage = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto 4.125rem;

  &::before {
    content: "";
    background-color: var(--soft-blue);
    width: 100%;
    height: 90%;
    position: absolute;
    top: 3rem;
    right: 10%;
    border-radius: 0 20rem 20rem 0;
    z-index: -10;
  }

  img {
    width: 100%;
    pointer-events: none;
  }
`;

export const Options = styled.ul`
  list-style: none;
  margin-bottom: 3.75rem;
  max-width: 800px;

  @media (min-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4.5rem;
  }
`;

type OptionParams = {
  active?: boolean;
};

export const Option = styled.li<OptionParams>`
  text-transform: capitalize;
  padding: 1rem;
  border-bottom: 1px solid var(--grayish-blue);
  position: relative;
  color: var(--grayish-blue);
  transition: 0.2s all;
  cursor: pointer;

  :hover {
    color: var(--soft-red);
  }

  :first-child {
    border-top: 1px solid var(--grayish-blue);
  }

  ${(p) =>
    p.active &&
    css`
      color: var(--very-dark-blue);
      font-weight: 500;

      ::before {
        content: "";
        width: 40%;
        height: 3px;
        border-radius: 2px;
        background-color: var(--soft-red);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        animation: ${ActiveLinkAnimation} 0.2s linear;
      }
    `}

  @media (min-width: 768px) {
    flex: 1;
    padding: 1.5rem;

    :first-child {
      border-top: none;
    }

    ::before {
      width: 100%;
    }
  }
`;

const ActiveLinkAnimation = keyframes`
from {
    height: 0;
}

to {
    height: 3px;
}
`;

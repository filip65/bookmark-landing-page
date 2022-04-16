import styled, { css, keyframes } from "styled-components";
import { Container } from "../../App.style";

export const CarouselContainer = styled(Container)``;

export const Options = styled.ul`
  list-style: none;
  margin-bottom: 3.75rem;
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
`;

const ActiveLinkAnimation = keyframes`
from {
    height: 0;
}

to {
    height: 3px;
}
`;

export const Slider = styled.div``;

export const ImageWrapper = styled.div``;

export const TextWrapper = styled.div``;

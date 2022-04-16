import styled, { css } from "styled-components";
import { Container } from "../../../App.style";

type NavProps = {
  isOpen: boolean;
};

export const Nav = styled.nav<NavProps>`
  width: 100vw;
  height: 90px;
  position: absolute;
  top: 0;
  overflow: hidden;
  transition: 0.3s height, 0.3s background;
  z-index: 1000000;

  .wrapper {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    height: 130px;
  }

  ${(p) =>
    p.isOpen &&
    css`
      & {
        background-color: rgba(37, 43, 70, 0.95);
        height: 100vh;
      }

      ${LogoWrapper} {
        .text {
          fill: white;
        }

        .circle {
          fill: white;
        }

        .circle-symbol {
          fill: var(--very-dark-blue);
        }
      }

      ${Hamburger} div {
        background-color: white;

        :nth-child(2) {
          opacity: 0;
        }

        :nth-child(1) {
          transform: rotate(45deg) translate(5px, 4px);
        }

        :nth-child(3) {
          transform: rotate(-45deg) translate(5px, -4px);
        }
      }
    `}
`;

export const NavContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LogoWrapper = styled.a`
  padding: 2rem 0;
  cursor: pointer;

  .text {
    fill: #242a45;
  }

  .circle {
    fill: #5267df;
  }

  .circle-symbol {
    fill: white;
  }
`;

export const Hamburger = styled.div`
  width: 1.2rem;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    height: 3px;
    background-color: var(--very-dark-blue);
    transition: 0.3s transform;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: auto;
    flex-direction: row;
  }
`;

export const MenuLink = styled.a`
  padding: 1.5rem;
  width: 100%;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--grayish-blue);
  transition: 0.3s color;
  cursor: pointer;

  :hover {
    color: var(--soft-red);
  }

  :first-child {
    border-top: 1px solid var(--grayish-blue);

    @media (min-width: 768px) {
      border: none;
    }
  }

  @media (min-width: 768px) {
    border: none;
    padding: 0.8rem 2rem;
    font-size: 0.7rem;
    color: var(--very-dark-blue);
  }
`;

export const MenuLinkLogin = styled.a`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0.9rem 0;
  margin-top: 1.5rem;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    color: var(--soft-red);
    background: white;
    border-color: var(--soft-red);
  }

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 0.8rem 2rem;
    font-size: 0.7rem;
    color: white;
    background: var(--soft-red);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  margin: auto auto 2rem;
  transition: 0.2s transform;

  a:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

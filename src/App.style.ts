import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    :root {
        --soft-blue: rgb(83, 104, 223);
        --soft-red: #fa5757;
        --grayish-blue: rgb(145, 148, 161);
        --very-dark-blue: rgb(37, 43, 70);
    }

    p {
        color: var(--grayish-blue);
    }

    h1,h2,h3 {
        color: var(--very-dark-blue);
    }
`;

export const Wrapper = styled.div`
  padding-top: 90px;
  width: 100vw;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding-top: 130px;
  }
`;

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.a<ButtonProps>`
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.9rem 0.9rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.3s all;
  border: 2px solid transparent;
  text-align: center;

  ${(p) =>
    p.primary
      ? css`
          background-color: var(--soft-blue);
          color: white;

          :hover {
            background-color: white;
            border: 2px solid var(--soft-blue);
            color: var(--soft-blue);
          }
        `
      : css`
          background-color: #e5e5e5;
          color: var(--very-dark-blue);

          :hover {
            background-color: white;
            border: 2px solid var(--very-dark-blue);
            color: var(--very-dark-blue);
          }
        `}

  @media (min-width: 992px) {
    font-size: 0.9rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

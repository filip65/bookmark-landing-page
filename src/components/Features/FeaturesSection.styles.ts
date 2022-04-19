import styled from "styled-components";
import { Container } from "../../App.style";

export const FeaturesContainer = styled(Container)`
  text-align: center;

  > h2 {
    font: 1.2rem;
    margin-bottom: 1rem;
  }

  > p {
    max-width: 430px;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0 auto 1.5rem;
  }
`;

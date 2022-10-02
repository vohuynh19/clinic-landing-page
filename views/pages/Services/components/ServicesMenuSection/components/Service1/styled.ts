import styled from "styled-components";

export const Image1 = styled.img`
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 0 0;
  }

  @media (max-width: 660px) {
    height: 100%;
    margin-top: 24px;
  }
`;

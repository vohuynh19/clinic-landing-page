import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 40px;

  img {
    width: 15%;
    height: fit-content;
    align-self: center;
    padding: 24px;
  }

  @media (max-width: 1024px) {
    img {
      width: 100%;
      max-width: 400px;
    }
    flex-direction: column;
    padding-bottom: 60px;
  }
`;

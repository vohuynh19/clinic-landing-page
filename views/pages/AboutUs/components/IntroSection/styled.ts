import styled from "styled-components";

export const Wrapper = styled.section`
  .inner-img {
    min-height: 600px;

    @media (max-width: 768px) {
      min-height: 320px;
    }
  }
  position: relative;
`;

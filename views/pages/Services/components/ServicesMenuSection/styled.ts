import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 10px 20px 100px 20px;
  display: flex;
  justify-content: center;
  font-size: 16px;

  h5 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    margin-top: 8px;

    @media (max-width: 768px) {
      margin-top: 16px;
    }
  }

  .service-list {
    list-style-type: circle;
    padding-inline-start: 0px;
  }
`;

export const Container = styled.div`
  max-width: 81%;
  width: 100%;
  padding: 20px;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const FirstCol = styled.div`
  width: 10%;
  @media (max-width: 1700px) {
    width: 15%;
  }

  @media (max-width: 1024px) {
    width: 20%;
  }

  @media (max-width: 767px) {
    width: 40%;
  }
`;

export const SecondCol = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1700px) {
    width: 85%;
  }

  @media (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FirstSubCol = styled.div`
  width: 55%;

  @media (max-width: 1700px) {
    width: 51%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SecondSubCol = styled.div`
  width: 35%;
  @media (max-width: 1700px) {
    width: 45%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ServiceIcon = styled.img``;

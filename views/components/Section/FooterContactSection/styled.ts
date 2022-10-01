import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.yellowBg};
  background-image: url(./images/common/contact.jpeg);
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: scroll;
  background-size: contain;

  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background-position: left bottom;
    background-size: cover;
  }
`;

export const Container = styled.div`
  max-width: 78%;
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  width: 28.67%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    height: fit-content;
    padding: 6px 24px;
    width: 238px;
  }

  @media (max-width: 768px) {
    width: auto;
    margin-top: 40px;
  }
`;
export const Title = styled.div`
  font-size: 48px;
  line-height: 1.2;
  flex: 1;
  padding-right: 24px;
  @media (max-width: 768px) {
    font-size: 26px;
    width: 100%;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  .inner-img {
    min-height: 1000px;

    @media (max-width: 768px) {
      min-height: 380px;
    }
  }
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1510px;
  width: 100%;
  padding: 0 32px;
`;
export const TitleText = styled.div`
  width: 410px;
  height: 409px;
  font-weight: bold;
  font-size: 65px;
  line-height: 83px;
  color: ${({ theme }) => theme.colors.highlightWhite};

  @media (max-width: 768px) {
    width: 50%;
    height: 100px;
    font-size: 36px;
    line-height: 53px;
  }
  @media (max-width: 668px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

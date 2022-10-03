import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  padding: 50px;
`;
export const Container = styled.div`
  max-width: 86%;
  display: flex;
  padding: 0 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    padding: 0;
  }
`;
export const LeftQuoteWrapper = styled.div``;
export const LeftQuote = styled.div`
  font-size: 350px;
  height: 200px;
  position: relative;
  top: -140px;
  left: 10px;
  color: ${({ theme }) => theme.colors.lightYellow};
  margin-right: 16px;

  @media (max-width: 1024px) {
    height: 120px;
  }
`;
export const RightQuoteWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    display: block;
  }
`;
export const RightQuote = styled.div`
  font-size: 350px;
  transform: scaleX(-1);
  height: 200px;
  color: ${({ theme }) => theme.colors.lightYellow};
  margin-left: 16px;
  position: relative;
  top: -40px;

  @media (max-width: 1024px) {
    height: 120px;
    top: -120px;
  }
`;
export const Content = styled.div`
  font-size: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  line-height: 1.2;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 33.6px;
  }
`;

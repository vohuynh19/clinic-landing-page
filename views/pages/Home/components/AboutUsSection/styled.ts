import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 40px 0;
  .inner-img {
    min-height: 600px;
  }
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AboutUsInfo = styled.div`
  width: 35.86%;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .btn {
    margin-top: 24px;
    padding: 12px 40px;
  }

  @media (max-width: 1024px) {
    max-width: 400px;
    padding: 0;
    align-self: center;
    margin-top: 40px;
    width: 100%;
    padding: 0 12px;
  }
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.highlightPrimary};
`;
export const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.highlightBlack};
`;
export const DecorateSpace = styled.div`
  width: 8%;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1024px) {
    display: none;
  }
`;

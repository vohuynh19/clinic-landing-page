import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 30px 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 30px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 30px 20px;

  @media (max-width: 1024px) {
    padding: 30px 0px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.highlightPrimary};
`;
export const Desc = styled.div`
  text-align: center;
  font-size: 16px;
`;

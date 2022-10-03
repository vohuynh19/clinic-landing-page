import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 100px;

  font-size: 16px;

  @media (max-width: 768px) {
    padding: 20 32px;

    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  max-width: 77%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const AddressContent = styled.div`
  width: 47%;

  padding-right: 32px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const AddressMap = styled.div`
  width: 53%;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 24px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.highlightPrimary};

  margin-bottom: 24px;
  margin-top: 24px;
`;
export const AddressNote = styled.div``;

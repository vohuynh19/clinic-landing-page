import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Container = styled.div`
  display: flex;
  padding: 0 80px;
  max-width: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    padding: 0;
  }
`;
export const LeftQuoteWrapper = styled.div`
  flex: 1;
  padding-right: 80px;

  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;
export const LeftQuote = styled.div`
  font-size: 350px;
  height: 200px;
  position: relative;
  top: -200px;
  left: 10px;
  color: ${({ theme }) => theme.colors.highlightPrimary};
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
  color: ${({ theme }) => theme.colors.highlightPrimary};
  margin-left: 16px;
  position: relative;
  top: -40px;

  @media (max-width: 1024px) {
    height: 120px;
    top: -120px;
  }
`;
export const Content = styled.div`
  input,
  textarea {
    color: ${({ theme }) => theme.colors.highlightWhite};

    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.highlightWhite};
    &::placeholder {
      color: ${({ theme }) => theme.colors.highlightWhite};
      opacity: 0.6;
    }

    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.highlightWhite};
      opacity: 0.6;
    }

    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.highlightWhite};
      opacity: 0.6;
    }

    border-radius: 4px;
    &:focus {
      border-color: ${({ theme }) => theme.colors.highlightWhite};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.highlightWhite + "33"};
    }
    &:hover {
      border-color: ${({ theme }) => theme.colors.highlightWhite};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.highlightWhite + "33"};
    }
  }

  input {
    height: 44px;
  }

  .left {
    padding-right: 12px;
  }

  .right {
    padding-left: 12px;
  }

  .btn-row {
    display: flex;
    justify-content: end;
  }

  .btn {
    background-color: ${({ theme }) => theme.colors.highlightWhite};
    color: ${({ theme }) => theme.colors.primary};
    width: 238px;
    height: 44px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.highlightWhite};
  line-height: 52px;

  position: relative;
  top: -60px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    top: 0;
  }
`;

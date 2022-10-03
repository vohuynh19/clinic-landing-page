import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  z-index: 10000;

  &.slide-in {
    animation: custom-ease-in 300ms;
    visibility: visible;
    opacity: 1;
  }

  &.slide-out {
    animation: custom-ease-out 300ms;
    visibility: hidden;
    opacity: 0;
  }

  @keyframes custom-ease-out {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes custom-ease-in {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Wrapper = styled.aside`
  position: fixed;

  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10000;
  transform: translateX(300px);

  &.slide-in {
    transform: translateX(0);
    animation: slideIn 300ms;
  }

  &.slide-out {
    transform: translateX(300);
    animation: slideOut 300ms;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(300px);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
export const Head = styled.div`
  height: 40px;
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  padding: 0 16px;
`;
export const CloseButton = styled.div`
  position: relative;
  width: 16px;

  &::after {
    position: absolute;
    content: "";
    width: 16px;
    height: 2px;
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.colors.white};
  }
  &::before {
    position: absolute;
    content: "";
    width: 16px;
    height: 2px;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

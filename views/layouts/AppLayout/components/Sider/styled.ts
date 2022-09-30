import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  z-index: 100;

  &.slide-in {
    animation: custom-ease-in 300ms linear;
    visibility: visible;
    opacity: 1;
  }

  &.slide-out {
    animation: custom-ease-out 300ms linear;
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
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: red;
  z-index: 100;
  transform: translateX(300px);

  &.slide-in {
    transform: translateX(0);
    animation: slideIn 300ms linear;
  }

  &.slide-out {
    transform: translateX(300);
    animation: slideOut 300ms linear;
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

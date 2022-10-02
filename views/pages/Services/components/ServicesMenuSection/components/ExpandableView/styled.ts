import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 20px;
  .btn {
    padding: 20px 145px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1400px) {
      padding: 20px 24px;
    }

    @media (max-width: 768px) {
      padding: 16px 20px;
    }
  }
`;

export const Title = styled.div`
  font-size: 40px;
  line-height: 65.76px;
  text-align: start;

  @media (max-width: 767px) {
    font-size: 26px;
    line-height: 35px;
  }
`;

type StatusIconProps = {
  visibility: boolean;
};
export const StatusIcon = styled.div<StatusIconProps>`
  font-size: 40px;
  font-weight: 400;
`;

type ContentProps = {
  visibility: boolean;
  height?: number;
};

const Expand = (props: any) => keyframes`
    0% {
      height: 0;  
    }
    100% {
      height:  ${props.height}px;
    }
`;

const Collapse = (props: any) => keyframes`
    0% {
      height: ${props.height}px;
    }
    100% {
      height: 0;
    }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  padding: 0 145px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1400px) {
    padding: 0 24px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }

  overflow: hidden;
  height: 0;

  ${({ visibility }) =>
    visibility &&
    css`
      height: 100%;
    `}

  &.expand {
    animation: ${Expand} 300ms;
  }

  &.collapse {
    animation: ${Collapse} 300ms;
  }

  &.preview {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 20px;
  .btn {
    padding: 20px 145px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  line-height: 65.76px;
`;

type StatusIconProps = {
  visibility: boolean;
};
export const StatusIcon = styled.div<StatusIconProps>`
  font-size: 40px;
  font-weight: 400;
`;

export const Content = styled.div``;

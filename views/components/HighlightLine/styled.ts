import styled, { css } from "styled-components";
import { HighlightLineProps } from ".";

export const Wrapper = styled.div<HighlightLineProps>`
  width: 44.8px;
  height: 4px;
  border-width: 0px;
  color: ${({ theme }) => theme.colors.yellowBg};
  background-color: ${({ theme }) => theme.colors.yellowBg};

  ${({ primary }) =>
    primary &&
    css`
      width: 60px;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

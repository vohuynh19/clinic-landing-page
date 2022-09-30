import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  transform: translate(0px, 20px);
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  letter-spacing: 1px;
`;

export const Container = styled.div`
  display: flex;
  width: 960px;
  justify-content: space-between;
`;
export const LeftMenu = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightMenu = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background-color: red;
  position: relative;
  height: 144px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 24px;
`;

export const Logo = styled.img`
  width: 300px;
`;

type LinkItemWrapperProps = {
  isActive: boolean;
};
export const LinkItemWrapper = styled.a<LinkItemWrapperProps>`
  font-size: 16px;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.highlightWhite};

  &:hover {
    color: ${({ theme }) => theme.colors.highlightPrimary};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 700;
    `}
`;

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

  @media (max-width: 1024px) {
    align-items: center;
    width: 100%;
    padding: 40px;
  }
  @media (max-width: 576px) {
    padding: 16px;
  }
`;
export const LeftMenu = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const RightMenu = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 144px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 24px;

  @media (max-width: 568px) {
    padding: 0;
    height: 100px;
  }
`;

export const Logo = styled.img`
  width: 300px;
  @media (max-width: 576px) {
    width: 220px;
  }
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

  @media (max-width: 1024px) {
    padding: 8px 16px;
  }
`;

export const MobileMenu = styled.div`
  width: 32px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  &::after {
    position: absolute;
    content: "";
    width: 32px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: -8px;
    @media (max-width: 568px) {
      width: 24px;
      height: 3px;
      bottom: -6px;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 32px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    top: -8px;
    @media (max-width: 568px) {
      width: 24px;
      height: 3px;
      top: -6px;
    }
  }

  @media (max-width: 568px) {
    width: 24px;
    height: 3px;
  }
`;

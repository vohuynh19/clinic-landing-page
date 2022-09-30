import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const FooterTitle = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 28px;
`;
export const FooterDesc = styled.div`
  font-size: 16px;
`;
export const FooterSocialMedia = styled.div``;
export const MediaItem = styled.div``;
export const FooterBoldDesc = styled.div``;

export const WaterMarkWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.highlightPrimary};
  color: ${({ theme }) => theme.colors.highlightWhite};

  a {
    margin-left: 6px;
    color: #2b2b2b;
  }
`;

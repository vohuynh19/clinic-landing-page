import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  align-items: center;

  @media (max-width: 968px) {
    height: auto;
    padding-top: 24px;
    padding-bottom: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: 968px) {
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const FooterTitle = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 35px;

  @media (max-width: 968px) {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
export const FooterDesc = styled.div`
  font-size: 16px;
  @media (max-width: 968px) {
    text-align: center;
  }
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
  @media (max-width: 768px) {
    padding: 4px 16px;
  }
`;

export const WaterMarkText = styled.div`
  display: inline;
  a {
    margin-left: 6px;
    color: #2b2b2b;
    display: inline;
    color: ${({ theme }) => theme.colors.highlightWhite} !important;
  }
`;

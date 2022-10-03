import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 60px 60px 100px 60px;
  display: flex;
  h1 {
    margin-top: 16px;
    font-size: 40px;
    i {
      font-size: 28px;
      margin-left: 8px;
    }

    margin-bottom: 0px;
  }

  h4 {
    font-size: 19px;
    font-style: italic;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 27px;
    font-weight: 300;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 0px 100px 0px;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 60%;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 24px;

  @media (max-width: 1024px) {
    min-width: 300px;
    margin-bottom: 16px;
    padding: 0 12px;
  }
`;
export const Profile = styled.div`
  width: 65%;
  padding: 80px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.highlightBlack};

  background-color: ${({ theme }) => theme.colors.lightYellow};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const AwardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const AwardItem = styled.div`
  width: 33%;
  display: flex;
  padding: 16px;
  align-items: center;

  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.highlightWhite};
  }

  @media (max-width: 1600px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const Info = styled.div`
  padding-left: 20px;
  line-height: 27px;
  font-size: 12px;
  font-weight: 300;
`;

export const Spacer = styled.div`
  height: 40px;
`;

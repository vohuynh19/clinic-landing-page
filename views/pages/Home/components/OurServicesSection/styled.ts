import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 40px 0;
  display: flex;

  .btn {
    margin-top: 16px;
    padding: 6px 24px;
    width: 238px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .btn {
      margin-bottom: 32px;
    }
  }
`;
export const Info = styled.div`
  width: 30%;
  padding-right: 40px;
  padding-left: 100px;

  @media (max-width: 1024px) {
    max-width: 400px;
    width: 100%;
    padding: 0 12px;
  }
`;
export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.highlightPrimary};
`;
export const Desc = styled.p`
  font-size: 16px;
`;

export const Detail = styled.div`
  width: 70%;
  flex-wrap: wrap;
  display: flex;
  padding: 0 70px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;

    justify-content: center;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 8px 16px;
  cursor: pointer;

  @media (max-width: 1600px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
  }
`;
export const ItemIcon = styled.img`
  width: 159px;
  height: 154px;
`;
export const ItemInfo = styled.div`
  color: ${({ theme }) => theme.colors.highlightBlack};
  padding: 20px 32px 0 28px;
`;
export const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 34px;
  margin-bottom: 8px;
`;
export const ItemDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21.94px;
`;
export const ItemSubDesc = styled.li`
  @media (max-width: 1024px) {
    list-style-type: none;
  }
`;

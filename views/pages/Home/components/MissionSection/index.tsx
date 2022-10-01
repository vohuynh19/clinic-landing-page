import {
  Container,
  Content,
  LeftQuote,
  LeftQuoteWrapper,
  RightQuote,
  RightQuoteWrapper,
  Wrapper,
} from "./styled";

const MissionSection = () => {
  return (
    <Wrapper>
      <Container>
        <LeftQuoteWrapper>
          <LeftQuote className="highlightFont">“</LeftQuote>
        </LeftQuoteWrapper>

        <Content className="highlightFont">
          At The Toothbar Dental, our mission is to radically change and
          redefine the way you feel about visiting the dentist, through our
          personal touch and dental technology.
        </Content>

        <RightQuoteWrapper>
          <RightQuote className="highlightFont">“</RightQuote>
        </RightQuoteWrapper>
      </Container>
    </Wrapper>
  );
};

export default MissionSection;

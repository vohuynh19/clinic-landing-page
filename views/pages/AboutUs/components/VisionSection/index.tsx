import {
  Container,
  Content,
  LeftQuote,
  LeftQuoteWrapper,
  RightQuote,
  RightQuoteWrapper,
  Wrapper,
} from "./styled";

const VisionSection = () => {
  return (
    <Wrapper>
      <Container>
        <LeftQuoteWrapper>
          <LeftQuote className="highlightFont">“</LeftQuote>
        </LeftQuoteWrapper>

        <Content className="highlightFont">
          Our vision is to provide our patients with a personalised and
          comfortable dental experience that will promote a lifelong
          relationship built on trust, confidence, quality of work, and
          exceptional patient care.
        </Content>

        <RightQuoteWrapper>
          <RightQuote className="highlightFont">“</RightQuote>
        </RightQuoteWrapper>
      </Container>
    </Wrapper>
  );
};

export default VisionSection;

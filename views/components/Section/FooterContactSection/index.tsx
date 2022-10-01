import { Button } from "@components";
import { ButtonWrapper, Container, Title, Wrapper } from "./styled";

const FooterContactSection = () => {
  return (
    <Wrapper>
      <Container>
        <Title className="highlightFont">
          Still unsure? <br />
          Contact us for any questions you have!
        </Title>

        <ButtonWrapper>
          <Button>contact us</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default FooterContactSection;

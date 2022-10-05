import { Button } from "@components";
import Link from "next/link";
import { ButtonWrapper, Container, Title, Wrapper } from "./styled";

const FooterContactSection = () => {
  return (
    <Wrapper>
      <Container data-aos="zoom-in">
        <Title className="highlightFont" data-aos="fade-right">
          Still unsure? <br />
          Contact us for any questions you have!
        </Title>

        <ButtonWrapper data-aos="fade-left">
          <Link href="./contact">
            <Button>contact us</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default FooterContactSection;

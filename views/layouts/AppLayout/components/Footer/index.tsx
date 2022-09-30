import { HighlightLine } from "@components";
import {
  Col,
  Container,
  FooterBoldDesc,
  FooterDesc,
  FooterSocialMedia,
  FooterTitle,
  MediaItem,
  WaterMarkWrapper,
  Wrapper,
} from "./styled";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Col>
            <HighlightLine />
            <FooterTitle>Come say hi!</FooterTitle>
            <FooterDesc>
              428 River Valley Road #01-07 Loft
              <br />@ Nathan, Singapore 248327
            </FooterDesc>
          </Col>

          <Col>
            <HighlightLine />
            <FooterTitle>Office hours</FooterTitle>
            <FooterDesc>
              Monday to Friday 9am - 6pm
              <br />
              Saturday 9am - 1pm
              <br />
              Closed on Sundays & Public Holidays
            </FooterDesc>
          </Col>

          <Col>
            <HighlightLine />
            <FooterTitle>Connect with us</FooterTitle>
            <FooterSocialMedia>
              <MediaItem />
              <MediaItem />
              <MediaItem />
            </FooterSocialMedia>

            <FooterBoldDesc>Call us: +65 6957 6988</FooterBoldDesc>
            <FooterBoldDesc>Whatsapp: +65 8355 1883</FooterBoldDesc>
            <FooterBoldDesc>hello@thetoothbardental.com.sg</FooterBoldDesc>
          </Col>
        </Container>
      </Wrapper>

      <WaterMarkWrapper>
        © 2022 The Toothbar Dental Pte Ltd, All Rights Reserved | Designed by
        <a>digitalts</a>
      </WaterMarkWrapper>
    </>
  );
};

export default Footer;

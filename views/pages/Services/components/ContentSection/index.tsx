import { HighlightLine } from "@components";
import { Container, Desc, Title, Wrapper } from "./styled";

const ContentSection = () => {
  return (
    <Wrapper>
      <Container>
        <HighlightLine primary />
        <Title
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="highlightFont"
        >
          Our Services
        </Title>

        <Desc
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Think of us as a bar that tends to your teeth and dental needs. We
          provide top-notch dental care, equipped with the latest dental
          equipment and technology available. Come get your dental needs taken
          care of by our gentle dentist and hygienist.
        </Desc>
      </Container>
    </Wrapper>
  );
};

export default ContentSection;

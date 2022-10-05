import { BannerImage, Button, HighlightLine } from "@components";
import { IMAGES } from "src/constants/images";
import { AboutUsInfo, DecorateSpace, Desc, Title, Wrapper } from "./styled";

const AboutUsSection = () => {
  return (
    <Wrapper>
      <BannerImage src={IMAGES.HOME_ABOUT_US} data-aos="zoom-out-down" />
      <AboutUsInfo>
        <HighlightLine primary={true} />
        <Title className="highlightFont" data-aos="zoom-out-left">
          A little about us
        </Title>
        <Desc data-aos="zoom-out-left">
          The Toothbar Dental aims to redefine your dental experience, breaking
          preconceived notions that going to the dentist is unpleasant. We want
          to set a new standard for patient care and turn visits to the dentist
          into something you look forward to. Our clinic is equipped with the
          latest dental equipment and a relaxing atmosphere.
        </Desc>

        <Button data-aos="zoom-out-left">book your appointment online</Button>
      </AboutUsInfo>

      <DecorateSpace
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
    </Wrapper>
  );
};

export default AboutUsSection;

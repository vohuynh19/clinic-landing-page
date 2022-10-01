import { BannerImage, Button, HighlightLine } from "@components";
import { IMAGES } from "src/constants/images";
import { AboutUsInfo, DecorateSpace, Desc, Title, Wrapper } from "./styled";

const AboutUsSection = () => {
  return (
    <Wrapper>
      <BannerImage src={IMAGES.HOME_ABOUT_US} />
      <AboutUsInfo>
        <HighlightLine primary={true} />
        <Title className="highlightFont">A little about us</Title>
        <Desc>
          The Toothbar Dental aims to redefine your dental experience, breaking
          preconceived notions that going to the dentist is unpleasant. We want
          to set a new standard for patient care and turn visits to the dentist
          into something you look forward to. Our clinic is equipped with the
          latest dental equipment and a relaxing atmosphere.
        </Desc>

        <Button>book your appointment online</Button>
      </AboutUsInfo>

      <DecorateSpace />
    </Wrapper>
  );
};

export default AboutUsSection;

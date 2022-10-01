import { BannerImage } from "@components";

import { IMAGES } from "src/constants/images";

import { Container, Wrapper, TitleText } from "./styled";

const IntroSection = () => {
  return (
    <Wrapper>
      <BannerImage src={IMAGES.HOME_BANNER} />
      <Container>
        <TitleText>Beautiful smiles created every moment</TitleText>
      </Container>
    </Wrapper>
  );
};

export default IntroSection;

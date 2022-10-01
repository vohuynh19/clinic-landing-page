import { BannerImage } from "@components";

import { IMAGES } from "src/constants/images";

import { Wrapper } from "./styled";

const IntroSection = () => {
  return (
    <Wrapper>
      <BannerImage src={IMAGES.SERVICES_BANNER} />
    </Wrapper>
  );
};

export default IntroSection;

import { IMAGES } from "src/constants/images";
import { Wrapper } from "./styled";

const IMAGE_ARR = [
  IMAGES.ABOUT_US_1,
  IMAGES.ABOUT_US_2,
  IMAGES.ABOUT_US_3,
  IMAGES.ABOUT_US_4,
  IMAGES.ABOUT_US_5,
];

const PowerBySection = () => {
  return (
    <Wrapper>
      {IMAGE_ARR.map((item) => (
        <img src={item} />
      ))}
    </Wrapper>
  );
};

export default PowerBySection;

import { BannerImage } from "@components";
import { IMAGES } from "src/constants/images";
import { Wrapper } from "./styled";

const Home = () => {
  return (
    <Wrapper>
      <BannerImage src={IMAGES.HOME_BANNER} />
    </Wrapper>
  );
};

export default Home;

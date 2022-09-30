import { FC } from "react";
import { ImageBg, Wrapper } from "./styled";

type BannerImageProps = {
  src: string;
};

const BannerImage: FC<BannerImageProps> = ({ src }) => {
  return (
    <Wrapper>
      <ImageBg className="inner-img" src={src} />
    </Wrapper>
  );
};

export default BannerImage;

import { FC } from "react";
import { Wrapper } from "./styled";

export type HighlightLineProps = {
  primary?: boolean;
};
const HighlightLine: FC<HighlightLineProps> = ({ primary }) => {
  return (
    <Wrapper
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      primary={primary}
    />
  );
};

export default HighlightLine;

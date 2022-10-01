import { FC } from "react";
import { Wrapper } from "./styled";

export type HighlightLineProps = {
  primary?: boolean;
};
const HighlightLine: FC<HighlightLineProps> = ({ primary }) => {
  return <Wrapper primary={primary} />;
};

export default HighlightLine;

import { FC, useState } from "react";
import { Content, StatusIcon, Title, ToggleBar, Wrapper } from "./styled";

type ExpandableViewProps = {
  children: any;
  title: string;
  defaultOpen?: boolean;
};

const ExpandableView: FC<ExpandableViewProps> = (props) => {
  const [visibility, setVisibility] = useState(props.defaultOpen || false);

  return (
    <Wrapper>
      <ToggleBar onClick={() => setVisibility((prev) => !prev)}>
        <Title>{props.title}</Title>
        <StatusIcon visibility={visibility} />
      </ToggleBar>

      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default ExpandableView;

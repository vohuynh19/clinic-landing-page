import { FC, useState } from "react";

import { Button } from "@components";

import { Content, StatusIcon, Title, Wrapper } from "./styled";

type ExpandableViewProps = {
  children?: any;
  title: string;
  idKey: string;
  defaultOpen?: boolean;
};

const ExpandableView: FC<ExpandableViewProps> = (props) => {
  const [visibility, setVisibility] = useState(props.defaultOpen || false);

  return (
    <Wrapper id={props.idKey}>
      <Button onClick={() => setVisibility(!visibility)}>
        <Title className="highlightFont">{props.title}</Title>
        <StatusIcon visibility={visibility}>
          {visibility ? "-" : "+"}
        </StatusIcon>
      </Button>

      {visibility && <Content>{props.children}</Content>}
    </Wrapper>
  );
};

export default ExpandableView;

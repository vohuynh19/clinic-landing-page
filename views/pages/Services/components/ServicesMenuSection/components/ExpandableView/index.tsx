import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "@components";

import { Container, Content, StatusIcon, Title, Wrapper } from "./styled";

type ExpandableViewProps = {
  children?: any;
  title: string;
  idKey: string;
  defaultOpen?: boolean;
};

const ExpandableView: FC<ExpandableViewProps> = (props) => {
  const [visibility, setVisibility] = useState(props.defaultOpen || false);

  const [height, setHeight] = useState(0);
  const contentRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (height === 0) {
      setHeight(contentRef.current.clientHeight);
    }
  }, [visibility]);

  useEffect(() => {
    if (height > 0) {
      if (visibility) {
        contentRef.current.classList.add("expand");
        setTimeout(() => {
          contentRef.current.classList.remove("expand");
        }, 300);
      } else {
        contentRef.current.classList.add("collapse");
        setTimeout(() => {
          contentRef.current.classList.remove("collapse");
        }, 300);
      }
    }
  }, [height, visibility]);

  return (
    <Wrapper id={props.idKey}>
      <Button onClick={() => setVisibility(!visibility)}>
        <Title className="highlightFont">{props.title}</Title>
        <StatusIcon visibility={visibility}>
          {visibility ? "-" : "+"}
        </StatusIcon>
      </Button>

      <Content height={height} ref={contentRef} visibility={visibility}>
        <Container>{props.children}</Container>
      </Content>
    </Wrapper>
  );
};

export default ExpandableView;

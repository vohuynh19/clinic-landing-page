import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "@components";

import { Container, Content, StatusIcon, Title, Wrapper } from "./styled";
import { useRouter } from "next/router";

type ExpandableViewProps = {
  children?: any;
  title: string;
  idKey: string;
  defaultOpen?: boolean;
};

const ExpandableView: FC<ExpandableViewProps> = (props) => {
  const router = useRouter();

  const [visibility, setVisibility] = useState(props.defaultOpen || false);

  const [height, setHeight] = useState(0);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    if (router.asPath.includes(props.idKey)) {
      setVisibility(true);

      const yOffset = -120;
      const element = document.getElementById("key-" + props.idKey);
      const y =
        (element?.getBoundingClientRect()?.top || 0) +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [router]);

  useLayoutEffect(() => {
    if (height === 0) {
      setHeight(contentRef.current.clientHeight);
    }
  }, [visibility]);

  useEffect(() => {
    if (height > 0) {
      if (visibility) {
        contentRef.current.classList.add("custom-expand");
        setTimeout(() => {
          contentRef.current.classList.remove("custom-expand");
        }, 300);
      } else {
        contentRef.current.classList.add("custom-collapse");
        setTimeout(() => {
          contentRef.current.classList.remove("custom-collapse");
        }, 300);
      }
    }
  }, [height, visibility]);

  return (
    <Wrapper
      id={"key-" + props.idKey}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
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

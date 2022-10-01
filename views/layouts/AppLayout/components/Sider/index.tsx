import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  ForwardRefRenderFunction,
  useRef,
  useState,
} from "react";
import { LinkItem } from "../Header";

import { Body, CloseButton, Head, Overlay, Wrapper } from "./styled";

export type SiderHandle = {
  open: () => void;
  close: () => void;
};

const Sider: ForwardRefRenderFunction<SiderHandle, {}> = ({}, ref) => {
  const [visibility, setVisibility] = useState(false);

  const sliderRef = useRef<any>(null);
  const overLayRef = useRef<any>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setVisibility(true);
      },
      close: () => {
        setVisibility(false);
      },
    };
  });

  useEffect(() => {
    if (visibility) {
      sliderRef?.current?.classList?.remove("slide-out");
      overLayRef?.current?.classList?.remove("slide-out");

      sliderRef?.current?.classList?.add("slide-in");
      overLayRef?.current?.classList?.add("slide-in");
    } else {
      if (sliderRef?.current?.className?.includes("slide-in")) {
        sliderRef?.current?.classList?.remove("slide-in");
        overLayRef?.current?.classList?.remove("slide-in");

        sliderRef?.current?.classList?.add("slide-out");
        overLayRef?.current?.classList?.add("slide-out");
      }
    }
  }, [visibility]);

  return (
    <>
      <Overlay ref={overLayRef} onClick={() => setVisibility(false)} />
      <Wrapper ref={sliderRef}>
        <Head>
          <CloseButton onClick={() => setVisibility(false)} />
        </Head>

        <Body>
          <LinkItem title="Home" activeKey="/" />
          <LinkItem title="Services" activeKey="/services" />
          <LinkItem title="About" activeKey="/about-us" />
          <LinkItem title="Contact" activeKey="/contact" />
        </Body>
      </Wrapper>
    </>
  );
};

export default forwardRef(Sider);

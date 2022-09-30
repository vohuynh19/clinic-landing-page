import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  ForwardRefRenderFunction,
  useRef,
  useState,
} from "react";

import { Overlay, Wrapper } from "./styled";

export type SliderHandle = {
  open: () => void;
  close: () => void;
};

const Sider: ForwardRefRenderFunction<SliderHandle, {}> = ({}, ref) => {
  const [visibility, setVisibility] = useState(true);

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
      <Wrapper ref={sliderRef}>Sider</Wrapper>
    </>
  );
};

export default forwardRef(Sider);

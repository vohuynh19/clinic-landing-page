import { useRef } from "react";
import { Footer, Sider, Header } from "./components";
import { SiderHandle } from "./components/Sider";
import { Wrapper } from "./styled";

type PropsType = {
  children: JSX.Element;
};

const AppLayout: React.FC<PropsType> = ({ children }) => {
  const siderRef = useRef<SiderHandle>(null);

  return (
    <Wrapper>
      <Header siderRef={siderRef} />
      <Sider ref={siderRef} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { AppLayout as default, type PropsType as AppLayoutProps };

import { Footer, Sider, Header } from "./components";
import { Wrapper } from "./styled";

type PropsType = {
  children: JSX.Element;
};

const AppLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Sider />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { AppLayout as default, type PropsType as AppLayoutProps };

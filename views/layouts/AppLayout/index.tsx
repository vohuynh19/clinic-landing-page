import Footer from "./components/Footer";
import Header from "./components/Header";
import { Wrapper } from "./styled";

type PropsType = {
  children: JSX.Element;
};

const AppLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { AppLayout as default, type PropsType as AppLayoutProps };

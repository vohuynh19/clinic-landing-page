import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import Service4 from "./components/Service4";
import Service5 from "./components/Service5";
import Service6 from "./components/Service6";
import Service7 from "./components/Service7";
import Service8 from "./components/Service8";

import { Container, Wrapper } from "./styled";

const ServicesMenuSection = () => {
  return (
    <Wrapper>
      <Container>
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Service8 />
      </Container>
    </Wrapper>
  );
};

export default ServicesMenuSection;

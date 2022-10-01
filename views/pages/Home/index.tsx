import { BookAppointmentSection, FooterContactSection } from "@components";
import {
  AboutUsSection,
  CarouselSection,
  IntroSection,
  MissionSection,
  OurServicesSection,
} from "./components";

const Home = () => {
  return (
    <>
      <IntroSection />
      <AboutUsSection />
      <OurServicesSection />
      <CarouselSection />
      <MissionSection />
      <BookAppointmentSection />
      <FooterContactSection />
    </>
  );
};

export default Home;

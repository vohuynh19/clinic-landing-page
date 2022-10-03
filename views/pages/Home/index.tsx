import {
  BookAppointmentSection,
  FooterContactSection,
  NewsSection,
} from "@components";
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
      <NewsSection />
      <BookAppointmentSection />
      <FooterContactSection />
    </>
  );
};

export default Home;

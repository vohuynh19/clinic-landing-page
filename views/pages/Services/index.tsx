import { BookAppointmentSection, FooterContactSection } from "@components";
import ContentSection from "./components/ContentSection";
import IntroSection from "./components/IntroSection";
import ServicesMenuSection from "./components/ServicesMenuSection";

const Services = () => {
  return (
    <>
      <IntroSection />
      <ContentSection />
      <ServicesMenuSection />
      <BookAppointmentSection />
      <FooterContactSection />
    </>
  );
};

export default Services;

import { BookAppointmentSection } from "@components";
import AddressInfoSection from "./components/AddressInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import IntroSection from "./components/IntroSection";

const Contact = () => {
  return (
    <>
      <IntroSection />
      <BookAppointmentSection />
      <AddressInfoSection />
      <ContactFormSection />
      <BookAppointmentSection />
    </>
  );
};

export default Contact;

import { BookAppointmentSection } from "@components";
import AddressInfoSection from "./components/AddressInfoSection";
import IntroSection from "./components/IntroSection";
import ContactFormSection from "./components/ContactFormSection";

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

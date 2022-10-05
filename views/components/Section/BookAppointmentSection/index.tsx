import { Button } from "@components";
import { Wrapper } from "./styled";

const BookAppointmentSection = () => {
  return (
    <Wrapper>
      <Button
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        book your appointment today!
      </Button>
    </Wrapper>
  );
};

export default BookAppointmentSection;

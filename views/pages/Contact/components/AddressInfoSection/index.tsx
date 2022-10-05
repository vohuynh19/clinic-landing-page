import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HighlightLine } from "@components";
import {
  AddressContent,
  AddressMap,
  AddressNote,
  AddressWrapper,
  Container,
  Title,
  Wrapper,
} from "./styled";

const AddressInfoSection = () => {
  return (
    <Wrapper>
      <Container>
        <AddressWrapper>
          <AddressContent>
            <HighlightLine primary />
            <Title data-aos="fade-up" className="highlightFont">
              We can't wait to meet you!
            </Title>
            <p data-aos="fade-up">
              Gentle, caring and experienced dentist conveniently located on
              River Valley Road.
            </p>
            <p data-aos="fade-up">
              <b>Location</b>
              <br />
              428 River Valley Road #01-07
              <br />
              Loft @ Nathan, Singapore 248327
            </p>
            <p data-aos="fade-up">
              <b>Office hours</b>
              <br />
              Monday to Friday 9am - 6pm
              <br />
              Saturday 9am - 1pm
              <br />
              Closed on Sundays and Public Holidays
            </p>

            <p data-aos="fade-up">
              <FontAwesomeIcon icon={{ prefix: "fas", iconName: "envelope" }} />

              <b>hello@thetoothbardental.com.sg</b>
              <br />
              <FontAwesomeIcon icon={{ prefix: "fas", iconName: "phone" }} />
              <b>Call us: +65 6957 6988</b>
              <br />
              <FontAwesomeIcon icon={{ prefix: "fas", iconName: "phone" }} />

              <b>Whatsapp: +65 8355 1883</b>
            </p>
          </AddressContent>

          <AddressMap>
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.20000945723!2d103.82708432922423!3d1.294507140703559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19576af5cf99%3A0x90493558c9be6d9f!2sThe%20Toothbar%20Dental!5e0!3m2!1sen!2sau!4v1605691833544!5m2!1sen!2sau"
              width="715"
              height="512"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
              id="map-detail"
              data-aos="fade-left"
            />
          </AddressMap>
        </AddressWrapper>

        <AddressNote>
          <p data-aos="fade-up">Where to park:</p>
          <p data-aos="fade-up">
            1) Car parking is available within Loft@Nathan and is accessible via
            31 Nathan Road. The basement mechanical car park is open to the
            public between 10am to 10pm. Please approach the attendant if you
            need to use the mechanical car park.
            <br />
            Parking Rates: $1.50 per hour, fully electronic payment.
          </p>

          <p data-aos="fade-up">
            2) Alternatively, you may wish to park at Valley Point Shopping
            Centre opposite the clinic. Parking is readily available and we are
            just a 5 minute walk away.
          </p>
          <p data-aos="fade-up">
            3) 464 River Valley Road Singapore 248349
            <br />
            (Open carpark, front &amp; back of building 24 hrs)
          </p>
        </AddressNote>
      </Container>
    </Wrapper>
  );
};

export default AddressInfoSection;

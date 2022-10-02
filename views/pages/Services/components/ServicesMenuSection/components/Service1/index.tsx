import { IMAGES } from "src/constants/images";

import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service1 = () => {
  return (
    <ExpandableView idKey="services-1" title="Dental Consultation">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_DENTAL_CONSULTATION} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol>
          <p>
            We aim to redefine dental consultation, to make each visit useful
            and informative.
          </p>
          <p>
            Every smile tells a story and every story creates an impression.
            That’s why we have invested in the latest digital imaging technology
            – iTero Element 5D Intraoral Scanner.
          </p>
          <p>
            In just a couple of minutes, our iTero scanner can capture an
            incredibly accurate digital impression of your teeth. Once complete,
            our dentist will walk you through your overall oral health condition
            immediately via the visualization tools built in our iTero scanner,
            empowering you in making a more informed decision with supported
            visuals.
          </p>
        </FirstSubCol>

        <SecondSubCol>
          <img src={IMAGES.SERVICE_INFO_1} />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service1;

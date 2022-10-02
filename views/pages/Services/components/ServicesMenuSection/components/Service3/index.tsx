import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";
import { Image3, Image3_1, Image3_2 } from "./styled";

const Service3 = () => {
  return (
    <ExpandableView idKey="services-3" title="Teeth Straightening">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_TEETH_STRAIGHTENING} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol>
          <h5>Correct crooked smiles with invisible braces in Singapore.</h5>
          <p>
            It is never too late to have a beautiful smile. We can straighten
            your teeth with a series of clear aligners comfortably, quickly,
            reliably yet affordably. Your Invisalign clear aligners treatment
            involves a set of invisible and removable aligners that are changed
            every two weeks.
          </p>
          <p>
            The gentle, gradual yet highly effective aligners are individually
            manufactured to custom fit your teeth. They are aesthetically
            pleasing alternatives to traditional braces. You will require less
            visits to the dentist. You can also enjoy all your favourite foods
            without worrying about breaking anything! You can also keep your
            oral hygiene in top condition as they are removable.
          </p>
          <p>
            Come see your iTero simulated outcome before you decide. No
            obligations. No more gooey impressions.
          </p>
          <p>
            <i>
              *Ask us for our Invisalign payment plans available to ease your
              financial needs*
            </i>
          </p>

          <Image3 src={IMAGES.SERVICE_INFO_3} />
        </FirstSubCol>

        <SecondSubCol>
          <Image3_1 src={IMAGES.SERVICE_INFO_3_1} />
          <Image3_2 src={IMAGES.SERVICE_INFO_3_2} />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service3;

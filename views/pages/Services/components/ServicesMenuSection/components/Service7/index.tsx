import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service7 = () => {
  return (
    <ExpandableView idKey="services-7" title="Missing Teeth & Dental Implants">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_MISSING_TEETH_AND_DENTAL} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service7;

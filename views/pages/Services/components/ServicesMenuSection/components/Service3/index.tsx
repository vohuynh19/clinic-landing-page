import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service3 = () => {
  return (
    <ExpandableView idKey="services-3" title="Teeth Straightening">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_TEETH_STRAIGHTENING} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service3;

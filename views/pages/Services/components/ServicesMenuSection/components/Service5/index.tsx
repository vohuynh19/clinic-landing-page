import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service5 = () => {
  return (
    <ExpandableView idKey="services-5" title="Restorative & Cosmetic Dentistry">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_RESTORATIVE} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service5;

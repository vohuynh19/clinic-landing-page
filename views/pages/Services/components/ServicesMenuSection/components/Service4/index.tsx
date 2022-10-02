import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service4 = () => {
  return (
    <ExpandableView idKey="services-4" title="X-Ray & Scanning">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_XRAY_SCANNING} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service4;

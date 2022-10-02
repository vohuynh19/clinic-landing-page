import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service6 = () => {
  return (
    <ExpandableView
      idKey="services-6"
      title="Preventive & Root Canal Pain Management"
    >
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_PREVENTIVE} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service6;

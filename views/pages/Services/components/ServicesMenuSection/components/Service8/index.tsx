import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";

const Service8 = () => {
  return (
    <ExpandableView
      idKey="services-8"
      title="Children Dentistry - The Toothbar Dental Junior Club"
    >
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_PAEDIATRIC_DENTISTRY} />
      </FirstCol>

      <SecondCol>
        <FirstSubCol></FirstSubCol>

        <SecondSubCol></SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service8;

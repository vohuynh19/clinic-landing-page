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
        <FirstSubCol>
          <p>
            At The Toothbar Dental, we approach your children with the highest
            level of gentleness and patience so that your child can feel safe
            and at ease throughout his/her visit. The American Academy of
            Paediatric Dentistry (AAPD) recommends your child's first dental
            visit by their first birthday.
          </p>
          <p>
            Tell-Show-Do techniques, entertainment distractions and rewards
            system are available as we employ various techniques at The Toothbar
            Dental to reassure your children. We check your children teeth
            thoroughly examining any small area of decay or developmental
            problem so that they can be treated quickly and effectively. We
            offer full range of comprehensive dental care for children. Let's
            make it a point to help your children experience great confident
            dental visits and form good dental habits that last a lifetime.
            Check in with us at <b>The Toothbar Dental Junior Club.</b>
          </p>
        </FirstSubCol>

        <SecondSubCol>
          <img
            style={{ width: "100%", paddingTop: "16px" }}
            src={IMAGES.SERVICE_INFO_8}
          />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service8;

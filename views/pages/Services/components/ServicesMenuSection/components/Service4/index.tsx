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
        <FirstSubCol>
          <p>
            Equipped with the latest Dentsply Sirona Orthophos Sharp Layer X-Ray
            imaging system, we are able to achieve reliable sharp high
            definition 2D and 3D dental X-Rays images with a low radiation dose.
            Highly specialized and precise.
          </p>
          <p>
            All wisdom teeth and implant surgery at The Toothbar Dental are
            planned with 3D imaging systems together with an iTero Element 5D
            scan. Clear and Precise Planning. No compromise on surgical safety
            and certainty.
          </p>

          <img style={{ width: "100%" }} src={IMAGES.SERVICE_INFO_4} />
        </FirstSubCol>

        <SecondSubCol>
          <img style={{ width: "100%" }} src={IMAGES.SERVICE_INFO_4_1} />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service4;

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
        <FirstSubCol>
          <p>
            Fillings, crowns, bridges, dental implants, dentures, nightguards
            and mouthguards. We aim to restore what you need or have lost and
            protect you from further teeth damage. Teeth whitening, cosmetic
            bonding, veneers and Invisalign. Get that perfect smile that leaves
            a lasting impression.
          </p>

          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_5}
          />
          <ul className="service-list">
            <li>
              No gooey impression (even for crown, bridges, implants, dentures
              and nightguards). We are fully digitalised.
            </li>
            <li>
              All indirect restorations are 3D fabricated with our iTero 5D
              Element Scanner.
            </li>
            <li>Top quality composite restorations from Germany.</li>
            <li>
              Top quality in office teeth whitening from Italy with minimal
              sensitivity.
            </li>
            <li>
              Implants : Straumann BLX Implant system : Confidence beyond
              immediacy.
            </li>
            <li>
              Straumann® BLX, the winning combination of innovative design and
              surface technology with high-performance material designed for
              predictable results you can trust.
            </li>
          </ul>
        </FirstSubCol>

        <SecondSubCol>
          <img
            style={{ width: "100%", padding: "0 0 16px 0" }}
            src={IMAGES.SERVICE_INFO_5_1}
          />
          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_5_2}
          />
          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_5_3}
          />
          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_5_4}
          />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service5;

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
        <h5>What is a dental implant?</h5>
        <p>
          A natural tooth consists of a tooth root, which firmly sits in the
          jawbone, and a crown, which is the visible upper part of the tooth.
        </p>
        <p>
          A dental implant replaces a natural tooth root. It is a small, but
          strong post made of biocompatible metals or ceramics that is inserted
          into the jawbone in place of a tooth root. The implant acts as a base
          for fixing single crowns, multiple tooth bridges, or can be used as an
          anchor for entire dental prostheses.
        </p>

        <img
          style={{ width: "100%", padding: "16px 0" }}
          src={IMAGES.SERVICE_INFO_7}
        />

        <h5>Why opt for a dental implant solution?</h5>
        <ul className="service-list">
          <li>
            Preserve your jawbone and facial structure
            <br />
            Our natural teeth help bone to remain strong and healthy. The forces
            we generate as we chew transmit through the tooth roots to the bone,
            which stimulates the maintenance of bone density. If a tooth is
            missing, the bone around it doesn’t receive this stimulation and may
            begin to slowly recede over time. With shrinking bone, the shape of
            your face may also change over time.
            <br />
            Dental implants transmit chewing forces to the jawbone which helps
            to maintain a healthy jaw and therefore preserve your facial
            structure.
          </li>
          <li>
            Help your smile and self-confidence
            <br />A dental implant solution looks and feels like your natural
            teeth. You can feel more comfortable talking, smiling and eating.
          </li>
          <li>
            Help function
            <br />
            Dental implants are anchored as secure as a natural tooth in the
            bone. Together with the prosthetic crown, you can bite and chew
            naturally again and eat well.
          </li>
        </ul>

        <FirstSubCol>
          <h5>
            Straumann® BLX Dental Implant, the winning combination of innovative
            design and surface technology with high-performance material
            designed for predictable results you can trust.
          </h5>
          <ul className="service-list">
            <li>
              <b>Dynamic Bone Management</b>
              <br />
              The intelligent implant concept allows for Straumann Dynamic Bone
              Management and is designed for immediate protocols in all bone
              types.
            </li>
            <li>
              <b>Beyond Immediacy</b>
              <br />
              Designed for immediacy, and also suitable for all other treatment
              protocols – ranging from immediate to conventional placement and
              loading.
            </li>
            <li>
              <b>Esthetic Ease Concept</b>
              <br />
              Simplified but versatile portfolio, featuring one connection and
              under-contoured prosthetics to deliver esthetics with ease.
            </li>
            <li>
              <b>Real Confidence</b>
              <br />
              Swiss precision and quality with Roxolid® material and SLActive®
              surface - technologies backed by long-term scientific evidence.
            </li>
          </ul>
        </FirstSubCol>

        <SecondSubCol>
          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_7_1}
          />
        </SecondSubCol>

        <FirstSubCol>
          <h5>Straumann® Guided Implant Surgery</h5>
          <p>Experience the difference in your implant treatment</p>
          <ul className="service-list">
            <li>
              All implant treatment done at The Toothbar Dental are planned
              precisely with 3D Cone-beam computed tomography systems (CBCT)
              Scan and digital implant placement planning with coDiagnostiX™
            </li>
            <li>
              The software together with CBCT Scan offers numerous measurement
              and planning functions, such as automatic nerve canal detection
              and various distance monitoring functions.
            </li>
            <li>
              A digital drill guide will be designed and fabricated for your
              surgery
            </li>
            <li>Comfortable, Precise and Predictable</li>
          </ul>
        </FirstSubCol>

        <SecondSubCol>
          <img
            style={{ width: "100%", padding: "16px 0" }}
            src={IMAGES.SERVICE_INFO_7_2}
          />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service7;

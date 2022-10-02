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
        <FirstSubCol>
          <p>
            Teeth cleaning, dental extractions, retainers. Experience teeth
            cleaning with gentle prophyflex with guided biofilm therapy. Scaling
            and Polishing to keep your pearlies white.
          </p>
          <p>
            Your tooth is in pain and a root canal treatment can save your tooth
            and prevent an extraction.
          </p>
          <p>
            Performed with a smart rotary endodontic system and safe obturation
            sealer and root canal filling materials, your root canal therapy
            will be stress free.
          </p>
          <p>
            X-Smart Plus is the endodontic motor of choice, together with,{" "}
            <b>ProTaper Gold</b>, it has redefined the way we shape and
            experience root canal system’s radicular preparations. Advances in
            NiTi metallurgy technology have, indeed, revolutionized endodontic
            shaping files. Say no to lengthy and painful root canal treatments.
            Let us help you have a comfortable root canal experience if you
            require one.
          </p>

          <img
            style={{ width: "100%", paddingTop: "16px" }}
            src={IMAGES.SERVICE_INFO_6}
          />
        </FirstSubCol>

        <SecondSubCol>
          <img
            style={{ width: "100%", paddingTop: "16px" }}
            src={IMAGES.SERVICE_INFO_6_1}
          />
        </SecondSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service6;

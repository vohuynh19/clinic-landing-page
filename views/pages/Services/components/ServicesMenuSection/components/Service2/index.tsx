import { IMAGES } from "src/constants/images";
import {
  FirstCol,
  ServiceIcon,
  SecondCol,
  FirstSubCol,
  SecondSubCol,
} from "../../styled";
import ExpandableView from "../ExpandableView";
import { Image2, Image2_1 } from "./styled";

const Service2 = () => {
  return (
    <ExpandableView idKey="services-2" title="Latest Technology">
      <FirstCol>
        <ServiceIcon src={IMAGES.SERVICE_LATEST_TECHNOLOGY} />
      </FirstCol>

      <SecondCol>
        <p>
          We harness technology to make each visit comfortable as well as to
          provide the needed relief.
        </p>

        <FirstSubCol>
          <h5>
            Proximal caries detection aid powered by iTero Element 5D’s NIRI
            Technology
          </h5>
          <p>
            The Near-infrared imaging (NIRI) technology that is only available
            to iTero Element 5D, enables us to scan the internal structure of
            your teeth in real-time while performing a digital impression scan,
            producing a NIRI image which displays interproximal carious lesion.
          </p>
          <p>
            This technology aids in early detection of interproximal caries in
            just one scan, allowing our dentist to educate you about your oral
            health and suggest appropriate treatment if required without harmful
            radiation. For this reason, these procedures can be used as often as
            desired to monitor caries especially for pregnant women and kids!
          </p>
          <p>
            With the ability to detect areas of concern at an earlier stage, we
            are able to provide preventive therapy as necessary, offering you a
            more comprehensive dental care here in our clinic.
          </p>
        </FirstSubCol>

        <SecondSubCol>
          <Image2 src={IMAGES.SERVICE_INFO_2} />
        </SecondSubCol>

        <FirstSubCol>
          <h5>Invisalign Outcome Simulator</h5>
          <p>
            Thinking of undergoing Invisalign treatment? With the Invisalign
            Outcome Simulator - one of the built-in visualization tools in our
            iTero scanner, you can now visualize your simulated new smile, even
            before you embark on your Invisalign journey! We can make real-time
            adjustments to your treatment goals that are customized to your very
            own needs. What else? We are also able to send you your simulation
            directly so you can share or seek opinions from your family and
            friends.
          </p>
          <h5>TimeLapse Technology</h5>
          <p>
            Here at our clinic, we take digital dental records for every patient
            who walks in. Changes in oral health can be hard to monitor over
            time, and even harder to illustrate without clear visuals to
            support. We are able to extrapolate your past record and compare it
            with your new scan at our fingertips thanks to the TimeLapse
            Technology in our scanner. That would mean that you are able to
            visualise any changes that are occurring in your mouth over time
            yourself during your dental check-ups and our dentist would be able
            to advise you better based on your situation and on how to make
            adjustments that will improve your long-term oral health - something
            that you might not even be aware of!
          </p>
        </FirstSubCol>

        <FirstSubCol>
          <h5>German Dentsply Sirona Dental Treatment Chair</h5>
          <p>
            We use state of the art equipment and technology for our dental
            treatment centre, not because it is fancy, but it provides and
            improves our quality of care to you. The German made Sirona Intego
            chair with premium upholstery provides optimal ergonomic support for
            your treatment. Coupled with German Durr Suction motor units, this
            high powered suction helps reduce aerosols during treatment and
            keeps you safe.
          </p>
        </FirstSubCol>

        <SecondSubCol>
          <Image2_1 src={IMAGES.SERVICE_INFO_2_1} />
        </SecondSubCol>

        <FirstSubCol>
          <h5>
            Orthophos SL Dental X-Ray CBCT Imaging (Clinical Confidence, Smart
            Connectivity and Exceptional Experience)
          </h5>
          <p>
            Dentsply Sirona is a pioneer in the field of dental imaging. The
            Orthophos SL, Sharp Layer technology, provides autofocused panoramic
            images, even in difficult cases. Our fully digital dental x ray
            system allows your conditions to be diagnosed acurrately. This
            modern technology has low radiation dose compared to conventional x
            rays. Root canals, surgeries and implants. This technology allows us
            to plan your treatment clearly and accurately.
          </p>
        </FirstSubCol>
      </SecondCol>
    </ExpandableView>
  );
};

export default Service2;

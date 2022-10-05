import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HighlightLine } from "@components";
import {
  Avatar,
  AwardItem,
  AwardsWrapper,
  Info,
  Profile,
  Spacer,
  Wrapper,
} from "./styled";
import { IMAGES } from "src/constants/images";

const FounderInfoSection = () => {
  return (
    <Wrapper>
      <Avatar data-aos="fade-right" src={IMAGES.ABOUT_US_AVATAR} />

      <Profile>
        <HighlightLine primary />
        <h1 data-aos="fade-up" className="highlightFont">
          Dr Phang Hui Jing
          <i className="title">BDS Singapore</i>
        </h1>
        <h4 data-aos="fade-up" className="highlightFont">
          Founder &amp; Clinical Director
        </h4>
        <p data-aos="fade-up">
          Dr Phang is a caring dentist who has a friendly and jovial outlook
          that will set you right at ease.
        </p>
        <p data-aos="fade-up">
          She graduated as Valedictorian from the National University of
          Singapore, awarded with the University Silver Medal, Terrel Silver
          Medal, Tratman Medal and SDA Book Prize, and was placed on the Dean’s
          List.
        </p>
        <p data-aos="fade-up">
          Dr Phang started her career as a dental surgeon in a public hospital
          treating patients requiring complex multidisciplinary medical and
          dental attention.
        </p>
        <p data-aos="fade-up">
          After hospital practice, Dr Phang joined a leading family dental care
          practice, with strong emphasis on advanced dental technology and
          aesthetics. She practices with keen interests in all-rounded cosmetic
          and restorative dentistry involving dental lasers, teeth whitening,
          Cad-Cam Ceramics/Zirconia 3D printed dental restorations, clear
          aligners teeth straightening, dental implants, root canal treatments
          and dental splints for managing potential TMJ pain from teeth
          clenching and grinding.
        </p>
        <p data-aos="fade-up">
          Dr Phang desires to bring out the best available to her patients and
          enjoys being a family dentist treating patients of all ages. It has
          been an enriching journey to see many children grow up with her
          carrying confident beautiful smiles alongside with their parents and
          grandparents. She takes great pride in making her patients’ visits as
          pleasant as possible.
        </p>

        <Spacer />

        <HighlightLine primary />
        <h1 data-aos="fade-up" className="highlightFont">
          Awards
        </h1>

        <AwardsWrapper>
          {awards.map((item) => (
            <AwardItem data-aos="fade-left" key={item.info}>
              <FontAwesomeIcon icon={item.icon as any} />

              <Info>{item.info}</Info>
            </AwardItem>
          ))}
        </AwardsWrapper>
      </Profile>
    </Wrapper>
  );
};

const awards = [
  { icon: "fa-scroll", info: "Bachelor of Dental Surgery BDS (Singapore)" },
  {
    icon: "fa-medal",
    info: "University Medal (Silver) (First in Final Prof B.D.S. examination)",
  },
  {
    icon: "fa-medal",
    info: "Terrell Silver Medal (Best student in Prosthodontics)",
  },
  {
    icon: "fa-medal",
    info: "Tratman Silver Medal (Most distinguished graduate for the year)",
  },
  {
    icon: "fa-star",
    info: "SDA Book Prize (Best student in Preventive Dentistry & Dental Public Health)",
  },
  {
    icon: "fa-scroll",
    info: "Basic Comprehensive Orthodontic Course by College of General Dental Practitioners Singapore",
  },
  { icon: "fa-teeth", info: "Invisalign Clear Aligners Provider" },
  {
    icon: "fa-tooth",
    info: "Dental Laser Provider (Associate Fellowship of World Clinical Laser Institute)",
  },
];

export default FounderInfoSection;

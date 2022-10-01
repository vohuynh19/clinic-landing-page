import { Button, HighlightLine } from "@components";
import { IMAGES } from "src/constants/images";
import {
  Wrapper,
  Info,
  Title,
  Desc,
  Detail,
  ItemWrapper,
  ItemIcon,
  ItemInfo,
  ItemTitle,
  ItemDesc,
  ItemSubDesc,
} from "./styled";

const OurServicesSection = () => {
  return (
    <Wrapper>
      <Info>
        <HighlightLine primary />
        <Title className="highlightFont">Our services</Title>
        <Desc>
          Think of us as a bar that tends to your teeth and dental needs. We
          provide top-notch dental care, equipped with the latest dental
          equipment and technology available. Come get your dental needs taken
          care of by our gentle dentist and hygienist.
        </Desc>
        <Button>learn more</Button>
      </Info>

      <Detail>
        {services.map((item) => (
          <ItemWrapper>
            <ItemIcon src={item.icon} />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>
                {item.desc
                  ? item.desc
                  : item.descArr?.map((subItem) => (
                      <ItemSubDesc>{subItem}</ItemSubDesc>
                    ))}
              </ItemDesc>
            </ItemInfo>
          </ItemWrapper>
        ))}
      </Detail>
    </Wrapper>
  );
};

const services = [
  {
    icon: IMAGES.SERVICE_DENTAL_CONSULTATION,
    title: "Dental Consultation",
    desc: "We aim to redefine dental consultation, to make each visit useful and informative.",
  },
  {
    icon: IMAGES.SERVICE_LATEST_TECHNOLOGY,
    title: "Latest Technology",
    desc: "We harness technology to make each visit comfortable as well as to provide the needed relief.",
  },
  {
    icon: IMAGES.SERVICE_TEETH_STRAIGHTENING,
    title: "Teeth Straightening",
    desc: "Anxious about braceface? Straighten your teeth with clear affordable aligners quickly and reliably.",
  },
  {
    icon: IMAGES.SERVICE_XRAY_SCANNING,
    title: "X-Ray & Scanning",
    desc: "Your one-stop dental clinic, we offer high-definition 2D &amp; 3D dental x-ray images. No more referrals and waiting!",
  },
  {
    icon: IMAGES.SERVICE_RESTORATIVE,
    title: "Restorative & Cosmetic Dentistry",
    desc: "Smile without worries! We aim to restore what you need or have lost and protect you from further dental damage.",
  },
  {
    icon: IMAGES.SERVICE_PREVENTIVE,
    title: "Preventive & Root Canal Pain Management",
    desc: "Let us help you keep your teeth in tip-top shape. Enjoy stress-free and painless sessions with ease.",
  },
  {
    icon: IMAGES.SERVICE_MISSING_TEETH_AND_DENTAL,
    title: "Missing Teeth & Dental Implants",
    descArr: [
      "Straumann BLX Dental Implants. For every patient. For every need.",
      "Swiss premium quality and precision innovation, with Roxolid® material and SLActive® surface.",
      "Confidence you can rely on.",
    ],
  },
  {
    icon: IMAGES.SERVICE_PAEDIATRIC_DENTISTRY,
    title: "Children Dentistry - The Toothbar Dental Junior Club",
    descArr: [
      "Your Child In Trustworthy Hands.",
      "First dental visit by 1st birthday.",
    ],
  },
];

export default OurServicesSection;

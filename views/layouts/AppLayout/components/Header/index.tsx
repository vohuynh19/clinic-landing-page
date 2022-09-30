import { useRouter } from "next/router";
import { FC } from "react";
import { IMAGES } from "src/constants/images";
import {
  Container,
  LeftMenu,
  LinkItemWrapper,
  Logo,
  LogoWrapper,
  RightMenu,
  Wrapper,
} from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftMenu>
          <LinkItem title="Home" activeKey="/" />
          <LinkItem title="Services" activeKey="/services" />
        </LeftMenu>

        <LogoWrapper>
          <Logo src={IMAGES.APP_HEADER_LOGO} />
        </LogoWrapper>

        <RightMenu>
          <LinkItem title="About" activeKey="/about-us" />
          <LinkItem title="Contact" activeKey="/contact" />
        </RightMenu>
      </Container>
    </Wrapper>
  );
};

export type LinkItemProps = {
  title: string;
  activeKey: string;
};

const LinkItem: FC<LinkItemProps> = ({ title, activeKey }) => {
  const router = useRouter();

  return (
    <LinkItemWrapper href={activeKey} isActive={activeKey === router.pathname}>
      {title}
    </LinkItemWrapper>
  );
};

export default Header;

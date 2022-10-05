import Link from "next/link";
import { useRouter } from "next/router";
import { FC, RefObject } from "react";
import { IMAGES } from "src/constants/images";
import { SiderHandle } from "../Sider";
import {
  Container,
  LeftMenu,
  LinkItemWrapper,
  Logo,
  LogoWrapper,
  MobileMenu,
  RightMenu,
  Wrapper,
} from "./styled";

type HeaderProps = {
  siderRef: RefObject<SiderHandle>;
};

const Header: FC<HeaderProps> = ({ siderRef }) => {
  return (
    <Wrapper>
      <Container>
        <LeftMenu data-aos="fade-down">
          <LinkItem title="Home" activeKey="/" />
          <LinkItem title="Services" activeKey="/services" />
        </LeftMenu>

        <LogoWrapper data-aos="zoom-in">
          <Logo src={IMAGES.APP_HEADER_LOGO} />
        </LogoWrapper>

        <RightMenu data-aos="fade-down">
          <LinkItem title="About" activeKey="/about-us" />
          <LinkItem title="Blogs" activeKey="/blogs" />
          <LinkItem title="Contact" activeKey="/contact" />
        </RightMenu>

        <MobileMenu onClick={() => siderRef.current?.open()} />
      </Container>
    </Wrapper>
  );
};

export type LinkItemProps = {
  title: string;
  activeKey: string;
};

export const LinkItem: FC<LinkItemProps> = ({ title, activeKey }) => {
  const router = useRouter();

  return (
    <Link href={activeKey}>
      <LinkItemWrapper
        href={activeKey}
        isActive={activeKey === router.pathname}
      >
        {title}
      </LinkItemWrapper>
    </Link>
  );
};

export default Header;

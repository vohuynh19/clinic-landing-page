import { AboutUsPage } from "@pages";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const AboutUs: NextPage = () => {
  return (
    <>
      <NextSeo title="About - The toothbar dental" />
      <AboutUsPage />
    </>
  );
};

export default AboutUs;

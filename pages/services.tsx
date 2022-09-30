import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import { ServicesPage } from "@pages";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Services - The toothbar dental" />
      <ServicesPage />
    </>
  );
};

export default Home;

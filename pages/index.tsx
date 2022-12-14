import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import { HomePage } from "@pages";

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
      <NextSeo title="Home - The toothbar dental" />
      <HomePage />
    </>
  );
};

export default Home;

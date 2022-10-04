import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import { BlogDetailPage } from "@pages";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="Blogs - The toothbar dental" />
      <BlogDetailPage />
    </>
  );
};

export default Contact;

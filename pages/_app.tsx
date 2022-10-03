import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";

import { GlobalStyled, themes } from "../theme";
import Head from "next/head";

import "swiper/css/bundle";
import "antd/dist/antd.css";

import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/meanmenu.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../styles/style.css";
import "../styles/responsive.css";

import type { AppProps } from "next/app";
import { AppLayout } from "@layouts";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faScroll,
  faMedal,
  faTeeth,
  faTooth,
  faStar,
  faEnvelope,
  faPhone,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

library.add(
  faScroll,
  faMedal,
  faTeeth,
  faTooth,
  faStar,
  faEnvelope,
  faPhone,
  faArrowLeft,
  faArrowRight
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themes}>
        <GlobalStyled />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

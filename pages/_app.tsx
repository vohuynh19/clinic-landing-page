import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";

import { GlobalStyled, themes } from "../theme";
import Head from "next/head";

import "swiper/css/bundle";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { AppLayout } from "@layouts";

function MyApp({ Component, pageProps }: AppProps) {
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

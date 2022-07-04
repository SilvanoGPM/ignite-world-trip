import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';

import { theme } from '$/styles/theme';

import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>World Trip</title>
      </Head>

      <DefaultSeo {...SEO} />

      <NextNProgress color="#FFBA08" height={4} />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

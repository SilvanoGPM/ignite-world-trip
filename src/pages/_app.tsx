import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import { theme } from '$/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>World Trips</title>
      </Head>

      <NextNProgress color="#FFBA08" height={4} />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

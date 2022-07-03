import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '$/styles/theme';
import { makeServer } from '$services/mirage';

makeServer();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>WorldTrips</title>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

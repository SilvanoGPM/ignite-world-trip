import { Box } from '@chakra-ui/react';

import { Banner } from '$components/Banner';
import { Header } from '$components/Header';
import { TravelTypes } from '$components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <Box maxW={1200} w="100%" px="4" mx="auto" mt="20">
        <TravelTypes />
      </Box>
    </>
  );
}

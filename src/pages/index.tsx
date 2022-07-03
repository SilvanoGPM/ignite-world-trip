import { GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';

import type { Continent } from '$types/general';
import { Banner } from '$components/Banner';
import { Header } from '$components/Header';
import { TravelTypes } from '$components/TravelTypes';
import { Divider } from '$components/Divider';
import { ChooseContinent } from '$components/ChooseContinent';
import client from '$graphql/client';
import { GET_PREVIEW_CONTINENTS } from '$graphql/queries';

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <Box maxW={1200} w="100%" px="4" mx="auto" mt="20">
          <TravelTypes />
        </Box>

        <Divider />

        <ChooseContinent continents={continents} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { continents } = await client.request(GET_PREVIEW_CONTINENTS);

  return { props: { continents: continents || [] } };
};

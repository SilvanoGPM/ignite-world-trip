import { GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import type { Continent } from '$types/general';
import { Banner } from '$components/Banner';
import { Header } from '$components/Header';
import { TravelTypes } from '$components/TravelTypes';
import { Divider } from '$components/Divider';
import { ChooseContinent } from '$components/ChooseContinent';
import client from '$graphql/client';
import { GET_PREVIEW_CONTINENTS } from '$graphql/queries';
import { GetPreviewContinentsQuery } from '$graphql/generated/graphql';

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <NextSeo
        title="Home - World Trip"
        description="Informações sobre os continentes e suas cidades mais famosas."
        canonical="https://world-trip-sky.netlify.app/"
        openGraph={{
          site_name: 'World Trip',
          images: [
            {
              url: 'https://world-trip-sky.netlify.app/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'World Trip',
            },
          ],
        }}
      />

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
  const { continents } = await client.request<GetPreviewContinentsQuery>(
    GET_PREVIEW_CONTINENTS,
  );

  return {
    props: { continents: continents || [] },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

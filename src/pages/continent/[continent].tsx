import { Box } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';

import type { Continent as ContinentType } from '$types/general';
import { ContinentCities } from '$components/Continent/ContinentCities';
import { Header } from '$components/Header';
import { ContinentBanner } from '$components/Continent/ContinentBanner';
import { ContinentDescription } from '$components/Continent/ContinentDescription';
import client from '$graphql/client';
import { GET_CONTINENT_BY_SLUG } from '$graphql/queries';
import { useRouter } from 'next/router';

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <Header showBackButton />

      <main>
        <ContinentBanner title={continent.name} image={continent.banner.url} />

        <Box maxW={1200} mx="auto" mb="10" px="8">
          <ContinentDescription
            description={continent.description}
            countries={continent.countries}
            languages={continent.languages}
            citiesInTopHundred={continent.citiesInTopHundred.length}
          />

          <ContinentCities cities={continent.citiesInTopHundred} />
        </Box>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = await client.request(GET_CONTINENT_BY_SLUG, {
    slug: params?.continent,
  });

  if (!continent) {
    return { notFound: true };
  }

  return { props: { continent } };
};

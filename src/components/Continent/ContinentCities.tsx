import { Box, Flex, Heading } from '@chakra-ui/react';

import { ContinentCityCard } from './ContinentCityCard';

export function ContinentCities() {
  return (
    <Box mt="20">
      <Heading
        as="h3"
        fontWeight={500}
        mb="10"
        fontSize={['2xl', '2xl', '3xl', '4xl']}
      >
        Cidades +100
      </Heading>

      <Flex
        wrap="wrap"
        gap="2.3rem"
        justifyContent={['center', 'center', 'start']}
      >
        <ContinentCityCard
          image="/images/england.png"
          city="Londres"
          country={{ image: '/images/united-kingdom.png', name: 'Reino Unido' }}
        />

        <ContinentCityCard
          image="/images/england.png"
          city="Londres"
          country={{ image: '/images/united-kingdom.png', name: 'Reino Unido' }}
        />

        <ContinentCityCard
          image="/images/england.png"
          city="Londres"
          country={{ image: '/images/united-kingdom.png', name: 'Reino Unido' }}
        />

        <ContinentCityCard
          image="/images/england.png"
          city="Londres"
          country={{ image: '/images/united-kingdom.png', name: 'Reino Unido' }}
        />

        <ContinentCityCard
          image="/images/england.png"
          city="Londres"
          country={{ image: '/images/united-kingdom.png', name: 'Reino Unido' }}
        />
      </Flex>
    </Box>
  );
}

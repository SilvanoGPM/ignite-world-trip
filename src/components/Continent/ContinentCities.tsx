import { Box, Flex, Heading } from '@chakra-ui/react';

import { City } from '$types/general';

import { ContinentCityCard } from './ContinentCityCard';

interface ContinentCitiesProps {
  cities: City[];
}

export function ContinentCities({ cities }: ContinentCitiesProps) {
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
        {cities.map((city) => (
          <ContinentCityCard key={city.name} {...city} />
        ))}
      </Flex>
    </Box>
  );
}

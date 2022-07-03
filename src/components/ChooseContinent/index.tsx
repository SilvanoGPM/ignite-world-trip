import { Box, Heading } from '@chakra-ui/react';
import type { Continent } from '$types/general';

import { ContinentsSlider } from './ContinentsSlider';

interface ChooseContinentProps {
  continents: Continent[];
}

export function ChooseContinent({ continents }: ChooseContinentProps) {
  return (
    <Box maxW={1200} w="100%" px="4" mx="auto" mb="6">
      <Heading
        as="h2"
        textAlign="center"
        fontWeight={500}
        mb="52px"
        fontSize={['lg', '3xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <ContinentsSlider continents={continents} />
    </Box>
  );
}

import { Box } from '@chakra-ui/react';

import { ContinentCities } from '$components/Continent/ContinentCities';
import { Header } from '$components/Header';
import { ContinentBanner } from '$components/Continent/ContinentBanner';
import { ContinentDescription } from '$components/Continent/ContinentDescription';

export default function Continent() {
  return (
    <>
      <Header showBackButton />

      <main>
        <ContinentBanner
          title="Europa"
          image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
        />

        <Box maxW={1200} mx="auto" mb="10" px="8">
          <ContinentDescription
            description="A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
            countries={50}
            languages={60}
            citiesInTopHundred={27}
          />

          <ContinentCities />
        </Box>
      </main>
    </>
  );
}

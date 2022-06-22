import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex h={335} bg="url(/images/banner.png)">
      <Flex
        maxW={1200}
        w="100%"
        px="4"
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Box color="gray.100">
          <Heading fontWeight={500} mb="5">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text fontSize="20" maxW="524">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box mt="100">
          <Image src="/images/airplane.svg" alt="Avião com nuvens ao redor" />
        </Box>
      </Flex>
    </Flex>
  );
}

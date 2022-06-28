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
          <Heading fontWeight={500} mb="5" fontSize={['2xl', '3xl', '4xl']}>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text fontSize={['lg', '2xl']} fontWeight={400} maxW="524">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box mt="100" display={['none', 'none', 'block']}>
          <Image src="/images/airplane.svg" alt="Avião com nuvens ao redor" />
        </Box>
      </Flex>
    </Flex>
  );
}
